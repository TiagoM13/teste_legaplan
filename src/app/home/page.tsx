"use client"

import { useState } from "react";

import { Header } from "@app/components/header"
import { TasksList } from "@app/components/tasks-list";
import { ModalForm } from "@app/components/modal-form";
import { ModalConfirmDeletion } from "@app/components/modal-confirm";

import { ITask } from "@app/interfaces/task";

import styles from "./styles.module.scss"

export default function Home() {
  const initialTasks: ITask[] = [
    { id: 1, title: "Finish Next.js project", status: "pending" },
    { id: 3, title: "Prepare presentation for meeting", status: "pending" },
    { id: 4, title: "Refactor user authentication flow", status: "completed" },
  ];

  const [tasks, setTasks] = useState<ITask[]>(initialTasks)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalConfirmOpen, setIsModalConfirmOpen] = useState(false)
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);

  const generateUniqueId = () => {
    if (tasks.length === 0) return 1;
    const highestId = tasks.reduce((max, task) => (task.id > max ? task.id : max), 0);
    return highestId + 1;
  };

  const handleAddTask = (title: string) => {
    const newTask: ITask = {
      id: generateUniqueId(),
      title,
      status: 'pending',
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleToggleTaskStatus = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: task.status === "pending" ? "completed" : "pending" } : task
      )
    );
  };

  const handleDeleteTask = () => {
    if (selectedTaskId !== null) {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== selectedTaskId))
    }
    setIsModalConfirmOpen(false);
    setSelectedTaskId(null);
  }

  const openConfirmDeleteModal = (id: number) => {
    setSelectedTaskId(id);
    setIsModalConfirmOpen(true);
  };

  return (
    <div className={styles.container}>
      <Header username="Tiago" />

      <div className={styles.content}>
        <TasksList
          tasks={tasks}
          onToggle={handleToggleTaskStatus}
          onDelete={openConfirmDeleteModal}
        />

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className={styles.button}
        >
          Adicionar nova tarefa
        </button>
      </div>

      <ModalForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddTask={handleAddTask}
      />
      <ModalConfirmDeletion
        isOpen={isModalConfirmOpen}
        onClose={() => setIsModalConfirmOpen(false)}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}
