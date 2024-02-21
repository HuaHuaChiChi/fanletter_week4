import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LetterForm from "../components/LetterForm";
import LetterList from "../components/LetterList";
import styled from "styled-components";
import { useEffect } from "react";

function Main() {
  // const isLogin = useSelector((state) => state.user.isLogin);

  // const navigate = useNavigate();
  // useEffect(() => {
  //   const token = localStorage.getItem("accessToken");
  //   if (!token) {
  //     navigate("/login");
  //   }
  // }, []);
  return (
    <Container>
      <Header />
      <LetterForm />
      <LetterList />
      <Footer />
    </Container>
  );
}

export default Main;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
