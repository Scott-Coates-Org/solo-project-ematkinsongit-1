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
  const [style, setStyle] = useState("imgOne");
  const nextLevel = () => {
    if (level === "LevelOne") {
      setLevel("LevelTwo");
      setStyle("imgOne");
      setWinner(false);
      setLogic("");
    } else {
      if (level === "LevelTwo") {
        setStyle("imgOne");
        setLevel("LevelThree");
        setWinner(false);
        setLogic("");
      } else {
        alert("All levels completed! Return to Home for different games.");
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
  const handleVerbClick = () => {
    setStyle("selected");
    setLogic("verb");
  };
  return (
    <div className="level">
      {error && <span>Error: {JSON.stringify(error)}</span>}
      {loading && <span> Document: Loading ...</span>}
      {!loading && value && (
        <div className="level">
          <h1>
            {" "}
            Can you <strong>DO</strong> it?{" "}
          </h1>
          <h3>
            Select the <strong>verb</strong>.
          </h3>

          <div className="imagesContainer">
            <div
              className={style}
              onClick={() => {
                handleVerbClick();
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
          <button onClick={handleSubmit}>submit</button>
        </div>
      )}
      {winner && (
        <div>
          <h1>Correct! You can move on to the next level. </h1>
          <button onClick={nextLevel}>Next Level</button>
        </div>
      )}
    </div>
  );
};

export default DoVerbGame;
