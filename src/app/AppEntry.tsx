import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { AppRouter } from "./AppRouter.tsx";
import "./index.css";
import "../shared/internationalization/i18n.ts";
import "react-quill/dist/quill.snow.css";
import "../shared/internationalization/changeSiteName.ts"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={AppRouter()} />
    </Suspense>
  </React.StrictMode>
);
