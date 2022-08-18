import React, { useState } from "react";
import SinglePic from "../components/SinglePic";
import "./DoVerbGame.css";
import { doc } from "firebase/firestore";
import { db } from "../firebase/client";
import { useDocument } from "react-firebase-hooks/firestore";

const DoVerbGame = () => {
  const [level, setLevel] = useState("LevelOne");
  const [winner, setWinner] = useState(false);
  const [logic, setLogic] = useState("");
  const nextLevel = () => {
    if (level === "LevelOne") {
      setLevel("LevelTwo");
      setWinner(false);
      setLogic("");
    } else {
      if (level === "LevelTwo") {
        setLevel("LevelThree");
        setWinner(false);
        setLogic("");
      } else {
        alert("All levels completed!");
      }
    }
  };

  //Get LevelDoc from Database

  const [value, loading, error] = useDocument(doc(db, "cando", level));

  const handleSubmit = () => {
    if (logic === "verb") {
      setWinner(true);
    } else {
      alert("select the verb.");
    }
  };
  return (
    <div className="level">
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span> Document: Loading ...</span>}
      {!loading && value && (
        <div className="level">
          <h1>
            {" "}
            Can you <strong>DO</strong> it?{" "}
          </h1>

          <div className="imagesContainer">
            <div
              className="imgOne"
              onClick={() => {
                setLogic("verb");
              }}
            >
              <SinglePic pathName={value.data().verb.PathName} />
              <p>{value.data().verb.Description}</p>
            </div>
            <div
              className="imgTwo"
              onClick={() => {
                setLogic("");
              }}
            >
              {" "}
              <SinglePic pathName={value.data().noun.PathName} />
              <p>{value.data().noun.Description}</p>
            </div>
          </div>
          <button onClick={() => handleSubmit()}>submit</button>
        </div>
      )}
      {winner && (
        <div>
          <h1>Winner Winner Chicken Dinner! </h1>
          <button onClick={nextLevel}>Next Level</button>
        </div>
      )}
    </div>
  );
};

export default DoVerbGame;
