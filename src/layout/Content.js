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
const images = [image0, image1, image2, image3, image4, image5, image6];
const Content = () => {
  const [letter, setLetter] = useState("");
  const [attemptsCount, setAttemptsCount] = useState(5);
  const [status, setStatus] = useState(true); //status ==true --> new game, status ==false --> gameower
  const [isWin, setIsWin] = useState(false); //isWin==true user win
  const [word, setWord] = useState("Hello");
  const [guesses, setGuesses] = useState([]);

  var flag;

  useEffect(() => {
    setGuesses([...guesses, ...letter]);
    flag = word.toLowerCase().includes(letter) ? true : false;
    console.log({ attemptsCount }, { letter }, { flag });
    if (!flag && attemptsCount > 1) {
      setAttemptsCount(attemptsCount - 1);
    } else if (attemptsCount === 1) {
      setAttemptsCount(0);
      setStatus(false);
    }
    setIsWin(isWin);
  }, [letter]);
  return (
    <div className="">
      {status && !isWin && (
        <div>
          <Image imagePath={images[5-attemptsCount]}/>

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
      {!status && !isWin && <div>GameOver and PlayAgain</div>}
      {isWin && <div>Win!!!</div>}
    </div>
  );
};

export default Content;
