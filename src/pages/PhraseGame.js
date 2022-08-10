import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import "./PhraseGame.css";

const PhraseGame = () => {
  const [num, setNum] = useState("");
  const [color, setColor] = useState("");
  const [noun, setNoun] = useState("");
  const [verb, setVerb] = useState("");
  const [where, setWhere] = useState("");
  const [bank, setBank] = useState([]);
  const fillerColors = ["red", "yellow", "blue"];
  const fillerNumbers = ["one", "two", "three", "four"];
  const fillerNouns = ["peach", "balloon", "tree", "bird"];
  const fillerVerbs = ["running", "jumping", "floating", "peeing"];
  const fillerWhere = [
    "in a tree",
    "in the sky",
    "on the road",
    "beside the sea",
  ];
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
    <div className="level">
      <h1>
        Click the category and select the correct word from the wordbank.
        Generate a phrase that matches the prompt.
      </h1>
      <div id="wordAndImg" className="row">
        <p className="col-md-6">holds word bank and images</p>

        <div className="col-md-6" id="wordBank">
          <ul>{bank}</ul>
        </div>
        <div className="col-md-6" id="lvlimg">
          <img src="../assets/kittens.jpeg" alt="kittens" />
        </div>
      </div>
      <div className="answersholder">
        AnswersHolder
        <div
          id="num"
          className="row"
          onClick={() => {
            setBank(numberListItems);
          }}
        >
          {" "}
          <p className="col-md-6">Number = </p>
          <div className="col-md-6" id="numans">
            {num}
          </div>
        </div>
        <div
          className="row"
          id="color"
          onClick={() => {
            setBank(colorListItems);
          }}
        >
          {" "}
          <p className="col-md-6">Color = </p>
          <div className="col-md-6" id="colorans">
            {color}
          </div>
        </div>
        <div
          className="row"
          id="noun"
          onClick={() => {
            setBank(nounListItems);
          }}
        >
          <p className="col-md-6">Noun = </p>
          <div className="col-md-6" id="nounans">
            {noun}
          </div>
        </div>
        <div
          className="row"
          id="verb"
          onClick={() => {
            setBank(verbListItems);
          }}
        >
          <p className="col-md-6">Verb = </p>
          <div className="col-md-6" id="verbans">
            {verb}
          </div>
        </div>
        <div
          className="row"
          id="where"
          onClick={() => {
            setBank(whereListItems);
          }}
        >
          <p className="col-md-6">Where = </p>
          <div className="col-md-6" id="whereans">
            {where}
          </div>
        </div>{" "}
      </div>{" "}
      <p>
        {" "}
        Answer: {num} {color} {noun} {verb} {where}{" "}
      </p>
      <Button
        onClick={() => {
          console.log("submitted");
        }}
      >
        Submit
      </Button>
    </div>
  );
};

export default PhraseGame;
