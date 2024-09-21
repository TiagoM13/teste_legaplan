import { ITask } from "@app/interfaces/task"
import { Task } from "../task"

import styles from "./styles.module.scss"

interface TasksListProps {
  tasks: ITask[]
  onToggle: (id: number) => void;
  onDelete: (id: number) => void
}

export const TasksList = ({ tasks, onToggle, onDelete }: TasksListProps) => {
  const pendingTasks = tasks.filter((task) => task.status === 'pending');
  const completedTasks = tasks.filter((task) => task.status === 'completed');

  return (
    <div className={styles.container}>
      {tasks.length === 0 ? (
        <h3>Nenhuma tarefa adicionada</h3>
      ) : (
        <>
          {pendingTasks.length > 0 && (
            <>
              <h3>Suas tarefas de hoje</h3>
              {pendingTasks.map((task) => (
                <Task
                  key={task.id}
                  task={task}
                  toggleStatus={() => onToggle(task.id)}
                  onDelete={onDelete}
                />
              ))}
            </>
          )}

          {completedTasks.length > 0 && (
            <>
              <h3>Tarefas finalizadas</h3>
              {completedTasks.map((task) => (
                <Task
                  key={task.id}
                  task={task}
                  toggleStatus={() => onToggle(task.id)}
                  onDelete={onDelete}
                />
              ))}
            </>
          )}
        </>
      )}
    </div>
  )
}