import { useState } from "react";
import { useTranslation } from "react-i18next";
import Select from "react-select";
import axios from "axios";

import { HTag } from "../../shared/ui/Head/HTag";
import { PTag } from "../../shared/ui/Paragraph/PTag";

import { locationList, serverPath } from "../../shared/consts/consts";

import styles from "./QuizPage.module.scss";
import { Button } from "@mui/material";

interface Question {
  id: number;
  text: () => string;
  score: number;
}

interface Answer {
  title: () => string;
  text: () => string;
  color: string;
}

export const QuizPage = () => {
  const { t } = useTranslation();

  const locationOption = locationList.map((item) => ({
    value: item,
    label: item,
  }));

  const sexOptions = [
    { label: "Мужской", value: "Мужской" },
    { label: "Женский", value: "Женский" },
  ];

  const [location, setLocation] = useState<any>(null);
  const [selectedSex, setSelectedSex] = useState<any>(null);

  const answerList: Answer[] = [
    {
      title: () => t("quiz-answers.low.title"),
      text: () => t("quiz-answers.low.text"),
      color: "#01d124",
    },
    {
      title: () => t("quiz-answers.moderate.title"),
      text: () => t("quiz-answers.moderate.text"),
      color: "#dfdc27",
    },
    {
      title: () => t("quiz-answers.hightened.title"),
      text: () => t("quiz-answers.hightened.text"),
      color: "#fca93d",
    },
    {
      title: () => t("quiz-answers.hight.title"),
      text: () => t("quiz-answers.hight.text"),
      color: "#ff4b4b",
    },
  ];

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
    {
      id: 13,
      text: () => t("questions-list.item-13"),
      score: 0,
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState<Question>(
    questions[0]
  );
  const [answers, setAnswers] = useState<{
    [questionId: number]: "Yes" | "No";
  }>({});

  const [step, setStep] = useState<"form" | "test" | "final">("form");
  const [score, setScore] = useState<number>(0);
  const [finalText, setFinalText] = useState<Answer | null>();

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

  const handleAnswerChange = (questionId: number, answer: "Yes" | "No") => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const handleSubmit = async () => {
    let newScore = 0;
    questions.forEach((question) => {
      if (answers[question.id] === "Yes") {
        newScore += question.score;
      }
    });
    setScore(newScore);

    setStep("final");
    await axios.post(`${serverPath}/questionnaire`, {
      sex: selectedSex.value,
      location: location.value,
      score: newScore,
    });

    handleAnswer(newScore);
  };

  const handleClick = (id: number, answer: "Yes" | "No") => {
    if (currentQuestion.id <= 12) {
      handleAnswerChange(id, answer);
      setCurrentQuestion((prev) => questions[prev.id]);
    } else {
      handleSubmit();
    }
  };

  return (
    <div>
      <HTag style={{ marginBottom: 30 }} variant="h2">
        {t("questionnaire-title")}
      </HTag>
      {step === "form" && (
        <div>
          <Select
            options={sexOptions}
            className={styles.select}
            value={selectedSex}
            onChange={(selected) => setSelectedSex(selected)}
            isClearable
            placeholder="Выберите ваш пол"
          />
          <Select
            options={locationOption}
            className={styles.select}
            value={location}
            onChange={(selected) => setLocation(selected)}
            isClearable
            placeholder="Выберите населенный пункт"
          />
          <Button
            onClick={() => {
              !location || !selectedSex
                ? alert("Заполните все формы")
                : setStep("test");
            }}
            style={{ marginTop: 20 }}
          >
            Начать тест
          </Button>
        </div>
      )}
      {step === "test" && (
        <>
          <div className={styles.wrapper}>
            <div className={styles.heading}>
              <PTag variant="lg">{currentQuestion.text()}</PTag>
            </div>

            <div className={styles.content}>
              <button onClick={() => handleClick(currentQuestion.id, "Yes")}>
                <PTag>{t("Yes")} </PTag>
              </button>
              {currentQuestion.id <= 12 && (
                <button onClick={() => handleClick(currentQuestion.id, "No")}>
                  <PTag>{t("No")} </PTag>
                </button>
              )}
            </div>
            {currentQuestion.id <= 12 && (
              <div className={styles.footer}>
                <div>
                  {currentQuestion.id} из {questions.length - 1}
                </div>
              </div>
            )}
          </div>
        </>
      )}
      {step === "final" && (
        <div className={styles.result}>
          <PTag
            variant="lg"
            style={{ color: "var(--primary-color)", textAlign: "center" }}
          >
            {t("quiz-result")}
          </PTag>
          <PTag style={{ marginTop: 10 }}>
            {t("quiz-your-result")}
            <span style={{ color: finalText?.color }}>
              "{finalText?.title()}"
            </span>
            . {t("quiz-your-score")}
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
          <PTag style={{ textAlign: "justify" }}>{finalText?.text()}</PTag>
        </div>
      )}
    </div>
  );
};
