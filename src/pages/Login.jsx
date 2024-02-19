import { useState } from "react";
import styled from "styled-components";
import Button from "../components/common/Button";

const Login = () => {
  const [inLogin, setInLogin] = useState(true);
  return (
    <Container>
      <Form>
        <Title>{inLogin ? "로그인" : "회원가입"}</Title>
        <Input
          name="id"
          placeholder="아이디 (4~10글자)"
          minLength={4}
          maxLength={10}
        />
        <Input
          name="password"
          placeholder="비밀번호 (4~15글자)"
          minLength={4}
          maxLength={15}
        />
        {!inLogin && (
          <Input
            name="nickname"
            placeholder="닉네임 (1~10글자)"
            minLength={1}
            maxLength={10}
          />
        )}
        <Button text={inLogin ? "로그인" : "회원가입"} size="large" />
        <ToggleMenu>
          <span onClick={() => setInLogin((prev) => !prev)}>
            {inLogin ? "회원가입" : "로그인"}
          </span>
        </ToggleMenu>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: lightgray;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 12px 18px;
  border-radius: 12px;
  background-color: white;
  width: 500px;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 36px;
`;

const Input = styled.input`
  margin-bottom: 24px;
  padding: 12px 0;
  border: none;
  border-bottom: 1px solid gray;
  outline: none;
`;

const ToggleMenu = styled.div`
  text-align: center;
  font-size: 16px;
  color: lightgray;
  margin-top: 24px;
  & span {
    user-select: none;
    cursor: pointer;
    &:hover {
      color: black;
      font-weight: 700px;
    }
  }
`;

export default Login;
