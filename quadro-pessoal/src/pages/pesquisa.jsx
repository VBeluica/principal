import React from "react";
import Box from '@mui/material/Box';
import  CssBaseline  from "@mui/material/CssBaseline";
import  Container  from "@mui/material/Container";
import  AppBar  from "@mui/material/AppBar";
import  Toolbar  from "@mui/material/Toolbar";
import  InputBase  from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import Tabela from "../components/identificacao";
import Cargo from "../components/cargo";
import Dados from "../components/Dados";
import Hora from "../components/Horas";
import Header from "../components/Hearder";



const Pesquisa= () => {
  return(
    <React.Fragment>
      <Header/>
      <CssBaseline/>
      <AppBar position='static'>
        <Toolbar sx={{ background: '#eeeeee', display: 'flex', height: '10px' }}>
          <div style={{ display: 'flex', background: 'white', padding: '1rem', borderRadius: '10px', height: '25px' }}>
            <InputBase placeholder="Pesquisa..." style={{ color: '#0138A5' }} />
            <div style={{ position:'absolute',color: 'white', background: '#0138A5',
             width: '35px',height: '30px', top:'17px', marginLeft:'175px', borderRadius:'10px' }}>
              <SearchIcon style={{ color: 'white', width: '100%', height: '100%' }} />
            </div>
          </div>
        </Toolbar>
        </AppBar>
        <Container style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
          <Box sx={{ background: '#eeeeee', padding: '25px', margin: '20px' }}>
            <Box sx={{ marginBottom: '10px' }}> <Tabela /></Box>
            <Box sx={{ marginBottom: '10px' }}><Cargo /></Box>
            <Box sx={{ marginBottom: '10px' }}><Dados /></Box>
            <Box sx={{ marginBottom: '10px' }}><Hora /></Box>
          </Box>
        </Container>
  </React.Fragment>
  );
}
  
export default Pesquisa;
  