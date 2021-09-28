import React, { useState, useEffect } from "react";
import Attempts from "../components/Attempts";
import Keyboard from "../components/Keyboard";
import Word from "../components/Word";
const Content = () => {
  const [letter, setLetter] = useState("");
  const [attemptsCount, setAttemptsCount] = useState(5);
  const [status, setStatus] = useState(true);
  const [word, setWord] = useState("Hello");
  const [guesses, setGuesses] = useState([]);
  const [guessedWord, setGuessedWord] = useState([]);
  var flag;

  const getResult = () => {
    return guessedWord.join("") === word;
  };

  useEffect(() => {
    setGuesses([...guesses, ...letter]);
    console.log("word",word.toLowerCase().split(""));
    console.log("guessedWord",guessedWord);

    // console.log(
    //   word
    //     .toLowerCase()
    //     .split("")
    //     .map((l) => (guesses.includes(l) ? l : "_"))
    //     .join("")
    // );
    flag = word.toLowerCase().includes(letter) ? true : false;
    if (!flag && attemptsCount > 0) {
      setAttemptsCount(attemptsCount - 1);
    } else if (flag && attemptsCount == 0) {
      setAttemptsCount(0);
      setStatus(false);
    }
  }, [letter]);
  return (
    <div>
      {status && (
        <div>
          <Attempts
            attemptsCount={attemptsCount}
            setAttemptsCount={setAttemptsCount}
          />
          <Word
            word={word.toLowerCase()}
            setWord={setWord}
            guesses={guesses}
            setGuessedWord={setGuessedWord}
            guessedWord={guessedWord}
          />
          <Keyboard letter={letter} setLetter={setLetter} />
        </div>
      )}
      {!status && <div>GameOver and PlayAgain</div>}
    </div>
  );
};

export default Content;
