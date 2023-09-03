import { useState } from "react";
import { useTranslation } from "react-i18next";

import { HTag } from "../../shared/ui/Head/HTag";

import styles from "./QuizPage.module.scss";
import { PTag } from "../../shared/ui/Paragraph/PTag";
import { Button } from "../../shared/ui/Button/Button";

interface Question {
  id: number;
  text: () => string;
  score: number;
}

interface Answer {
  title: string;
  text: string;
  color: string;
}

const answerList: Answer[] = [
  {
    title: "Низкий риск колоректального рака",
    text: "Ваши результаты указывают на низкую вероятность наличия симптомов колоректального рака. Важно помнить, что этот результат не является заключительным диагнозом.",
    color: "#01d124",
  },
  {
    title: "Умеренный риск",
    text: "Ваши результаты указывают на среднюю вероятность наличия симптомов колоректального рака. Однако, при возрасте старше 50 лет необходимо обязательно пройти скрининг на колректальный рак.",
    color: "#dfdc27",
  },
  {
    title: "Повышенный риск колоректального рака",
    text: "Ваши результаты указывают на предположительную вероятность наличия симптомов колоректального рака. Это может означать, что Вы можете быть подвержены колоректальному раку. Мы предлагаем Вам обратиться к своему лечащему врачу в ПМСП.",
    color: "#fca93d",
  },
  {
    title: "Высокий риск колоректального рака",
    text: "Ваши результаты указывают на предположительную вероятность наличия симптомов колоректального рака. Это может означать, что Вы можете быть подвержены колоректальному раку.Мы предлагаем Вам обратиться к своему лечащему врачу в ПМСП.",
    color: "#ff4b4b",
  },
];

export const QuizPage = () => {
  const { t } = useTranslation();

  const questions: Question[] = [
    {
      id: 1,
      text: () => t("questions-list.item-1"),
      score: 2,
    },
    {
      id: 2,
      text: () => t("questions-list.item-2"),
      score: 2,
    },
    {
      id: 3,
      text: () => t("questions-list.item-3"),
      score: 2,
    },
    {
      id: 4,
      text: () => t("questions-list.item-4"),

      score: 2,
    },
    {
      id: 5,
      text: () => t("questions-list.item-5"),

      score: 3,
    },
    {
      id: 6,
      text: () => t("questions-list.item-6"),
      score: 3,
    },
    {
      id: 7,
      text: () => t("questions-list.item-7"),
      score: 1,
    },
    {
      id: 8,
      text: () => t("questions-list.item-8"),
      score: 1,
    },
    {
      id: 9,
      text: () => t("questions-list.item-9"),
      score: 1,
    },
    {
      id: 10,
      text: () => t("questions-list.item-10"),
      score: 1,
    },
    {
      id: 11,
      text: () => t("questions-list.item-11"),
      score: 1,
    },
    {
      id: 12,
      text: () => t("questions-list.item-12"),
      score: 1,
    },
  ];

  const [answers, setAnswers] = useState<{
    [questionId: number]: "Yes" | "No";
  }>({});
  const [score, setScore] = useState<number>(0);
  const [finalText, setFinalText] = useState<Answer | null>();
  const [visible, setVisible] = useState<boolean>(false);

  const handleAnswerChange = (questionId: number, answer: "Yes" | "No") => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const handleAnswer = (score: number) => {
    console.log(score);
    if (score === 0) {
      setFinalText(answerList[0]);
    }
    if (score >= 1 && score <= 6) {
      setFinalText(answerList[1]);
    }
    if (score >= 7 && score <= 13) {
      setFinalText(answerList[2]);
    }
    if (score >= 14) {
      setFinalText(answerList[3]);
    }
    if (score <= 13) {
      for (const key in answers) {
        if (answers[5] === "Yes" && answers[6] === "Yes") {
          setFinalText(answerList[3]);
          return key;
        }
      }
    }
  };

  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((question) => {
      if (answers[question.id] === "Yes") {
        newScore += question.score;
      }
    });
    setScore(newScore);
    handleAnswer(newScore);
    setVisible(true);
  };

  return (
    <div>
      <HTag style={{ marginBottom: 30 }} variant="h2">
        Опросник
      </HTag>

      {!visible ? (
        <>
          {questions.map((question, index) => (
            <div key={question.id}>
              <PTag style={{ marginTop: 15 }}>
                {index + 1}. {question.text()}
                <span className={styles.required}>({t("Required")})</span>
              </PTag>
              <div className={styles.labelList}>
                <label className={styles.label}>
                  <PTag variant="sm">{t("Yes")}</PTag>
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value="Да"
                    checked={answers[question.id] === "Yes"}
                    onChange={() => handleAnswerChange(question.id, "Yes")}
                  />
                </label>
                <label className={styles.label}>
                  <PTag variant="sm">{t("No")}</PTag>

                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value="Нет"
                    checked={answers[question.id] === "No"}
                    onChange={() => handleAnswerChange(question.id, "No")}
                  />
                </label>
              </div>
            </div>
          ))}
          <Button handleCLick={handleSubmit} style={{ marginTop: 30 }}>
            Подсчитать результат
          </Button>
        </>
      ) : (
        <div className={styles.result}>
          <PTag
            variant="lg"
            style={{ color: "var(--primary-color)", textAlign: "center" }}
          >
            Результат
          </PTag>
          <PTag style={{ marginTop: 10 }}>
            Ваш результат:
            <span style={{ color: finalText?.color }}>
              "{finalText?.title}"
            </span>
            . Ваш балл равен:
            <span style={{ color: finalText?.color }}>{score} из 20</span>.
          </PTag>
          <div
            style={{
              width: "100%",
              height: 1,
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              margin: "20px 0",
            }}
          ></div>
          <PTag style={{ textAlign: "justify" }}>{finalText?.text}</PTag>
        </div>
      )}
    </div>
  );
};
