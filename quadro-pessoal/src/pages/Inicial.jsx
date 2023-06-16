import React from 'react';

import imagem from '../assets/image/image11.png';
import image from '../assets/image/image14.png';
import fundo from '../assets/image/image16.png';

import'../../src/styles/Inicial.css';
import { useNavigate } from 'react-router-dom';

const Inicial = () => {
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate('/pesquisa');
  };

  return (
    <div className='body'>
      <nav>
        <img src={image} className='img-logo'/>
        {/* <div className='logo'>Logo</div>
        <div className='logo'>.</div> */}
      </nav>

      <div className='wrapper'>
        <div className='cols cols0'>
          <span className='topline'>Bem-vind(o) ao</span>
          <h1 className='texto'>Pesquisa no </h1>
          <h1 className='texto'>Quadro de Pessoas</h1>
          <button onClick={onClickButton}>Buscar</button>
        </div>
        
        <div className='cols cols1'>
          <div className='imgbox'>
            <img src={imagem} className='img-busca'/> 

          </div>
          <img src={fundo} className='img-fundo'></img>
        </div>

      </div>

    </div>
  );
}

  
  
  export default  Inicial;
 


