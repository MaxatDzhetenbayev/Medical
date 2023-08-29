import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import { PTag } from "../Paragraph/PTag";

import { LinkType } from "../../types/types";

import styles from "./Footer.module.scss";

export const Footer = () => {
  const { t } = useTranslation();

  const inform: LinkType[] = [
    {
      path: "/",
      title: () => t("main"),
    },
    {
      path: "/facts/1",
      title: () => t("fact"),
    },
  ];

  const support: LinkType[] = [
    {
      path: "/quiz",
      title: () => t("quiz"),
    },
    {
      path: "/contacs",
      title: () => t("contact"),
    },
  ];

  return (
    <div className={styles.root}>
      <div className={styles.footer}>
        <div>
          <PTag variant="md" className={styles.title}>
            Сайта по самовыявлению симптомов и признаков колоректального рака
          </PTag>
          <PTag className={styles.content}>
            Опросник для самостоятельной диагностики признаков и симптомов
            колоректального рака
          </PTag>
        </div>
        <div>
          <PTag variant="md" className={styles.title}>
            Полезная информация
          </PTag>
          <ul className={styles.content}>
            {inform.map((link) => (
              <li key={link.path}>
                <NavLink style={{ color: "#fff" }} to={link.path}>
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <PTag variant="md" className={styles.title}>
            Поддержка
          </PTag>
          <ul className={styles.content}>
            {support.map((link) => (
              <li key={link.path}>
                <NavLink style={{ color: "#fff" }} to={link.path}>
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
