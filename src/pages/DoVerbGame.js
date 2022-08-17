import React, { useState } from "react";
import SinglePic from "../components/SinglePic";
import "./DoVerbGame.css";

const DoVerbGame = () => {
  //useEffect load level from db, then=> setVerbPathName, setNounPathName, setVerb, setNoun
  const [logic, setLogic] = useState("");
  const [verb, setVerb] = useState("sweep");
  const [noun, setNoun] = useState("broom");
  const [verbPathName, setVerbPathName] = useState("/canDo/sweep.jpg");
  const [nounPathName, setNounPathName] = useState("/canDo/broom.jpg");
  const handleSubmit = () => {
    if (logic === "verb") {
      //write level isCompleted=true to userProfile in db, go to next level
      console.log("you win!");
    } else {
      //rejection feedback
    }
  };
  return (
    <div className="level">
      <h1>
        Can you <strong>DO</strong> it?
      </h1>
      <p>
        {" "}
        Select the verb. Which one can you <strong>DO?</strong>
      </p>
      <div className="imagesContainer">
        <div
          className="imgOne"
          onClick={() => {
            setLogic("verb");
          }}
        >
          <SinglePic pathName={verbPathName} />
          <p>{verb}</p>
        </div>
        <div
          className="imgTwo"
          onClick={() => {
            //incorrect feedback
          }}
        >
          {" "}
          <SinglePic pathName={nounPathName} />
          <p>{noun}</p>
        </div>
      </div>
      <button onClick={() => handleSubmit()}>submit</button>
    </div>
  );
};

export default DoVerbGame;
