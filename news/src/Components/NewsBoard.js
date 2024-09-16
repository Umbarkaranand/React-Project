import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const apiKey = "e89e0318a6d44a59a965a8f15b713ad0"; // Replace with your actual API key
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

    // Set loading to true before starting the API call
    setArticles([]);
    
    fetch(url)
      .then(response => response.json())
      .then(data => setArticles(data.articles))
      .catch(error => {
        console.error("Error fetching data:", error);
        // Optionally handle error or set a default state
      });
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {articles.length === 0 ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {articles.map((news, index) => (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsBoard;
