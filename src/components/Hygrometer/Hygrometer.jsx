import ReactSlider from "react-slider";
import "./Hygrometer.css";
import { useState, useEffect } from "react";

function Hygrometer() {
  const [desiredHum, setDesiredHum] = useState(50);
  const [humidity, setHumidity] = useState(50);

  useEffect(() => {
    const tempInterval = setInterval(() => {
      if (desiredHum === humidity) {
        clearInterval(tempInterval);
      }
      if (desiredHum < humidity) {
        setHumidity(humidity - 1);
      } else if (desiredHum > humidity) {
        setHumidity(humidity + 1);
      }
    }, 1000);
    return () => {
      clearInterval(tempInterval);
    };
  });

  return (
    <section>
      <h2>Hygrometer</h2>
      <div className="actual-humid">Actual Humidity: {humidity}%</div>
      <ReactSlider
        value={humidity}
        onAfterChange={(val) => setDesiredHum(val)}
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical"
        min={0}
        max={100}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Hygrometer;
