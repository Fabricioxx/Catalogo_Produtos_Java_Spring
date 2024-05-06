import axios from 'axios';


const API_BASE_URL = 'http://localhost:8080';

// Função para buscar todos os produtos
export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/produtos`);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar os produtos');
  }
};

// Função para buscar um produto por ID
export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/produtos/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar o produto');
  }
};

// Função para adicionar um novo produto
export const addProduct = async (product) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/produtos`, product);
    return response.data;
  } catch (error) {

    console.log('Erro ao adicionar o produto !!!');


    throw new Error('Erro ao adicionar o produto');
  }
};

// Função para atualizar um produto existente
export const updateProduct = async (id, product) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/produtos/${id}`, product);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao atualizar o produto');
  }
};

// Função para deletar um produto
export const deleteProduct = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/produtos/${id}`);
  } catch (error) {
    throw new Error('Erro ao deletar o produto');
  }
};
