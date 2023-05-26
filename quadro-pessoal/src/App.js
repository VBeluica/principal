import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import Pesquisa from './pages/pesquisa';
import Page from './pages/Inicial';
import Tabela from './components/identificacao';
import Cargo from './components/cargo';
import AcccessibleTable from './components/identificacao';


const App = () => {
  return (
  <Routes>
    <Route path="/pesquisa" element={<Pesquisa/>} />
  </Routes>
  );
}

export default Page ;
