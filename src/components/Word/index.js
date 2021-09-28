import React ,{useEffect}from "react";
import Letter from "../Letter";
const Word = ({ word, setWord, guesses,setGuessedWord,guessedWord}) => {
  guessedWord = word.split("").map((l, i) => guesses.includes(l) ? l  : "_");
  useEffect(()=> {
    var x = word.split("").map((l, i) => guesses.includes(l) ? l  : "_");
   // setGuessedWord(x)
    console.log(guessedWord);
  },[guessedWord])
  return (
    <div className="flex flex-wrap justify-center">
      {word.split("").map((l, i) => (
        <div key={i} className="text-xl p-4">
          {guesses.includes(l) ? <Letter letter={l} /> : "_"}
        </div>
      ))}
    </div>
  );
};

export default Word;
