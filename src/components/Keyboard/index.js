import React, { memo, useEffect, useState } from "react";

 var defaultLetters = "abcdefghijklmnopqrstuvwxyz".split("");

const Keyboard = ({ letter, setLetter}) => {
  const [letters,setLetters] =useState(defaultLetters)
  const buttonClick = (e) => {
    setLetter(e.target.innerHTML);
  };

  useEffect(() => {
    console.log({ letter });
    if (letter.length!==0) {
      console.log({ letter });
      setLetters(letters.filter((item) => item !== letter));
    }
    else {
      setLetters(defaultLetters);
    }
  }, [letter]);
  return (
    <div className="flex flex-wrap justify-center mt-8">
      {letters.map((item, index) => (
        <button
          className="bg-purple-400 flex items-center p-2 shadow-lg hover:bg-purple-500 focus:outline-none  text-white font-bold py-2 px-4 mr-1 mt-1 rounded-full"
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
