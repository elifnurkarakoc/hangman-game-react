import { useState, createContext, useEffect, useContext } from "react";
import { randomWord } from "../api";
import { useAuth } from "./AuthContext";
import { fetchUpdateUser } from "../api";

const GameContext = createContext();

var defaultLetters = "abcdefghijklmnopqrstuvwxyz".split("");

export const GameProvider = ({ children }) => {
  const { user, setUser, updateLocalStorageUser } = useAuth();
  const [letter, setLetter] = useState("");
  const [letters, setLetters] = useState(defaultLetters);
  const [attemptsCount, setAttemptsCount] = useState(5);
  const [status, setStatus] = useState(true); //status ==true --> new game, status ==false --> gameower
  const [isWin, setIsWin] = useState(false); //isWin==true user win
  const [word, setWord] = useState("hello"); //randomWord()
  const [guesses, setGuesses] = useState([]);
  const [score, setScore] = useState(0);

  const newGame = (e) => {
    e.preventDefault();
    setScore(attemptsCount);
    setWord(randomWord());
    setStatus(true);
    setIsWin(false);
    setAttemptsCount(5);
    setLetter("");
    setGuesses([]);
  };

  const buttonClick = (e) => {
    setLetter(e.target.innerHTML);
  };

  //for the score to be updated when the user guesses correctly
  const updateScore = async () => {
    let object = {
      username: user.username,
      password: user.password,
      score: user.score + score,
      id: user.id,
    };
    console.log({ object });
    const response = await fetchUpdateUser(object);
    setUser(response);
    updateLocalStorageUser(response);
  };

  //Is the guessed word the same as the questioned word?
  const getResult = () => {
    let tempWord = word
      .split("")
      .map((l, i) => (guesses.includes(l) ? l : "_"));
    return tempWord.join("") === word;
  };

  //if result is correct, user earns points.
  useEffect(() => {
    let result = getResult();
    setIsWin(result);
  }, [guesses]);

  //removes it from the keyboard when a letter is pressed. updates when the game is refreshed.
  //It is checked whether the word contains the guessed letter or not.
  useEffect(() => {

    letter.length !== 0
      ? setLetters(letters.filter((item) => item !== letter))
      : setLetters(defaultLetters);

    setGuesses([...guesses, ...letter]);
    var flag = word.toLowerCase().includes(letter) ? true : false;
    if (!flag && attemptsCount > 1) {
      setAttemptsCount(attemptsCount - 1);
    } else if (attemptsCount === 1) {
      setAttemptsCount(0);
      setStatus(false); //for the gameover
    }
    setScore(attemptsCount);
  }, [letter]);

  //The remaining number of attempts is added as points when guessed correctly.
  useEffect(() => {
    if (isWin === true) {
      updateScore();
    }
  }, [isWin]);

  const values = {
    letter,
    letters,
    attemptsCount,
    status,
    isWin,
    word,
    guesses,
    score,
    newGame,
    buttonClick,
  };
  return <GameContext.Provider value={values}>{children}</GameContext.Provider>;
};

export const useGame = () => useContext(GameContext);
