import React from 'react';
import { Routes, Route, useLocation, Navigate} from "react-router-dom";
import './App.css';

// pages
import Home from './pages/Home';

// import { useApi } from './hooks/use-api';

function App() {
  // const { response } = useApi();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
