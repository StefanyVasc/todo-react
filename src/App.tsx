import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { EmptyTasks } from "./components/EmptyTasks";
import { Header } from "./components/Header";
import { HeaderTasks } from "./components/HeaderTasks";
import { InputTask } from "./components/InputTask";
import { Task, TaskType } from "./components/Task";
import "./global.css";

function App() {
  const [inputData, setInputData] = useState<TaskType[]>(
    JSON.parse(localStorage.getItem("tasks") || "[]")
  );
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showBanner, setShowBanner] = useState(false);

  // Efeito para exibir o banner após 4 segundos
  useEffect(() => {
    const timeoutId = setTimeout(() => setShowBanner(true), 4000);
    // Limpa o timeout quando o componente é desmontado
    return () => clearTimeout(timeoutId);
  }, []);

  const saveTasksToLocalStorage = (tasks: TaskType[]) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  // Função para lidar com a adição de uma nova tarefa
  const handleInputData = (data: TaskType) => {
    const newInputData = [...inputData, data];
    saveTasksToLocalStorage(newInputData);
    setInputData(newInputData);
    setErrorMessage("");
  };

  const handleDeleteTask = (taskId: string) => {
    const updatedTasks = inputData.filter((task) => task.id !== taskId);
    saveTasksToLocalStorage(updatedTasks);
    setInputData(updatedTasks);
  };

  const handleToggleCheckbox = (taskId: string, isChecked: boolean) => {
    const updatedTasks = inputData.map((task) =>
      task.id === taskId ? { ...task, isChecked } : task
    );
    saveTasksToLocalStorage(updatedTasks);
    setInputData(updatedTasks);
  };

  const handleErrorMessage = (message: string) => {
    setErrorMessage(message);
  };

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <InputTask
          onInputData={handleInputData}
          onMessageError={handleErrorMessage}
        />
        {errorMessage && showBanner && (
          <p className={styles.errorMessage}>{errorMessage}</p>
        )}
        <main>
          <HeaderTasks
            createdTasks={inputData.length}
            concludedTasks={inputData}
          />
          {inputData.length === 0 && <EmptyTasks />}
          {inputData.map((task) => (
            <Task
              key={task.id}
              task={task}
              onDeleteTask={handleDeleteTask}
              onToggleCheckbox={handleToggleCheckbox}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
