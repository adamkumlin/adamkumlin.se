"use client";
import React from "react";
import HomeButton from "../components/HomeButton";
import HangMan from "../components/HangMan";
import Calculator from "../components/Calculator";
import RemindMe from "../components/RemindMe";

// Games and Tools page

const GamesAndTools: React.FC = () => {
  return (
    <div className="GamesAndTools">

      <HomeButton />

      <h2 className="heading">Spel/Verktyg</h2>

      <h3>2023</h3>

      <h4>En simpel miniräknare</h4>

      <Calculator />

      <h4>Hänga gubbe</h4>

      <HangMan/>

      <h4>Påminnelseverktyg</h4>

      <RemindMe/>

    </div>
  );
};

export default GamesAndTools;
