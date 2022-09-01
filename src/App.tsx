// import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ScrollTop from "./components/scrollTop/ScrollTop";
import RequiredAuth from "./features/auth/RequiredAuth";
import ActivityLog from "./pages/ActivityLog/ActivityLog";
import Advertisements from "./pages/Advertisements/Advertisements";
import Dashboard from "./pages/dashboard/Dashboard";
import Finance from "./pages/Finance/Finance";
import LogIn from "./pages/login/LogIn";
import ManageUsers from "./pages/ManageUsers/ManageUsers";
import Traffic from "./pages/Traffic/Traffic";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserDetails from "./pages/Userdetails/UserDetails";
import Settings from "./pages/Settings/Settings";
import CreateAderts from "./pages/createAderts/CreateAderts";
import CreateVoucher from "./pages/create-voucher/CreateVoucher";
import FinanceDetails from "./pages/finance-details/FinanceDetails";
import AdvertisementDetails from "./pages/advertisements-details/AdvertisementDetails";
import InviteUser from "./pages/InviteUser/InviteUser";
import VoucherDetails from "./pages/VoucherDetails/VoucherDetails";
import ResetPassword from "./pages/login/ResetPassword";
import ActivityOverview from "./pages/ActivityOverview/ActivityOverview";

function App() {
  // const  token  = useAppSelector(selectCurrentToken)
  return (
    <>
      <ToastContainer />
      <Routes>
        {/* public routes */}
        <Route path="reset" element={<ResetPassword />} />
        <Route path="login" element={<LogIn />} />
        <Route path="*" element={<Navigate to='/' />} />

        {/* protected routes */}
        <Route element={<RequiredAuth />}>
          <Route path="create-adverts" element={<CreateAderts />} />
          <Route path="create-vouchers" element={<CreateVoucher />} />
          <Route path="voucher-details" element={<VoucherDetails />} />


          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="advertisements" element={<Advertisements />} />
            <Route path="advertisements/:id" element={<AdvertisementDetails />} />
            <Route path="traffic" element={<Traffic />} />
            <Route path="finance" element={<Finance />} />
            <Route path="finance/:id" element={<FinanceDetails />} />
            <Route path="manage-users" element={<ManageUsers />} />
            <Route path="invite-users" element={<InviteUser />} />
            <Route path="activity-log" element={<ActivityLog />} />
            <Route path="user-details" element={<UserDetails />} />
            <Route path="activity-overview" element={<ActivityOverview />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>

      </Routes>
      <ScrollTop />
    </>
  );
}

export default App;
