import axios from "axios";

const api = axios.create({
  baseURL: "https://api.currentsapi.services/v1",
  params: {
    apiKey: "hkSv92Kb9SJjv_SPszxGK4X9XJxuGq9x0ayIoaIoSqJMbu-8",
  },
});

export default api;
