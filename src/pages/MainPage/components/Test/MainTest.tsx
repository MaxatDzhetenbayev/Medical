import React from "react";

import styles from "./MainTest.module.scss";
import { Wrapper } from "../../../../shared/ui/Wrapper/Wrapper";
import { PTag } from "../../../../shared/ui/Paragraph/PTag";
import { Button } from "../../../../shared/ui/Button/Button";

export const MainTest = () => {
  return (
    <div className={styles.root}>
      <div className={styles.test}>
        <PTag>
          Мы предлагаем Вам онлайн опросник для самостоятельной диагностики
          признаков и симптомов колоректального рака . Опросник состоит из 12
          вопросов, каждый из которых содержит варианты ответов да/нет. <br />
          <span>
            *Стоит указать, что результаты не являются конечным диагнозом.
            Конечное заключение выдается только после консультации с врачом.
          </span>
        </PTag>
        <Button style={{ marginTop: "35px" }} handleCLick={() => {}}>
          НАЧАТЬ ТЕСТ
        </Button>
      </div>
    </div>
  );
};
