package com.catalogoapi.catalogo.repositories;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;

import com.catalogoapi.catalogo.models.Produto;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;


// <Produto, String> <modelo, id >
@Repository
public interface ProdutoRepository extends ReactiveMongoRepository<Produto, String>{

   //metodos personalizados
   Flux<Produto> findByCategoria(String categoria);
   Mono<Produto> findByNome(String nome);

}
