import React from 'react';


import Pesquisa from './pages/pesquisa';
import Page from './pages/Inicial';
import Inicial from './pages/Inicial';
import { Outlet, Link, Route, Routes } from 'react-router-dom';


export default function App() {
  return (
    <Routes>
   
      <Route path='pesquisa' element={<Pesquisa />} />
      <Route path="/" element={<Page />} />
      <Route path="/" render={(props) => <Inicial {...props} />} />
      </Routes>

  );
}

