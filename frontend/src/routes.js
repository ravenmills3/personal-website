import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/home.jsx";
import LoginPage from "./pages/login.jsx";
import SettingsPage from "./pages/settings.jsx";
import PrivateRoute from "./helpers/privateRoutes.jsx";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route index={true} path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="" element={<PrivateRoute />}>
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
