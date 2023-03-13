import { useState } from "react";

function Calculator() {

    const [eventList, setEventList] = useState([]);
    const [number, setNumber] = useState(0);
    const [previousNumber, setPreviousNumber] = useState(0);
    const [operator, setOperator] = useState(0);

    function handleChange(e) {

        if (number == 0) {
            setNumber(e.target.value);
        } else {
            setNumber(number + e.target.value);
        }

        setEventList(current => [...current, e.target.value]);
    }

    function changeOperation(e) {
        setOperator(e.target.value);
        setPreviousNumber(number);
        setNumber(0);
        setEventList(current => [...current, e.target.value]);
    }

    function reset() {
        setNumber(0);
        setPreviousNumber(0);
        setEventList([]);
    }

    function calculate() {
        switch (operator) {
            case "+": setNumber(parseFloat(previousNumber) + parseFloat(number));
                break;

            case "-": setNumber(parseFloat(previousNumber) - parseFloat(number));
                break;

            case "*": setNumber(parseFloat(previousNumber) * parseFloat(number));
                break;

            case "/": setNumber(parseFloat(previousNumber) / parseFloat(number));
                break;
        }
    }

  return (
    <div className="Calculator">

        <div>{number}</div>
        <div>{eventList}</div>

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
            <button value={"."}onClick={changeOperation}>.</button>
            <button value={"="}onClick={calculate}>=</button>
        </div>
        <div className="aside1">
            <button onClick={reset}>CE</button>
            <button value={"+"}onClick={changeOperation}>+</button>
            <button value={"-"}onClick={changeOperation}>-</button>
            <button value={"*"}onClick={changeOperation}>*</button>
            <button value={"/"}onClick={changeOperation}>/</button>
        </div>
    </div>
  );
}

export default Calculator;