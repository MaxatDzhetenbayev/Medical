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

          <PTag style={{ marginTop: "10px", textAlign: "justify" }}>
            <Markdown>{t("whats-cancer.text-1")}</Markdown>
          </PTag>
          <PTag style={{ marginTop: "10px", textAlign: "justify" }}>
            <Markdown>{t("whats-cancer.text-2")}</Markdown>
          </PTag>
          <PTag style={{ marginTop: "10px", textAlign: "justify" }}>
            <Markdown>{t("whats-cancer.text-3")}</Markdown>
          </PTag>
          <PTag
            style={{
              marginTop: "10px",
              textAlign: "justify",
              color: "var(--primary-color)",
            }}
          >
            <Markdown>{t("whats-cancer.text-4")}</Markdown>
          </PTag>
        </div>
      </div>
    </Container>
  );
};
