import { Trash } from "@phosphor-icons/react";
import { animated, useSpring } from "@react-spring/web";
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
  const [isDeleting, setIsDeleting] = useState(false);

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    // Chamando a função do App para atualizar o estado
    onToggleCheckbox(task.id || "", newCheckedState);
  };

  const handleDeleteTask = () => {
    // Marcando a tarefa como deletada para iniciar a animação
    setIsDeleting(true);
    //  um timeout para simular a exclusão assíncrona
    setTimeout(() => {
      // Chamando a função do App para deletar a tarefa
      onDeleteTask(task.id || "");
    }, 500);
  };

  // Definindo propriedades de animação com React Spring
  const slideProps = useSpring({
    transform: isDeleting ? "translateX(-100%)" : "translateX(0%)",
    opacity: isDeleting ? 0 : 1,
  });

  return (
    <animated.label style={slideProps} className={styles.container}>
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
    </animated.label>
  );
}
