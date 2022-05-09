import React from "react";
import { BrowserRouter, Router, Route } from "react-router-dom";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";
import ResgisterPage from "../pages/RegisterPage/RegisterPage";

const Routes = () => {
    <BrowserRouter>
        <Router>
            <Route exact path="/" element={<LoginPage/>}/>
            <Route path="/feed" element={<FeedPage/>}/>
            <Route path="/feed/post/:id" element={<PostPage/>}/>
            <Route path="/register" element={<ResgisterPage/>}/>
        </Router>
    </BrowserRouter>
}

export default Routes;