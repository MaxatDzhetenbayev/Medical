import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

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
            {linkList.map(({ path, title, children }) => (
              <li key={path} className={styles.adaptive_item}>
                <button onClick={() => goToPath(children, path)}>
                  {title()}
                </button>
                {children && showSubMenu && (
                  <ul className={styles.nested_links}>
                    {children.map((link) => (
                      <li key={link.path} className={styles.nested_link}>
                        <NavLink to={link.path} onClick={onClose}>
                          {link.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
