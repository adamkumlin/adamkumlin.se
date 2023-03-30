"use client";
import * as React from "react";
import { useState } from "react";

const Calculator = () => {

    const [eventList, setEventList] = useState([]);
    const [number, setNumber] = useState(0);
    const [previousNumber, setPreviousNumber] = useState(0);
    const [operator, setOperator] = useState(null);
    const [operatorUsed, setOperatorUsed] = useState(false);

    function handleInput(e) {

        if (number === 0) {
            setNumber(e.target.value);
        } else {
            setNumber(number + e.target.value);
        }

        setEventList(current => [...current, e.target.value]);
    }

    function changeOperation(e) {

        if (operatorUsed) {
            alert("You must click the calculate button before switching operator.")
        } else {
            setOperator(e.target.value);
            setPreviousNumber(number);
            setNumber(0);
            setEventList(current => [...current, e.target.value]);
        }
        
        setOperatorUsed(true);
    }

    function reset() {
        setNumber(0);
        setPreviousNumber(0);
        setOperator(null);
        setEventList([]);
        setOperatorUsed(false);
    }

    function calculate() {

        let factorial: number = previousNumber;
        let factorialMultiplicator: number = factorial - 1;

        switch (operator) {
            case "+": setNumber(parseFloat(previousNumber) + parseFloat(number));
                break;

            case "-": setNumber(parseFloat(previousNumber) - parseFloat(number));
                break;

            case "*": setNumber(parseFloat(previousNumber) * parseFloat(number));
                break;

            case "/": setNumber(parseFloat(previousNumber) / parseFloat(number));
                break;

            case "^": setNumber(Math.pow(parseFloat(previousNumber), parseFloat(number)));
                break;

            case "sin": setNumber(Math.sin(parseFloat(number)));
                break;

            case "cos": setNumber(Math.cos(parseFloat(number)));
                break;

            case "tan": setNumber(Math.tan(parseFloat(number)));
                break;

            case "ln": setNumber(Math.log(parseFloat(number)));
                break;

            case "log": setNumber(Math.log10(parseFloat(number)));
                break;

            case "%": setNumber(parseFloat(previousNumber) / parseInt(100));
                break;

            case "√": setNumber(Math.sqrt(number));
                break;  
            }

            if (operator === "!") {
                for (let i = factorialMultiplicator; i > 1; i++) {
                    factorial = factorial * i;
                    console.log(factorial)
                }
                
                
            }

            setOperatorUsed(false);
        }

        

  return (
    <div className="Calculator">

        <div>{number}</div>
        <div>{eventList}</div>

        <div className="row1">
            <button value={Math.PI} onClick={handleInput}>&#960;</button>
            <button value={"log"} onClick={changeOperation}>log</button>
            <button value={"ln"} onClick={changeOperation}>ln</button>
            <button value={"%"} onClick={changeOperation}>%</button>
            <button value={"exp"} onClick={changeOperation}>EXP</button>
            <button onClick={reset}>CE</button>
        </div>

        <div className="row2">
            <button value={"e"} onClick={handleInput}>e</button>
            <button value={"cos"} onClick={changeOperation}>cos</button>
            <button value={9} onClick={handleInput}>9</button>
            <button value={8} onClick={handleInput}>8</button>
            <button value={7} onClick={handleInput}>7</button>
            <button value={"+"}onClick={changeOperation}>+</button>
        </div>
        <div className="row3">
            <button value={"!"} onClick={changeOperation}>x!</button>
            <button value={"tan"} onClick={changeOperation}>tan</button>
            <button value={6} onClick={handleInput}>6</button>
            <button value={5} onClick={handleInput}>5</button>
            <button value={4} onClick={handleInput}>4</button>
            <button value={"-"}onClick={changeOperation}>-</button>
        </div>

        <div className="row4">
            <button value={"√"} onClick={changeOperation}>&#8730;</button>
            <button value={"sin"} onClick={changeOperation}>sin</button>
            <button value={3} onClick={handleInput}>3</button>
            <button value={2} onClick={handleInput}>2</button>
            <button value={1} onClick={handleInput}>1</button>
            <button value={"*"}onClick={changeOperation}>*</button>
        </div>
        <div className="row5">
            <button value={number} onClick={handleInput}>ANS</button>
            <button value={"^"}onClick={changeOperation}>x<sup>y</sup></button>
            <button value={0} onClick={handleInput}>0</button>
            <button value={"."}onClick={changeOperation}>.</button>
            <button value={"="}onClick={calculate}>=</button>
            <button value={"/"}onClick={changeOperation}>/</button>
        </div>
    </div>
  );
}

export default Calculator;