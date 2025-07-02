import { useEffect, useState } from "react";
import './HackerNewsTop10.css';

const HackerNewsTop10 = () => {
  const [articles, setArticle] = useState([]);

  useEffect(() => {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((ids) => {
        const top10 = ids.slice(0, 10);
        const articlesPromises = top10
          .map((id) =>
            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
          .then((response) => response.json()));

          Promise.all(articlesPromises).then((articlesData) => {
            setArticle(articlesData);
          });
      });

    
  }, []);

  return (
    <div>
      <h1 style={{marginLeft: '20px'}}>Hacker News Top 10:</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <div className="article-list">
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.url}
              </a>
              <small>{article.score} by {article.by}</small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HackerNewsTop10;
