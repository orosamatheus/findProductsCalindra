import axios from 'axios';

const api = axios.create({
  baseUrl: 'https://mystique-v2-americanas.juno.b2w.io/',
});

export default api;
