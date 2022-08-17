import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import "./PhraseGame.css";
import SinglePic from "../components/SinglePic";

const PhraseGame = () => {
  const [num, setNum] = useState("");
  const [color, setColor] = useState("");
  const [noun, setNoun] = useState("");
  const [verb, setVerb] = useState("");
  const [where, setWhere] = useState("");
  const [bank, setBank] = useState([]);
  const fillerColors = ["red", "yellow", "blue"];
  const fillerNumbers = ["one", "two", "three", "four"];
  const fillerNouns = ["peach", "balloon", "trees", "birds"];
  const fillerVerbs = ["running", "jumping", "floating", "peeing"];
  const fillerWhere = [
    "in a tree",
    "in the sky",
    "on the road",
    "beside the sea",
  ];
  const pathName = "phrasegame/birds.jpeg";
  const colorListItems = fillerColors.map((color) => (
    <Button
      className="bankbtn"
      key={color}
      value={color}
      onClick={(e) => setColor(e.target.value)}
    >
      {color}
    </Button>
  ));
  const numberListItems = fillerNumbers.map((num) => (
    <Button
      className="bankbtn"
      key={num}
      value={num}
      onClick={(e) => setNum(e.target.value)}
    >
      {num}
    </Button>
  ));
  const nounListItems = fillerNouns.map((noun) => (
    <Button
      className="bankbtn"
      key={noun}
      value={noun}
      onClick={(e) => setNoun(e.target.value)}
    >
      {noun}
    </Button>
  ));
  const verbListItems = fillerVerbs.map((verb) => (
    <Button
      className="bankbtn"
      key={verb}
      value={verb}
      onClick={(e) => setVerb(e.target.value)}
    >
      {verb}
    </Button>
  ));
  const whereListItems = fillerWhere.map((where) => (
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
          Generate a phrase that matches the prompt.
        </h1>
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
            console.log("submitted");
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default PhraseGame;
