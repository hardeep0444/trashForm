import "./App.css";
import React from "react";
import { selectExportData, setExportData } from "./store/jsonSlice.js";

import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const exportData = useSelector(selectExportData);

  const generateJson = () => {
    const dataToExport = {
      key1: "value1",
      key2: "value2",
      key3: "value3",
    };
    dispatch(setExportData(dataToExport));
  };
  // generateJson();
  return (
    <>
      Home
      <button onClick={generateJson}>ClickMe</button>
    </>
  );
}

export default App;
