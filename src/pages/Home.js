import React from "react";
import { useNavigate } from "react-router-dom";
import CreateAccount from "../components/login/CreateAccount";
import Login from "../components/login/Login";
import SignIn from "../components/login/SignIn";
import SingleButton from "../components/SingleButton";
import DoVerbGame from "./DoVerbGame";
import NounGame from "./NounGame";
import PhraseGame from "./PhraseGame";
import VerbMatchGame from "./VerbMatchGame";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="main">
      <p>Create an Account: </p>
      <CreateAccount />
      <p>Sign in with Email and Password: </p>
      <SignIn /> <p>OR</p> <Login />
      <button className="btn" onClick={() => navigate("/doverbgame")}>
        DoVerbGame
      </button>
      <button className="btn" onClick={() => navigate("/noungame")}>
        NounGame
      </button>
      <button className="btn" onClick={() => navigate("/verbmatchgame")}>
        VerbMatchGame
      </button>
      <button className="btn" onClick={() => navigate("/phrasegame")}>
        PhraseGame
      </button>
    </div>
  );
};

export default Home;
