"use client";
import * as React from "react";
import HomeButton from "../components/HomeButton";
import Calculator from "../components/Calculator";
import HangMan from "../components/HangMan";

// Projects page

const Projects: React.FC = () => {
  return (
    <div className="Projects">

      <HomeButton />

      <h2 className="heading">Tidigare projekt</h2>

      <h3>2022</h3>

      <h4>Ehns BBQ</h4>

      <p>
        Våren 2022 hade jag ett projekt i skolan där vi skulle hitta en extern
        organisation (exempelvis ett företag eller en annan organisation) som
        antingen inte hade en webbplats eller redan hade en webbplats som de
        önskade göra om. Vi fick alltså i uppgift att skapa en webbplats åt ett
        företag och jag hittade företaget Ehns BBQ som behövde en webbplats.
        Webbplatsen är skapad med HTML, CSS och JavaScript. Dessutom har PHP
        använts på backend:en.
      </p>

      <iframe src="https://adamkumlin.se/ehnsbbq/index.html" />

      <h3>2023</h3>

      <h4>En simpel miniräknare</h4>

      <Calculator />

      <h4>Hänga gubbe</h4>

      <HangMan/>
    </div>
  );
};

export default Projects;
