import React, { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
}

export const ChangeButton = ({ text, ...props }: Props) => {
  return <button {...props}>{text}</button>;
};
