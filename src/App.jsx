import "./App.css";
import React from "react";
import ReduxFrontendForm from "./components/ReduxFrontendForm.jsx";

import { useSelector } from "react-redux";

function App() {
  const exportData = useSelector((state) => state.json.value);

  console.log("from App.js", exportData);
  return (
    <>
      Home
      <ReduxFrontendForm />
    </>
  );
}

export default App;
