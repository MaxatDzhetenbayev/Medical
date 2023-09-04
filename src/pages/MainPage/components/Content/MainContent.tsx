import { useTranslation } from "react-i18next";
import Markdown from "react-markdown";
import { Container } from "../../../../shared/ui/Container/Container";
import { HTag } from "../../../../shared/ui/Head/HTag";
import { PTag } from "../../../../shared/ui/Paragraph/PTag";

import styles from "./MainContent.module.scss";

export const MainContent = () => {
  const { t } = useTranslation();

  return (
    <Container mt={80}>
      <div className={styles.root}>
        <div className={styles.content}>
          <HTag variant="h3">{t("whats-cancer-title")}</HTag>

          <PTag style={{ marginTop: "40px", textAlign: "justify" }}>
            <Markdown >{t("whats-cancer-text")}</Markdown>
          </PTag>
        </div>
      </div>
    </Container>
  );
};
