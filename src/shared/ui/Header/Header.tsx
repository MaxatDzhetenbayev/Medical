import { useState } from "react";
import { useTranslation } from "react-i18next";

import { NavLink } from "react-router-dom";

import { WindowWithList } from "../windowWithList/WindowWithList";
import { ChangeLang } from "../../../features/changeLanguage/ui/changeLang/ChangeLang";

import styles from "./Header.module.scss";

type NestedLinkType = {
  path: string;
  title: () => string;
};

type LinkType = {
  path: string;
  title: () => string;
  children?: NestedLinkType[];
};

export const Header = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const { t } = useTranslation();

  const linkList: LinkType[] = [
    {
      path: "/",
      title: () => t("navigation.main"),
    },
    {
      path: "/facts/prevalence",
      title: () => t("navigation.fact.title"),
      children: [
        {
          path: "/facts/prevalence",
          title: () => t("navigation.fact.nested.prevalence"),
        },
        {
          path: "/facts/symptoms",
          title: () => t("navigation.fact.nested.symptoms"),
        },
        {
          path: "/facts/screening",
          title: () => t("navigation.fact.nested.screening"),
        },
        {
          path: "/facts/treatment",
          title: () => t("navigation.fact.nested.treatment"),
        },
        {
          path: "/facts/myths",
          title: () => t("navigation.fact.nested.myths"),
        },
        {
          path: "/facts/advice",
          title: () => t("navigation.fact.nested.advice"),
        },
      ],
    },
    {
      path: "/quiz",
      title: () => t("navigation.quiz"),
    },
    {
      path: "/contacs",
      title: () => t("navigation.contact"),
    },
  ];

  const toggleSubMenu = (nested: boolean) => {
    nested && setShowSubMenu(!showSubMenu);
  };

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <nav className={styles.navigate}>
          <ul className={styles.navigate_list}>
            {linkList.map(({ path, title, children }) => {
              const nestedLsit = children?.map((nested) => (
                <NavLink key={nested.path} to={nested.path}>
                  {nested.title}
                </NavLink>
              ));

              return (
                <li
                  key={path}
                  onMouseEnter={() => toggleSubMenu(!!children)}
                  onMouseLeave={() => toggleSubMenu(!!children)}
                  className={styles.navigate_item}
                >
                  <NavLink to={path}>{title}</NavLink>
                  {children && showSubMenu && (
                    <WindowWithList list={nestedLsit} />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
        <ChangeLang />
      </div>
    </div>
  );
};
