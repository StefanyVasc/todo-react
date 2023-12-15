import { PlusCircle } from "@phosphor-icons/react";
import styles from "./InputTask.module.css";

export function InputTask() {
  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.input}
        placeholder="Adicione uma nova tarefa"
      />
      <button className={styles.button} title="Adicionar task">
        Criar <PlusCircle size={20} />
      </button>
    </div>
  );
}
