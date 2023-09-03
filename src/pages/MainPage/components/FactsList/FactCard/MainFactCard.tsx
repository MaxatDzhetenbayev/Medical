import { HTag } from "../../../../../shared/ui/Head/HTag";
import { NavLink } from "react-router-dom";
import { motion} from "framer-motion";

import styles from "./MainFactCard.module.scss";
interface Props {
  img: string;
  path: string;
  title: () => string;
}

export const MainFactCard = ({ img, path, title }: Props) => {
  const divStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: {
          ease: "easeInOut",
        },
      }}
      className={styles.root}
    >
      <NavLink to={path}>
        <div className={styles.image} style={{ ...divStyle }}></div>
        <div className={styles.content}>
          <HTag variant="h4">{title()}</HTag>
        </div>
      </NavLink>
    </motion.div>
  );
};
