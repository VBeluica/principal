import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  onClickButton = () => {
    const { history } = this.props;
    history.push('/dados');
  }
  render() {
    return (
      <main>
        <div>
          <h3>Bem-vindo(a) ao</h3>
          <h1>Pesquisa no</h1>
          <h1>Quadro de Perfil</h1>
          <Link to="/Dados">Buscar</Link>
        </div>
        <div>
          <img src="" alt="imagem" />
        </div>
      </main>
    )
  }
}

export default Home;