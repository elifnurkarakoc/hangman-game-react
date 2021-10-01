import React from "react";
import { useGame } from "../../contexts/GameContext";
import { HeartIcon } from "../../icons/icon";
const Attempts = () => {
  const { attemptsCount } = useGame();

  return (
    <div className="text-xl flex flex-col items-center text-red-600 py-2 hover:text-red-700 animate-bounce my-8">
      <div>
        <p className="text-lg">You have {attemptsCount} lives</p>
      </div>
      <div className="flex ">
        {[...Array(attemptsCount)].map((x, i) => (
          <HeartIcon key={i} className="h-8 w-8 my-2" />
        ))}
      </div>
    </div>
  );
};

export default Attempts;
