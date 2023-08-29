import { type ReactNode } from "react";
import { Outlet } from "react-router-dom";

import { Wrapper } from "../Wrapper/Wrapper";
import styles from "./Layout.module.scss";

type Props = {
  headerSlot: ReactNode;
  footerSlot: ReactNode;
  sidebarSlot?: ReactNode;
};

export const Layout = ({ footerSlot, headerSlot, sidebarSlot }: Props) => {
  return (
    <div className={styles.root}>
      {headerSlot}
      <Wrapper>
        <div className={styles.container}>
          <div className={styles.content}>
            <Outlet />
          </div>
          {sidebarSlot && (
            <aside className={styles.sidebar}>{sidebarSlot}</aside>
          )}
        </div>
      </Wrapper>

      {footerSlot}
    </div>
  );
};
