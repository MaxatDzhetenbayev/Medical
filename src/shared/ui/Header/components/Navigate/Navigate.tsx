import { useState } from "react";
import styles from "./Navigate.module.scss";
import { NavLink } from "react-router-dom";
import { WindowWithList } from "../../../windowWithList/WindowWithList";
import { LinkType } from "../../../../types/types";

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
          const nestedLsit = children?.map((nested) => (
            <NavLink
              key={nested.path}
              to={nested.path}
              style={{ color: "#000" }}
            >
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
              {children && showSubMenu && <WindowWithList list={nestedLsit} />}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
