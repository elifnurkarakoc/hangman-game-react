import React from "react";
import { RefreshIcon } from "../../icons/icon";
import icon from "../../images/game-over.svg";
import { useGame } from "../../contexts/GameContext";
const GameOver = () => {
  const { word, newGame } = useGame();
  return (
    <div className="flex flex-col items-center">
      {/* <div>
        <img src={icon} alt="icon" className="w-30 h-24" />
      </div> */}
      <div className="text-2xl my-8 text-red-600 ">
        <p className="animate-bounce ">{word}</p>
      </div>
      <div className="">
        <button
          onClick={newGame}
          className=" flex items-center p-2 bg-purple-500 rounded-lg shadow-sm text-white hover:bg-purple-600 focus:outline-none "
        >
          <RefreshIcon className="w-6 h-6" />
          <p className="text-lg">Try again</p>
        </button>
      </div>
    </div>
  );
};

export default GameOver;
