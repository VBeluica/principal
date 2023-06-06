import React from "react";
import imagemInss from '../assets/image/image12.png'

function Header(){
    return(
        <header style={{background: 'white', padding: '5px'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                <img src={imagemInss} alt= 'Imagem Inss' style={{width: '100px', height:'auto', marginRight:'10px', borderRight: '1px solid black'}}></img>
                <span style={{fontFamily:'Inter', fontSize:'20px'}}>Pesquisa no Quadro de Pessoal</span>
            </div>
            <div style={{width:'100%', border:'1px solid rgba(0, 0, 0, 0.10)', margin:'10px 0', display:'flex', justifyContent:'center'}}></div>
        </header>
    );
}

export default Header;

