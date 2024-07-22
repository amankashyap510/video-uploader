import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateAccount from './pages/CreateAccount';
import Login from './pages/Login';
import UploadData from './pages/UploadData';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CreateAccount />} />
                <Route path="/register" element={<CreateAccount />} />
                <Route path="/create-account" element={<CreateAccount />} />
                <Route path="/login" element={<Login />} />
                <Route path="/upload-data" element={<UploadData />} />
            </Routes>
        </Router>
    );
}

export default App;
