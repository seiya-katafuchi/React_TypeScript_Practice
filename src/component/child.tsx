import React from "react";
import { prependOnceListener } from "process";

interface Props {
  message: string;
  children: React.ReactDOM;
}

export const Child: React.FC<Props> = ({ children, message }) => {
  return (
    <div>
      <h1>{}</h1>
      <p>{message}</p>
    </div>
  );
};
