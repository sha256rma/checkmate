import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Twitch from "./Twitch";
import Shop from "./Shop";
import { Button } from "@material-ui/core";

function App() {
  useEffect(() => {
    console.log("yoyo");
    //   db.collection("cities").doc("LA").set({
    //     name: "Los Angeles",
    //     state: "CA",
    //     country: "USA"
    // })
  }, []);

  return (
    <div className="background">
      <Twitch />
      <Shop />
    </div>
  );
}

export default App;
