import React, { useEffect } from "react";
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
import { useGame } from "../contexts/GameContext";
import { useAuth } from "../contexts/AuthContext";
import Title from "../components/Title";
import { GAME_STATUS } from "../constant/constant";

const images = [image0, image1, image2, image3, image4, image5, image6];

const Content = () => {
  const { status, newGame } = useGame();
  const { user } = useAuth();
  useEffect(() => {
    newGame();
  }, []);
  return (
    <div className="">
      {status === GAME_STATUS.START && (
        <div>
          {user !== null && <Title />}
          {/* <Image imagePath={images[5-attemptsCount]}/> */}
          <Attempts />
          <Word />
          <Keyboard />
        </div>
      )}
      {status === GAME_STATUS.LOSE && (
        <div>
          <GameOver />
        </div>
      )}
      {status === GAME_STATUS.WIN && (
        <div>
          <Win />
        </div>
      )}
    </div>
  );
};

export default Content;
