import styles from "./App.module.css";
import { EmptyTasks } from "./components/EmptyTasks";
import { Header } from "./components/Header";
import { HeaderTasks } from "./components/HeaderTasks";
import { InputTask } from "./components/InputTask";
import { Task } from "./components/Task";
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
          <Task />
        </main>
      </div>
    </div>
  );
}

export default App;
