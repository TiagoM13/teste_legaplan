import Header from "@app/components/header"

import styles from "./styles.module.scss"

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <h1>Hello World</h1>
    </div>
  );
}
