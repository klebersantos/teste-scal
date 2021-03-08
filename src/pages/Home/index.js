import React, { useState, useEffect } from "react";

import "./style.css";
import api from "../../services/api";

import Obama from "../../assets/obama.png";

function Home() {
  const [primaryNews, setPrimaryNews] = useState([]);
  const [secondaryNews, setSecondaryNews] = useState([]);

  const handleLatestNews = (data) => {
    setPrimaryNews(data.slice(0, 3));
    setSecondaryNews(data.slice(3, 6));
  };

  useEffect(() => {
    const fetchLatestNews = async () => {
      const { data } = await api.get("/latest-news.json", {
        params: {
          language: "en",
        },
      });
      handleLatestNews(data.news);
      console.log(data.news);
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
                        <a
                          key={news.id}
                          href={news.url}
                          rel="noreferrer"
                          className={`${category} tag-category mr-2`}
                          target="_blank"
                        >
                          {category}
                        </a>
                      ))}
                    </div>
                    <a
                      target="_blank"
                      href={news.url}
                      rel="noreferrer"
                      className="imagem-box"
                    >
                      <img
                        src={news.image === "None" ? Obama : news.image}
                        alt={news.title}
                      />
                      <div className="botao">Read More</div>
                    </a>
                    <h1>
                      <a target={"_blank"} rel="noreferrer" href={news.url}>
                        {news.title}
                      </a>
                    </h1>
                    <div className="autor">
                      <a target={"_blank"} rel="noreferrer" href={news.url}>
                        <img src={Obama} alt={news.author || "Admin"} />
                      </a>
                      <p>{news.author || "Admin"}</p>
                    </div>
                  </div>
                );
              }

              return (
                <div className="item" key={news.id}>
                  <div className={`${index} d-flex`}>
                    {news.category.map((category) => (
                      <a
                        key={news.id}
                        target="_blank"
                        rel="noreferrer"
                        href={news.url}
                        className={`${category} tag-category mr-2`}
                      >
                        {category}
                      </a>
                    ))}
                  </div>
                  <a
                    target={"_blank"}
                    rel="noreferrer"
                    href={news.url}
                    className="imagem-box"
                  >
                    <img
                      src={news.image === "None" ? Obama : news.image}
                      alt={news.title}
                    />
                    <div className="botao">Read More</div>
                  </a>
                  <h1>
                    <a target="_blank" rel="noreferrer" href={news.url}>
                      {news.title}
                    </a>
                  </h1>
                  <div className="autor">
                    <a target="_blank" rel="noreferrer" href={news.url}>
                      <img src={Obama} alt={news.author || "Admin"} />
                    </a>
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
                    <a
                      key={news.id}
                      target="_blank"
                      rel="noreferrer"
                      href={news.url}
                      className={`${category} tag-category mr-2`}
                    >
                      {category}
                    </a>
                  ))}
                </div>
                <h1>
                  <a target="_blank" rel="noreferrer" href={news.url}>
                    {news.title}
                  </a>
                </h1>
                <div className="autor">
                  <a target="_blank" rel="noreferrer" href={news.url}>
                    <img src={Obama} alt={news.author || "Admin"} />
                  </a>
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
