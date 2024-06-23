import Buttons from "./Buttons";
import InputOutputShow from "./InputOutputShow";
import { useState } from "react";

let Calculator = () => {
  const [calValue, setCalValue] = useState("");

  const buttonClicked = (btnData) => {
    if (btnData === "C") {
      setCalValue("");
    } else if (btnData === "=") {
      const result = eval(calValue);
      setCalValue(result);
    } else {
      const newDisplayValue = calValue + btnData;
      setCalValue(newDisplayValue);
    }
  };

  return (
    <div className="w-1/3 h-screen bg-white rounded-xl shadow-md drop-shadow-md p-6">
      <InputOutputShow showData={calValue} />
      <Buttons btnClicked={buttonClicked} />
    </div>
  );
};

export default Calculator;
