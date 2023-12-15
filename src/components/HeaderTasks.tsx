import styles from "./HeaderTasks.module.css";
import { TaskType } from "./Task";

interface HeaderTasksProps {
  createdTasks: number;
  concludedTasks: TaskType[]; // Adicione o tipo para concludedTasks
}

export function HeaderTasks({
  createdTasks,
  concludedTasks,
}: HeaderTasksProps) {
  const countChecked = concludedTasks.filter((task) => task.isChecked).length;

  return (
    <header className={styles.headerTasks}>
      <div className={styles.createdTasks}>
        <p>Tarefas criadas</p>
        <span>{createdTasks}</span>
      </div>
      <div className={styles.finishedTasks}>
        <p>Concluídas</p>
        <span>{countChecked}</span>
      </div>
    </header>
  );
}
