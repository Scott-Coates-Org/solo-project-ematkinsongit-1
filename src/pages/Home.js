import React from "react";
import DoVerbGame from "./DoVerbGame";
import NounGame from "./NounGame";
import PhraseGame from "./PhraseGame";
import VerbMatchGame from "./VerbMatchGame";

const Home = () => {
  return (
    <div>
      <DoVerbGame />
      <NounGame />
      <PhraseGame />
      <VerbMatchGame />
    </div>
  );
};

export default Home;
