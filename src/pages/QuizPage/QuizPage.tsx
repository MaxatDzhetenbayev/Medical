import { useState } from "react";
import { HTag } from "../../shared/ui/Head/HTag";

import styles from "./QuizPage.module.scss";
import { PTag } from "../../shared/ui/Paragraph/PTag";
import { Button } from "../../shared/ui/Button/Button";

interface Question {
  id: number;
  text: string;
  score: number;
}

interface answer {
  title: string;
  text: string;
  color: string;
}

const questions: Question[] = [
  {
    id: 1,
    text: "Вам 50 лет или больше?",
    score: 2,
  },
  {
    id: 2,
    text: "Есть ли у вас полипы в кишечнике?",
    score: 2,
  },
  {
    id: 3,
    text: "У ваших родителей, братьев, сестер или детей были полипы толстой кишки? ",
    score: 2,
  },
  {
    id: 4,
    text: "Есть ли у Вас хронические воспалительные заболевания кишечника, такие как язвенный колит или болезнь Крона?",
    score: 2,
  },
  {
    id: 5,
    text: "У Ваших родителей, детей или супругов был колоректальный рак? ",
    score: 3,
  },
  {
    id: 6,
    text: "Есть ли у вас примеси крови в кале?",
    score: 3,
  },
  {
    id: 7,
    text: "Есть ли у Вас склонность к запорам?",
    score: 1,
  },
  {
    id: 8,
    text: "Употребляете ли Вы каждый день красное мясо?",
    score: 1,
  },
  {
    id: 9,
    text: "Употребляете ли Вы каждый день клетчатку (фрукты, овощи, цельнозерновой хлеб и крупы, орехи и бобы)?",
    score: 1,
  },
  {
    id: 10,
    text: "Употребляете ли вы алкоголь?",
    score: 1,
  },
  {
    id: 11,
    text: "Курите ли Вы?",
    score: 1,
  },
  {
    id: 12,
    text: "Ваша ежедневная деятельность связана с физической активностью?",
    score: 1,
  },
];

const answerList: answer[] = [
  {
    title: "Низкий риск колоректального рака",
    text: "Ваши результаты указывают на низкую вероятность наличия симптомов колоректального рака. Важно помнить, что этот результат не является заключительным диагнозом.",
    color: "#01d124",
  },
  {
    title: "Умеренный риск",
    text: "Ваши результаты указывают на среднюю вероятность наличия симптомов колоректального рака. Однако, при возрасте старше 50 лет необходимо обязательно пройти скрининг на колректальный рак.",
    color: "#f2ff41",
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
  const [answers, setAnswers] = useState<{
    [questionId: number]: "Да" | "Нет";
  }>({});
  const [score, setScore] = useState<number>(0);
  const [finalText, setFinalText] = useState<answer>({
    text: "",
    title: "",
    color: "",
  });
  const [visible, setVisible] = useState<boolean>(false);

  const handleAnswerChange = (questionId: number, answer: "Да" | "Нет") => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const handleAnswer = (score: number) => {
    if (score === 0) {
      setFinalText(answerList[0]);
      return;
    }
    if (score >= 1 && score <= 6) {
      setFinalText(answerList[1]);
      return;
    }
    if (score >= 7 && score <= 13) {
      setFinalText(answerList[2]);
      return;
    }
    if (score >= 14) {
      setFinalText(answerList[3]);
      return;
    }
    //  if (score <= 13) {
    //    for (const key in answers) {
    //      if (answers[5] === "Да" && answers[6] === "Да") {
    //        setFinalText(answerList[3]);
    //        return key;
    //      }
    //    }
    //  }
  };

  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((question) => {
      if (answers[question.id] === "Да") {
        newScore += question.score;
      }
    });
    setScore(newScore);
    handleAnswer(score);
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
                {index + 1}. {question.text}
                <span className={styles.required}>(Обязательно)</span>
              </PTag>
              <div className={styles.labelList}>
                <label className={styles.label}>
                  <PTag variant="sm">Да</PTag>
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value="Да"
                    checked={answers[question.id] === "Да"}
                    onChange={() => handleAnswerChange(question.id, "Да")}
                  />
                </label>
                <label className={styles.label}>
                  <PTag variant="sm">Нет</PTag>

                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value="Нет"
                    checked={answers[question.id] === "Нет"}
                    onChange={() => handleAnswerChange(question.id, "Нет")}
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
            <span style={{ color: finalText.color }}>"{finalText.title}"</span>.
            Ваш балл равен:
            <span style={{ color: finalText.color }}>{score} из 20</span>.
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
          <PTag style={{ textAlign: "justify" }}>{finalText.text}</PTag>
        </div>
      )}
    </div>
  );
};
