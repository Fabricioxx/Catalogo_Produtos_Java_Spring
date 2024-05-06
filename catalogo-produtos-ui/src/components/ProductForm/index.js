import React, { useState, useEffect } from 'react';
import './style.css';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById, addProduct, updateProduct } from '../../services/ApiService'; // da API backend
//import { getProductById, addProduct, updateProduct } from '../../services/DataService'; // do arquivo dados.js

function ProductForm() {
    const [product, setProduct] = useState({
        id: '',
        nome: '', 
        preco: '', 
        descricao: '', 
        imageUrl: 'https://via.placeholder.com/150',
        categoria: '',
    });
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const fetchProduct = async () => {
                try {
                    const data = await getProductById(id);
                    // Certifique-se de que todos os campos estão definidos
                    setProduct({
                        id: data.id || '',
                        nome: data.nome || '',
                        preco: data.preco || '',
                        descricao: data.descricao || '',
                        imageUrl: data.imageUrl || '',
                        categoria: data.categoria || ''  // Suponha que o campo `category` exista no objeto de dados
                    });
                } catch (error) {
                    console.error('Erro ao buscar o produto', error);
                }
            };
            fetchProduct();
        } else {
            // Limpa o formulário quando não há ID
            setProduct({id: '', nome: '', preco: '', descricao: '',imageUrl: 'https://via.placeholder.com/150', categoria: '' });
        }
    }, [id]);

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formattedProduct = {
          // _id: product._id,
    nome: product.nome,
    preco: product.preco, // Alterado de "price" para "preco"
    descricao: product.descricao,
    imageUrl: product.imageUrl,
    categoria: product.categoria
        };
        if (id) {
            await updateProduct(id, formattedProduct);
            navigate(`/details/${id}`);
        } else {
            await addProduct(formattedProduct);
            navigate('/');
        }
    };

    return (
        <form className="product-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" name="nome" value={product.nome} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="preco">Preço</label>
                <input type="number" id="preco" name="preco" value={product.preco} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="descricao">Descrição</label>
                <input type="text" id="descricao" name="descricao" value={product.descricao} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="categoria">Categoria</label>
                <input type="text" id="categoria" name="categoria" value={product.categoria} onChange={handleChange} required />
            </div>
            <button type="submit">{id ? 'Atualizar' : 'Adicionar'}</button>
            <button type="button" onClick={() => navigate(-1)}>Cancelar</button>
        </form>
    );
}

export default ProductForm;
