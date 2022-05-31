import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/feed" element={<FeedPage />} />
        <Route exact path="/feed/post/:id" element={<PostPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
