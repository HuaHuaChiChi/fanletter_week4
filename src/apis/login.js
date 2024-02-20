import axios from "axios";
import api from "./api";

// export const loginApi = async (id, password) => {
//   try {
//     await api.post("/login", { id, password }).then((response) => {
//       console.log(response.data);
//     });
//   } catch (error) {
//     console.error(error);
//   }
// };

export const registerApi = async (id, password, nickname) => {
  try {
    await axios
      .post("https://moneyfulpublicpolicy.co.kr/register", {
        id,
        password,
        nickname,
      })
      .then((response) => {
        console.log(response);
      });
  } catch (error) {
    console.error(error);
  }
};
