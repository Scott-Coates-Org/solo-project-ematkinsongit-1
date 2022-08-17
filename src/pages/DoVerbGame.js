import React from "react";
import SinglePic from "../components/SinglePic";
import "./DoVerbGame.css";

const DoVerbGame = () => {
  const verbPathName = "/canDo/sweep.jpg";
  const nounPathName = "/canDo/broom.jpg";
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
            console.log("verb");
          }}
        >
          <SinglePic pathName={verbPathName} />
          <p>Sweep</p>
        </div>
        <div
          className="imgTwo"
          onClick={() => {
            console.log("noun");
          }}
        >
          {" "}
          <SinglePic pathName={nounPathName} />
          <p>Broom</p>
        </div>
      </div>
    </div>
  );
};

export default DoVerbGame;
