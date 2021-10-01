import React from "react";
import { useGame } from "../../contexts/GameContext";
import {
  Head,
  Body,
  LeftArm,
  RightArm,
  LeftLeg,
  RightLeg,
  Lines,
} from "./hangmanParts";
import style from "./Figure.module.css";
const Figure = () => {

  const { attemptsCount } = useGame();
  const hangman = [
    <>
      <Head />
      <Body />
    </>,
    <LeftArm />,
    <RightArm />,
    <LeftLeg />,
    <RightLeg />,
  ];
  return (
    <div>
      <svg className="w-25 h-64">
        <g id="body">
          {hangman
            .slice(0, 5 - attemptsCount)
            .map((component, index) => component)}
        </g>
        <Lines />
      </svg>
    </div>
  );
};
export default Figure;
