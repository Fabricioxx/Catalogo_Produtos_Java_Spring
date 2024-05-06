import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Detalhes.style.css';
//import { getProductById } from '../services/DataService'; // do arquivo dados.js
import { getProductById } from '../services/ApiService'; // do backend API

function Detalhes() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const fetchProduto = async () => {
      try {
        const dados = await getProductById(id); // Assegure-se de que o ID seja um número
        setProduto(dados);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar o produto', error);
        setError('Não foi possível encontrar o produto.');
        setLoading(false);
      }
    };

    fetchProduto();
  }, [id]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>; // Exibe a mensagem de erro
  }

  if (!produto) {
    return <div>Produto não encontrado.</div>; // Caso não haja erro, mas o produto não exista
  }

  return (
    <div className="detalhes-container">
      <img src={produto.imageUrl} alt={produto.nome} />
      <h1>{produto.nome}</h1>
      <p>Código: {produto.id}</p>
      <p>{produto.descricao}</p>
      <p>Preço: ${produto.preco}</p>
      <p>{produto.categoria}</p>
      <button onClick={() => window.history.back()}>Voltar</button>
    </div>
  );
}

export default Detalhes;

