import { useState } from "react";
import { useTranslation } from "react-i18next";

import { WindowWithList } from "../../../../shared/ui/windowWithList/WindowWithList";

import {
  PlayCircleFilledRounded,
  ArrowDropDownCircleRounded,
} from "@mui/icons-material";

import styles from "./ChangeLang.module.scss";
import { ChangeButton } from "../changeButton/ChangeButton";

export const ChangeLang = () => {
  const [showLangMenu, setShowLangMenu] = useState(false);

  const { i18n, t } = useTranslation();

  const buttonList = [
    {
      text: "Русский",
      onClick: () => i18n.changeLanguage("ru"),
    },
    {
      text: "Казахский",
      onClick: () => i18n.changeLanguage("kz"),
    },
  ];

  const toogleLangMenu = () => {
    setShowLangMenu(!showLangMenu);
  };

  const buttonForList = buttonList.map((item) => (
    <ChangeButton key={item.text} text={item.text} onClick={item.onClick} />
  ));

  return (
    <div onClick={() => toogleLangMenu()} className={styles.lang}>
      <div className={styles.lang_content}>
        <span>{t("lang")}</span>
        {showLangMenu ? (
          <ArrowDropDownCircleRounded />
        ) : (
          <PlayCircleFilledRounded />
        )}
      </div>
      {showLangMenu && <WindowWithList list={buttonForList} />}
    </div>
  );
};
