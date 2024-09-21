import type { Metadata } from "next";
import { inter } from "./fonts";

import '@app/styles/globals.scss';

export const metadata: Metadata = {
  title: "TaskFlow - Gerenciamento Simplificado de Tarefas",
  description: "Organize e acompanhe suas tarefas diárias com facilidade e eficiência usando o TaskFlow. A ferramenta perfeita para melhorar sua produtividade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
