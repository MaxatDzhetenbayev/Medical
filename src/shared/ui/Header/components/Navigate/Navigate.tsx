import { useState } from "react";
import { NavLink } from "react-router-dom";

import { LinkType } from "../../../../types/types";

import styles from "./Navigate.module.scss";

type Props = {
  linkList: LinkType[];
};

export const Navigate = ({ linkList }: Props) => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = (nested: boolean) => {
    nested && setShowSubMenu(!showSubMenu);
  };

  return (
    <nav className={styles.navigate}>
      <ul className={styles.navigate_list}>
        {linkList.map(({ path, title, children }) => {
          return (
            <li
              key={path}
              onMouseEnter={() => toggleSubMenu(!!children)}
              onMouseLeave={() => toggleSubMenu(!!children)}
              className={styles.navigate_item}
            >
              <NavLink to={path}>{title}</NavLink>
              {children && showSubMenu && (
                <ul className={styles.childrenLinks}>
                  {children?.map(({ path, title }) => (
                    <li className={styles.childrenItem} key={path}>
                      <NavLink to={path}>{title()}</NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
