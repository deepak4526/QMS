import { Route, Routes } from "react-router-dom";
import React from "react";
import MainForm from "../qmsForm/mainForm";
import MainScreen from "../mainScreen";
const ErrorScreen = React.lazy(() => import("../404"));

const QmsFormRoutes = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/qms-form" element={<MainForm />} />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
    </React.Suspense>
  );
};
export default QmsFormRoutes;
