import styles from "./MainFactsList.module.scss";

import card_1 from "../../../../assets/images/cards/card_1.png";
import card_2 from "../../../../assets/images/cards/card_2.jpg";
import card_3 from "../../../../assets/images/cards/card_3.jpg";
import card_4 from "../../../../assets/images/cards/card_4.jpg";
import card_5 from "../../../../assets/images/cards/card_5.jpg";
import card_6 from "../../../../assets/images/cards/card_6.jpg";
import { MainFactCard } from "./FactCard/MainFactCard";

import { useTranslation } from "react-i18next";

export const MainFactsList = () => {
  const { t } = useTranslation();

  const factList = [
    {
      img: card_1,
      path: "/facts/1",
      title: () => t("prevalence"),
    },
    {
      img: card_2,
      path: "/facts/2",
      title: () => t("symptoms"),
    },
    {
      img: card_3,
      path: "/facts/3",
      title: () => t("screening"),
    },
    {
      img: card_4,
      path: "/facts/4",
      title: () => t("treatment"),
    },
    {
      img: card_5,
      path: "/facts/5",
      title: () => t("myths"),
    },
    {
      img: card_6,
      path: "/facts/6",
      title: () => t("advice"),
    },
  ];

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
