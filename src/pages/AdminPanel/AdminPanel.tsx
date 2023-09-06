import { useEffect, useState } from "react";
import { format } from "date-fns";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Select from "react-select";

import { Container } from "../../shared/ui/Container/Container";
import { serverPath } from "../../shared/consts/consts";

import styles from "./AdminPanel.module.scss";

type CountType = {
  day?: string;
  month?: string;
  count: number;
};

export const AdminPanel = () => {
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

  const [counts, setCounts] = useState<CountType[]>();
  const [period, setPeriod] = useState<string | undefined>("week");

  const formattedDate = (date: string | undefined, type: "week" | "month") => {
    if (date === undefined) return;

    if (type === "week" || type === "month")
      return format(new Date(date), "dd.MM.yyyy");

    return format(new Date(date), "yyyy");
  };

  const getCount = async (period: string | undefined) => {
    const response = await axios.get(
      `${serverPath}/visit_counts?period=${period || "week"}`
    );
    setCounts(response.data);
  };

  useEffect(() => {
    getCount(period);
  }, [period]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Посетители за неделю",
      },
    },
  };

  const data = {
    labels: counts?.map((item) =>
      item.day
        ? formattedDate(item.day, "week")
        : formattedDate(item.month, "month")
    ),
    datasets: [
      {
        data: counts?.map((item) => item.count),
        backgroundColor: "#2397df",
      },
    ],
  };

  const countOptions = [
    { label: "Неделя", value: "week" },
    { label: "Месяцы", value: "month" },
  ];

  return (
    <Container>
      <div className={styles.root}>
        <div className={styles.link_wrapper}> 
          <a
            className={styles.download}
            href="http://localhost:3001/data"
            target="_blank"
          >
            Скачать данные опроса
          </a>
        </div>
        <form
          onChange={(e: React.ChangeEvent<HTMLFormElement>) =>
            setPeriod(e.target.value)
          }
        >
          <Select
            defaultValue={countOptions[0]}
            options={countOptions}
            onChange={(selected) => setPeriod(selected?.value)}
          />
        </form>
        <div className={styles.chart_wrapper}>
          <Bar data={data} options={options} updateMode="resize" />
        </div>
      </div>
    </Container>
  );
};
