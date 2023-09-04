import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import styles from "./AdaptiveNavigate.module.scss";
import { NewLinkType } from "../../Header";

type Props = {
  linkList: NewLinkType[];
  onClose: () => void;
};

export const AdaptiveNavigate = ({ linkList, onClose }: Props) => {
  const navigate = useNavigate();

  const parentvariants: Variants = {
    open: {
      visibility: "visible",
      padding: "10px 20px",
      height: 400,
      transition: {
        type: "spring",
        delayChildren: 0.1,
        staggerChildren: 0.05,
      },
    },
    closed: {
      height: 0,
      padding: "0px 20px",
      visibility: "hidden",
      transition: {
        type: "spring",
        delay: 1,
        delayChildren: 0.1,
        staggerChildren: 0.05,
      },
    },
  };

  const [showSubMenu, setShowSubMenu] = useState(false);

  const goToPath = (children: any, path: string) => {
    if (!children) {
      navigate(path);
      onClose();
    }
    setShowSubMenu(!showSubMenu);
  };

  return (
    <div className={styles.adaptive}>
      <div className={styles.adaptive_wrapper}>
        <div className={styles.adaptive_heading}>
          <button className={styles.adaptive_button} onClick={() => onClose()}>
            <CloseRoundedIcon />
          </button>
        </div>
        <nav className={styles.adaptive_nav}>
          <ul className={styles.adaptive_list}>
            {linkList.map(({ path, title, icon, children }) => (
              <li key={path} className={styles.adaptive_item}>
                <button onClick={() => goToPath(children, path)}>
                  {icon}
                  {title()}
                </button>
                {children && (
                  <motion.ul
                    initial={false}
                    animate={showSubMenu ? "open" : "closed"}
                    variants={parentvariants}
                    className={styles.nested_links}
                  >
                    {children.map((link, index) => (
                      <motion.li
                        variants={{
                          open: {
                            opacity: 1,
                            transition: {
                              type: "spring",
                              stiffness: 300,
                              damping: 15,
                              delay: index * 0.1,
                            },
                          },
                          closed: {
                            opacity: 0,
                            transition: {
                              type: "spring",
                              stiffness: 300,
                              damping: 15,
                              delay: index * 0.1,
                            },
                          },
                        }}
                        key={link.path}
                        className={styles.nested_link}
                      >
                        <NavLink to={link.path} onClick={onClose}>
                          {link.title}
                        </NavLink>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
