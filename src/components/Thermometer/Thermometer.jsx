import ReactSlider from "react-slider";
import "./Thermometer.css";
import { ClimateContext } from "../../context/ClimateContext";
import { useContext, useEffect, useState } from "react";

function Thermometer() {
  const { temperature, setTemperature } = useContext(ClimateContext);
  const [desiredTemp, setDesiredTemp] = useState(100);
  useEffect(() => {
    const tempInterval = setInterval(() => {
      if (desiredTemp === temperature) {
        clearInterval(tempInterval);
      }
      if (desiredTemp < temperature) {
        setTemperature(temperature - 1);
      } else if (desiredTemp > temperature) {
        setTemperature(temperature + 1);
      }
    }, 1000);
    return () => {
      clearInterval(tempInterval);
    };
  });

  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature:{temperature}°F</div>
      <ReactSlider
        value={temperature}
        onAfterChange={(val) => {
          setDesiredTemp(val);
        }}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;
