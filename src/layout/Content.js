import React, { useState, useEffect } from "react";
import Attempts from "../components/Attempts";
import Keyboard from "../components/Keyboard";
import Word from "../components/Word";
import Image from "../components/Image";
import image0 from "../images/0.png";
import image1 from "../images/1.png";
import image2 from "../images/3.png";
import image3 from "../images/4.png";
import image4 from "../images/5.png";
import image5 from "../images/6.png";
import image6 from "../images/6.png";
import Win from "../components/Win";
import GameOver from "../components/GameOver";
import { randomWord } from "../api";
import { fetchUpdateUser } from "../api";

const images = [image0, image1, image2, image3, image4, image5, image6];
const Content = ({ user, setUser, updateLocalStorageUser }) => {
  const [letter, setLetter] = useState("");
  const [attemptsCount, setAttemptsCount] = useState(5);
  const [status, setStatus] = useState(true); //status ==true --> new game, status ==false --> gameower
  const [isWin, setIsWin] = useState(false); //isWin==true user win
  const [word, setWord] = useState("hello"); //randomWord()
  const [guesses, setGuesses] = useState([]);
  const [score, setScore] = useState(0);

  var flag;
  const newGame = (e) => {
    e.preventDefault();
    setScore(attemptsCount);
    setWord(randomWord());
    setStatus(true);
    setIsWin(false);
    setAttemptsCount(5);
    setLetter("");
    setGuesses([]);
    console.log("new game work");
  };
  const updateUser =async (object) => {
    const response = await fetchUpdateUser(object).catch((e) =>
      console.log(e)
    );
    // const tempUser = updateLocalStorageUser(user);
    setUser(response)
    updateLocalStorageUser(response);
    
    console.log("update user score", response);
    console.log("update user score user", user);
    
  };
  useEffect(() => {
    console.log("isWin",{isWin})
    setGuesses([...guesses, ...letter]);
    flag = word.toLowerCase().includes(letter) ? true : false;
    console.log({ attemptsCount }, { letter }, { flag });
    if (!flag && attemptsCount > 1) {
      setAttemptsCount(attemptsCount - 1);
    } else if (attemptsCount === 1) {
      setAttemptsCount(0);
      setStatus(false);
    }
    setScore(attemptsCount);
    setIsWin(isWin);
    
    if (isWin === true) {
      console.log({user})
      let refreshScore= user.score+score
      console.log({refreshScore})
      let object = {
        username: user.username,
        password: user.password,
        score: refreshScore ,
        id: user.id,
      }
      console.log("Win",{object})
      updateUser(object)
      
    }
  }, [letter, isWin]);
  return (
    <div className="">
      {status && !isWin && (
        <div>
          {user !== null && (
            <p className="text-xl text-center">Welcome {user.username}!</p>
          )}
          {/* <Image imagePath={images[5-attemptsCount]}/> */}
          <div>{word}</div>
          <Attempts
            attemptsCount={attemptsCount}
            setAttemptsCount={setAttemptsCount}
          />

          <Word
            word={word.toLowerCase()}
            guesses={guesses}
            setIsWin={setIsWin}
          />
          <Keyboard letter={letter} setLetter={setLetter} />
        </div>
      )}
      {!status && !isWin && (
        <div>
          <GameOver word={word} newGame={newGame} />
        </div>
      )}
      {isWin && (
        <div>
          <Win word={word} score={score} newGame={newGame} />
        </div>
      )}
    </div>
  );
};

export default Content;
