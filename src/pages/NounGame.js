import React, { useState } from "react";
import { Button } from "reactstrap";
import "./NounGame.css";
import ButtonList from "../components/ButtonList";
import SingleButton from "../components/login/SingleButton";

const NounGame = () => {
  const [style, setStyle] = useState("reg");
  const [word, setWord] = useState("");
  const fillerSentence = [
    { word: "One", isAnswer: false },
    { word: "blue", isAnswer: false },
    { word: "bird", isAnswer: true },
    { word: "sits", isAnswer: false },
    { word: "on", isAnswer: false },
    { word: "a", isAnswer: false },
    { word: "branch", isAnswer: true },
  ];
  const readAloud = () => {};
  const buttonList = fillerSentence.map((pair) => {
    return (
      <button
        className={style}
        key={pair.word}
        value={pair.word}
        onMouseEnter={readAloud(pair.word)}
        onClick={() => handleClick(pair.isAnswer)}
      >
        {pair.word}
      </button>
    );
  });

  const handleClick = (isAnswer) => {
    if (isAnswer === true) {
      setStyle("isAnswer");
      console.log("correct!");
      //unfortunately sets style of EVERY button. Needs to be only the current button. fix later.
    } else {
      console.log("sorry, incorrect");
      setStyle("reg");
    }
  };

  return <div className="main">{buttonList}</div>;
};

export default NounGame;
