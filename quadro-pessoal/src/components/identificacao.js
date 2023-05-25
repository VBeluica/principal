import React from 'react';
import './identificacao.css';

const Tabela = () => {
  return (
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
  );
}

export default Tabela;