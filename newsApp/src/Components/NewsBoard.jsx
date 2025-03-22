import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiKey = import.meta.env.VITE_NEWS_API_KEY; // ✅ Read API key from .env

  useEffect(() => {
    if (!apiKey) {
      console.error("❌ API Key is missing! Check your .env file.");
      return;
    }

    setLoading(true); // ✅ Show loading indicator
    setArticles([]); // ✅ Reset previous articles when fetching new ones

    let url;
    if (
      [
        "technology",
        "business",
        "science",
        "health",
        "entertainment",
        "general",
      ].includes(category)
    ) {
      url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&apikey=${apiKey}`;
    } else {
      url = `https://gnews.io/api/v4/top-headlines?category=general&apikey=${apiKey}`;
    }

    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error("❌ API request failed");
        return response.json();
      })
      .then((data) => {
        setArticles(data.articles || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [category]); // ✅ Trigger useEffect when category changes

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="container text-center">
        <h2 className="mb-4">
          Latest{" "}
          <span className="badge bg-danger">{category.toUpperCase()} News</span>
        </h2>

        {loading ? (
          <p>Loading...</p>
        ) : articles.length === 0 ? (
          <p>No articles found.</p>
        ) : (
          <div className="row row-cols-1 row-cols-md-4 g-4 justify-content-center">
            {articles.map((news, index) => (
              <NewsItem
                key={index}
                title={news.title}
                description={news.description}
                src={news.image}
                url={news.url}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsBoard;
