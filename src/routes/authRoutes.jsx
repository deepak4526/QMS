import React from "react";
import { Route, Routes } from "react-router-dom";
import LogIn from "../Auth/login";

const ErrorScreen = React.lazy(() => import("../404"));

const AuthRoutes = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="login" element={<LogIn />} />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
    </React.Suspense>
  );
};

export default AuthRoutes;
