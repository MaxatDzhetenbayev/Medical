import { useEffect } from "react";
import axios from "axios";
import { serverPath } from "../../shared/consts/consts";
import { MainContent } from "./components/Content/MainContent";
import { MainFactsList } from "./components/FactsList/MainFactsList";
import { MainTest } from "./components/Test/MainTest";
import { Welcome } from "./components/Welcome/Welcome";

import styles from "./MainPages.module.scss";

export const MainPage = () => {
  useEffect(() => {
    axios.get(`${serverPath}/`);
  }, []);

  return (
    <section className={styles.root}>
      <Welcome />
      <MainContent />
      <MainTest />
      <MainFactsList />
    </section>
  );
};
