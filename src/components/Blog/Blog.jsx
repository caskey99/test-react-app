import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data.slice(0, 100)));
  }, []);

  return (
    <div>
      <h1>Блог</h1>
      <ul>
        {
          posts.map(post => (
            <li key={post.id}>
              <Link to={`/article/${post.id}`}>{post.title}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Blog;