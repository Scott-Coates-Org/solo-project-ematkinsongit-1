import React, { useEffect, useState } from "react";
import "./NounGame.css";
import SingleButton from "../components/SingleButton";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/client";
import { ReactReduxContext } from "react-redux";

const NounGame = () => {
  const [feedback, setFeedback] = useState(
    "Oops! Try again. Remember, a noun is a person, place, or thing."
  );

  const [noSubmit, setNoSubmit] = useState(
    "Oops! Take another look. You have not selected all the nouns."
  );
  //useEffect load sentence from db, setSentence
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

  const buttonList = fillerSentence.map((pair) => (
    <SingleButton
      pair={pair}
      word={pair.word}
      isAnswer={pair.isAnswer}
      key={pair.word}
    />
  ));

  const handleSubmit = () => {
    //if both answers are selected, levelSuccess() else return noSubmit
    console.log("submitted");
  };
  const levelSuccess = () => {
    //write level isCompleted=true in db, load next level.
  };
  return (
    <div>
      <div className="main">
        <h1 onMouseEnter={console.log("header")}>
          Select the nouns in the sentence:{" "}
        </h1>{" "}
        <br />
        <div>{buttonList}</div>
      </div>{" "}
      <button
        className="submit"
        onMouseEnter={console.log("submit button")}
        onClick={() => {
          handleSubmit();
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default NounGame;
