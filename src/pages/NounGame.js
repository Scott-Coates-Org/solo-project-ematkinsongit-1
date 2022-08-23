import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NounGame.css";
import SingleButton from "../components/SingleButton";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/client";

const NounGame = () => {
  const [count, setCount] = useState(0);
  const [level, setLevel] = useState("LevelOne");
  const [winner, setWinner] = useState(false);
  const [sentence, setSentence] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [buttons, setButtons] = useState([]);
  const [newAnswers, setNewAnswers] = useState([]);
  const navigate = useNavigate();

  const docRef = doc(db, "nounGame", level);
  useEffect(() => {
    const getDataFromDB = async () => {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const ansRes = docSnap.data().answers;
        const sentRes = docSnap.data().sentence;
        setAnswers(ansRes);
        setSentence(sentRes);
      } else {
        console.log("doc not found");
      }
    };

    getDataFromDB();
  }, [level]);

  useEffect(() => {
    const listButtons = sentence.map((word) => {
      return {
        word,
        isAnswer: answers.includes(word),
      };
    });
    setButtons(listButtons);
  }, [sentence]);
  useEffect(() => {
    if (count === 2) {
      setWinner(true);
    }
  }, [count]);

  const readAloud = () => {};

  const toggle = ({ isAnswer, disable, setDisable }) => {
    if (isAnswer === true) {
      setDisable(!disable);
      setCount(count + 1);
    } else {
      console.log("sorry, incorrect");
    }
  };

  const buttonList = buttons.map((pair) => (
    <SingleButton
      pair={pair}
      word={pair.word}
      isAnswer={pair.isAnswer}
      key={pair.word}
      toggle={toggle}
    />
  ));

  const handleSubmit = () => {
    if (winner === true) {
      nextLevel();
    } else {
      alert("sorry, try selecting both nouns.");
    }
  };

  const nextLevel = () => {
    console.log("next level...");
    if (level === "LevelOne") {
      setLevel("LevelTwo");
      setWinner(false);
      setCount(0);
    } else {
      if (level === "LevelTwo") {
        setLevel("LevelThree");
        setWinner(false);
        setCount(0);
      } else {
        if (level === "LevelThree") {
          setLevel("LevelFour");
          setWinner(false);
          setCount(0);
        } else {
          if (level === "LevelFour") {
            setLevel("LevelFive");
            setWinner(false);
            setCount(0);
          } else {
            alert("Demo Completed. Returning to home...");
            navigate("/");
          }
        }
      }
    }
  };

  return (
    <div>
      <div className="main">
        <div>
          <h1>Select the nouns in the sentence: </h1>{" "}
        </div>
        <br />
        <div>{buttonList}</div>
      </div>{" "}
      <button
        className="submit"
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
