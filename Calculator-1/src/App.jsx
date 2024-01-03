import styles from "./App.module.css";
import Buttonscontainer from "./Components/Buttonscontainer";
import Display from "./Components/Display";
function App() {
  return (
    <div classNameName={styles.calculator}>
      <Display />
      <Buttonscontainer />
    </div>
  );
}

export default App;
