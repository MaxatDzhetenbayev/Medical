import styles from "./Loading.module.scss";
import { Dna } from "react-loader-spinner";

export const Loading = () => {
  return (
    <div className={styles.root}>
      <Dna
        visible={true}
        height="180"
        width="180"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};
