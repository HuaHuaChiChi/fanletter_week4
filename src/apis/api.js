import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
});

export default api;

export const dbApi = axios.create({
  baseURL: `${process.env.REACT_APP_DB_API_URL}`,
});

dbApi.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem("accessToken");
    const response = await api.get("/user", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(response);
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
//FIXME -  토큰이 만료가 됐을때 logout을 디스패치 하기엔 순환종속성의 문제가 생김..
// 이를 우회하면서 해결해보자

// api.interceptors.request.use((config) => {
//   const accessToken = localStorage.getItem("accessToken");
//   if (accessToken) {
//     config.headers.Authorization = Bearer ${accessToken};
//   }
//   return config;
// });
