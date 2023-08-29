import { useTranslation } from "react-i18next";
import { PTag } from "../Paragraph/PTag";
import styles from "./SideBar.module.scss";
import { LinkType } from "../../types/types";
import { NavLink } from "react-router-dom";
import { HTag } from "../Head/HTag";

export const SideBar = () => {
  const { t } = useTranslation();

  const linkList: LinkType[] = [
    {
      path: "/facts/1",
      title: () => t("navigation.fact.nested.prevalence"),
    },
    {
      path: "/facts/2",
      title: () => t("navigation.fact.nested.symptoms"),
    },
    {
      path: "/facts/3",
      title: () => t("navigation.fact.nested.screening"),
    },
    {
      path: "/facts/4",
      title: () => t("navigation.fact.nested.treatment"),
    },
    {
      path: "/facts/5",
      title: () => t("navigation.fact.nested.myths"),
    },
    {
      path: "/facts/6",
      title: () => t("navigation.fact.nested.advice"),
    },
  ];

  return (
    <div className={styles.root}>
      <HTag variant="h4">О Депрессий</HTag>
      <ul className={styles.list}>
        {linkList.map((link) => (
          <li key={link.path} className={styles.item}>
            <NavLink to={link.path}>
              <PTag variant="nm">{link.title()}</PTag>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
