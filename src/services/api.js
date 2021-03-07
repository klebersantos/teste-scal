import axios from "axios";
import "./latest-news.json";

const api = axios.create({
  baseURL: "https://localhost:3000/latest-news.json",
  // params: {
  //   apiKey: "wICFvhP1ZoJdxut30GUforBJJCGlA651CsLdXpWTtRYAVDbB",
  // },
});

export default api;
