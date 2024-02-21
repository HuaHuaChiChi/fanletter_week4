import Letter from "./Letter";
import * as S from "../style/LetterListStyle";
import { useSelector } from "react-redux";

function LetterList() {
  const select = useSelector((state) => state.jsonSet.selectMember);
  const { isLoading } = useSelector((state) => state.jsonSet);
  console.log(isLoading);
  //이거 아래 두개 오류처리 해보자
  const data = useSelector((state) => state.jsonSet.data);
  const filtered = data.filter((letter) => letter.writedTo === select);

  if (!isLoading && !data) return null;
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

//데이터가 불러와지기 전 렌더링을 하려니 오류가 나서 isLoading 상태일땐 렌더링을 하지 않게 했더니 오류가 해결됨
