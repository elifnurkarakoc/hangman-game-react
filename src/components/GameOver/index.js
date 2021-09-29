import React from "react";
import { GameOverIcon, RefreshIcon } from "../../icons/icon";
const GameOver = ({ word, newGame }) => {
  return (
    <div className="flex flex-col items-center">
<div>
  <GameOverIcon className="p-4" />
</div>
      <div className="text-3xl my-8 text-red-600 ">
        <p className="animate-bounce ">{word}</p>
      </div>
      {/* <div className="text-3xl my-8 text-red-600 ">
        <p className="animate-bounce ">GAME OVER</p>
      </div> */}
      <div className="">
        <button
          onClick={newGame}
          className=" flex items-center animate-pulse p-4 bg-purple-800 rounded-lg text-white"
        >
          <RefreshIcon className="w-6 h-6" />
          <p className="text-xl">Try again</p>
        </button>
      </div>
    </div>
  );
};

export default GameOver;
