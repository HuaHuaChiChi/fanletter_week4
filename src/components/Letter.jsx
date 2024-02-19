import { useNavigate } from "react-router-dom"
import {
  Avatar,
  Content,
  CardContainer,
  LetterCard,
  AvatarCardWrap
} from "../style/LetterStyle"

function Letter({ data }) {

  const navigate = useNavigate();

  const {createdAt, nickname, avatar, content, id} = data

  return (
    <LetterCard onClick={() => {navigate(`/Detail/${id}`, {state: id})}} id={id}>
      <AvatarCardWrap>
      <Avatar src={avatar} alt={"ㅎㅇ루"} />
      <CardContainer>        
        <span>{nickname}</span>
        <div>{createdAt}</div>
        <Content>{content}</Content>
      </CardContainer>
      </AvatarCardWrap>
    </LetterCard>
  )
}

export default Letter

