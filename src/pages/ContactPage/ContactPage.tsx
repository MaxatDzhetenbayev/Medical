import { HTag } from "../../shared/ui/Head/HTag";
import { PTag } from "../../shared/ui/Paragraph/PTag";
import { useTranslation } from "react-i18next";

export const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <HTag>{t("contact-title")}</HTag>
      <PTag style={{ marginTop: 20 }}>{t("call-center")}</PTag>
      <PTag style={{ marginTop: 10 }}>{t("patient-helpers-phone")}</PTag>
      <PTag style={{ marginTop: 10 }}>{t("location")}</PTag>
    </div>
  );
};
