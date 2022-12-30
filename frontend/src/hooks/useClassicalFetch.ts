import axios from "axios";
import { useEffect, useState } from "react";
import { useStateContext } from "../context/StateProvider";
import { Task } from "../types/TaskType";

export const useClassicalFetch = () => {
  const { tasks, setTasks } = useStateContext();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get<Task[]>("http://127.0.0.1:8000/api/tasks/");
        setTasks(res.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    getTasks();
  }, [setTasks]);

  return { isError, isLoading, tasks };
};
