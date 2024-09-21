"use client"

import { Header } from "@app/components/header"
import { TasksList } from "@app/components/tasks-list";
import { ModalForm } from "@app/components/modal-form";
import { ModalConfirmDeletion } from "@app/components/modal-confirm";

import { useModalDeletionStore } from "@app/stores/modal-delation";
import { useModalFormStore } from "@app/stores/modal-form";
import { useTaskStore } from "@app/stores/tasks";

import styles from "./styles.module.scss"

export default function Home() {
  const { isOpen: isTaskFormOpen, openModal: openTaskForm, closeModal: closeTaskForm } = useModalFormStore();
  const { isOpen: isDeleteConfirmOpen, taskId, openModal: openDeleteConfirm, closeModal: closeDeleteConfirm } = useModalDeletionStore();
  const { tasks, addTask, deleteTask, toggleTaskStatus, isInitialized } = useTaskStore()

  const handleAddTask = (title: string) => {
    addTask(title)
  };

  const handleDeleteTask = () => {
    if (taskId !== null) {
      deleteTask(taskId);
    }
    closeDeleteConfirm();
  }

  return (
    <div className={styles.container}>
      <Header username="Tiago" />

      <div className={styles.content}>
        <TasksList
          tasks={tasks}
          loading={isInitialized}
          onToggle={toggleTaskStatus}
          onDelete={openDeleteConfirm}
        />

        <button
          type="button"
          onClick={openTaskForm}
          className={styles.button}
        >
          Adicionar nova tarefa
        </button>
      </div>

      <ModalForm
        isOpen={isTaskFormOpen}
        onClose={closeTaskForm}
        onAddTask={handleAddTask}
      />
      <ModalConfirmDeletion
        isOpen={isDeleteConfirmOpen}
        onClose={closeDeleteConfirm}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}
