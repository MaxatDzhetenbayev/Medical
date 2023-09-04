import { useTranslation } from "react-i18next";

import { NavLink } from "react-router-dom";
import { Container } from "../Container/Container";
import { PTag } from "../Paragraph/PTag";

import { LinkType } from "../../types/types";

import styles from "./Footer.module.scss";

export const Footer = () => {
  const { t } = useTranslation();

  const inform: LinkType[] = [
    {
      path: "/",
      title: () => t("main"),
    },
    {
      path: "/facts/1",
      title: () => t("fact"),
    },
  ];

  const support: LinkType[] = [
    {
      path: "/quiz",
      title: () => t("quiz"),
    },
    {
      path: "/contacs",
      title: () => t("contact"),
    },
  ];

  return (
    <Container
      mt={80}
      otherProps={{ backgroundColor: "var(--background-color)" }}
    >
      <div className={styles.root}>
        <div className={styles.footer}>
          <div>
            <PTag variant="md" className={styles.title}>
              {t("footer.site")}
            </PTag>
            <PTag className={styles.content}>{t("footer.questionnaire")}</PTag>
          </div>
          <div>
            <PTag variant="md" className={styles.title}>
              {t("footer.helpfull")}
            </PTag>
            <ul className={styles.content}>
              {inform.map((link) => (
                <li key={link.path}>
                  <NavLink style={{ color: "#fff" }} to={link.path}>
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <PTag variant="md" className={styles.title}>
				{t("footer.support")}
            </PTag>
            <ul className={styles.content}>
              {support.map((link) => (
                <li key={link.path}>
                  <NavLink style={{ color: "#fff" }} to={link.path}>
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};
