import Footer from "../components/Footer";
import Header from "../components/Header";
import LetterForm from "../components/LetterForm";
import LetterList from "../components/LetterList";
import styled from "styled-components";


function Main() {

  return (
    <Container>
      <Header />
      <LetterForm />
      <LetterList />
      <Footer/>
    </Container>
  )
}

export default Main


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;