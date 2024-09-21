import Image from 'next/image';
import React, { useMemo } from 'react';

import logo from "@app/assets/logo.png"
import { formatDateInPortuguese } from '@app/utils/date';

import styles from "./styles.module.scss"

interface HeaderProps {
  username: string;
}

export const Header = ({ username }: HeaderProps) => {
  const date = useMemo(() => formatDateInPortuguese(), []);

  return (
    <header className={styles.container}>
      <Image
        src={logo}
        width={150}
        height={36}
        alt="Logo"
      />

      <h1>Bem-vindo de volta, {username}</h1>
      <span>{date}</span>
    </header>
  );
}
