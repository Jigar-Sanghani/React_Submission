import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './features/posts/Postslice';

const App = () => {
  const dispatch = useDispatch();
  const { items: posts, status, error } = useSelector((state) => state.posts);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>📰 Redux Builder Example (Posts)</h1>

      {status === 'loading' && <p>Loading posts...</p>}
      {status === 'failed' && <p style={{ color: 'red' }}>Error: {error}</p>}

      {status === 'succeeded' && (
        <ul>
          {posts.slice(0, 10).map((post) => (
            <li key={post.id} style={{ marginBottom: '1.5rem' }}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
