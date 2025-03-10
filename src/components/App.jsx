import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import PopupPage from "./PopupPage";
import React, {useState} from "react";
import {Box, Button, Modal} from "@mui/material";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/popup" element={<PopupPage />} />
            </Routes>
        </Router>
    );
}
function PopupPage() {
    return (
        <div>
            <h2>Create Event</h2>
            <a href="/">Go Back</a>
        </div>
    );
}


export default App;
