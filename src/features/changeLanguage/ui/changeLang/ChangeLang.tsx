import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import {
  PlayCircleFilledRounded,
  ArrowDropDownCircleRounded,
} from "@mui/icons-material";

import styles from "./ChangeLang.module.scss";
import { useOutsideClick } from "../../../../shared/hooks/useOutsideClick";

import kz from "../../../../assets/kz.jpg";
import ru from "../../../../assets/ru.png";

export const ChangeLang = () => {
  const [showLangMenu, setShowLangMenu] = useState(false);
  const changeLangRef = useRef(null);
  const { i18n, t } = useTranslation();

  const buttonList = [
    {
      text: "Русский",
      onClick: () => i18n.changeLanguage("ru"),
      img: ru,
    },
    {
      text: "Казахский",
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
        {showLangMenu ? (
          <ArrowDropDownCircleRounded />
        ) : (
          <PlayCircleFilledRounded />
        )}
      </div>
      {showLangMenu && (
        <ul className={styles.menu}>
          {buttonList?.map((item) => (
            <li className={styles.menu_item} key={item.text}>
              <button className={styles.menu_button} onClick={item.onClick}>
                <img width={20} src={item.img} alt="" />
                {item.text}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
