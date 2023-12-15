import { Trash } from "@phosphor-icons/react";
import styles from "./Task.module.css";

export function Task() {
  return (
    <label className={styles.container}>
      <input type="checkbox" name="" id="" value="" />
      <span className={styles.checkmark}></span>

      <span>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </span>

      <button className={styles.deleteTask} title="Deletar task">
        <Trash size={24} />
      </button>
    </label>
  );
}
