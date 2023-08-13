import { useState } from "react";
import { WindowWithList } from "../../../windowWithList/WindowWithList";
import styles from "./AdaptiveNavigate.module.scss";
import { NavLink } from "react-router-dom";
import { LinkType } from "../../../../types/types";

type Props = {
  linkList: LinkType[];
  onClose: () => void;
};

export const AdaptiveNavigate = ({ linkList, onClose }: Props) => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = (nested: boolean) => {
    nested && setShowSubMenu(!showSubMenu);
  };

  return (
    <div className={styles.adaptive}>
      <button onClick={() => onClose()}>Закрыть</button>
      <nav className={styles.adaptive_wrapper}>
        <ul className={styles.adaptive_list}>
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
                className={styles.adaptive_item}
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
    </div>
  );
};
