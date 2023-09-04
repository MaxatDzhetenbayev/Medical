import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Navigate } from "./components/Navigate/Navigate";
import { AdaptiveNavigate } from "./components/AdaptiveNavigate/AdaptiveNavigate";
import { ChangeLang } from "../../../features/changeLanguage/ui/changeLang/ChangeLang";
import { Container } from "../Container/Container";

import { LinkType } from "../../types/types";

import {
  MenuRounded,
  Phone,
  House,
  Quiz,
  FactCheck,
  QuestionMark,
} from "@mui/icons-material/";

import styles from "./Header.module.scss";

export type NewLinkType = LinkType & { icon: JSX.Element };

export const Header = () => {
  const { t } = useTranslation();
  const [showAdaptive, setShowAdaptive] = useState(false);

  const changeAdaptive = () => {
    setShowAdaptive(!showAdaptive);
  };

  const linkList: NewLinkType[] = [
    {
      path: "/",
      title: () => t("main"),
      icon: <House />,
    },
    {
      path: "/facts/1",
      title: () => t("fact"),
      icon: <FactCheck />,
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
      icon: <Quiz />,
    },
    {
      path: "/questions",
      title: () => t("questions"),
      icon: <QuestionMark />,
    },
    {
      path: "/contacs",
      title: () => t("contact"),
      icon: <Phone />,
    },
  ];

  return (
    <Container otherProps={{ boxShadow: "0px 1px 2px 1px rgba(0, 0, 0, 0.1)" }}>
      <div className={styles.root}>
        <div className={styles.wrapper}>
          <span className={styles.burger} onClick={changeAdaptive}>
            <MenuRounded style={{ color: "var(--primary-color)" }} />
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
