"use client";
import * as React from "react";
import Footer from "../components/Footer";
import Background from "../components/Background";
import HomeButton from "../components/HomeButton";
import Calculator from "../components/Calculator";

type ProjectsProps = {
  label2022: number;
  ehnsLabel: string;
  ehnsDescription: string;
  label2023: number;
}

const Projects = ({label2022, ehnsLabel, ehnsDescription, label2023}: ProjectsProps) => {

    return (
      <div className="Projects">
        <Background/>

        <HomeButton/>

        <h2>{label2022}</h2>
        
        <h3>{ehnsLabel}</h3>
        
        <p>{ehnsDescription}</p>

        <h2>{label2023}</h2>

        <iframe src="https://adamkumlin.se/ehnsbbq/index.html"/>

        <Calculator/>

        <Footer copyrightLabel={"© 2022 Adam Kumlin"} privacyLabel={"Integritetspolicy"}/>
      </div>
    );
  }

export default Projects;