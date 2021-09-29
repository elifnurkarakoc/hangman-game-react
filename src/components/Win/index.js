import React from "react";
import { RefreshIcon, FireworksIcon } from "../../icons/icon";
const Win = ({ word, score, newGame }) => {
  return (
    <div className="flex flex-col items-center">
      <FireworksIcon className="p-6" />
{/* 
      <div className="my-8">
        <p className="animate-none text-3xl ">{word}</p>
      </div> */}
      <div className="my-8 ">
        <p className="animate-bounce text-3xl ">You win +{score} point</p>
      </div>
      <div className="py-3">
        <button
          onClick={newGame}
          className=" flex items-center animate-pulse p-4 bg-gradient-to-r  from-purple-800 via-pink-600 to-red-400 rounded-lg text-white"
        >
          <RefreshIcon className="w-6 h-6" />
          <p className="text-xl">New game</p>
        </button>
      </div>
    </div>
  );
};

export default Win;
