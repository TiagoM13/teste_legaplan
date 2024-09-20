import { ITask } from "@app/interfaces/task"
import Task from "../tasks"

import styles from "./styles.module.scss"

interface Props {
  tasks: ITask[]
}

export default function TasksList({ tasks }: Props) {
  return (
    <div className={styles.container}>
      <h3>Suas tarefas de hoje</h3>
      {tasks.filter(task => task.status === "pending").map((task) => (
        <Task key={task.id} task={task} />
      ))}

      <h3>Tarefas finalizadas</h3>
      {tasks.filter(task => task.status === "completed").map((task => (
        <Task key={task.id} task={task} />
      )))}
    </div>
  )
}