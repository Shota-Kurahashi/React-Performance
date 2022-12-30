import React, { FC } from "react";
import { useStore } from "../slices/counterSlice";

export const ZustandB: FC = () => {
  const increment = useStore((s) => s.increment);

  console.log("rendered ZustandB");

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="my-3 font-bold">ZustandB</p>
      <button
        className="mt-3 rounded bg-indigo-600 py-2 px-3 text-sm text-white hover:bg-indigo-700"
        onClick={() => increment()}
      >
        increment
      </button>
    </div>
  );
};
