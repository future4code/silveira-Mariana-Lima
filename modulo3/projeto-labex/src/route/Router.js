import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import ListTripsPage from "../pages/viagens/ListTripsPage";
import ApplicationFormPage from "../pages/inscrever/ApplicationFormPage";
import LoginPage from "../pages/login/LoginPage";
import AdminHomePage from "../pages/pageadmin/AdminHomePage";
import CreateTripPage from "../pages/criar/CreateTripPage";
import TripDetailsPage from "../pages/detalhes/TripDeatailsPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/trips/list" element={<ListTripsPage />} />
        <Route path="/trips/application" element={<ApplicationFormPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/trips/list" element={<AdminHomePage />} />
        <Route path="/admin/trips/create" element={<CreateTripPage />} />
        <Route path="/admin/trips/:id" element={<TripDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
