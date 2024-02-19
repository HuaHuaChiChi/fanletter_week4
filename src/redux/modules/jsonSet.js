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
  payload: data,
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
        data: action.payload,
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
        ...state,
        selectMember: action.payload,
      };
    default:
      return state;
  }
};

export default jsonSet;
