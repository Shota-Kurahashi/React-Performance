import React, { FC } from "react";
import { useStore } from "../slices/counterSlice";

export const ZustandC: FC = () => {
  const toggleMode = useStore((s) => s.toggleMode);

  console.log("rendered ZustandC");

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="my-3 font-bold">ZustandC</p>
      <button
        className="mt-3 rounded bg-indigo-600 py-2 px-3 text-sm text-white hover:bg-indigo-700"
        onClick={() => toggleMode()}
      >
        toggle mode
      </button>
    </div>
  );
};
