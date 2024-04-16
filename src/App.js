import React from "react";
import { BrowserRouter as Router,Routes, Route, Switch } from 'react-router-dom';
import './styles/global.css';

import AppRouter from "./routes/AppRouter";
import WebsiteRouter from "./routes/WebsiteRouter";
import "./styles/global.css";

const App = () => {
  return (
    <div className="app-container">
    <Router>
      <Routes>
        {/* <Route path="/app" element={<AppRouter/>} /> */}
        <Route path="*" element={<WebsiteRouter />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
