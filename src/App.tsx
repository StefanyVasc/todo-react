import styles from "./App.module.css";
import { Header } from "./components/Header";
import { InputTask } from "./components/InputTask";
import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <InputTask />
        <main></main>
      </div>
    </div>
  );
}

export default App;
