import styled from "styled-components";

export const Container = styled.header`
  position: relative;
  background-size: 25% auto;
  width: 100%;
  height: 300px;
  margin-bottom: 20px;
  background-color: #262626;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 50px;
  font-weight: 700;
  color: white;
  min-width: 475px;
`;

export const ButtonWrap = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  border: 1px solid white;
  border-radius: 10px;
  width: 500px;
  padding: 15px;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
`;

export const MemberButton = styled.button`
  font-size: 20px;
  border: 1px solid white;
  border-radius: 5px;
  width: 100px;
  padding: 5px;
  text-align: center;
  color : white;
  background-color: ${({ $isSelected }) => ($isSelected ? "red" : "darkgray")};
  &:hover {
    background-color: #282828;
  }
`;