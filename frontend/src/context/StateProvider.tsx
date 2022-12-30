/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { Task } from "../types/TaskType";

type StateContextType = {
  tasks: Task[];
  dark: boolean;
  setTasks: Dispatch<SetStateAction<Task[]>>;
  setDark: Dispatch<SetStateAction<boolean>>;
};

type Props = {
  children: ReactNode;
};

const TodoContext = createContext({} as StateContextType);

export const StateProvider: FC<Props> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [dark, setDark] = useState<boolean>(false);

  return (
    <TodoContext.Provider
      value={{
        tasks,
        dark,
        setTasks,
        setDark,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useStateContext = (): StateContextType => useContext(TodoContext);
