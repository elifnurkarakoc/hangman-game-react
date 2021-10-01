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
import { useTheme } from "../contexts/ThemeContext";
import { useGame } from "../contexts/GameContext";
import { useAuth } from "../contexts/AuthContext";
import Title from "../components/Title";
const images = [image0, image1, image2, image3, image4, image5, image6];

const Content = () => {
  const { theme } = useTheme();
  const { status, isWin, word } = useGame();
  const { user } = useAuth();

  return (
    <div className="">
      {status && !isWin && (
        <div>
          {user !== null && <Title />}
          {/* <Image imagePath={images[5-attemptsCount]}/> */}
          <div>{word}</div>
          <Attempts />
          <Word />
          <Keyboard />
        </div>
      )}
      {!status && !isWin && (
        <div>
          <GameOver />
        </div>
      )}
      {isWin && (
        <div>
          <Win />
        </div>
      )}
    </div>
  );
};

export default Content;
