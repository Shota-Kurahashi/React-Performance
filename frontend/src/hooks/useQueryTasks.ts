import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Task } from "../types/TaskType";

const getTasks = async () => {
  const res = await axios.get<Task[]>("http://127.0.0.1:8000/api/tasks/");

  return res.data;
};

export const useQueryTasks = () =>
  useQuery<Task[], Error>({
    queryKey: ["tasks"],
    queryFn: getTasks,
    cacheTime: 30000,
    staleTime: 30000,
  });
