import { Trash } from "@phosphor-icons/react";
import { useState } from "react";
import styles from "./Task.module.css";

export interface TaskType {
  id?: string;
  text: string;
  isChecked?: boolean;
}

interface TaskProps {
  task: TaskType;
  onDeleteTask: (taskId: string) => void;
  onToggleCheckbox: (taskId: string, isChecked: boolean) => void;
}

export function Task({ task, onDeleteTask, onToggleCheckbox }: TaskProps) {
  const [isChecked, setIsChecked] = useState(task.isChecked || false);

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onToggleCheckbox(task.id || "", newCheckedState);
  };

  const handleDeleteTask = () => {
    onDeleteTask(task.id || "");
  };

  return (
    <label className={styles.container}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        id={task.id}
      />
      <span className={styles.checkmark} />

      <span>{task.text}</span>

      <button
        className={styles.deleteTask}
        title="Deletar task"
        onClick={handleDeleteTask}
      >
        <Trash size={24} />
      </button>
    </label>
  );
}
