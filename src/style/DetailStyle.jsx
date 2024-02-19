import styled from "styled-components"

export const ButtonWrap = styled.div`
display:flex;
gap :10px;
`

export const Time = styled.p`
position: absolute;
right : 20px;
`

export const Content = styled.p`
  background-color: black;
  padding: 16px;
  font-size: 24px;
  line-height: 48px;
  border-radius: 10px;
  margin: 24px 0;
  height: 275px;
  width: 768px;`

export const DetailWritedTo = styled.p`
font-size : 23px;
margin-top : 5px;
`

export const DetailContent = styled.div`
display :flex;
justify-content : center;
`

export const EditTextArea = styled.textarea`
  background-color: black;
  color : white;
  padding: 16px;
  font-size: 24px;
  border-radius: 10px;
  line-height: 48px;
  margin: 24px 0;
  height: 275px;
  width: 768px;`

export const DetailHeader = styled.header`
position: relative;
display : flex;
flex-direction : row;
align-items : center;
gap : 10px;
`

export const Avatar = styled.img`
width: 70px;
height: 70px;
object-fit: cover;
border-radius: 50%;
margin-top : 20px;
`

export const BackButton = styled.button`
  position: absolute;
  top: 30px;
  left: 30px;
  background-color: #282828;
  color: white;
  width: 100px;
  height: 50px;`

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DetailCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 800px;
  min-height: 500px;
  background-color: gray;
  color: white;
  padding: 16px;`

export const CardTitle = styled.h1`
font-size : 30px;
`