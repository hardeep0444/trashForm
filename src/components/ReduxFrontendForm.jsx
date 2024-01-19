import React, { useState } from "react";
import { setExportData } from "../store/jsonSlice";
import { useDispatch } from "react-redux";

export default function ReduxFrontendForm() {
  const [formData, setformData] = useState({
    field1: "",
    field2: "",
  });

  const options = ["text", "number", "Boolean"];
  const boolState = ["true", "false"];
  const [selectedOption, setSelectedOption] = useState("");
  var [boolOps, setBoolOps] = useState("");

  const dispatch = useDispatch();

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleBoolChange = (e) => {
    setBoolOps(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    var fieldValue = formData.field2;
    if (selectedOption === "number") fieldValue = parseInt(fieldValue);
    if (selectedOption === "Boolean")
      fieldValue = Boolean(boolOps === "false" ? "" : "true");
    const data = {
      [formData.field1]: fieldValue,
    };

    dispatch(setExportData(data));
    //clear the form
    setformData({
      field1: "",
      field2: "",
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="key">Key:</label>
        <input
          type="text"
          id="key"
          value={formData.field1}
          onChange={(e) => setformData({ ...formData, field1: e.target.value })}
        />
        <div>
          <label htmlFor="dropdown">Select an option:</label>
          <select
            id="dropdown"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            <option value="" disabled>
              Select an option
            </option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          {
            selectedOption === "Boolean" ? (
              <>
                <select
                  id="dropdown"
                  value={boolOps}
                  onChange={handleBoolChange}
                >
                  {boolState.map((m, i) => (
                    <option key={i} value={JSON.parse(m)}>
                      {m}
                    </option>
                  ))}
                </select>
              </>
            ) : (
              selectedOption && (
                <>
                  <div>
                    <label htmlFor="value">Value:</label>
                    <input
                      type="text"
                      id="value"
                      value={formData.field2}
                      onChange={(e) =>
                        setformData({ ...formData, field2: e.target.value })
                      }
                    />
                  </div>
                </>
              )
            )
          }
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
