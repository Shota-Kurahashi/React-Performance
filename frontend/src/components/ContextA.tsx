import { FC } from "react";
import { useStateContext } from "../context/StateProvider";

export const ContextA: FC = () => {
  const { dark, setDark } = useStateContext();
  console.log("rendered ContextA");

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="my-3 font-bold">ContextA</p>
      <p className="my-3">{dark ? "on" : "off"}</p>
      <button
        className="rounded bg-indigo-600 py-2 px-3 text-sm text-white hover:bg-indigo-700"
        onClick={() => setDark(!dark)}
      >
        toggle mode
      </button>
    </div>
  );
};
