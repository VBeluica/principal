import React from 'react';

import imagem from '../assets/image/image11.png';
import image from '../assets/image/image 14.png';
import group from '../assets/image/image13.png';
import groups from '../assets/image/image10.png';
import icone from '../assets/icons/icons8-lupa-50.png';
import'../../src/styles/Inicial.css';

function Page() {
    return (
      
      <div className="App">
        <header className="App-header">
          <img src={imagem} className="App-logo"  />
          <img src={image} className='Inss'/>
          <img src={groups} className="formas"/>
          <p> Bem-vindo(a) ao </p>
          <h1>Pesquisa no Quadro de Pessoal </h1>
          <img src={group} className="forma"/>
          <button className="submit" > <img src = {icone} className='icon'/>
          <h4>Buscar </h4>
         
          </button>
         
        </header>
      </div>
    );
  }
  
  export default Page;
  