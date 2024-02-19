import Letter from "./Letter";
import * as S from "../style/LetterListStyle"
import { useSelector } from "react-redux";

function LetterList() {
  const select = useSelector((state) => state.jsonSet.selectMember)
  const data = useSelector((state) => state.jsonSet.data)
  const filtered = data.filter((letter) => letter.writedTo === select);

  return (
    <S.Container>
      <S.Letters>
        {filtered.length === 0 ? (
          <p>
            아직 등록된 팬레터가 없습니다. 첫 번째 팬레터의 주인공이 되세요!
          </p>
        ) : (
          filtered.map((letterData) => (
            <Letter key={letterData.id} data={letterData} />
          ))
        )}
      </S.Letters>
    </S.Container>
  );
}

export default LetterList;
