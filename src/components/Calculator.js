import { useState } from "react";

function Calculator() {

    const [numberList, setNumberList] = useState([]);
    const [plusClicked, setPlusClicked] = useState(false);
    const [previousNumber, setPreviousNumber] = useState(null);

    function handleChange(e) {

        setNumberList(current => [...current, parseInt(e.target.value)]);

        if (numberList.length > 1) {
            setNumberList(numberList.join(""));
        }

        setPreviousNumber(e.target.value)

        setPlusClicked(false);
    }

    function add() {

        if (plusClicked) {
            setNumberList([parseInt(numberList) + previousNumber])
        }

        setPlusClicked(true);
    }

    function subtract() {
        setNumberList(numberList.join(""));
    }

    function multiply(a, b) {
        return a * b;
    }

    function divide(a, b) {
        return a / b;
    }

    function float() {
        console.log(".");
    }

    function calculate() {
        console.log(numberList);
    }

  return (
    <div className="Calculator">

        <div className="screen">{numberList}</div>

        <div className="row1">
            <button value={9} onClick={handleChange}>9</button>
            <button value={8} onClick={handleChange}>8</button>
            <button value={7} onClick={handleChange}>7</button>
        </div>
        <div className="row2">
            <button value={6} onClick={handleChange}>6</button>
            <button value={5} onClick={handleChange}>5</button>
            <button value={4} onClick={handleChange}>4</button>
        </div>

        <div className="row3">
            <button value={3} onClick={handleChange}>3</button>
            <button value={2} onClick={handleChange}>2</button>
            <button value={1} onClick={handleChange}>1</button>
        </div>
        <div className="row4">
            <button value={0} onClick={handleChange}>0</button>
            <button onClick={float}>.</button>
            <button onClick={calculate}>=</button>
        </div>
        <div className="aside1">
            <button onClick={add}>+</button>
            <button onClick={subtract}>-</button>
            <button onClick={multiply}>*</button>
            <button onClick={divide}>/</button>
        </div>
    </div>
  );
}

export default Calculator;