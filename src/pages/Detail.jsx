import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BaseButton from "../style/common/BaseButton";
import * as S from "../style/DetailStyle";
import { useSelector, useDispatch } from "react-redux";
import { __deleteLetter, __updateLetter } from "../redux/modules/jsonSet";

function Detail() {
  //redux에서 데이터를 가져오는 부분
  const data = useSelector((state) => state.jsonSet.data);
  const dispatch = useDispatch();

  //수정 전, 후 상태를 나누기 위한 부분
  const [isEdit, setIsEdit] = useState(false);
  const [updateText, setUpdateText] = useState("");

  //detail page에서 선택한 letter의 정보를 받아오기 위한 부분
  const navigate = useNavigate();
  const { id } = useParams();
  const [detailLetter] = data.filter((item) => item.id === id);

  const handleDelete = () => {
    dispatch(__deleteLetter(id));
    navigate("/");
  };

  const handleUpdateText = () => {
    dispatch(__updateLetter({ id, updateText }));
    navigate("/");
  };

  return (
    <S.Container>
      <S.BackButton onClick={() => navigate("/")}>뒤로가기</S.BackButton>
      <S.DetailCard>
        <S.DetailHeader>
          <S.Avatar src={detailLetter.avatar} alt={"ㅎㅇ루"} />
          <S.CardTitle>{detailLetter.nickname}</S.CardTitle>
          <S.Time>{detailLetter.createdAt}</S.Time>
        </S.DetailHeader>
        <S.DetailWritedTo>To: {detailLetter.writedTo}</S.DetailWritedTo>
        <S.DetailContent>
          {isEdit ? (
            <S.EditTextArea
              onChange={(e) => setUpdateText(e.target.value)}
              defaultValue={detailLetter.content}
              maxLength={100}
            />
          ) : (
            <S.Content>{detailLetter.content}</S.Content>
          )}
        </S.DetailContent>
        <S.ButtonWrap>
          {isEdit ? (
            <>
              <BaseButton onClick={() => setIsEdit(false)}>취소</BaseButton>
              <BaseButton onClick={handleUpdateText}>수정완료</BaseButton>
            </>
          ) : (
            <>
              <BaseButton onClick={handleDelete}>삭제하기</BaseButton>
              <BaseButton onClick={() => setIsEdit(true)}>수정하기</BaseButton>
            </>
          )}
        </S.ButtonWrap>
      </S.DetailCard>
    </S.Container>
  );
}

export default Detail;
