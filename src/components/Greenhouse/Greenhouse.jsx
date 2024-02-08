import dayImage from "./images/greenhouse-day.jpg";
import nightImage from "./images/greenhouse-night.jpg";
import "./Greenhouse.css";
import { useContext, useEffect, useState } from "react";
// import { ThemeContext } from "../../context/ThemeContext";
import { useTheme } from "../../context/ThemeContext";
import LightSwitch from "./LightSwitch";
import ClimateStats from "./ClimateStats";

function Greenhouse() {
  const { themeName, setThemeName } = useTheme();
  console.log(useTheme);
  return (
    <section>
      <img
        className="greenhouse-img"
        src={themeName === "day" ? dayImage : nightImage}
        alt="greenhouse"
      />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;
