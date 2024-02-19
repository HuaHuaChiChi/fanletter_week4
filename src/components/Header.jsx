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
          onClick={() => {
            handleMemberClick("카리나");
          }}
          $isSelected={selectedMember === "카리나"}
        >
          카리나
        </MemberButton>
        <MemberButton
          onClick={() => {
            handleMemberClick("윈터");
          }}
          $isSelected={selectedMember === "윈터"}
        >
          윈터
        </MemberButton>
        <MemberButton
          onClick={() => {
            handleMemberClick("닝닝");
          }}
          $isSelected={selectedMember === "닝닝"}
        >
          닝닝
        </MemberButton>
        <MemberButton
          onClick={() => {
            handleMemberClick("지젤");
          }}
          $isSelected={selectedMember === "지젤"}
        >
          지젤
        </MemberButton>
      </ButtonWrap>
    </Container>
  );
}

export default Header;
