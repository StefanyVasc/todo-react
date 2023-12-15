import styles from "./HeaderTasks.module.css";

export function HeaderTasks() {
  return (
    <header className={styles.headerTasks}>
      <div className={styles.createdTasks}>
        <p>Tarefas criadas</p>
        <span>0</span>
      </div>
      <div className={styles.finishedTasks}>
        <p>Concluídas</p>
        <span>0</span>
      </div>
    </header>
  );
}
