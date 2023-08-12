import { Footer, Header, Layout, SideBar } from "../../shared/ui";

export const LayoutWithSidedar = (
  <Layout
    footerSlot={<Footer />}
    headerSlot={<Header />}
    sidebarSlot={<SideBar />}
  />
);
