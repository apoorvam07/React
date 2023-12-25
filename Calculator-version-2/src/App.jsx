import { useState } from "react";
import styles from "./App.module.css";
import Buttonscontainer from "./Components/Buttonscontainer";
import Display from "./Components/Display";
function App() {
  const [calval, setCalval] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalval("");
    } else if (buttonText === "=") {
      const result = eval(calval);
      setCalval(result);
    } else {
      const newDisplayValue = calval + buttonText;
      setCalval(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calval} />
      <Buttonscontainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
