import React, { memo } from "react";
import { useGame } from "../../contexts/GameContext";

const Keyboard = () => {
  const { letters, buttonClick } = useGame();

  return (
    <div className="flex flex-wrap justify-center mt-8">
      {letters.map((item, index) => (
        <button
          className="bg-purple-400 flex items-center p-2 shadow-lg hover:bg-purple-500 focus:outline-none  text-white text-lg font-bold py-2 px-4 mr-1 mt-1 rounded-full"
          key={index}
          onClick={buttonClick}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default memo(Keyboard);
