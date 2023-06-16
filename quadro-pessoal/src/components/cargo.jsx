import React from 'react';
import '../styles/cargo.css'

const Cargo = () => {
  return (
    <div>
       <h3 style={{textAlign:'center', fontFamily:'Inter', color: 'rgba(0, 0, 0, 0.75)', fontSize:'15px'}}>Cargo Emprego</h3>
    <table className="tabelaCargo" >
      <tbody>
        <tr>
          <td className="linha">Grupo/Cargo</td>
          <td className="linha">Niv-clas-Pad</td>
          <td className="linha">Código da vaga</td>

        </tr>
        <tr>
          <td className='col'> 3301074</td>
          <td className='col'>03301074-9</td>
          <td className='col'>00000001</td>
    
        </tr>
      </tbody>
    </table>
    </div>
  );
}

export default Cargo;