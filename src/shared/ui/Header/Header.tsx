import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import { WindowWithList } from "../windowWithList/WindowWithList";

export const Header = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = (nested: boolean) => {
    nested && setShowSubMenu(!showSubMenu);
  };

  console.log(showSubMenu);

  type NestedLinkType = {
    path: string;
    title: string;
  };

  type LinkType = {
    path: string;
    title: string;
    children?: NestedLinkType[];
  };

  const linkList: LinkType[] = [
    {
      path: "/",
      title: "Главная",
    },
    {
      path: "/facts/prevalence",
      title: "Основные факты",
      children: [
        {
          path: "/facts/prevalence",
          title: "Распространенность КРР",
        },
        {
          path: "/facts/symptoms",
          title: "Симптомы КРР",
        },
        {
          path: "/facts/screening",
          title: "Скринниг  КРР",
        },
        {
          path: "/facts/treatment",
          title: "Лечение КРР",
        },
        {
          path: "/facts/myths",
          title: "Мифы о КРР",
        },
        {
          path: "/facts/advice",
          title: "Советы пациентам",
        },
      ],
    },
    {
      path: "/quiz",
      title: "Опросник по самодиагностике",
    },
    {
      path: "/contacs",
      title: "Контакты",
    },
  ];

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <nav className={styles.navigate}>
          <ul className={styles.navigate_list}>
            {linkList.map(({ path, title, children }) => {
              const nestedLsit = children?.map((nested) => (
                <NavLink key={nested.title} to={nested.path}>
                  {nested.title}
                </NavLink>
              ));

              return (
                <li
                  key={title}
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

        <div>Русский </div>
      </div>
    </div>
  );
};
