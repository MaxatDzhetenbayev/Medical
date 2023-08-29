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
      title: () => t("prevalence"),
    },
    {
      path: "/facts/2",
      title: () => t("symptoms"),
    },
    {
      path: "/facts/3",
      title: () => t("screening"),
    },
    {
      path: "/facts/4",
      title: () => t("treatment"),
    },
    {
      path: "/facts/5",
      title: () => t("myths"),
    },
    {
      path: "/facts/6",
      title: () => t("advice"),
    },
  ];

  return (
    <div className={styles.root}>
      <HTag variant="h4">{t("fact")}</HTag>
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
