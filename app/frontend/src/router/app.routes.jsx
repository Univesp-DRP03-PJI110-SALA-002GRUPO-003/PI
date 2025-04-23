import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "../App";
import HomeAdmin from "../pages/Admin/Home/home";
import PublicRoute from "./public.routes";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<App />}>

        <Route path="/admin_home" element={
          <PublicRoute>
            <HomeAdmin />
          </PublicRoute>
        }/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}