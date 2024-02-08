import "./LightSwitch.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
function LightSwitch() {
  const { themeName } = useContext(ThemeContext);
  return (
    <div className="light-switch day">
      <div className="on">DAY</div>
      <div className="off">NIGHT</div>
    </div>
  );
}

export default LightSwitch;
