import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
});

export default api;

export const dbApi = axios.create({
  baseURL: `${process.env.REACT_APP_DB_API_URL}`,
});

// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error) {
//       store.dispatch(logout());
//     }
//     return Promise.reject(error);
//   }
// );
