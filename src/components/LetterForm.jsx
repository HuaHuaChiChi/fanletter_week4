import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  FormContainer,
  InputSection,
  NicknameInput,
  TextArea,
  Labels,
} from "../style/LetterFromStyle";
import BaseButton from "../style/common/BaseButton";
import defaultImg from "../style/common/defaultImg.png";
import { __addLetter } from "../redux/modules/jsonSet";
import { useDispatch, useSelector } from "react-redux";

function LetterForm() {
  const dispatch = useDispatch();
  const { avatar, isLogin, nickname, userId } = useSelector(
    (state) => state.user
  );
  console.log(nickname);

  const [content, setContent] = useState("");
  const [selectMember, setSelectMember] = useState("카리나");

  const addNewLetter = (e) => {
    e.preventDefault();
    const newLetter = {
      createdAt: new Date().toISOString(),
      nickname,
      avatar: defaultImg,
      content,
      writedTo: selectMember,
      id: uuidv4(),
      userId,
    };
    dispatch(__addLetter(newLetter));
  };

  return (
    <FormContainer onSubmit={addNewLetter}>
      <InputSection>
        <Labels>닉네임:&nbsp;</Labels>
        <Labels>{nickname}</Labels>
      </InputSection>
      <InputSection>
        <Labels>내용:&nbsp;</Labels>
        <TextArea
          value={content}
          placeholder="최대 100자까지만 작성할 수 있습니다."
          maxLength={100}
          onChange={(e) => setContent(e.target.value)}
        />
      </InputSection>
      <InputSection>
        <Labels>누구한테 보냄:&nbsp;</Labels>
        <select
          value={selectMember}
          onChange={(e) => setSelectMember(e.target.value)}
        >
          <option value="카리나">카리나</option>
          <option value="윈터">윈터</option>
          <option value="닝닝">닝닝</option>
          <option value="지젤">지젤</option>
        </select>
      </InputSection>
      <BaseButton>ㄱㄱ</BaseButton>
    </FormContainer>
  );
}

export default LetterForm;
