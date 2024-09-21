import { Trash } from "lucide-react";

import { ITask } from "@app/interfaces/task";
import { ToggleCheckbox } from "../toggle-checkbox";

import styles from "./styles.module.scss"

interface TaskProps {
  task: ITask;
  toggleStatus: () => void;
  onDelete: (id: number) => void;
}

export const Task = ({ task, toggleStatus, onDelete }: TaskProps) => {
  return (
    <div className={styles.task}>
      <div className={styles.content}>
        <ToggleCheckbox status={task.status} onToggle={toggleStatus} />
        <span className={task.status === "completed" ? styles.completedText : ""}>
          {task.title}
        </span>
      </div>
      <button
        type="button"
        onClick={() => onDelete(task.id)}
        aria-label={`Deletar tarefa: ${task.title}`}
      >
        <Trash color="#B0BBD1" strokeWidth={1} />
      </button>
    </div>
  )
}