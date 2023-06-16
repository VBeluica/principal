import React from 'react';
import Table from '@mui/material/Table';
import '../styles/horas.css'


const Horas = () => {
  return (
  
     <div>
      <h3 style={{textAlign:'center', fontFamily:'Inter', color: 'rgba(0, 0, 0, 0.75)', fontSize:'15px'}}>Jornada de trabalho</h3>
    <Table  >
    <table className="tabelaHora">
      <tbody>
        <tr>
          <td className="coluna-primeira-linhaluna">20 HORAS SEMANAIS</td>
        </tr>
   
      </tbody>
    </table>
   </Table>
   </div>

  );
}

export default Horas;