import React, { useEffect, useState } from "react";
import { HTag } from "../../shared/ui/Head/HTag";

interface Question {
  id: number;
  text: string;
  score: number;
}

interface answer {
  title: string;
  text: string;
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
  },
  {
    title: "Умеренный риск",
    text: "Ваши результаты указывают на среднюю вероятность наличия симптомов колоректального рака. Однако, при возрасте старше 50 лет необходимо обязательно пройти скрининг на колректальный рак.",
  },
  {
    title: "Повышенный риск колоректального рака",
    text: "Ваши результаты указывают на предположительную вероятность наличия симптомов колоректального рака. Это может означать, что Вы можете быть подвержены колоректальному раку. Мы предлагаем Вам обратиться к своему лечащему врачу в ПМСП.",
  },
  {
    title: "Высокий риск колоректального рака",
    text: "Ваши результаты указывают на предположительную вероятность наличия симптомов колоректального рака. Это может означать, что Вы можете быть подвержены колоректальному раку.Мы предлагаем Вам обратиться к своему лечащему врачу в ПМСП.",
  },
];

export const QuizPage = () => {
  const [answers, setAnswers] = useState<{
    [questionId: number]: "Да" | "Нет";
  }>({});
  const [score, setScore] = useState<number>(0);
  const [finalText, setFinalText] = useState<answer>({ text: "", title: "" });
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
        if (answers[5] === "Да" && answers[6] === "Да") {
          setFinalText(answerList[3]);
          return;
        }
      }
    }
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

      {questions.map((question) => (
        <div key={question.id}>
          <p>{question.text}</p>
          <label>
            Да
            <input
              type="radio"
              name={`question-${question.id}`}
              value="Да"
              checked={answers[question.id] === "Да"}
              onChange={() => handleAnswerChange(question.id, "Да")}
            />
          </label>
          <label>
            Нет
            <input
              type="radio"
              name={`question-${question.id}`}
              value="Нет"
              checked={answers[question.id] === "Нет"}
              onChange={() => handleAnswerChange(question.id, "Нет")}
            />
          </label>
        </div>
      ))}
      <button onClick={handleSubmit}>Подсчитать результат</button>

      {visible && (
        <div>
          <p>Ваш результат: {score} баллов</p>
          <div>
            <h3>{finalText.title}</h3>
            <p>{finalText.text}</p>
          </div>
        </div>
      )}
    </div>
  );
};
