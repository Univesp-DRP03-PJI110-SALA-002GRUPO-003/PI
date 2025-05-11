import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "../App";
import HomeAdmin from "../pages/Admin/Home/home";
import PublicRoute from "./public.routes";
import About from "../pages/Admin/About/About";
import Profile from "../pages/Admin/Profile/Profile";
import Products from "../pages/Admin/Products/Products";
import Site from "../pages/Public/site";

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

<Route path="/admin_about" element={
          <PublicRoute>
            <About />
          </PublicRoute>
        }/>

<Route path="/admin_profile" element={
          <PublicRoute>
            <Profile />
          </PublicRoute>
        }/>

<Route path="/admin_products" element={
          <PublicRoute>
            <Products />
          </PublicRoute>
        }/>

<Route path="/app" element={
          <PublicRoute>
            <Site />
          </PublicRoute>
        }/>


        </Route>
      </Routes>
    </BrowserRouter>
  );
}