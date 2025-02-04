import Layout from "../components/Layout";
import { Route, Routes } from "react-router-dom";
import { AUTH_ROUTES } from "./auth";
import { DASHBOARD_ROUTES } from "./dashboard";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {AUTH_ROUTES}
        {DASHBOARD_ROUTES}
      </Route>
    </Routes>
  );
};

export default AppRoutes;