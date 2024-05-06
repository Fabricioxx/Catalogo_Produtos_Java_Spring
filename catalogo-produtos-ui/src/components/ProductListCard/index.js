import  React from 'react';
import { Link , useNavigate } from "react-router-dom";
import './style.css';  // CSS para o card

function ProductCard({ product, onDelete }) {

  const navigate = useNavigate();  // Cria uma instância de useNavigate

  // Função para navegar para a página de edição
  const handleEdit = () => {
    navigate(`/edit/${product.id}`); // Navega para a página de edição
  };




  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.nome} />
      <h3>{product.nome}</h3>
      <p className="product-code">Cod: {product.id}</p> {/* Adicionado código do produto */}
      <p>{product.descricao}</p>
      <p><b>Preço:</b> ${product.preco}</p>
      <p>{product.categoria}</p>
      <div className="actions">
        <button onClick={() => onDelete(product.id)}>Deletar</button>
        <Link to={`/details/${product.id}`}><button>Detalhes</button></Link> {/* Botão de detalhes usando Link */}
        <button onClick={handleEdit}>Editar</button> {/* Adicionado evento onClick para navegar */}
      </div>
    </div>
  );
}

export default ProductCard;

