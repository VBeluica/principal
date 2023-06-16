import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';

import Horas from "./components/Horas";
import Tabela from "./components/identificacao";
import JumpToPage from "./pages/Tabelas";
import ExpandButton from "./pages/Tabelas";
import Popover from "./pages/Tabelas";
import Example from "./pages/Tabelas";
import SelectLabels from "./pages/Tabelas";
import Pesquisa from "./pages/pesquisa";
import UfMenu from "./pages/Tabelas";
import Ufs from "./pages/Tabelas";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>
);

