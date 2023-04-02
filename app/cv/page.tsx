"use client";
import * as React from "react";
import Footer from "../components/Footer";
import Background from "../components/Background";
import HomeButton from "../components/HomeButton";

// CV page

const Cv: React.FC = () => {
  return (
    <div className="Cv">
      <Background />

      <HomeButton />

      <h2 className="heading">Om mig</h2>

      <p>
        Adam Kumlin<br></br>
        E-post: kumlinadam99@gmail.com
      </p>

      <h3>Utbildning</h3>

      <ul>
        <li>
          Webbredaktörsprogrammet inriktning frontend, Högskolan i Borås, aug
          2020 - juni 2023
        </li>

        <li>
          Samhällsvetenskapsprogrammet inriktning Beteende, Aranäsgymnasiet
          Kungsbacka, aug 2015 - juni 2018
        </li>
      </ul>

      <h3>Anställningar</h3>

      <ul>
        <li>
          Aranäs Fastigheter AB, Kungsbacka Städade korridorer, rensade ogräs
          och delade ut reklam- samt informationsblad från företaget. Sommar
          2016, 2017
        </li>

        <li>
          Aranäs Fastigheter AB, Kungsbacka Kollade till miljörum så att det såg
          snyggt och bra ut. Sommar 2019, 2020
        </li>
      </ul>

      <h3>Språk</h3>

      <ul>
        <li>Svenska, modersmål</li>
        <li>Engelska, mycket bra i tal och skrift</li>
        <li>Tyska, grundläggande kunskaper</li>
        <li>Ryska, grundläggande kunskaper</li>
      </ul>

      <h3>Datorkunskaper</h3>

      <p>
        Mycket van att jobba med Google-produkter som Google Drive och Gmail. Är
        även mycket van med Office-paketet. Har professionella kunskaper inom
        HTML, CSS och JavaScript, är också mycket van vid ramverk som React. Har
        även grundläggande kunskaper inom C# och Python.
      </p>

      <h3>Körkort och referenser</h3>

      <ul>
        <li>Innehar B-körkort.</li>
        <li>Referenser ges på begäran.</li>
      </ul>

      <Footer/>
    </div>
  );
};

export default Cv;