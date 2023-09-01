import { useTranslation } from "react-i18next";

import { Container } from "../../../../shared/ui/Container/Container";
import { HTag } from "../../../../shared/ui/Head/HTag";
import { PTag } from "../../../../shared/ui/Paragraph/PTag";

import backgroundImage from "../../../../assets/images/bg_main.png";

import styles from "./Welcome.module.scss";

export const Welcome = () => {
  const { t } = useTranslation();

  return (
    <Container backgroundImageUrl={backgroundImage}>
      <div className={styles.root}>
        <div className={styles.welcome}>
          <HTag variant="h3">{t("cancer")}</HTag>
          <PTag>{t("welcome-text")}</PTag>
        </div>
      </div>
    </Container>
  );
};
