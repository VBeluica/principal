import Box from '@mui/material/Box';
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import { Select, MenuItem, Grid, Button } from '@mui/material';
import React, { useState } from 'react';
import SearchIcon from "@mui/icons-material/Search";
import  AppBar  from "@mui/material/AppBar";
import  InputBase  from "@mui/material/InputBase";
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';


import '../../src/pages/Tabela.css'
import Tabela from "../components/identificacao";
import Cargo from "../components/cargo";
import Dados from "../components/Dados";
import Hora from "../components/Horas";
import Header from "../components/Hearder";
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';

const Pesquisa = () => {
  const [selectedUf, setSelectedUf] = useState('SUF');
  const [selectedOption1, setSelectedOption1] = useState('OS');
  const [selectedOption2, setSelectedOption2] = useState('GEX');
  const [selectedOption3, setSelectedOption3] = useState('OL');
  const [selectedOption4, setSelectedOption4] = useState('ST');

  const handleChangeUf = (event) => {
    setSelectedUf(event.target.value);
  };

  const handleChangeOption1 = (event) => {
    setSelectedOption1(event.target.value);
  };

  const handleChangeOption2 = (event) => {
    setSelectedOption2(event.target.value);
  };

  const handleChangeOption3 = (event) => {
    setSelectedOption3(event.target.value);
  };

  const handleChangeOption4 = (event) => {
    setSelectedOption4(event.target.value);
  };

  const ufs = [
    { value: 'AC', label: 'Acre' },
    { value: 'AL', label: 'Alagoas' },
    { value: 'AP', label: 'Amapá' },
    { value: 'AM', label: 'Amazonas' },
    { value: 'BA', label: 'Bahia' },
    { value: 'CE', label: 'Ceará' },
    { value: 'DF', label: 'Distrito Federal' },
    { value: 'ES', label: 'Espírito Santo' },
    { value: 'GO', label: 'Goiás' },
    { value: 'MA', label: 'Maranhão' },
    { value: 'MT', label: 'Mato Grosso' },
    { value: 'MS', label: 'Mato Grosso do Sul' },
    { value: 'MG', label: 'Minas Gerais' },
    { value: 'PA', label: 'Pará' },
    { value: 'PB', label: 'Paraíba' },
    { value: 'PR', label: 'Paraná' },
    { value: 'PE', label: 'Pernambuco' },
    { value: 'PI', label: 'Piauí' },
    { value: 'RJ', label: 'Rio de Janeiro' },
    { value: 'RN', label: 'Rio Grande do Norte' },
    { value: 'RS', label: 'Rio Grande do Sul' },
    { value: 'RO', label: 'Rondônia' },
    { value: 'RR', label: 'Roraima' },
    { value: 'SC', label: 'Santa Catarina' },
    { value: 'SP', label: 'São Paulo' },
    { value: 'SE', label: 'Sergipe' },
    { value: 'TO', label: 'Tocantins' },
  ];

  return (
    <React.Fragment>
      <Header />  
      <Box 
      style={{
        background: '#9F9F9F17', 
        padding:'5px',
        height:'98px',
        
      }}>
      
      <Grid container alignItems="center" spacing={18}>
        <Grid item xs={12} sm={6} md={2.5} >
          <AppBar position='static' 
          style={{
            background: 'white', 
            borderRadius:'10px', 
            height:'30',
            margin:'10px',
            width: '300px',
            position:'relative'
        
          }}>
            <InputBase placeholder="Pesquisa..." 
            style={{ 
              color: 'rgba(0, 0, 0, 0.66)',
             
            }}/>
            
            <SearchIcon
             style={{
              background:'blue', 
              borderRadius:'10px',
              marginLeft:'275px',
              position: 'absolute',
             width:'30px',
              height:'33px'
               // Posicionamento absoluto para o ícone
              // Posicionamento do ícone em relação ao canto direito
              // Alinhar verticalmente o ícone no centro do AppBar
               // Alinhar verticalmente o ícone no centro do AppBar
            
              }}/>
            
          </AppBar>
        </Grid>

        <Grid item xs={12} sm={6} md={1.5}>
          <Select value={selectedUf} onChange={handleChangeUf} fullWidth 
              style={{
                borderRadius:'10px',
                width:'115px',
                height:'33px',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                border: '1px solid rgba(0, 0, 0, 0.3)',
                background:'white'
              }}>
                <MenuItem value="SUF">Selecione um UF</MenuItem>
                {ufs.map((uf) => (
                <MenuItem key={uf.value} value={uf.value}>
                  {uf.label}
                </MenuItem>
                ))}
          </Select>      
        </Grid>
        
        <Grid item xs={12} sm={6} md={1.5}>
          <Select value={selectedOption1}
          onChange={handleChangeOption1} fullWidth 
          style={{
            borderRadius:'10px',
            width:'115px',
            height:'33px',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            border: '1px solid rgba(0, 0, 0, 0.3)',
            background:'white'
          }}>
            <MenuItem value="OS">Orgão Sup.</MenuItem>
          </Select>
        </Grid>
        
        <Grid item xs={12} sm={6} md={1.5} >
          <Select value={selectedOption2} onChange={handleChangeOption2} fullWidth 
          style={{
            borderRadius:'10px',
            width:'115px',
            height:'33px',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            border: '1px solid rgba(0, 0, 0, 0.3)',
            background:'white'
          }}>
            <MenuItem value="GEX">GEX</MenuItem>
          </Select>
        </Grid>
        
        <Grid item xs={12} sm={6} md={1.5} >
          <Select value={selectedOption3} onChange={handleChangeOption3} fullWidth
          style={{
            borderRadius:'10px',
            width:'115px',
            height:'33px',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            border: '1px solid rgba(0, 0, 0, 0.3)',
            background:'white'
          }}>
            <MenuItem value="OL"> OL</MenuItem>
          </Select>
        </Grid>
        
        <Grid item xs={12} sm={6} md={1.5} >
          <Select value={selectedOption4} onChange={handleChangeOption4} fullWidth 
          style={{
            borderRadius:'10px',
            width:'115px',
            height:'33px',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            border: '1px solid rgba(0, 0, 0, 0.3)',
            background:'white'
            }}>
              <MenuItem value="ST">Situação</MenuItem>
          </Select>
        </Grid>
        
        <Grid item xs={12} sm={6} md={2}>
          <Button 
          style={{
            background: '#0138A5',
            borderRadius: '40px',
            height:'30px'
            }}>
              Pesquisar
          </Button>
            </Grid>
        </Grid>
        <p>Filtros</p>
        <ReplayRoundedIcon></ReplayRoundedIcon>
        <p>Limpar</p>
      </Box>
     
      <Container 
      style={{
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding:'20px'}}>
  <Box
    sx={{
      bgcolor: "#9F9F9F17",
      height: "70vh",
      width: "150vh",
      
    }}>
    

    </Box>
</Container>

    </React.Fragment>
  );
}

export default Pesquisa;
