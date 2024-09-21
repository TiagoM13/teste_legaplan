import { ReactNode, useEffect, useState } from "react";

import styles from "./styles.module.scss"

interface ModalProps {
  isOpen: boolean;
  children: ReactNode
}

export const Modal = ({ isOpen, children }: ModalProps) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
    } else {
      const timeout = setTimeout(() => setShowModal(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!showModal) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        {children}
      </div>
    </div>
  )
}