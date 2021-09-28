import React, { useState, useEffect } from "react";

var letters = "abcdefghijklmnopqrstuvwxyz".split("");

const Keyboard = ({ letter, setLetter }) => {
  const buttonClick = (e) => {
    setLetter(e.target.innerHTML);
  };

  useEffect(() => {
    letters = letters.filter((item) => item !== letter);
  }, [letter]);
  return (
    <div className="flex flex-wrap justify-center ">
      {letters.map((item, index) => (
        <button
          className="bg-indigo-500 disabled:bg-red-900  text-white font-bold py-2 px-4 mr-1 rounded-full"
          key={index}
          onClick={buttonClick}
          // disabled={guesses.includes(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
