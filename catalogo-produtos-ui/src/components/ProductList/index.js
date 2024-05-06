import React, { useState, useEffect } from 'react';
import './style.css';
import ProductCard from '../ProductListCard'; // Componente de card de produto
// import { getAllProducts, deleteProduct } from '../../services/DataService'; // do arquivo dados.js
import { getAllProducts, deleteProduct } from '../../services/ApiService'; //  da API beckend


function ProductList({ searchTerm }) {
  const [products, setProducts] = useState([

    
  ]);

  
  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getAllProducts();

     // const allProduto = await 

     console.log('Response data Product:', allProducts);

      // Filtra os produtos baseados no searchTerm
      const filteredProducts = allProducts.filter(product =>
        product.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.id.toString() === searchTerm.trim()
      );
      setProducts(filteredProducts);
    };

    fetchProducts();
  }, [searchTerm]);
 

  /*
  useEffect(() => {
   // setIsLoading(true);
   fetch("http://localhost:4000/api/produtos")
     .then((response) => response.json())
     .then((data) => {
      setProducts(data);
//setIsLoading(false);

console.log('Response data:', data);
     })
     .catch((err) => {
       console.error(err);
       // setIsLoading(false);
     });
 }, []);

 const filteredProdutos = products.filter((produto) => {
   return produto.nome.toLowerCase().includes(searchTerm.toLowerCase());
 });
   */




  ///////////

  const handleDelete = async (id) => {
    await deleteProduct(id);  // Chama a função de deletar produto do serviço de dados
    const updatedProducts = products.filter(product => product._id !== id);
    setProducts(updatedProducts);  // Atualiza o estado para refletir a lista modificada
};

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product._id} product={product} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default ProductList;
