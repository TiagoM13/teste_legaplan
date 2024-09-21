import { useState } from "react";

import { Modal } from "../modal";

import styles from "./styles.module.scss"

interface ModalFormProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTask: (title: string) => void;
}

export const ModalForm = ({ isOpen, onClose, onAddTask }: ModalFormProps) => {
  const [title, setTitle] = useState('');

  const handleAddTask = () => {
    if (title.trim()) {
      onAddTask(title);
      resetForm()
    }
  };

  const resetForm = () => {
    setTitle('');
    onClose();
  }

  return (
    <Modal isOpen={isOpen}>
      <h2>Nova tarefa</h2>
      <div className={styles.formGroup}>
        <label htmlFor="taskTitle">Título</label>
        <input
          id="taskTitle"
          type="text"
          placeholder="Digite"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className={styles.actions}>
        <button className={styles.cancelButton} onClick={resetForm}>
          Cancelar
        </button>
        <button className={styles.addButton} onClick={handleAddTask}>
          Adicionar
        </button>
      </div>
    </Modal>
  )
}