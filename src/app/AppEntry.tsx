import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { AppRouter } from "./AppRouter.tsx";
import "./index.css";
import "../shared/internationalization/i18n.ts";
import "react-quill/dist/quill.snow.css";
import "../shared/internationalization/changeSiteName.ts";
import { Loading } from "../shared/ui/Loading/Loading.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <RouterProvider router={AppRouter()} />
    </Suspense>
  </React.StrictMode>
);
