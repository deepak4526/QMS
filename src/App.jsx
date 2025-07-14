import { ConfigProvider } from "antd";
import AdminApp from "./adminDashboard/adminApp";
import "./App.css";
import QmsApp from "./qmsForm/qmsApp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

const ErrorScreen = React.lazy(() => import("./404"));

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "rgb(4, 116, 184)",
          borderRadius: 2,
        },
      }}
    >
      <div className="App h-screen">
        <BrowserRouter>
          <Routes>
            <Route path="/admin/*" element={<AdminApp />} />
            <Route path="/*" element={<QmsApp />} />
            <Route
              path="*"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <ErrorScreen />
                </React.Suspense>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </ConfigProvider>
  );
}

export default App;
