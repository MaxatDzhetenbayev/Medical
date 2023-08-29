import React from "react";
import { Wrapper } from "../../../../shared/ui/Wrapper/Wrapper";
import { HTag } from "../../../../shared/ui/Head/HTag";
import { PTag } from "../../../../shared/ui/Paragraph/PTag";

import styles from "./Welcome.module.scss";

export const Welcome = () => {
  return (
    <div className={styles.root}>
      <div className={styles.welcome}>
        <HTag variant="h3">КОЛОРЕКТАЛЬНЫЙ РАК</HTag>
        <PTag>
          Данный сайт предлагает Вам информацию о колоректальном раке и онлайн
          опросник для самостоятельной диагностики симптомов и признаков
          колоректального рака.
        </PTag>
      </div>
    </div>
  );
};
