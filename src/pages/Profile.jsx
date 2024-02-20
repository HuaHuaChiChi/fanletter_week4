import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import api from "../apis/api";
import { setProfile } from "../redux/modules/userSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const { avatar, nickname } = useSelector((state) => state.user);
  const fileInput = useRef(null);

  const [preview, setPreview] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [modifyNickname, setModifyNickname] = useState(null);
  const [isModify, setIsModify] = useState(true);

  const handleButtonClick = () => {
    fileInput.current.click();
  };

  const onModifyDone = () => {
    const answer = window.confirm("이대로 수정하시겠습니까?");
    if (!answer) return;
    const formData = new FormData();
    if (preview) {
      formData.append("avatar", photo);
    }
    if (modifyNickname) {
      formData.append("nickname", modifyNickname);
    }
    const token = localStorage.getItem("accessToken");
    accessToProfileServer(formData, token);
    setIsModify(true);
  };

  const accessToProfileServer = async (formData, token) => {
    try {
      const response = await api.patch("/profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      const { nickname, avatar, success } = response.data;
      if (success) {
        dispatch(setProfile({ avatar, nickname }));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setPhoto(e.target.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      const newImageURL = reader.result;
      setPreview(newImageURL);
    };
  };

  return (
    <ProfileContainer>
      {isModify ? (
        <>
          <Text>프로필 설정</Text>
          <ProfileImg src={avatar} alt="프로필사진" />
          <ProfileNickname>{nickname}</ProfileNickname>
          <ButtonWrap>
            <ProfileButton onClick={() => setIsModify(false)}>
              수정
            </ProfileButton>
          </ButtonWrap>
        </>
      ) : (
        <>
          <Text>프로필 설정</Text>
          <FileInput
            type="file"
            accept=".png, .jpg, .jpeg"
            ref={fileInput}
            onChange={handleChange}
          ></FileInput>
          <ProfileImg
            src={preview}
            alt="프로필사진"
            onClick={handleButtonClick}
          />
          <ProfileNicknameText
            defaultValue={nickname}
            minLength={1}
            maxLength={10}
            onChange={(e) => setModifyNickname(e.target.value)}
          ></ProfileNicknameText>
          <ButtonWrap>
            <ProfileButton
              onClick={onModifyDone}
              disabled={!preview && !modifyNickname}
            >
              수정완료
            </ProfileButton>
            <ProfileButton onClick={() => setIsModify(true)}>
              취소
            </ProfileButton>
          </ButtonWrap>
        </>
      )}
    </ProfileContainer>
  );
};

export default Profile;

const ProfileContainer = styled.div`
  margin: 10% auto;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: aliceblue;
  gap: 10px;
`;

const Text = styled.p`
  font-size: 40px;
`;

const ProfileImg = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 100px;
`;

const ProfileNickname = styled.p`
  font-size: 30px;
`;

const ProfileNicknameText = styled.input`
  font-size: 20px;
`;

const ProfileButton = styled.button`
  height: 30px;
  width: 100px;
`;

const ButtonWrap = styled.div`
  display: flex;
  gap: 15px;
`;

export const FileInput = styled.input`
  display: none;
`;
