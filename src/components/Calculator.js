import { useState } from "react";

function Calculator() {

    const [eventList, setEventList] = useState([]);
    const [number, setNumber] = useState(0);
    const [previousNumber, setPreviousNumber] = useState(0);
    const [operator, setOperator] = useState(0);

    function handleInput(e) {

        if (number === 0) {
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
            <button value={"pi"} onClick={handleInput}>&#960;</button>
            <button value={"log"} onClick={handleInput}>log</button>
            <button value={"ln"} onClick={handleInput}>ln</button>
            <button value={"%"} onClick={handleInput}>%</button>
            <button value={"c"} onClick={handleInput}>C</button>
            <button onClick={reset}>CE</button>
        </div>

        <div className="row2">
            <button value={"e"} onClick={handleInput}>e</button>
            <button value={"cos"} onClick={handleInput}>cos</button>
            <button value={9} onClick={handleInput}>9</button>
            <button value={8} onClick={handleInput}>8</button>
            <button value={7} onClick={handleInput}>7</button>
            <button value={"+"}onClick={changeOperation}>+</button>
        </div>
        <div className="row3">
            <button value={"x!"} onClick={handleInput}>x!</button>
            <button value={"tan"} onClick={handleInput}>tan</button>
            <button value={6} onClick={handleInput}>6</button>
            <button value={5} onClick={handleInput}>5</button>
            <button value={4} onClick={handleInput}>4</button>
            <button value={"-"}onClick={changeOperation}>-</button>
        </div>

        <div className="row4">
            <button value={"root"} onClick={handleInput}>&#8730;</button>
            <button value={"sin"} onClick={handleInput}>sin</button>
            <button value={3} onClick={handleInput}>3</button>
            <button value={2} onClick={handleInput}>2</button>
            <button value={1} onClick={handleInput}>1</button>
            <button value={"*"}onClick={changeOperation}>*</button>
        </div>
        <div className="row5">
            <button value={"ans"} onClick={handleInput}>ANS</button>
            <button value={"/"}onClick={changeOperation}>x<sup>y</sup></button>
            <button value={0} onClick={handleInput}>0</button>
            <button value={"."}onClick={changeOperation}>.</button>
            <button value={"="}onClick={calculate}>=</button>
            <button value={"/"}onClick={changeOperation}>/</button>
        </div>
    </div>
  );
}

export default Calculator;