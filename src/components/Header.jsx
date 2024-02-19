import {
  Container,
  Title,
  ButtonWrap,
  MemberButton,
} from "../style/HeaderStyle";
import { selectMember } from "../redux/modules/jsonSet";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const selectedMember = useSelector((state) => state.jsonSet.selectMember);

  const handleMemberClick = (memberName) => {
    dispatch(selectMember(memberName));
  };


  return (
    <Container>
    <Title>야호~</Title>
    <ButtonWrap>
      <MemberButton
        onClick={() => {handleMemberClick("카리나")}}
        $isSelected={selectedMember === "카리나"}
      >카리나
      </MemberButton>
      <MemberButton
        onClick={() => {handleMemberClick("윈터")}}
        $isSelected={selectedMember === "윈터"}
      >윈터
      </MemberButton>
      <MemberButton
        onClick={() => {handleMemberClick("닝닝")}}
        $isSelected={selectedMember === "닝닝"}
      >닝닝
      </MemberButton>
      <MemberButton
        onClick={() => {handleMemberClick("지젤")}}
        $isSelected={selectedMember === "지젤"}
      >지젤
      </MemberButton>
    </ButtonWrap>
  </Container>
  )
}
//ANCHOR - isSelected는 스타일 컴포넌트에 들어갈거니까 kebob-case를 써야하나? 나중에 튜터님 질문 ㄱㄱ하자

export default Header
