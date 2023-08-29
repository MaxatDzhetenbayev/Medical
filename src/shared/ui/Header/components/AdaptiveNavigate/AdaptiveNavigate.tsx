import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { WindowWithList } from "../../../windowWithList/WindowWithList";

import { LinkType } from "../../../../types/types";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import styles from "./AdaptiveNavigate.module.scss";

type Props = {
  linkList: LinkType[];
  onClose: () => void;
};

export const AdaptiveNavigate = ({ linkList, onClose }: Props) => {
  const navigate = useNavigate();

  const [showSubMenu, setShowSubMenu] = useState(false);

  const goToPath = (children: any, path: string) => {
    if (!children) {
      navigate(path);
      onClose();
    }
    setShowSubMenu(true);
  };

  return (
    <div className={styles.adaptive}>
      <div className={styles.adaptive_wrapper}>
        <button className={styles.adaptive_button} onClick={() => onClose()}>
          <CloseRoundedIcon />
        </button>
        <nav className={styles.adaptive_nav}>
          <ul className={styles.adaptive_list}>
            {linkList.map(({ path, title, children }) => {
              const nestedLsit = children?.map((nested) => (
                <NavLink onClick={onClose} key={nested.path} to={nested.path}>
                  {nested.title}
                </NavLink>
              ));

              return (
                <li key={path} className={styles.adaptive_item}>
                  <button onClick={() => goToPath(children, path)}>
                    {title()}
                  </button>
                  {children && showSubMenu && (
                    <WindowWithList list={nestedLsit} />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};
