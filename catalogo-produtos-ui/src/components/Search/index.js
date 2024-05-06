import React, { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import './style.css'; // Certifique-se de que os estilos estão definidos no arquivo CSS
import { debounce } from 'lodash'; // limitar a frequência com que a função de busca é chamada

function Search(props) {
  const [termoDeBusca, setTermoDeBusca] = useState("");
  const navigate = useNavigate();

  // Função para navegar para a página de adicionar novo item
  const handleAddNewItem = () => {
    navigate('/create'); // Supondo que a rota '/create' leva ao formulário de adição de novo item
  };


// Função debounce para otimizar a busca
const debouncedSearch = debounce(value => {
  props.onTermoDeBusca(value);
}, 300);


  function handleChange(event) {
    const value = event.target.value;
    props.onTermoDeBusca(value); // Atualiza o termo de busca no componente pai
    setTermoDeBusca(value); // Atualiza o estado local com o novo valor
    debouncedSearch(value);
  }



  useEffect(() => {
    return () => {
      debouncedSearch.cancel(); // Cancela o debounce se o componente for desmontado
    };
  }, []);



  return (
    <div className="search-container">
      <div className="search-box">
        <input
          type="search"
          className="search-input"
          placeholder="Digite o nome do Item ou o ID"
          aria-label="Digite o nome do Item ou o ID"
          value={termoDeBusca}
          onChange={handleChange}
        />

      <button onClick={handleAddNewItem} className="add-item-button">
          Adicionar Item
        </button>

      </div>
    </div>
  );
}

export default Search;
