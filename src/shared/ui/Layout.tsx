import React, { type ReactNode } from "react";
import { Outlet } from "react-router-dom";
type Props = {
  headerSlot: ReactNode;
  footerSlot: ReactNode;
  sidebarSlot?: ReactNode;
};

export const Layout = ({ footerSlot, headerSlot, sidebarSlot }: Props) => {
  return (
    <>
      {headerSlot}
      <div>
        <div>
          <Outlet />
        </div>
        {sidebarSlot && <aside>{sidebarSlot}</aside>}
      </div>
      {footerSlot}
    </>
  );
};
