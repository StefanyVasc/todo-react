import { Notepad } from "@phosphor-icons/react";
import styles from "./EmptyTasks.module.css";

export function EmptyTasks() {
  return (
    <section className={styles.sectionTasks}>
      <div className={styles.emptyTasks}>
        <Notepad size={56} />
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </section>
  );
}
