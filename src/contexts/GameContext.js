import { useState, createContext, useEffect, useContext, useMemo } from "react";
import { randomWord } from "../api";
import { useAuth } from "./AuthContext";
import { fetchUpdateUser } from "../api";
import { GAME_STATUS } from "../constant/constant";

const GameContext = createContext();
var defaultLetters = "abcdefghijklmnopqrstuvwxyz".split("");

export const GameProvider = ({ children }) => {
  const { user, setUser, updateLocalStorageUser } = useAuth();
  const [letter, setLetter] = useState("");
  const [letters, setLetters] = useState(defaultLetters);
  const [attemptsCount, setAttemptsCount] = useState(5);
  const [status, setStatus] = useState(GAME_STATUS.START);
  const [word, setWord] = useState(randomWord());
  const [guesses, setGuesses] = useState([]);
  const [score, setScore] = useState(0);

  const newGame = () => {
    //e.preventDefault()
    setStatus(GAME_STATUS.START);
    setAttemptsCount(5);
    setLetter("");
    setGuesses([]);
  };
  //const data = useMemo(() => {}, [status]);

  //for the keyboard
  const buttonClick = (e) => {
    setLetter(e.target.innerHTML);
  };

  // useEffect(() => {
  //   console.log("word cheat sheet", word);
  // }, [word]);

  //for the score to be updated when the user guesses correctly
  const updateScore = async () => {
    const response = await fetchUpdateUser({
      username: user.username,
      password: user.password,
      score: user.score + score,
      id: user.id,
    });
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

  useEffect(() => {
    if (status === GAME_STATUS.START) {
      setWord(randomWord());
    }
  }, [status]);

  //if result is correct, user earns points.
  //The remaining number of attempts is added as points when guessed correctly.
  useEffect(() => {
    let result = getResult();
    if (result) {
      setStatus(GAME_STATUS.WIN);
      updateScore();
    }
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
      setStatus(GAME_STATUS.LOSE);
    }
    setScore(attemptsCount);
  }, [letter]);

  const values = {
    letter,
    letters,
    attemptsCount,
    status,
    word,
    guesses,
    score,
    newGame,
    buttonClick,
  };
  return <GameContext.Provider value={values}>{children}</GameContext.Provider>;
};

export const useGame = () => useContext(GameContext);
