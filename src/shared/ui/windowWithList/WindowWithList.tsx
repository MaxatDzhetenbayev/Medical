import React, { ReactElement } from "react";
import styles from "./WindowWithList.module.scss";

type Props = {
  list: ReactElement[] | undefined;
};

export const WindowWithList = ({ list }: Props) => {
  return (
    <ul className={styles.root}>
      {list?.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};
