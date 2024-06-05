
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
          <h3>Mjukvaruutvecklare</h3>
        </div>
        <div className={styles.aboutMe}>
          <h4>Om mig</h4>
          <p>
            Jag heter Adam och är extremt teknikintresserad. Nyligen tog jag min
            fil.kand i Informationsarkitektur inriktning Frontendutveckling från
            Högskolan i Borås. Jag blev på den utbildningen mycket intresserad
            av programmering, och därför valde jag att läsa till .NET-utvecklare
            på Teknikhögskolan. Som person är jag mycket målinriktad, effektiv
            och fokuserad. Jag gillar också att arbeta i grupp.
          </p>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.mainContent}>
          <div className={styles.education}>
            <h4>Utbildning</h4>
            <ul>
              <li>.NET Utvecklare, Teknikhögskolan Göteborg, aug 2023 - nu</li>
              <li>
                Kandidatexamen i Informationsarkitektur inrikting
                Frontendutveckling, Högskolan i Borås, aug 2020 - jan 2024
              </li>
            </ul>
          </div>

          <div className={styles.workExperience}>
            <h4>Anställningar</h4>

            <ul>
              <li>
                Aranäs Fastigheter AB, Kungsbacka Städade korridorer, rensade
                ogräs och delade ut reklam- samt informationsblad från
                företaget. Sommar 2016, 2017
              </li>
              <li>
                Aranäs Fastigheter AB, Kungsbacka Kollade till miljörum så att
                det såg snyggt och bra ut. Sommar 2019, 2020
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.sideContent}>

          <div className={styles.skills}>
            <h4>Färdigheter</h4>
            <ul>
              <li>Visual Studio Code/Visual Studio</li>
              <li>.NET/C# (även EF Core, WinForms)</li>
              <li>HTML/CSS (även Tailwind.css)</li>
              <li>JavaScript (även React, Vue.js)</li>
              <li>SQL/Microsoft SQL Server</li>
            </ul>

          <div className={styles.languagesAndMore}>
            <h4>Språk och övrigt</h4>
            <ul>
              <li>Svenska, modersmål</li>
              <li>Engelska, flytande i tal och skrift</li>
              <li>Ryska, grundläggande kunskaper</li>
              <li>Innehar B-körkort.</li>
            </ul>
          </div>

            <div className={styles.references}>
              <h4>Referenser</h4>
              <p>Referenser ges på begäran.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cv;
