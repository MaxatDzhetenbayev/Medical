import { useTranslation } from "react-i18next";

import { HTag } from "../../../../shared/ui/Head/HTag";
import { PTag } from "../../../../shared/ui/Paragraph/PTag";

import styles from "./MainContent.module.scss";

export const MainContent = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <HTag variant="h3">{t("whats-cancer-title")}</HTag>

        <PTag style={{ marginTop: "40px", textAlign: "justify" }}>
        {t("whats-cancer-text")}
        </PTag>
      </div>
    </div>
  );
};
