import React, { useEffect } from "react";
import Attempts from "../components/Attempts";
import Keyboard from "../components/Keyboard";
import Word from "../components/Word";
import Win from "../components/Win";
import GameOver from "../components/GameOver";
import { useGame } from "../contexts/GameContext";
import { useAuth } from "../contexts/AuthContext";
import Title from "../components/Title";
import { GAME_STATUS } from "../constant/constant";
import Figure from "../components/Figure";

const Content = () => {
  const { status, newGame } = useGame();
  const { user } = useAuth();

  useEffect(() => {
    newGame();
  }, [])

  return (
    <div className="">
      {status === GAME_STATUS.START && (
        <div>
          {user !== null && <Title />}
          <Figure />
          <Attempts />
          <Word />
          <Keyboard />
        </div>
      )}
      {status === GAME_STATUS.LOSE && (
        <div>
          <Figure />
          <GameOver />
        </div>
      )}
      {status === GAME_STATUS.WIN && (
        <div>
          <Figure />
          <Win />
        </div>
      )}
    </div>
  );
};

export default Content;
