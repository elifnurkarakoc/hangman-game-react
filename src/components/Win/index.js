import React from "react";
import { RefreshIcon } from "../../icons/icon";
import { useTheme } from "../../contexts/ThemeContext"
import icon from "../../images/party2.svg"
import { useGame } from "../../contexts/GameContext";

const Win = () => {
  const { score, newGame } =useGame();
  const { theme } = useTheme();
  return (
    <div className={`flex flex-col items-center text-${theme}-300 `}>
      <img src={icon} alt="icon" className="w-30 h-24"/>
      {/* <FireworksIcon className="p-6 bg-${theme}-300" /> */}
      {/* 
      <div className="my-8">
        <p className="animate-none text-3xl ">{word}</p>
      </div> */}
      <div className="my-8 ">
        <p className="animate-bounce text-xl ">You won +{score} point</p>
      </div>
      <div className="py-3">
        <button
          onClick={newGame}
          className="flex items-center p-2 bg-purple-500 rounded-lg shadow-sm text-white hover:bg-purple-600 focus:outline-none "
        >
          <RefreshIcon className="w-6 h-6" />
          <p className="text-lg">New game</p>
        </button>
      </div>
    </div>
  );
};

export default Win;
