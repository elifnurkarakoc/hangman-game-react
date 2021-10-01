import React from "react";
import Letter from "../Letter";
import { useTheme } from "../../contexts/ThemeContext";
import { useGame } from "../../contexts/GameContext";
const Word = () => {
  const { theme } = useTheme();
  const { word, guesses } = useGame();

  return (
    <div className={`flex flex-wrap justify-center text-${theme}-300 `}>
      {word.split("").map((l, i) => (
        <div key={i} className="text-lg p-3">
          {guesses.includes(l) ? <Letter letter={l} /> : "_"}
        </div>
      ))}
    </div>
  );
};

export default Word;
