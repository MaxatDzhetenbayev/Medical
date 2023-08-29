import { useTranslation } from "react-i18next";

import { HTag } from "../../../../shared/ui/Head/HTag";
import { PTag } from "../../../../shared/ui/Paragraph/PTag";

import styles from "./Welcome.module.scss";

export const Welcome = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <div className={styles.welcome}>
        <HTag variant="h3">{t("cancer")}</HTag>
        <PTag>{t("welcome-text")}</PTag>
      </div>
    </div>
  );
};
