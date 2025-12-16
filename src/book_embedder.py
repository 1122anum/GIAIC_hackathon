import os
import uuid
from typing import List, Dict, Any
from qdrant_client import QdrantClient
from qdrant_client.http import models
from sentence_transformers import SentenceTransformer
import numpy as np

class BookEmbedder:
    """
    A class to handle embedding books using fastembeddings and storing them in Qdrant
    """

    def __init__(self, qdrant_url: str = None, collection_name: str = "books", model_name: str = "all-MiniLM-L6-v2"):
        """
        Initialize the BookEmbedder with Qdrant client and embedding model

        Args:
            qdrant_url: URL to Qdrant instance (if None, uses in-memory storage)
            collection_name: Name of the collection to store book embeddings
            model_name: Name of the sentence transformer model to use
        """
        if qdrant_url:
            self.qdrant_client = QdrantClient(url=qdrant_url)
        else:
            # Use in-memory storage for testing
            self.qdrant_client = QdrantClient(":memory:")

        self.collection_name = collection_name
        self.embedding_model = SentenceTransformer(model_name)
        # Get embedding dimension from the model
        sample_embedding = self.embedding_model.encode(["sample text"])
        self.embedding_size = len(sample_embedding[0])

        # Create the collection if it doesn't exist
        self._create_collection()

    def _create_collection(self):
        """
        Create Qdrant collection for storing book embeddings
        """
        try:
            # Check if collection already exists
            self.qdrant_client.get_collection(self.collection_name)
            print(f"Collection '{self.collection_name}' already exists")
        except:
            # Create new collection
            self.qdrant_client.create_collection(
                collection_name=self.collection_name,
                vectors_config=models.VectorParams(
                    size=self.embedding_size,  # Size from the sentence transformer model
                    distance=models.Distance.COSINE
                )
            )
            print(f"Created collection '{self.collection_name}' with embedding size {self.embedding_size}")

    def split_book_into_chunks(self, book_text: str, chunk_size: int = 512) -> List[str]:
        """
        Split a book into overlapping chunks for better semantic search

        Args:
            book_text: The full text of the book
            chunk_size: Size of each text chunk (in characters)

        Returns:
            List of text chunks
        """
        chunks = []
        start = 0

        while start < len(book_text):
            end = start + chunk_size

            # Try to break at sentence boundary if possible
            if end < len(book_text):
                # Look for sentence endings near the boundary
                sentence_end = max(
                    book_text.rfind('.', start, end),
                    book_text.rfind('!', start, end),
                    book_text.rfind('?', start, end)
                )

                if sentence_end > start + chunk_size // 2:  # Only use if it's not too early
                    end = sentence_end + 1
                else:
                    # Find word boundary instead
                    word_end = book_text.rfind(' ', start + chunk_size // 2, end)
                    if word_end > start + chunk_size // 2:
                        end = word_end

            chunk = book_text[start:end].strip()
            if chunk:  # Only add non-empty chunks
                chunks.append(chunk)

            # Move to next chunk with some overlap for context
            start = end - chunk_size // 4  # 25% overlap

        return chunks

    def embed_and_store_book(self, book_title: str, book_text: str, book_metadata: Dict[str, Any] = None) -> bool:
        """
        Embed a book and store it in Qdrant

        Args:
            book_title: Title of the book
            book_text: Full text of the book
            book_metadata: Additional metadata about the book

        Returns:
            True if successful, False otherwise
        """
        try:
            # Split the book into chunks
            chunks = self.split_book_into_chunks(book_text)
            print(f"Split book into {len(chunks)} chunks")

            # Generate embeddings for all chunks
            embeddings = self.embedding_model.encode(chunks)
            print(f"Generated {len(embeddings)} embeddings")

            # Prepare points for Qdrant
            points = []
            for i, (chunk, embedding) in enumerate(zip(chunks, embeddings)):
                point = models.PointStruct(
                    id=str(uuid.uuid4()),
                    vector=embedding.tolist(),
                    payload={
                        "book_title": book_title,
                        "chunk_index": i,
                        "chunk_text": chunk,
                        "metadata": book_metadata or {}
                    }
                )
                points.append(point)

            # Upload to Qdrant
            self.qdrant_client.upload_points(
                collection_name=self.collection_name,
                points=points
            )

            print(f"Successfully stored {len(points)} chunks in Qdrant collection '{self.collection_name}'")
            return True

        except Exception as e:
            print(f"Error embedding and storing book: {str(e)}")
            return False

    def search(self, query: str, limit: int = 5) -> List[Dict[str, Any]]:
        """
        Search for relevant book chunks based on a query

        Args:
            query: Search query
            limit: Number of results to return

        Returns:
            List of matching chunks with their metadata
        """
        query_embedding = self.embedding_model.encode([query])[0]

        search_results = self.qdrant_client.search(
            collection_name=self.collection_name,
            query_vector=query_embedding.tolist(),
            limit=limit
        )

        results = []
        for result in search_results:
            results.append({
                "score": result.score,
                "chunk_text": result.payload["chunk_text"],
                "book_title": result.payload["book_title"],
                "chunk_index": result.payload["chunk_index"],
                "metadata": result.payload["metadata"]
            })

        return results

def main():
    """
    Example usage of the BookEmbedder
    """
    # Initialize the embedder
    embedder = BookEmbedder(
        qdrant_url=os.getenv("QDRANT_URL", "http://localhost:6333"),
        collection_name="my_books",
        model_name="all-MiniLM-L6-v2"  # Lightweight, fast model
    )

    # Example book content (replace with your actual book)
    sample_book = """
    Chapter 1: Introduction to AI in Education

    Artificial Intelligence (AI) is revolutionizing the field of education by providing personalized learning experiences, intelligent tutoring systems, and automated assessment tools. In K-12 education, AI technologies are being used to adapt content to individual student needs, identify learning gaps, and provide real-time feedback to both students and teachers.

    The integration of AI in education offers numerous benefits, including:
    - Personalized learning paths tailored to each student's pace and learning style
    - Immediate feedback on assignments and assessments
    - Identification of students who may need additional support
    - Automation of administrative tasks, allowing teachers to focus on instruction

    Chapter 2: Physical AI and Humanoid Systems

    Physical AI refers to artificial intelligence systems that interact with the physical world through robots and other embodied agents. Humanoid robots, with their human-like form, offer unique opportunities for educational applications. These robots can serve as interactive learning companions, demonstrate complex concepts through physical actions, and provide engaging learning experiences that capture students' attention.

    Humanoid robots in education can be used for:
    - Demonstrating programming concepts through physical actions
    - Providing social interaction for students with autism or social anxiety
    - Teaching STEM concepts through hands-on robotics projects
    - Serving as language learning partners for practicing conversation skills

    Chapter 3: Embedding Techniques in AI

    Embeddings are dense vector representations of data that capture semantic meaning. In natural language processing, word embeddings map words to high-dimensional vectors such that semantically similar words are located close to each other in the vector space. This allows AI systems to understand relationships between concepts and perform semantic search.

    Common embedding techniques include:
    - Word2Vec and GloVe for word-level embeddings
    - BERT and similar transformers for contextual embeddings
    - Sentence transformers for generating embeddings for entire sentences or paragraphs
    - Fastembeddings as lightweight alternatives for real-time applications
    """

    # Embed the sample book
    success = embedder.embed_and_store_book(
        book_title="AI in Education and Humanoid Systems",
        book_text=sample_book,
        book_metadata={
            "author": "Educational AI Team",
            "subject": "AI in Education",
            "grade_level": "High School",
            "chapters": ["Introduction", "Physical AI", "Humanoid Systems", "Embedding Techniques"]
        }
    )

    if success:
        print("Book successfully embedded!")

        # Test a search query
        query = "How can AI personalize learning experiences?"
        results = embedder.search(query, limit=3)

        print(f"\nSearch results for: '{query}'")
        for i, result in enumerate(results, 1):
            print(f"\n{i}. Score: {result['score']:.3f}")
            print(f"   Book: {result['book_title']}")
            print(f"   Text: {result['chunk_text'][:200]}...")

        print("\n" + "="*50)

        # Test another search query
        query2 = "What are embeddings and how do they work?"
        results2 = embedder.search(query2, limit=3)

        print(f"\nSearch results for: '{query2}'")
        for i, result in enumerate(results2, 1):
            print(f"\n{i}. Score: {result['score']:.3f}")
            print(f"   Book: {result['book_title']}")
            print(f"   Text: {result['chunk_text'][:200]}...")

if __name__ == "__main__":
    main()