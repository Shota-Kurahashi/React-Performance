import React, { FC } from "react";
import { useStore } from "../slices/counterSlice";

export const ZustandD: FC = () => {
  const mode = useStore((s) => s.mode);

  console.log("rendered ZustandD");

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="my-3 font-bold">ZustandD</p>
      <p className="text-blue-500">{mode ? "mode on" : "mode off"}</p>
    </div>
  );
};
