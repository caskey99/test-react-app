import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // Имитация загрузки данных с API
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(data => setArticle(data));
  }, [id]);

  if (!article) return <p>Загрузка...</p>;

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <Link to="/blog">Назад к блогу</Link>
    </div>
  );
};

export default Article;