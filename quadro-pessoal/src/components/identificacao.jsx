import React from 'react';
import '../../src/styles/identificacao.css';
import { Grid } from '@mui/material';
import Table from '@mui/material/Table';


const Tabela = () => {
  return (
    <div>

    <h3 style={{textAlign:'center', fontFamily:'Inter', color: 'rgba(0, 0, 0, 0.75)', fontSize:'20px', padding:'10px'}}>Nome: Vera Lucia Bezerra da Silva </h3>
    <h4 style={{textAlign:'center', fontFamily:'Inter', color: 'rgba(0, 0, 0, 0.75)', fontSize:'15px'}}>Identificação</h4>
    <Table sx={{ minWidth: 650 }} aria-label="caption table" >
    <table className="tabela">
    
      <tbody>
        <tr>
          <td className="coluna-primeira-linhaluna">SIAPE</td>
          <td className="coluna-primeira-linhaluna">Identificação unica</td>
          <td className="coluna-primeira-linhaluna">SIAPEcad</td>
          <td className="coluna-primeira-linhaluna">Situação funcional</td>
          <td className="coluna-primeira-linhaluna">Data de cadastramento no SIAPE</td>
        </tr>
        <tr>
          <td className='coluna'> 3301074</td>
          <td className='coluna'>03301074-9</td>
          <td className='coluna'>00000001</td>
          <td className='coluna'>70- ESTAGIARIO</td>
          <td className='coluna'> 01/08/2022</td>
        </tr>
      </tbody>
    </table>
   </Table>
   </div>
  );
}

export default Tabela;