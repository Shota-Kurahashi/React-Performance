import React, { FC } from "react";
import { useStore } from "../slices/counterSlice";

export const ZustandA: FC = () => {
  const value = useStore((s) => s.value);
  const increment = useStore((s) => s.increment);

  console.log("rendered ZustandA");

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="my-3 font-bold">ZustandA</p>
      {value}
      <button
        className="mt-3 rounded bg-indigo-600 py-2 px-3 text-sm text-white hover:bg-indigo-700"
        onClick={() => increment()}
      >
        increment
      </button>
    </div>
  );
};
