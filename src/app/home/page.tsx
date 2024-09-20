import Header from "@app/components/header"

import TasksList from "@app/components/tasks-list";
import { ITask } from "@app/interfaces/task";

import styles from "./styles.module.scss"

export default function Home() {
  const tasks: ITask[] = [
    { id: 1, title: "Finish Next.js project", status: "pending" },
    { id: 3, title: "Prepare presentation for meeting", status: "pending" },
    { id: 4, title: "Refactor user authentication flow", status: "completed" },
  ];

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.content}>
        <TasksList tasks={tasks} />

        <button type="button" className={styles.button}>Adicionar nova tarefa</button>
      </div>
    </div>
  );
}
