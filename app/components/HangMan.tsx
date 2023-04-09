import React, { useState, useId } from "react";
import Image from "next/image";
import styles from "../../styles/HangMan.module.css";

const HangMan = () => {
  const [word, setWord] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [guess, setGuess] = useState<string>("");
  const [wrongGuesses, setWrongGuesses] = useState<number>(0);
  const [correctGuesses, setCorrectGuesses] = useState<string>("_");
  const [guessHistory, setGuessHistory] = useState<string[]>([]);
  const wordInputId = useId();
  const guessInputId = useId();

  function chooseWord() {

    if (word !== "") {
        setIsDisabled(true);

        switch (word.length) {
          case 1:
            setCorrectGuesses("_");
            break;
    
          case 2:
            setCorrectGuesses("__");
            break;
    
          case 3:
            setCorrectGuesses("___");
            break;
    
          case 4:
            setCorrectGuesses("____");
            break;
    
          case 5:
            setCorrectGuesses("_____");
            break;
        }
    } else {
        alert("Du måste skriva in ett ord först.")
    }

  }

  function handleGuess() {
    setGuessHistory((current) => [...current, guess]);
    if (word.includes(guess)) {
      let latestGuess: string[] = correctGuesses.split("");
      const wordIndexes: number[] = [];

      for (let i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          wordIndexes.push(i);
        }
      }

      for (let i = 0; i < wordIndexes.length; i++) {
        latestGuess.splice(wordIndexes[i], 1, guess);
      }

      setCorrectGuesses(latestGuess.join(""));
    } else {
      setWrongGuesses(wrongGuesses + 1);
    }

    setGuess("");
  }

  function reset() {
    setWord("");
    setIsDisabled(false);
    setGuess("");
    setCorrectGuesses("_");
    setWrongGuesses(0);
    setGuessHistory([]);
  }

  if (wrongGuesses < 8 && correctGuesses.includes("_")) {
    return (
      <div className={styles.HangMan}>
        <div className={styles.game}>
         <label htmlFor={wordInputId}>Skriv ett ord</label>
            
            <input
              maxLength={5}
              type="text"
              onChange={(e) => setWord(e.target.value)}
              value={word}
              className={!isDisabled ? styles.current : styles.hidden}
              id={wordInputId}
            />
          <button disabled={isDisabled} onClick={chooseWord}>
            Välj ord
          </button>
          <Image
            width="200"
            height="200"
            src="/hangMan0.png"
            alt="A hill"
            className={wrongGuesses === 0 ? styles.current : styles.hidden}
          />
          <Image
            width="200"
            height="200"
            src="/hangMan1.png"
            alt="A hill"
            className={wrongGuesses === 1 ? styles.current : styles.hidden}
          />
          <Image
            width="200"
            height="200"
            src="/hangMan2.png"
            alt="Hill with a post"
            className={wrongGuesses === 2 ? styles.current : styles.hidden}
          />
          <Image
            width="200"
            height="200"
            src="/hangMan3.png"
            alt="Hill with a post"
            className={wrongGuesses === 3 ? styles.current : styles.hidden}
          />
          <Image
            width="200"
            height="200"
            src="/hangMan4.png"
            alt="Hill with a post"
            className={wrongGuesses === 4 ? styles.current : styles.hidden}
          />
          <Image
            width="200"
            height="200"
            src="/hangMan5.png"
            alt="Hill with a post"
            className={wrongGuesses === 5 ? styles.current : styles.hidden}
          />
          <Image
            width="200"
            height="200"
            src="/hangMan6.png"
            alt="Hill with a post"
            className={wrongGuesses === 6 ? styles.current : styles.hidden}
          />
          <Image
            width="200"
            height="200"
            src="/hangMan7.png"
            alt="Hill with a post"
            className={wrongGuesses === 7 ? styles.current : styles.hidden}
          />
          <Image
            width="200"
            height="200"
            src="/hangMan8.png"
            alt="Hill with a post"
            className={wrongGuesses === 8 ? styles.current : styles.hidden}
          />
          <p>{correctGuesses}</p>
          <p>Tidigare gissningar: {guessHistory}</p>
          <label htmlFor={guessInputId}>Gissa på en bokstav</label>
            <input
              type="text"
              onChange={(e) => setGuess(e.target.value)}
              value={guess}
              maxLength={1}
              id={guessInputId}
            />
          <button onClick={handleGuess}>Gissa</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="HangMan">
        <Image
          width="200"
          height="200"
          src="/hangMan8.png"
          alt="Hill with a post"
          className={wrongGuesses > 7 ? styles.current : styles.hidden}
        />
        <h2>{!correctGuesses.includes("_") ? "Du vann!" : "Du förlorade!"}</h2>
        <p>Ordet var: {word}</p>
        <button onClick={reset}>Spela igen</button>
      </div>
    );
  }
};

export default HangMan;