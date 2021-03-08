import axios from "axios";

const api = axios.create({
  baseURL:
    "https://raw.githubusercontent.com/klebersantos/teste-scal/main/public/",
  // params: {
  //   apiKey: "wICFvhP1ZoJdxut30GUforBJJCGlA651CsLdXpWTtRYAVDbB",
  // },
});

export default api;
