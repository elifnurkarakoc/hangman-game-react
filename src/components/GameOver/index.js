import React from "react";
import { GameOverIcon, RefreshIcon } from "../../icons/icon";
const GameOver = ({ word, newGame }) => {
  return (
    <div className="flex flex-col items-center">
<div>
  <GameOverIcon className="p-4" />
</div>
      <div className="text-2xl my-8 text-red-600 ">
        <p className="animate-bounce ">{word}</p>
      </div>
      {/* <div className="text-3xl my-8 text-red-600 ">
        <p className="animate-bounce ">GAME OVER</p>
      </div> */}
      <div className="">
        <button
          onClick={newGame}
          className=" flex items-center p-2 bg-purple-400 rounded-lg shadow-sm text-white hover:bg-purple-500 focus:outline-none "
        >
          <RefreshIcon className="w-6 h-6" />
          <p className="text-lg">Try again</p>
        </button>
      </div>
    </div>
  );
};

export default GameOver;
