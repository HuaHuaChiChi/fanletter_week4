import styled from "styled-components";

export const Avatar = styled.img`
width: 70px;
height: 70px;
object-fit: cover;
border-radius: 50%;
margin-top : 20px;
`
export const Content = styled.p`
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
width : 350px;
`

export const CardContainer = styled.div`
width : 400px;
padding : 20px;
display: flex;
flex-direction: column;
justify-content: center;
gap: 10px;
`

export const LetterCard = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    transition: all 0.2s;
    transform: scale(1.05);
  }
`;

export const AvatarCardWrap = styled.div`
display : flex;
`