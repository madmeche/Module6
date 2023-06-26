import React, { useState } from "react";
const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");
  const handleFirstNumberChange = (event) => {
    setFirstNumber(event.target.value);
  };
  const handleSecondNumberChange = (event) => {
    setSecondNumber(event.target.value);
  };
  const handleOperatorChange = (event) => {
    setOperator(event.target.value);
  };
  const handleCalculate = () => {
    const calculation = eval(`${firstNumber} ${operator} ${secondNumber}`);
    setResult(calculation);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="First number"
        value={firstNumber}
        onChange={handleFirstNumberChange}
      />
      <select value={operator} onChange={handleOperatorChange}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        type="text"
        placeholder="Second number"
        value={secondNumber}
        onChange={handleSecondNumberChange}
      />
      <button onClick={handleCalculate}>Calculate</button>
      <p>Result: {result}</p>
    </div>
  );
};
export default Calculator;