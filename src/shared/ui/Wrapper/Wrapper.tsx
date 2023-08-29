import React, { ReactNode } from "react";
import styles from "./Wrapper.module.scss";

interface Props {
  children: ReactNode;
}

export const Wrapper = ({ children }: Props) => {
  return <div className={styles.wrapper}>{children}</div>;
};
