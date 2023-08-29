import { useState } from "react";
import { Navigate } from "./components/Navigate/Navigate";

import { ChangeLang } from "../../../features/changeLanguage/ui/changeLang/ChangeLang";
import { AdaptiveNavigate } from "./components/AdaptiveNavigate/AdaptiveNavigate";
import { useTranslation } from "react-i18next";

import styles from "./Header.module.scss";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { LinkType } from "../../types/types";

export const Header = () => {
  const { t } = useTranslation();
  const [showAdaptive, setShowAdaptive] = useState(false);

  const changeAdaptive = () => {
    setShowAdaptive(!showAdaptive);
  };

  const linkList: LinkType[] = [
    {
      path: "/",
      title: () => t("navigation.main"),
    },
    {
      path: "/facts/1",
      title: () => t("navigation.fact.title"),
      children: [
        {
          path: "/facts/1",
          title: () => t("navigation.fact.nested.prevalence"),
        },
        {
          path: "/facts/2",
          title: () => t("navigation.fact.nested.symptoms"),
        },
        {
          path: "/facts/3",
          title: () => t("navigation.fact.nested.screening"),
        },
        {
          path: "/facts/4",
          title: () => t("navigation.fact.nested.treatment"),
        },
        {
          path: "/facts/5",
          title: () => t("navigation.fact.nested.myths"),
        },
        {
          path: "/facts/6",
          title: () => t("navigation.fact.nested.advice"),
        },
      ],
    },
    {
      path: "/quiz",
      title: () => t("navigation.quiz"),
    },
    {
      path: "/contacs",
      title: () => t("navigation.contact"),
    },
  ];

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <span className={styles.burger} onClick={changeAdaptive}>
          <MenuRoundedIcon />
        </span>
        <Navigate linkList={linkList} />
        {showAdaptive && (
          <AdaptiveNavigate linkList={linkList} onClose={changeAdaptive} />
        )}
        <ChangeLang />
      </div>
    </div>
  );
};
