import React, { useState } from "react";
import { getStorage, ref, storageRef } from "firebase/storage";
import { useDownloadURL } from "react-firebase-hooks/storage";
import { app } from "../firebase/client";
import "./VerbMatchGame.css";
import SingleVerb from "../components/SingleVerb.jsx";
import SinglePic from "../components/SinglePic.jsx";
import { uuidv4 } from "@firebase/util";

const VerbMatchGame = () => {
  const verbMatchData = [
    { verb: "drink", pathName: "verbMatch/setOne/drink.jpg" },
    { verb: "fly", pathName: "verbMatch/setOne/fly.jpg" },
    { verb: "light", pathName: "verbMatch/setOne/light.jpg" },
    { verb: "jump", pathName: "verbMatch/setOne/jump.jpg" },
    { verb: "run", pathName: "verbMatch/setOne/run.jpg" },
    { verb: "swim", pathName: "verbMatch/setOne/swim.jpg" },
  ];
  // const renderedVerbMatch = verbMatchData.map((pair) => (
  //   <SingleVerb
  //     pair={pair}
  //     verb={pair.verb}
  //     pathName={pair.pathName}
  //     key={uuidv4()}
  //   />
  // ));
  const renderedPictures = verbMatchData.map((pair) => {
    <SinglePic
      pair={pair}
      verb={pair.verb}
      pathName={pair.pathName}
      key={uuidv4()}
    />;
  });
  const storage = getStorage(app);
  const [pathName, setPathName] = useState("setOne/drink.jpg");
  const [value, loading, error] = useDownloadURL(
    ref(storage, `/verbmatch/${pathName}`)
  );

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
      <SinglePic pathName={"verbmatch/setOne/fly.jpg"} />
      <h1> Rendered Pic List: </h1>
      <ul>{renderedPictures}</ul>
      {/* <h1> Match the verb to the picture.</h1>
      {renderedPictures}
      <div
        id="drinking"
        onDragOver={(id) => {
          handleDragOver(id);
        }}
      >
        {error && <strong>Error: {error}</strong>}
        {loading && <span> Download URL: Loading...</span>}
        {!loading && value && (
          <div className="photodiv">
            <img className="photo" src={value} />
          </div>
        )}
      </div>
      <div
        id="flying"
        onDragOver={(id) => {
          handleDragOver(id);
        }}
      >
        <h2>Second Image</h2>
        {error1 && <strong> Error: {error}</strong>}
        {loading1 && <span>Download URL: Loading...</span>}
        {!loading1 && value1 && (
          <div className="photodiv">
            <img className="photo" src={value1} />
          </div>
        )}
      </div>
      <h1>Rendered Verb List: </h1>
      {renderedVerbMatch}

      <div>
        <ul>
          <li
            className="draggable"
            draggable="true"
            id="drinking"
            value="drinking"
            onDragStart={() => {
              handleDragStart();
            }}
            onDragEnd={() => {
              handleDragEnd();
            }}
          >
            drinking
          </li>
          <li
            className="draggable"
            draggable="true"
            id="flying"
            value="drinking"
            onDragStart={() => {
              handleDragStart();
            }}
            onDragEnd={() => {
              handleDragEnd();
            }}
          >
            flying
          </li>
          <li>verb3</li>
          <li>verb4</li>
          <li>verb5</li>
          <li>verb6</li>
        </ul>
      </div> */}
    </div>
  );
};

export default VerbMatchGame;
