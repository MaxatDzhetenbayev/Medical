import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Navigate } from "./components/Navigate/Navigate";
import { AdaptiveNavigate } from "./components/AdaptiveNavigate/AdaptiveNavigate";
import { ChangeLang } from "../../../features/changeLanguage/ui/changeLang/ChangeLang";
import { Container } from "../Container/Container";

import { LinkType } from "../../types/types";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import styles from "./Header.module.scss";

export const Header = () => {
  const { t } = useTranslation();
  const [showAdaptive, setShowAdaptive] = useState(false);

  const changeAdaptive = () => {
    setShowAdaptive(!showAdaptive);
  };

  const linkList: LinkType[] = [
    {
      path: "/",
      title: () => t("main"),
    },
    {
      path: "/facts/1",
      title: () => t("fact"),
      children: [
        {
          path: "/facts/1",
          title: () => t("prevalence"),
        },
        {
          path: "/facts/2",
          title: () => t("symptoms"),
        },
        {
          path: "/facts/3",
          title: () => t("screening"),
        },
        {
          path: "/facts/4",
          title: () => t("treatment"),
        },
        {
          path: "/facts/5",
          title: () => t("myths"),
        },
        {
          path: "/facts/6",
          title: () => t("advice"),
        },
      ],
    },
    {
      path: "/quiz",
      title: () => t("quiz"),
    },
    {
      path: "/questions",
      title: () => t("questions"),
    },
    {
      path: "/contacs",
      title: () => t("contact"),
    },
  ];

  return (
    <Container otherProps={{ boxShadow: "0px 1px 2px 1px rgba(0, 0, 0, 0.1)" }}>
      <div className={styles.root}>
        <div className={styles.wrapper}>
          <span className={styles.burger} onClick={changeAdaptive}>
            <MenuRoundedIcon style={{ color: "var(--primary-color)" }} />
          </span>
          <Navigate linkList={linkList} />
          {showAdaptive && (
            <AdaptiveNavigate linkList={linkList} onClose={changeAdaptive} />
          )}
          <ChangeLang />
        </div>
      </div>
    </Container>
  );
};
