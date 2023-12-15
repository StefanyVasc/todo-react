import { PlusCircle } from "@phosphor-icons/react";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./InputTask.module.css";
import { TaskType } from "./Task";

interface Task {
  id: string;
  text: string;
}

interface InputTaskProps {
  onInputData: (data: TaskType) => void;
  onMessageError: (errorMessage: string) => void;
}

export function InputTask({ onInputData, onMessageError }: InputTaskProps) {
  const [newTask, setNewTask] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const trimmedTask = newTask.trim();
    if (!trimmedTask) {
      const errorMessage = "Por favor, insira uma tarefa válida.";
      setErrorMessage(errorMessage);
      onMessageError(errorMessage); // Passando a mensagem de erro para o componente pai
      return;
    }

    const task: Task = { id: Date.now().toString(), text: trimmedTask }; // Convertendo para string
    onInputData(task);

    setNewTask("");
    setErrorMessage("");
    onMessageError(""); // Limpando a mensagem de erro no componente pai
  }

  function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
    const newTaskValue = event.target.value;
    setNewTask(newTaskValue);
    onMessageError(""); // Limpando a mensagem de erro ao começar a digitar uma nova tarefa
  }

  if (errorMessage) {
    console.log(errorMessage);
  }

  return (
    <form onSubmit={handleCreateNewTask} className={styles.container}>
      <input
        type="text"
        className={styles.input}
        placeholder="Adicione uma nova tarefa"
        value={newTask}
        onChange={handleNewTask}
      />
      <button className={styles.button} title="Adicionar task" type="submit">
        Criar <PlusCircle size={20} />
      </button>
    </form>
  );
}
