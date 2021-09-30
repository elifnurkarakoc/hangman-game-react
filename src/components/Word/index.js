import React, { useEffect } from "react";
import Letter from "../Letter";
import { useTheme } from "../../contexts/ThemeContext";
const Word = ({ word, guesses, setIsWin }) => {
  const { theme } = useTheme();
  const getResult = () => {
    let tempWord = word
      .split("")
      .map((l, i) => (guesses.includes(l) ? l : "_"));
    return tempWord.join("") === word;
  };
  useEffect(() => {
    let result = getResult();
    setIsWin(result);
  }, [guesses]);
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
