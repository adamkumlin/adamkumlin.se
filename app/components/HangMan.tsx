import * as React from "react";
import { useState } from "react";
import Image from "next/image";

const HangMan = () => {

    const [word, setWord] = useState<string>("");
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    const [guess, setGuess] = useState<string>("");
    const guesses: any = Array(word.length).fill("_ ");
    const [wrongGuesses, setWrongGuesses] = useState<number>(0);
    const [correctGuesses, setCorrectGuesses] = useState<any>();
    const [isFinished, setIsFinished] = useState<boolean>(false)
    function chooseWord() {
        setIsDisabled(true);
        setCorrectGuesses(guesses);
    }


    function handleGuess() {
        if (word.includes(guess)) {

            let newGuess = correctGuesses.splice(word.indexOf(guess), 1, guess);
          
                setCorrectGuesses(current => [...current, newGuess]);
            
            
        } else {
            setWrongGuesses(wrongGuesses + 1);
        }


            let testResult = correctGuesses.splice(correctGuesses.indexOf("_"), 1);
            JSON.stringify(testResult)
            console.log(testResult, word)
            if(word === testResult) {
                console.log("right")
            }
    }

    function reset() {
        setWord("");
        setIsDisabled(false);
        setGuess("")
        setWrongGuesses(0);
    }

    return (
        <div className="HangMan">
            <label>Skriv ett ord:<input maxLength={5} disabled={isDisabled} type="text" onChange={(e) => setWord(e.target.value)} value={word}/></label>
            <button disabled={isDisabled} onClick={chooseWord}>Välj ord</button>
            <Image width="200" height="200" src="/hangMan0.png" alt="A hill" className={wrongGuesses === 0 ? "current" : "hidden"}/>
            <Image width="200" height="200" src="/hangMan1.png" alt="A hill" className={wrongGuesses === 1 ? "current" : "hidden"}/>
            <Image width="200" height="200" src="/hangMan2.png" alt="Hill with a post" className={wrongGuesses === 2 ? "current" : "hidden"}/>
            <Image width="200" height="200" src="/hangMan3.png" alt="Hill with a post" className={wrongGuesses === 3 ? "current" : "hidden"}/>
            <Image width="200" height="200" src="/hangMan4.png" alt="Hill with a post" className={wrongGuesses === 4 ? "current" : "hidden"}/>
            <Image width="200" height="200" src="/hangMan5.png" alt="Hill with a post" className={wrongGuesses === 5 ? "current" : "hidden"}/>
            <Image width="200" height="200" src="/hangMan6.png" alt="Hill with a post" className={wrongGuesses === 6 ? "current" : "hidden"}/>
            <Image width="200" height="200" src="/hangMan7.png" alt="Hill with a post" className={wrongGuesses === 7 ? "current" : "hidden"}/>
            <Image width="200" height="200" src="/hangMan8.png" alt="Hill with a post" className={wrongGuesses === 8 ? "current" : "hidden"}/>
            <p>{correctGuesses}</p>
            <label>Gissa på en bokstav:<input type="text" onChange={(e) => setGuess(e.target.value)} value={guess} maxLength={1}/></label>
            <button onClick={handleGuess}>Gissa</button>
            <button onClick={reset}>Spela igen</button>
        </div>
    )
}

export default HangMan;