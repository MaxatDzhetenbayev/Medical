import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from "react";
import styles from "./Button.module.scss";
import { PTag } from "../Paragraph/PTag";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  handleCLick: () => void;
  children: ReactNode;
}

export const Button = ({ handleCLick, children, ...props }: Props) => {
  return (
    <button onClick={handleCLick} className={styles.root} {...props}>
      <PTag variant="md">{children}</PTag>
    </button>
  );
};
