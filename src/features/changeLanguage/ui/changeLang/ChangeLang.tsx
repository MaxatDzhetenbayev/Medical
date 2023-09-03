import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { motion, Variants } from "framer-motion";

import { ArrowRight, ArrowDropDown } from "@mui/icons-material";

import styles from "./ChangeLang.module.scss";
import { useOutsideClick } from "../../../../shared/hooks/useOutsideClick";

import kz from "../../../../assets/kz.jpg";
import ru from "../../../../assets/ru.png";

export const ChangeLang = () => {
  const [showLangMenu, setShowLangMenu] = useState(false);
  const changeLangRef = useRef(null);
  const { i18n, t } = useTranslation();

  const menuVariants: Variants = {
    open: {
      visibility: "visible",
      y: 0,
      transition: {
        type: "spring",
        duration: 0.5,
      },
    },
    closed: {
      y: -20,
      visibility: "hidden",
      transition: {
        type: "spring",
        duration: 0.3,
      },
    },
  };

  const buttonList = [
    {
      text: "Русский",
      onClick: () => i18n.changeLanguage("ru"),
      img: ru,
    },
    {
      text: "Қазақша",
      onClick: () => i18n.changeLanguage("kz"),
      img: kz,
    },
  ];

  const toogleLangMenu = () => {
    setShowLangMenu(!showLangMenu);
  };

  const closeLangMenu = () => {
    setShowLangMenu(false);
  };

  useOutsideClick({
    elementRef: changeLangRef,
    handler: closeLangMenu,
    attached: showLangMenu,
  });

  return (
    <div
      ref={changeLangRef}
      onClick={() => toogleLangMenu()}
      className={styles.lang}
    >
      <div className={styles.lang_content}>
        <span>{t("lang")}</span>
        {showLangMenu ? <ArrowDropDown /> : <ArrowRight />}
      </div>
      {/* {showLangMenu && ( */}
      <motion.ul
        animate={showLangMenu ? "open" : "closed"}
        variants={menuVariants}
        className={styles.menu}
      >
        {buttonList?.map((item) => (
          <li className={styles.menu_item} key={item.text}>
            <button className={styles.menu_button} onClick={item.onClick}>
              <img width={20} src={item.img} alt="" />
              {item.text}
            </button>
          </li>
        ))}
      </motion.ul>
      {/* )} */}
    </div>
  );
};
