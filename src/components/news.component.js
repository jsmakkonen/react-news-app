import React, { useState, useEffect } from "react";
import Search from "./search.component";

const API_KEY = process.env.REACT_APP_API_KEY;

const News = () => {
  const [articles, setArticles] = useState([]);

  const getNewsData = () => {
    return fetch(
      `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${API_KEY}`
    )
      .then((response) => response.json())
      .then((res) => {
        const articles = res.articles;
        setArticles(articles);
      })
      .catch((err) => console.log(err));
  };

  const search = (searchValue) => {
    return fetch(
      `https://newsapi.org/v2/everything?q=${searchValue}&apiKey=${API_KEY}`
    )
      .then((response) => response.json())
      .then((res) => {
        const articles = res.articles;
        setArticles(articles);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getNewsData();
  }, []);

  return (
    <div className="container">
      <Search search={search} />
      <div className="card-deck mt-4">
        <div className="row mb-4">
          {articles.map((article) => (
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="card mb-3">
                <div className="card-body">
                  <h4>{article.title}</h4>
                  <p>{article.author}</p>
                  <p> {article.description} </p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read article
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
