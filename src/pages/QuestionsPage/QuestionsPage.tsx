import { useState } from "react";
import { useTranslation } from "react-i18next";
import { HTag } from "../../shared/ui/Head/HTag";

import styles from "./QuestionPage.module.scss";
import { PTag } from "../../shared/ui/Paragraph/PTag";

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

  return (
    <div>
      <HTag>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ О КОЛОРЕКТАЛЬНОМ РАКЕ.</HTag>

      <ul className={styles.questionList}>
        {questionList.map((item) => (
          <li key={item.question()} className={styles.questionItem}>
            <button
              className={styles.questionItem_button}
              onClick={() => handleSetView(item.question())}
            >
              <PTag>{item.question()}</PTag>
            </button>
            {item.isAnswerView && (
              <div className={styles.questionItem_info}>
                <PTag>{item.answer()}</PTag>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
