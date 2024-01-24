"use client";
import React from "react";
import styles from "../../styles/Cv.module.css";
import HomeButton from "../components/HomeButton";

// CV page

const Cv: React.FC = () => {
  return (
    <div className={styles.Cv}>
      <HomeButton />
      <h2 className="heading">Adam Kumlin</h2>
      <div className={styles.mainContent}>
        <div className={styles.education}>
          <h3>Utbildning</h3>
          <ul>
            <li>.NET Utvecklare, Teknikhögskolan Göteborg, aug 2023 - nu</li>
            <li>
              Kandidatexamen i Informationsarkitektur inrikting
              Frontendutveckling, Högskolan i Borås, aug 2020 - jan 2024
            </li>
          </ul>
        </div>

        <div className={styles.workExperience}>
          <h3>Anställningar</h3>

          <ul>
            <li>
              Aranäs Fastigheter AB, Kungsbacka Städade korridorer, rensade
              ogräs och delade ut reklam- samt informationsblad från företaget.
              Sommar 2016, 2017
            </li>
            <li>
              Aranäs Fastigheter AB, Kungsbacka Kollade till miljörum så att det
              såg snyggt och bra ut. Sommar 2019, 2020
            </li>
          </ul>
        </div>

        <div className={styles.languagesAndMore}>
          <h3>Språk och övrigt</h3>
          <ul>
            <li>Svenska, modersmål</li>
            <li>Engelska, flytande i tal och skrift</li>
            <li>Ryska, grundläggande kunskaper</li>
            <li>Innehar B-körkort.</li>
          </ul>
        </div>

        <div className={styles.skills}>
          <h3>Färdigheter</h3>
          <ul>
            <li>Visual Studio Code/Visual Studio</li>
            <li>.NET/C#</li>
            <li>HTML/CSS (även Tailwind.css)</li>
            <li>JavaScript (även React, Vue.js)</li>
            <li>SQL/Microsoft SQL Server</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cv;
