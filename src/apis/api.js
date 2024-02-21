import axios from "axios";
const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
});

export default api;

export const dbApi = axios.create({
  baseURL: `${process.env.REACT_APP_DB_API_URL}`,
});

dbApi.interceptors.request.use(async (config) => {
  console.log(config);
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    try {
      const response = await api.get("/user", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
      alert("로그인 토큰이 만료되었습니다. 다시 로그인해주세요");
      localStorage.clear();
      return Promise.reject(error);
    }
  }
  return config;
});
//FIXME -  토큰이 만료가 됐을때 logout을 디스패치 하기엔 순환종속성의 문제가 생김..
// 이를 우회하면서 해결해보자

//걍 디스패치 안하고 로컬스토리지 비운담에 라우터 로그인으로 넘기면 될 듯,, 근데 에러났을때 로직이 안먹히네
//토큰이 사라졌을 때, 해결하는 방법은 어렵다 근데 이거때문에 오류남 ㅋㅋ;

// api.interceptors.request.use((config) => {
//   const accessToken = localStorage.getItem("accessToken");
//   if (accessToken) {
//     config.headers.Authorization = Bearer ${accessToken};
//   }
//   return config;
// });
