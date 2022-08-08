import React from "react";
import CreateAccount from "../components/login/CreateAccount";
import Login from "../components/login/Login";
import SignIn from "../components/login/SignIn";
import DoVerbGame from "./DoVerbGame";
import NounGame from "./NounGame";
import PhraseGame from "./PhraseGame";
import VerbMatchGame from "./VerbMatchGame";

const Home = () => {
  return (
    <div>
      {/* <p>Create an Account: </p>
      <CreateAccount />
      <p>Sign in with Email and Password: </p>
      <SignIn /> <p>OR</p> <Login />
      <DoVerbGame />
      <NounGame /> */}
      <PhraseGame />
      {/* <VerbMatchGame /> */}
    </div>
  );
};

export default Home;
