import React, { FC } from "react";
import { ZustandA } from "./ZustandA";
import { ZustandB } from "./ZustandB";
import { ZustandC } from "./ZustandC";
import { ZustandD } from "./ZustandD";

export const MainZustand: FC = () => (
  <div className="grid grid-cols-2 gap-40">
    <ZustandA />
    <ZustandB />
    <ZustandC />
    <ZustandD />
  </div>
);
