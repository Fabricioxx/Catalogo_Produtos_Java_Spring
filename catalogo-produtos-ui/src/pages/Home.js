import {React, useState } from "react";
import './Home.style.css';
import Search from "../components/Search"
import ProductList from "../components/ProductList";


/// 404 - Not Found page - com uma imagem de erro
function Home() {

  const [searchTerm, setSearchTerm] = useState("");

  function handleTermoDeBusca(termo) {
    setSearchTerm(termo); // Atualiza o estado com o termo de busca
  }



  return (

    <div className="home">

      
      <h1>Catalogo</h1>
      <Search onTermoDeBusca={handleTermoDeBusca} />

      <ProductList searchTerm={searchTerm} /> {/* Passa o termo de busca para o ProductList */}


    </div>

  );

}
  export default Home;
