import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./style.css";
import api from "../../services/api";

import Obama from "../../assets/obama.png";

function Home() {
  const [primaryNews, setPrimaryNews] = useState([]);
  const [secondaryNews, setSecondaryNews] = useState([]);
  const whitelist = ["politics", "business", "tech", "science", "sports"];

  const filterNews = (data) =>
    data.reduce((acc, value, index) => {
      if (whitelist.some((category) => value.category.includes(category))) {
        return [value, ...acc];
      }
      return [...acc, value];
    }, []);

  const handleLatestNews = (data) => {
    const filteredNews = filterNews(data);
    setPrimaryNews(filteredNews.slice(0, 3));
    setSecondaryNews(filteredNews.slice(3, 6));
  };

  useEffect(() => {
    const fetchLatestNews = async () => {
      const { data } = await api.get("", {});

      console.log(data);

      handleLatestNews(data.news);
    };
    fetchLatestNews();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <div className="grid">
            {primaryNews.map((news, index) => {
              if (index === 0) {
                return (
                  <div className="destaque item" key={news.id}>
                    <div className="d-flex">
                      {news.category.map((category) => (
                        <Link
                          to={news.url}
                          className={`${category} tag-category mr-2`}
                        >
                          {category}
                        </Link>
                      ))}
                    </div>
                    <Link to={news.url} className="imagem-box">
                      <img
                        src={news.image === "None" ? Obama : news.image}
                        alt={news.title}
                      />
                      <div className="botao">Read More</div>
                    </Link>
                    <h1>
                      <Link to={news.url}>{news.title}</Link>
                    </h1>
                    <div className="autor">
                      <Link to={news.url}>
                        <img src={Obama} alt={news.author || "Admin"} />
                      </Link>
                      <p>{news.author || "Admin"}</p>
                    </div>
                  </div>
                );
              }

              return (
                <div className="item" key={news.id}>
                  <div className="d-flex">
                    {news.category.map((category) => (
                      <Link
                        to={news.url}
                        className={`${category} tag-category mr-2`}
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                  <Link to={news.url} className="imagem-box">
                    <img
                      src={news.image === "None" ? Obama : news.image}
                      alt={news.title}
                    />
                    <div className="botao">Read More</div>
                  </Link>
                  <h1>
                    <Link to={news.url}>{news.title}</Link>
                  </h1>
                  <div className="autor">
                    <Link to={news.url}>
                      <img src={Obama} alt={news.author || "Admin"} />
                    </Link>
                    <p>{news.author || "Admin"}</p>
                  </div>

                  <div className="mt-3 resumo-conteudo">
                    <p>{news.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid secundaria">
            {secondaryNews.map((news) => (
              <div className="item" key={news.id}>
                <div className="d-flex">
                  {news.category.map((category) => (
                    <Link
                      to={news.url}
                      className={`${category} tag-category mr-2`}
                    >
                      {category}
                    </Link>
                  ))}
                </div>
                <h1>
                  <Link to={news.url}>{news.title}</Link>
                </h1>
                <div className="autor">
                  <Link to={news.url}>
                    <img src={Obama} alt={news.author || "Admin"} />
                  </Link>
                  <p>{news.author || "Admin"}</p>
                </div>
                <div className="mt-3 resumo-conteudo">
                  <p>{news.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
