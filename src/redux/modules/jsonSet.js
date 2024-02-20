import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { dbApi } from "../../apis/api";
// 초기 상태
const initialState = {
  data: [],
  selectMember: "카리나",
  isLoading: false,
  isError: false,
  error: null,
};

export const __setLetter = createAsyncThunk(
  "SET_LETTER",
  async (payload, thunkAPI) => {
    try {
      const response = await dbApi.get();
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);

      return error;
    }
  }
);

export const __addLetter = createAsyncThunk(
  "ADD_LETTER",
  async (payload, thunkAPI) => {
    try {
      const response = await dbApi.post("", payload);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const __deleteLetter = createAsyncThunk(
  "DELETE_LETTER",
  async (payload, thunkAPI) => {
    try {
      await dbApi.delete(`${payload}`);
      return payload;
    } catch (error) {
      throw error;
    }
  }
);

export const __updateLetter = createAsyncThunk(
  "UPDATE_LETTER",
  async (payload, thunkAPI) => {
    const { updateText, id } = payload;
    try {
      await dbApi.patch(`${id}`, { content: updateText });
      return payload;
    } catch (error) {
      throw error;
    }
  }
);

const jsonSetSlice = createSlice({
  name: "jsonSet",
  initialState,
  reducers: {
    selectMember: (state, action) => {
      state.selectMember = action.payload;
    },
  },
  extraReducers: (builder) => {
    //첫 데이터 로딩 로직
    builder.addCase(__setLetter.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(__setLetter.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data = action.payload;
    });
    builder.addCase(__setLetter.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
    //레터 추가 로직
    builder.addCase(__addLetter.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(__addLetter.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data.push(action.payload);
    });
    builder.addCase(__addLetter.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
    //데이터 삭제로직
    builder.addCase(__deleteLetter.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(__deleteLetter.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data = state.data.filter((item) => item.id !== action.payload);
    });
    builder.addCase(__deleteLetter.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
    //데이터 업데이트 로직
    builder.addCase(__updateLetter.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(__updateLetter.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      const { id, updateText } = action.payload;
      const itemToUpdate = state.data.find((item) => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.content = updateText;
      }
    });
    builder.addCase(__updateLetter.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
  },
});

//pending <= 데이터를 가져오고 있을 때 (로딩)
//fulfilled <= 데이터를 가져왔을때 (로딩후)
// rejected <= 오류났을때

export const { setData, addData, deleteData, updateData, selectMember } =
  jsonSetSlice.actions;
export default jsonSetSlice.reducer;

// builder.addCase(__setLetter.pending, (state, action) => {});
// builder.addCase(__setLetter.fulfilled, (state, action) => {});
// builder.addCase(__setLetter.rejected, (state, action) => {});
