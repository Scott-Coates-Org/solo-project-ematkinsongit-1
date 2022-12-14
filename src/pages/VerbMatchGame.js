import React, { useState, useEffect } from "react";
import "./VerbMatchGame.css";
import SinglePic from "../components/SinglePic.jsx";
import SingleVerb from "../components/SingleVerb.jsx";

const VerbMatchGame = () => {
  //useEffect setVerbMatchData onLevelLoad
  const handleSubmit = () => {
    //if everything is matched, update UserLevel to isComplete=true in db, show next level
    //else give feedback
  };
  //append verbs to correct div,
  const [draggingID, setDraggingID] = useState("");
  const [dragOverID, setDragOverID] = useState("");
  const [verbMatchData, setVerbMatchData] = useState([
    { verb: "drink", pathName: "verbmatch/setOne/drink.jpg" },
    { verb: "fly", pathName: "verbmatch/setOne/fly.jpg" },
    { verb: "light", pathName: "verbmatch/setOne/light.jpg" },
    { verb: "jump", pathName: "verbmatch/setOne/jump.jpg" },
    { verb: "run", pathName: "verbmatch/setOne/run.jpg" },
    { verb: "swim", pathName: "verbmatch/setOne/swim.jpg" },
  ]);
  const verbBank = verbMatchData.map((pair) => (
    <div
      id={pair.verb}
      onDragStart={(id) => handleDragStart(id)}
      onDragEnd={() => {
        handleDragEnd();
      }}
      onClick={(e, id) => {
        setDraggingID(e.target.id);
        console.log(draggingID);
      }}
    >
      <SingleVerb
        id={pair.verb}
        key={pair.verb}
        pair={pair}
        verb={pair.verb}
        pathName={pair.pathName}
      />
    </div>
  ));
  const renderedPictures = verbMatchData.map((pair) => {
    return (
      <div onDragOver={(id) => handleDragOver(id)}>
        <SinglePic
          pair={pair}
          key={pair.verb}
          id={pair.verb}
          verb={pair.verb}
          pathName={pair.pathName}
        />
      </div>
    );
  });
  const handleDragStart = (e) => {
    setDraggingID(e.target.id);
    console.log("dragging ID: ", draggingID);
  };
  const handleDragEnd = (e) => {
    //appendToDiv();
    console.log("drag ended");
  };
  const handleDragOver = (e) => {
    setDragOverID(e.target.id);
    console.log("dragOverID: ", dragOverID);
  };
  const appendToDiv = () => {
    //filter correct answer out of word bank
  };
  return (
    <div className="verbMatch">
      <h3> Match the verb to the correct picture by dragging and dropping.</h3>
      <div className="picturesBox">{renderedPictures}</div>
      <div className="verbsBox">
        <h5>Word Bank: </h5>
        {verbBank}
      </div>
    </div>
  );
};

export default VerbMatchGame;
