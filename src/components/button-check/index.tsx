import { Check } from "lucide-react"

import styles from "./styles.module.scss"

interface Props {
  status: "completed" | "pending"
}

export default function ButtonCheck({ status }: Props) {
  return (
    <>
      {status === "completed" ? (
        <div className={styles.completed}>
          <Check size={20} strokeWidth={2} color="#0796D3" />
        </div>
      ) : (
        <div className={styles.check}></div>
      )}
    </>
  )
}