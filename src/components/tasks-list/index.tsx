import { useMemo } from "react";

import { ITask } from "@app/interfaces/task"
import { Task } from "../task"

import styles from "./styles.module.scss"

interface TasksListProps {
  tasks: ITask[]
  loading?: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void
}

export const TasksList = ({ tasks, onToggle, onDelete, loading = false }: TasksListProps) => {
  const pendingTasks = useMemo(
    () => tasks.filter(task => task.status === 'pending'),
    [tasks]
  );

  const completedTasks = useMemo(
    () => tasks.filter(task => task.status === 'completed'),
    [tasks]
  );

  return (
    <div className={styles.container}>
      {!loading ? (
        <h3>Carregando tarefas...</h3>
      ) : (
        <>
          {pendingTasks.length > 0 && (
            <>
              <h3>Suas tarefas de hoje</h3>
              {pendingTasks.map(task => (
                <Task
                  key={task.id}
                  task={task}
                  toggleStatus={() => onToggle(task.id)}
                  onDelete={() => onDelete(task.id)}
                />
              ))}
            </>
          )}

          {completedTasks.length > 0 && (
            <>
              <h3>Tarefas finalizadas</h3>
              {completedTasks.map(task => (
                <Task
                  key={task.id}
                  task={task}
                  toggleStatus={() => onToggle(task.id)}
                  onDelete={() => onDelete(task.id)}
                />
              ))}
            </>
          )}

          {tasks.length === 0 && <h3>Você ainda não tem tarefas.</h3>}
        </>
      )}
    </div>
  )
}