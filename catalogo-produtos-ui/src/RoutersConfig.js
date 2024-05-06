import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import ErrorPage from './pages/ErroPage';
import Detalhes from './pages/Detalhes';
import Formulario from './pages/Formulario';



export default function RoutesConfig() {
  console.log('Rendering RoutesConfig');
  return (
      <Routes>
          <Route path='/' element={<Home/>} /> {/* Rota da página inicial */}
          <Route path="/details/:id" element={<Detalhes />} /> {/* Rota para detalhes do produto */}
          <Route path="/edit/:id" element={<Formulario />} /> {/* Rota para editar um produto existente */}
          <Route path="/create" element={<Formulario/>} /> {/* Rota para criar um novo produto */}
          <Route path='*' element={<ErrorPage/>} /> {/* Rota para qualquer URL não especificada */}
      </Routes>
  );
}

