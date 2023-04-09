"use client";
import React, { useState } from "react";
import styles from "../../styles/Calculator.module.css";

// Calculator component

const Calculator: React.FC = () => {

    const [eventList, setEventList] = useState<string[]>([]);
    const [number, setNumber] = useState<number>(0);
    const [previousNumber, setPreviousNumber] = useState<number>(0);
    const [operator, setOperator] = useState<string | null>(null);
    const [operatorUsed, setOperatorUsed] = useState<boolean>(false);

    function handleInput(e: React.MouseEvent<HTMLButtonElement>) {

        const numberTarget = e.target as HTMLButtonElement;
        const numberValue: number = parseInt(numberTarget.value);
        // Convert to type HTMLButtonElement, followed by converting the value to type number

        if (number === 0) {
            setNumber(numberValue);
        } else {
            setNumber(number + numberValue);
        }

        setEventList(current => [...current, numberValue.toString()]);
        // Add to eventList array of type string, numberValue of type number gets stringified
    }

    function changeOperation(e: React.MouseEvent<HTMLButtonElement>) {

        const operationTarget = e.target as HTMLButtonElement;
        const operationValue: string = operationTarget.value;
        // Convert to type HTMLButtonElement, followed by converting the value to type string

        if (operatorUsed) {
            alert("You must click the calculate button before switching operator.")
        } else {
            setOperator(operationValue);
            setPreviousNumber(number);
            setNumber(0);
            setEventList(current => [...current, operationValue]);
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
    // Set all state variables to their original values

    function calculate() {

        let factorial: number = previousNumber;
        let factorialMultiplicator: number = factorial - 1;

        switch (operator) {
            case "+": setNumber(previousNumber + number);
                break;

            case "-": setNumber(previousNumber - number);
                break;

            case "*": setNumber(previousNumber * number);
                break;

            case "/": setNumber(previousNumber / number);
                break;

            case "^": setNumber(Math.pow(previousNumber, number));
                break;

            case "sin": setNumber(Math.sin(number));
                break;

            case "cos": setNumber(Math.cos(number));
                break;

            case "tan": setNumber(Math.tan(number));
                break;

            case "ln": setNumber(Math.log(number));
                break;

            case "log": setNumber(Math.log10(number));
                break;

            case "%": setNumber(previousNumber / (100));
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
    <div className={styles.Calculator}>

        <div>{number}</div>
        <div>{eventList}</div>

        <div className={styles.row1}>
            <button value={Math.PI} onClick={handleInput}>&#960;</button>
            <button value={"log"} onClick={changeOperation}>log</button>
            <button value={"ln"} onClick={changeOperation}>ln</button>
            <button value={"%"} onClick={changeOperation}>%</button>
            <button value={"exp"} onClick={changeOperation}>EXP</button>
            <button onClick={reset}>CE</button>
        </div>

        <div className={styles.row2}>
            <button value={"e"} onClick={handleInput}>e</button>
            <button value={"cos"} onClick={changeOperation}>cos</button>
            <button value={9} onClick={handleInput}>9</button>
            <button value={8} onClick={handleInput}>8</button>
            <button value={7} onClick={handleInput}>7</button>
            <button value={"+"}onClick={changeOperation}>+</button>
        </div>
        <div className={styles.row3}>
            <button value={"!"} onClick={changeOperation}>x!</button>
            <button value={"tan"} onClick={changeOperation}>tan</button>
            <button value={6} onClick={handleInput}>6</button>
            <button value={5} onClick={handleInput}>5</button>
            <button value={4} onClick={handleInput}>4</button>
            <button value={"-"}onClick={changeOperation}>-</button>
        </div>

        <div className={styles.row4}>
            <button value={"√"} onClick={changeOperation}>&#8730;</button>
            <button value={"sin"} onClick={changeOperation}>sin</button>
            <button value={3} onClick={handleInput}>3</button>
            <button value={2} onClick={handleInput}>2</button>
            <button value={1} onClick={handleInput}>1</button>
            <button value={"*"}onClick={changeOperation}>*</button>
        </div>
        <div className={styles.row5}>
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