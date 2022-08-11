import React, { useState, useEffect } from "react";
import { app } from "../firebase/client";
import "./VerbMatchGame.css";
import SinglePic from "../components/SinglePic.jsx";
import SingleVerb from "../components/SingleVerb.jsx";
import { uuidv4 } from "@firebase/util";

const VerbMatchGame = () => {
  const verbMatchData = [
    { verb: "drink", pathName: "verbmatch/setOne/drink.jpg" },
    { verb: "fly", pathName: "verbmatch/setOne/fly.jpg" },
    { verb: "light", pathName: "verbmatch/setOne/light.jpg" },
    { verb: "jump", pathName: "verbmatch/setOne/jump.jpg" },
    { verb: "run", pathName: "verbmatch/setOne/run.jpg" },
    { verb: "swim", pathName: "verbmatch/setOne/swim.jpg" },
  ];
  const renderedVerbMatch = verbMatchData.map((pair) => (
    <SingleVerb
      draggable="true"
      pair={pair}
      verb={pair.verb}
      pathName={pair.pathName}
      key={uuidv4()}
    />
  ));
  const renderedPictures = verbMatchData.map((pair) => {
    return (
      <SinglePic
        onDragOver={(id) => handleDragOver(id)}
        id={pair.verb}
        pair={pair}
        verb={pair.verb}
        pathName={pair.pathName}
        key={pair.verb}
      />
    );
  });
  const handleDragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("item_id", target.id);
  };
  const handleDragEnd = (e) => {
    const item_id = e.dataTransfer.getData("item_id");
    const item = document.getElementById(item_id);
    e.target.appendChild(item);
  };
  const handleDragOver = (id) => {
    console.log("dragging over: ", id);
  };
  return (
    <div>
      <h1> Rendered Pictures List: </h1>
      <p>{renderedPictures}</p>
      <p>{renderedVerbMatch}</p>
    </div>
  );
};

export default VerbMatchGame;
