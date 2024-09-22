## TaskFlow Application

Este é um projeto que desenvolvi como parte de um teste técnico, com o objetivo de criar um aplicativo simples de gerenciamento de tarefas. Ele permite adicionar, alternar o status (pendente/completado) e deletar tarefas, utilizando Next.js como framework e Zustand para o gerenciamento de estado. As tarefas são persistidas no localStorage para que o usuário não perca suas informações ao recarregar a página.

### Funcionalidades
- **Adicionar tarefas**: O usuário pode criar novas tarefas.
- **Alternar status**: É possível marcar as tarefas como "pendente" ou "completada".
- **Deletar tarefas**: As tarefas podem ser removidas da lista.
- **Persistência de dados**: As tarefas são salvas no localStorage e permanecem lá entre sessões.
- **Modal de confirmação**: Um modal é exibido para confirmar a exclusão de uma tarefa.
- **Responsividade**: O layout é totalmente responsivo e se adapta a dispositivos móveis e desktop.

### Organização do Projeto
Organizei o projeto da seguinte forma:

#### Estrutura de Componentes

- `Header`: Exibe o cabeçalho com o nome do usuário.
- `TasksList`: Exibe a lista de tarefas, separada em tarefas pendentes e completadas. Usei o `useMemo` para otimizar a renderização, aplicando filtros de maneira eficiente.
- `Task`: Componente individual para cada tarefa, permitindo alternar o status e deletar.
- `ModalForm`: Modal para adicionar novas tarefas.
- `ModalConfirmDeletion`: Modal para confirmar a exclusão de uma tarefa.

#### Gerenciamento de Estado
Optei por usar **Zustand** para o gerenciamento de estado. Aqui estão os principais pontos:

- **Tasks State**:

  - Armazena e manipula a lista de tarefas.
  - Utilizei o `persist` do Zustand para garantir que as tarefas sejam salvas no `localStorage`.
  
- **Modal State**:

  - Gerencio os estados dos modais de forma independente para controlar a exibição de modais de adição e confirmação de exclusão.

### Ferramentas Utilizadas

- **Next.js**: Para a criação do projeto.
- **Zustand**: Para gerenciar o estado de forma eficiente.
- **LocalStorage**: Para garantir a persistência das tarefas.
- **SCSS**: Utilizei SCSS para gerenciar os estilos, o que permitiu uma maior modularidade e responsividade.

### Responsividade
Ajustei o layout utilizando SCSS para garantir uma boa experiência tanto em dispositivos móveis quanto em desktop.

### Como Rodar o Projeto
1. Clone o repositório:

```bash
  git clone https://github.com/TiagoM13/taskflow.git
```

2. Instale as dependências:

```bash
  npm install
```

3. Rode o projeto:

```bash
  npm run dev
```

4. Acesse o projeto no navegador:
  
```bash
  http://localhost:3000
```

