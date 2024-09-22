import Image from 'next/image';
import React, { useMemo } from 'react';

import logo from "@app/assets/logo.png"
import { getFullDate } from '@app/utils/date';

import styles from "./styles.module.scss"

interface HeaderProps {
  username: string;
}

export const Header = ({ username }: HeaderProps) => {
  const date = useMemo(() => getFullDate(), []);

  return (
    <header className={styles.container}>
      <div>
        <Image
          src={logo}
          alt="Logo"
        />
      </div>

      <h1>Bem-vindo de volta, {username}</h1>
      <span>{date}</span>
    </header>
  );
}
