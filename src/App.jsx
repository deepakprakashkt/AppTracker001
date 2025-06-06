import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from "./pages/index";
import Notfound from './pages/Notfound';

const App = () => {
  return (
    <>
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="*" element={<Notfound />} />

  </Routes>
</BrowserRouter>

    </>


    // <Index />
  );
};

export default App;
