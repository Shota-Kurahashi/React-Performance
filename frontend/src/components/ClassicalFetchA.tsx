import React, { FC } from "react";
import { Navigate } from "react-router-dom";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import { useClassicalFetch } from "../hooks/useClassicalFetch";

export const ClassicalFetchA: FC = () => {
  const { isError, isLoading, tasks } = useClassicalFetch();

  console.log("rendered ClassicalFetchA");
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="mb-3 text-center font-bold">ClassicalFetchA</p>
      {tasks?.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}
      <ChevronDoubleRightIcon
        onClick={() => Navigate({ to: "/fetch-b" })}
        className="mt-2 h-5 w-5 cursor-pointer text-blue-500"
      />
      <p className="text-sm">fetch B</p>
    </div>
  );
};
