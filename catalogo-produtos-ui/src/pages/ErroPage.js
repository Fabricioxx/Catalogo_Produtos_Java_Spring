import React from "react";
import './ErroPage.style.css'; // Certifique-se de que este arquivo CSS contém os estilos necessários
//import errorImage from "././public/assets/images/error-image.jpg"

//<img src={errorImage} alt="Erro" />

function ErroPage() {
  return (
    <div className="error-container">
      
      <img src="/assets/images/error-image.jpg" alt="Erro" />
      <h1>Oops!</h1>
      <p>Desculpe, ocorreu um erro inesperado.</p>
      <button onClick={() => window.history.back()}>Voltar</button>
    </div>
  );
}

export default ErroPage;

