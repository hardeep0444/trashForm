import { createSlice } from "@reduxjs/toolkit";

const jsonSlice = createSlice({
  name: "json",
  initialState: { value: {} },
  reducers: {
    setExportData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setExportData } = jsonSlice.actions;
export const selectExportData = (state) => state.json.value;
export default jsonSlice.reducer;
