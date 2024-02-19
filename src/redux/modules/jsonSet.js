const SET_DATA = "jsonSet/SET_DATA";
const ADD_DATA = "jsonSet/ADD_DATA";
const DELATE_DATA = "jsonSet/DELATE_DATA";
const UPDATE_DATA = "jsonSet/UPDATE_DATA";
const SET_SELECT = "jsonSet/SET_SELECT";

// 액션 생성 함수
export const setData = (data) => ({
  type: SET_DATA,
  payload: data,
});

export const addData = (data) => ({
  type: ADD_DATA,
  payload: data,
});

export const delateData = (data) => ({
  type: DELATE_DATA,
  payload: data, //payload는 리듀서에 넣고싶은 데이터
});

export const updateData = (data) => ({
  type: UPDATE_DATA,
  payload: data,
});

export const selectMember = (member) => ({
  type: SET_SELECT,
  payload: member,
});

// 초기 상태
const initialState = {
  data: [],
  selectMember: "카리나",
};

// 리듀서
const jsonSet = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload, //...state -> 기존의 코드를 가져옴, data: action.payload -> 액션 생성함수에 들어간 새로 받을 data값으로 바꿔치기
      };
    case ADD_DATA:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case DELATE_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case UPDATE_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case SET_SELECT:
      return {
        ...state, //...state만 쓰니까 모든것이 해결이 된다 만능이야 만능
        selectMember: action.payload,
      };
    default:
      return state;
  }
};

export default jsonSet;
//이미 데이터를 다 처리하고 나온 새로운 데이터 전체를 저장하기 때문에 case에서 뭔가 여러가지 방법을 사용하지 못해서 아쉽습니다..
//근데 막상 하라고 하면 어려워서 힘들어 할 듯....ㅎㅎㅎㅎ...

// redux에 상태를 업로드 하고싶을 땐 useDispatch
// import { useDispatch } from "react-redux";
// const dispatch = useDispatch();
// 액션을 생성하는 함수도 export 시켜서 사용해야한다.

// 상태를 꺼내서 쓰고 싶을 땐 useSelector
// import { useSelector } from 'react-redux';
// const jsonData = useSelector((state) => state.jsonSet.data);

// 하나의 모듈엔 하나의 state만 넣는다고 생각하자
