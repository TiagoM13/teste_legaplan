import { Modal } from "../modal";

import styles from "./styles.module.scss"

interface ModalConfirmDeletionProps {
  isOpen: boolean;
  onClose: () => void;
  onDeleteTask: () => void;
}

export const ModalConfirmDeletion = ({ isOpen, onClose, onDeleteTask }: ModalConfirmDeletionProps) => {
  return (
    <Modal isOpen={isOpen}>
      <h2>Deletar tarefa</h2>
      <div className={styles.content}>
        <span>Tem certeza que você deseja deletar essa tarefa?</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.cancelButton} onClick={onClose}>
          Cancelar
        </button>
        <button className={styles.deleteButton} onClick={onDeleteTask}>
          Deletar
        </button>
      </div>
    </Modal>
  )
}