import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

import styles from "./ChangeButton.module.scss";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
  img: string;
}

export const ChangeButton = ({ text, img, ...props }: Props) => {
  return (
    <button {...props} className={styles.button}>
      <img src={img} width={20} height={15} alt="" />
      <span>{text}</span>
    </button>
  );
};
