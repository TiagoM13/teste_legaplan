import { Trash } from "lucide-react";

import { ITask } from "@app/interfaces/task";
import ButtonCheck from "../button-check";

import styles from "./styles.module.scss"

interface Props {
  task: ITask;
}

export default function Task({ task }: Props) {
  return (
    <div className={styles.task}>
      <div className={styles.content}>
        <ButtonCheck status={task.status} />
        <span style={{ textDecoration: task.status === "completed" ? 'line-through' : '' }}>{task.title}</span>
      </div>
      <button type="button">
        <Trash color="#B0BBD1" strokeWidth={1} />
      </button>
    </div>
  )
}