import Image from 'next/image';
import React from 'react';

import logo from "@app/assets/logo.png"

import styles from "./styles.module.scss"

export default function Header() {
  return (
    <div className={styles.container}>
      <Image
        src={logo}
        width={150}
        height={36}
        alt="Logo"
      />

      <h1>Bem-vindo de volta, Marcus</h1>

      <span>Segunda, 01 de dezembro de 2025</span>
    </div>
  );
}
