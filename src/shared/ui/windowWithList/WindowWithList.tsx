import styles from "./WindowWithList.module.scss";

type Props = {
  list: any[] | undefined;
};

export const WindowWithList = ({ list }: Props) => {
  return (
    <ul className={styles.root}>
      {list?.map((item) => (
        <li key={item.key}>{item}</li>
      ))}
    </ul>
  );
};
