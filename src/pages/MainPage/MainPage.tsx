import styles from "./MainPages.module.scss";
import { MainContent } from "./components/Content/MainContent";
import { MainFactsList } from "./components/FactsList/MainFactsList";
import { MainTest } from "./components/Test/MainTest";
import { Welcome } from "./components/Welcome/Welcome";

export const MainPage = () => {
  return (
    <section className={styles.root}>
      <Welcome />
      <MainContent />
      <MainTest />
      <MainFactsList />
    </section>
  );
};
