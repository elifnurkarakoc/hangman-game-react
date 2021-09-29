import React from "react";

const Image = ({imagePath}) => {

  return (
    <div className=" flex justify-center  bg-gradient-to-r from-yellow-300 via-indigo-400 to-pink-400 opacity-70 py-8 rounded-lg">
      <img src={imagePath} className=" w-40 h-40" alt="image" />
    </div>
  );
};

export default Image;
