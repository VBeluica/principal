import React from 'react';
import '../../src/styles/cargo.css';

const Cargo = () => {
  return (
    <table className="tabela">
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
  );
}

export default Cargo;