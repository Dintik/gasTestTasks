import React from "react";
import { HomePage } from "./pages/home/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
