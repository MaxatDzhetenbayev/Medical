import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Container } from "../../../../shared/ui/Container/Container";
import { PTag } from "../../../../shared/ui/Paragraph/PTag";
import { Button } from "../../../../shared/ui/Button/Button";

import styles from "./MainTest.module.scss";

export const MainTest = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Container mt={40}>
      <div className={styles.root}>
        <div className={styles.test}>
          <PTag>
            {t("maintest-text-first")} <br />
            <span>{t("maintext-text-second")}</span>
          </PTag>
          <Button
            style={{ marginTop: "35px" }}
            handleCLick={() => navigate("/quiz")}
          >
            {t("ready-test")}
          </Button>
        </div>
      </div>
    </Container>
  );
};
