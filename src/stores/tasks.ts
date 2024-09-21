import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { ITask } from '@app/interfaces/task';

interface TaskStoreState {
  tasks: ITask[];
  isInitialized: boolean,
  addTask: (title: string) => void;
  toggleTaskStatus: (id: number) => void;
  deleteTask: (id: number) => void;
}

const initialTasks: ITask[] = [
  { id: 1, title: "Finish Next.js project", status: "pending" },
  { id: 3, title: "Prepare presentation for meeting", status: "pending" },
  { id: 4, title: "Refactor user authentication flow", status: "completed" },
];

export const useTaskStore = create<TaskStoreState>()(
  persist(
    (set) => ({
      tasks: initialTasks,
      isInitialized: false,
      addTask: (title: string) =>
        set((state) => {
          const newTask: ITask = {
            id: state.tasks.length ? Math.max(...state.tasks.map(task => task.id)) + 1 : 1,
            title,
            status: 'pending',
          };
          return { tasks: [...state.tasks, newTask] };
        }),
      toggleTaskStatus: (id: number) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id
              ? { ...task, status: task.status === 'pending' ? 'completed' : 'pending' }
              : task
          ),
        })),
      deleteTask: (id: number) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),
    }),
    {
      name: '@tasks-storage',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.isInitialized = true; // Definir flag como true após carregar do localStorage
        }
      },
    }
  )
)