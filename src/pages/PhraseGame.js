import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "bootstrap";
import { getFormLabelUtilityClasses } from "@mui/material";

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
    <button key={color} value={color} onClick={(e) => setColor(e.target.value)}>
      {color}
    </button>
  ));
  const numberListItems = fillerNumbers.map((num) => (
    <button key={num} value={num} onClick={(e) => setNum(e.target.value)}>
      {num}
    </button>
  ));
  const nounListItems = fillerNouns.map((noun) => (
    <button key={noun} value={noun} onClick={(e) => setNoun(e.target.value)}>
      {noun}
    </button>
  ));
  const verbListItems = fillerVerbs.map((verb) => (
    <button key={verb} value={verb} onClick={(e) => setVerb(e.target.value)}>
      {verb}
    </button>
  ));
  const whereListItems = fillerWhere.map((where) => (
    <button key={where} value={where} onClick={(e) => setWhere(e.target.value)}>
      {where}
    </button>
  ));

  return (
    <div id="level">
      <div id="wordAndImg" className="row">
        <p className="col-md-6">holds word bank and images</p>

        <div className="col-md-6" id="wordBank">
          <ul>{bank}</ul>
        </div>
        <div className="col-md-6" id="lvlimg">
          {" "}
          Image from DB
        </div>
      </div>
      <div id="answersholder">
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
      <button
        onClick={() => {
          console.log("submitted");
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default PhraseGame;
