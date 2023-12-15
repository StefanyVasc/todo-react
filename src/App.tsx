import styles from "./App.module.css";
import { EmptyTasks } from "./components/EmptyTasks";
import { Header } from "./components/Header";
import { HeaderTasks } from "./components/HeaderTasks";
import { InputTask } from "./components/InputTask";
import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <InputTask />
        <main>
          <HeaderTasks />
          <EmptyTasks />
        </main>
      </div>
    </div>
  );
}

export default App;
