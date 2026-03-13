import { useState, useEffect } from 'react';
import './PostFetcher.css';

export default function PostFetcher() {
  const [postId, setPostId] = useState(1);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch post');
        }
        const data = await response.json();
        setPost(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  const handleNextPost = () => {
    setPostId((prevId) => prevId + 1);
  };

  const handlePreviousPost = () => {
    setPostId((prevId) => (prevId > 1 ? prevId - 1 : 1));
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="post-container">
      {post && (
        <div className="post-content">
          <div className="post-header">
            <small className="post-id">Post #{post.id}</small>
          </div>
          <h2 className="post-title">{post.title}</h2>
          <p className="post-body">{post.body}</p>
        </div>
      )}
      <div className="button-group">
        <button onClick={handlePreviousPost} className="btn btn-prev">
          ← Previous Post
        </button>
        <button onClick={handleNextPost} className="btn btn-next">
          Next Post →
        </button>
      </div>
    </div>
  );
}
