import React from "react";

import styles from "./MainFactsList.module.scss";
import { Wrapper } from "../../../../shared/ui/Wrapper/Wrapper";

import card_1 from "../../../../assets/images/cards/card_1.png";
import card_2 from "../../../../assets/images/cards/card_2.jpg";
import card_3 from "../../../../assets/images/cards/card_3.jpg";
import card_4 from "../../../../assets/images/cards/card_4.jpg";
import card_5 from "../../../../assets/images/cards/card_5.jpg";
import card_6 from "../../../../assets/images/cards/card_6.jpg";
import { MainFactCard } from "./FactCard/MainFactCard";

const factList = [
  {
    img: card_1,
    path: "/facts/1",
    title: "Распространенность КРР",
  },
  {
    img: card_2,
    path: "/facts/2",
    title: "Симптомы КРР",
  },
  {
    img: card_3,
    path: "/facts/3",
    title: "Скрининг КРР",
  },
  {
    img: card_4,
    path: "/facts/4",
    title: "Лечение КРР",
  },
  {
    img: card_5,
    path: "/facts/5",
    title: "Мифы о КРР",
  },
  {
    img: card_6,
    path: "/facts/6",
    title: "Советы пациентам",
  },
];

export const MainFactsList = () => {
  return (
    <div className={styles.root}>
      <div className={styles.facts}>
        {factList.map((card) => (
          <MainFactCard {...card} />
        ))}
      </div>
    </div>
  );
};
