"use client";
import React from "react";
import styles from "../../styles/Cv.module.css";
import Image from "next/image";
import HomeButton from "../components/HomeButton";

const Cv: React.FC = () => {
  return (
    <div className={styles.Cv}>
      <HomeButton />
      <div className={styles.header}>
        <Image
          className={styles.profileImage}
          src="github-icon.svg"
          alt="Adam Kumlin"
          width={150}
          height={150}
        />
        <div className={styles.headings}>
          <h2>Adam Kumlin</h2>
          <h3>Fullstackutvecklare</h3>
        </div>
      </div>
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
      </div>
      <div className={styles.sideContent}>
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
