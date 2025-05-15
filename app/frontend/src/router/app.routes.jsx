import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import App from "../App";
import HomeAdmin from "../pages/Admin/Home/home";
import PublicRoute from "./public.routes";
import PrivateRoutes from "./private.routes";
import About from "../pages/Admin/About/About";
import Profile from "../pages/Admin/Profile/Profile";
import Products from "../pages/Admin/Products/Products";
import Site from "../pages/Public/site";
import Auth from "../pages/Public/Auth";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota pública - apenas /app */}
        <Route path="/app" element={
          <PublicRoute>
            <Site />
          </PublicRoute>
        } />

        <Route path="/login" element={
          <PublicRoute>
            <Auth />
          </PublicRoute>
        } />

        {/* Rotas privadas - agrupadas */}
        <Route element={<PrivateRoutes />}>
          <Route element={<App />}>
            <Route path="/admin_home" element={<HomeAdmin />} />
            <Route path="/admin_about" element={<About />} />
            <Route path="/admin_profile" element={<Profile />} />
            <Route path="/admin_products" element={<Products />} />
          </Route>
        </Route>

        {/* Redirecionamento para /app como fallback */}
        <Route path="*" element={<Navigate to="/app" />} />
      </Routes>
    </BrowserRouter>
  );
}