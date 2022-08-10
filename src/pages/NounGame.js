import React, { useState } from "react";
import "./NounGame.css";
import SingleButton from "../components/SingleButton";
import { uuidv4 } from "@firebase/util";

const NounGame = () => {
  const [feedback, setFeedback] = useState(
    "Oops! Try again. Remember, a noun is a person, place, or thing."
  );
  const [fillerSentence, setFillerSentence] = useState([
    { word: "One", isAnswer: false },
    { word: "blue", isAnswer: false },
    { word: "bird", isAnswer: true },
    { word: "sits", isAnswer: false },
    { word: "on", isAnswer: false },
    { word: "a", isAnswer: false },
    { word: "branch", isAnswer: true },
  ]);
  const readAloud = () => {};
  const secondButtonList = fillerSentence.map((pair) => (
    <SingleButton
      pair={pair}
      word={pair.word}
      isAnswer={pair.isAnswer}
      key={uuidv4()}
    />
  ));

  return (
    <div className="main">
      <h1>Select the nouns in the sentence: </h1> <br />
      <div>{secondButtonList}</div>
    </div>
  );
};

export default NounGame;
