import { Check } from "lucide-react"

import styles from "./styles.module.scss"

interface ToggleCheckboxProps {
  status: "completed" | "pending"
  onToggle: () => void;
}

export const ToggleCheckbox = ({ status, onToggle }: ToggleCheckboxProps) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={status === "completed" ? styles.completed : styles.check}
      aria-label={status === "completed" ? "Desmarcar tarefa" : "Marcar tarefa como completa"}
    >
      {status === "completed" && <Check size={20} strokeWidth={2} color="#0796D3" />}
    </button>
  )
}