// DataService.js
let productsCache = null;  // Cache local para armazenar os produtos

// Função para carregar todos os produtos
export const getAllProducts = async () => {
    if (!productsCache) {
        const response = await fetch('/assets/data/data.json');
        productsCache = await response.json();
    }
    return productsCache;
};

// Função para buscar um produto por ID
export const getProductById = async (id) => {
    const allProducts = await getAllProducts(); // Carrega produtos do cache ou do JSON
    const product = allProducts.find(product => product.id === parseInt(id));
    if (!product) throw new Error('Produto não encontrado');
    return product;
};

// Função para adicionar um novo produto
export const addProduct = async (product) => {
    const allProducts = await getAllProducts();
    const newId = allProducts.length > 0 ? Math.max(...allProducts.map(p => p.id)) + 1 : 1;
    const newProduct = { ...product, id: newId };
    allProducts.push(newProduct);
    return newProduct;
};

// Função para atualizar um produto existente
export const updateProduct = async (id, updatedProduct) => {
    const allProducts = await getAllProducts();
    const index = allProducts.findIndex(p => p.id === parseInt(id));
    if (index === -1) throw new Error('Produto não encontrado');
    allProducts[index] = { ...allProducts[index], ...updatedProduct };
    return allProducts[index];
};

// Função para deletar um produto
export const deleteProduct = async (id) => {
    const allProducts = await getAllProducts();
    const index = allProducts.findIndex(p => p.id === parseInt(id));
    if (index === -1) throw new Error('Produto não encontrado');
    const newData = allProducts.filter(p => p.id !== parseInt(id));
    productsCache = newData;  // Atualiza o cache depois de remover o produto
    return newData;
};
