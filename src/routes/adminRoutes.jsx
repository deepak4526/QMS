import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import QMSEntries from "../adminDashboard/qmsEntries/qmsEntries";
import UsersList from "../adminDashboard/usersList";
import ProgrammeList from "../adminDashboard/programmerList";
const ErrorScreen = React.lazy(() => import("../404"));

const AdminRoutes = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Redirect from root admin path to qms-entries */}
        <Route
          path="/"
          element={<Navigate to="/admin/qms-entries" replace />}
        />
        <Route path="/qms-entries" element={<QMSEntries />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/programmes" element={<ProgrammeList />} />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
    </React.Suspense>
  );
};
export default AdminRoutes;
