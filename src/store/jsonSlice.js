import { createSlice } from "@reduxjs/toolkit";

const jsonSlice = createSlice({
  name: "json",
  initialState: { value: {} },
  reducers: {
    setExportData: (state, action) => {
      const newData = { ...state.value, ...action.payload };
      state.value = newData;
    },
  },
});

export const { setExportData } = jsonSlice.actions;
export default jsonSlice.reducer;
