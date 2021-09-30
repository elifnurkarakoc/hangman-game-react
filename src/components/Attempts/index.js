import React, { useEffect } from "react";
import { HeartIcon } from "../../icons/icon";
const Attempts = ({ attemptsCount, setAttemptsCount }) => {
  useEffect(() => {
    console.log(attemptsCount);
  }, [attemptsCount]);
  return (
    <div className="text-xl flex flex-col items-center text-red-600 py-6 hover:text-red-700 animate-bounce my-16">
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
