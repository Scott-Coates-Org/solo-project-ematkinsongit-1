import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import "./PhraseGame.css";
import SinglePic from "../components/SinglePic";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/client";

const PhraseGame = () => {
  const [pathName, setPathName] = useState("phrasegame/birds.jpeg");
  const [colors, setColors] = useState([]);
  const [numbers, setNumbers] = useState([]);
  const [nouns, setNouns] = useState([]);
  const [verbs, setVerbs] = useState([]);
  const [wheres, setWheres] = useState([]);
  const [num, setNum] = useState("");
  const [color, setColor] = useState("");
  const [noun, setNoun] = useState("");
  const [verb, setVerb] = useState("");
  const [where, setWhere] = useState("");
  const [bank, setBank] = useState([]);
  const [answer, setAnswer] = useState([]);
  const sentence = [num, color, noun, verb, where];
  const [level, setLevel] = useState("LevelOne");
  const [winner, setWinner] = useState(false);
  const navigate = useNavigate();

  const arraysEqual = () => {
    if (sentence.length === answer.length) {
      setWinner(
        sentence.every((word, index) => {
          console.log(word);
          console.log(answer[index]);
          return word === answer[index];
        })
      );
    } else {
      setWinner(false);
    }
  };
  const handleSubmit = () => {
    console.log("running handlesubmit");
    arraysEqual(sentence, answer);
    if (winner === true) {
      console.log("submitted");
      console.log("winner: ", winner);
      nextLevel();
    } else {
      alert("no sub");
      console.log("winner: ", winner);

      console.log("answer: ", answer);
      console.log("sentence: ", sentence);
      //else give feedback.
    }
  };
  const nextLevel = () => {
    if (level === "LevelOne") {
      setLevel("LevelTwo");
      reset();
    } else {
      if (level === "LevelTwo") {
        setLevel("LevelThree");
        reset();
      } else {
        alert("All levels completed. Returning home.");
        navigate("/");
      }
    }
  };
  const reset = () => {
    setWinner(false);
    setNum("");
    setColor("");
    setNoun("");
    setVerb("");
    setWhere("");
    setBank(numberListItems);
  };

  const docRef = doc(db, "phraseGame", level);
  useEffect(() => {
    const getDataFromDB = async () => {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const colorsRes = docSnap.data().Colors;
        const numbersRes = docSnap.data().Numbers;
        const nounsRes = docSnap.data().Nouns;
        const verbsRes = docSnap.data().Verbs;
        const wheresRes = docSnap.data().Wheres;
        const pathNamRes = docSnap.data().PhotoPathName;
        const answerRes = docSnap.data().Answer;
        setColors(colorsRes);
        setNumbers(numbersRes);
        setNouns(nounsRes);
        setVerbs(verbsRes);
        setWheres(wheresRes);
        setPathName(pathNamRes);
        setAnswer(answerRes);
        setBank(numberListItems);
      } else {
        console.log("no data");
      }
    };

    getDataFromDB();
  }, [level]);

  const colorListItems = colors.map((color) => (
    <Button
      className="bankbtn"
      key={color}
      value={color}
      onClick={(e) => setColor(e.target.value)}
    >
      {color}
    </Button>
  ));
  const numberListItems = numbers.map((num) => (
    <Button
      className="bankbtn"
      key={num}
      value={num}
      onClick={(e) => setNum(e.target.value)}
    >
      {num}
    </Button>
  ));
  const nounListItems = nouns.map((noun) => (
    <Button
      className="bankbtn"
      key={noun}
      value={noun}
      onClick={(e) => setNoun(e.target.value)}
    >
      {noun}
    </Button>
  ));
  const verbListItems = verbs.map((verb) => (
    <Button
      className="bankbtn"
      key={verb}
      value={verb}
      onClick={(e) => setVerb(e.target.value)}
    >
      {verb}
    </Button>
  ));
  const whereListItems = wheres.map((where) => (
    <Button
      className="bankbtn"
      key={where}
      value={where}
      onClick={(e) => setWhere(e.target.value)}
    >
      {where}
    </Button>
  ));

  return (
    <div className="main">
      <div className="level">
        <h1>
          Click the category and select the correct word from the wordbank.
          Generate a phrase that matches the prompt. winner: {answer} Level:{" "}
          {level}
        </h1>
        <button
          onClick={() => {
            setWinner(true);
          }}
        >
          Winner
        </button>
        <div id="wordAndImg" className="">
          <div className="lvlimg" id="lvlimg">
            <SinglePic pathName={pathName} />
          </div>
          <div className="wordBank" id="wordBank">
            <h3>Word Bank</h3>
            <ul>{bank}</ul>
          </div>
        </div>
        <div className="answersholder">
          <p>
            Click the category to populate the word bank. Choose the word that
            describes the image!
          </p>
          <div
            id="num"
            className="row"
            onClick={() => {
              setBank(numberListItems);
            }}
          >
            {" "}
            <p className="">Number = {num}</p>
          </div>
          <div
            className="row"
            id="color"
            onClick={() => {
              setBank(colorListItems);
            }}
          >
            {" "}
            <p className="">Color = {color}</p>
          </div>
          <div
            className="row"
            id="noun"
            onClick={() => {
              setBank(nounListItems);
            }}
          >
            <p className="">Noun = {noun}</p>
          </div>
          <div
            className="row"
            id="verb"
            onClick={() => {
              setBank(verbListItems);
            }}
          >
            <p className="">Verb = {verb}</p>
          </div>
          <div
            className="row"
            id="where"
            onClick={() => {
              setBank(whereListItems);
            }}
          >
            <p className="">Where = {where}</p>
          </div>{" "}
        </div>{" "}
        <p className="answers">
          {" "}
          Answer:
          <button className="but">{num}</button>
          <button className="but">{color}</button>
          <button className="but">{noun}</button>
          <button className="but">{verb}</button>
          <button className="but">{where}</button>
        </p>
        <Button
          onClick={() => {
            handleSubmit();
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default PhraseGame;
