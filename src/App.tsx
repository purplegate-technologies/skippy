// import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./components/layout/Layout";
import ActivityLog from "./pages/ActivityLog/ActivityLog";
import Advertisements from "./pages/Advertisements/Advertisements";
import Blank from "./pages/blank/Blank";
import Dashboard from "./pages/dashboard/Dashboard";
import Finance from "./pages/Finance/Finance";
import LogIn from "./pages/logout/LogIn";
import Logout from "./pages/logout/LogIn";
import ManageUsers from "./pages/ManageUsers/ManageUsers";
import Traffic from "./pages/Traffic/Traffic";

function App() {
  return (
    <Routes>
      <Route path="login"  element={<LogIn />} />
      <Route path="*"  element={<Blank />} />

      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="advertisements" element={<Advertisements />} />
        <Route path="traffic" element={<Traffic />} />
        <Route path="finance" element={<Finance />} />
        <Route path="manage-users" element={<ManageUsers />} />
        <Route path="activity-log" element={<ActivityLog />} />
      </Route>
    </Routes>
  );
}

export default App;
