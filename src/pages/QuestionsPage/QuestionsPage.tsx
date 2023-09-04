import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, Variants } from "framer-motion";

import { HTag } from "../../shared/ui/Head/HTag";
import { PTag } from "../../shared/ui/Paragraph/PTag";

import styles from "./QuestionPage.module.scss";

type questionItem = {
  question: () => string;
  answer: () => string;
  isAnswerView: boolean;
};

export const QuestionsPage = () => {
  const { t } = useTranslation();

  const [questionList, setQuestionList] = useState<questionItem[]>([
    {
      question: () => t("whatIsPolyp-title"),
      answer: () => t("whatIsPolyp-text"),
      isAnswerView: false,
    },
    {
      question: () => t("whatCausesCancer-title"),
      answer: () => t("whatCausesCancer-text"),
      isAnswerView: false,
    },
    {
      question: () => t("howCommonIsCancer-title"),
      answer: () => t("howCommonIsCancer-text"),
      isAnswerView: false,
    },
    {
      question: () => t("whoRiskCancer-title"),
      answer: () => t("whoRiskCancer-text"),
      isAnswerView: false,
    },
    {
      question: () => t("howCancerBePrevented-title"),
      answer: () => t("howCancerBePrevented-text"),
      isAnswerView: false,
    },
    {
      question: () => t("whatTheScreeningCancer-title"),
      answer: () => t("whatTheScreeningCancer-text"),
      isAnswerView: false,
    },
  ]);

  const handleSetView = (quest: string) => {
    const updatedList = questionList.map((item) => {
      return item.question() === quest
        ? { ...item, isAnswerView: !item.isAnswerView }
        : item;
    });

    setQuestionList(updatedList);
  };

  const variant: Variants = {
    open: {
      style: { borderColor: "var(--primary-color)" },
      borderColor: "var(--primary-color)",
      height: "auto",
      padding: "20px 20px",
    },
    closed: {
      borderColor: "transparent",
      height: 0,
      padding: "0px 20px",
      overflow: "hidden",
    },
  };

  return (
    <div>
      <HTag>{t("questions-title")}</HTag>

      <motion.ul className={styles.questionList}>
        {questionList.map((item) => (
          <motion.li
            animate={item.isAnswerView ? "open" : "closed"}
            key={item.question()}
            className={styles.questionItem}
          >
            <motion.button
              variants={{
                open: {
                  backgroundColor: "var(--primary-color",
                  color: "var(--text-alternative-color)",
                },
              }}
              className={styles.questionItem_button}
              onClick={() => handleSetView(item.question())}
            >
              <PTag>{item.question()}</PTag>
            </motion.button>
            <motion.div variants={variant} className={styles.questionItem_info}>
              <PTag>{item.answer()}</PTag>
            </motion.div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};
