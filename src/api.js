import words from "an-array-of-english-words";
const randomWord = () => {
  const wordIndex = Math.floor(Math.random() * words.length);

  return words[wordIndex];
};

export default randomWord;
