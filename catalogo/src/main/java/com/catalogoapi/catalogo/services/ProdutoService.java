package com.catalogoapi.catalogo.services;

import org.springframework.beans.factory.annotation.Autowired;

import com.catalogoapi.catalogo.models.Produto;
import com.catalogoapi.catalogo.repositories.ProdutoRepository;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface ProdutoService {

    public static final ProdutoRepository repository = null;

    // flux retorna uma lista
    Flux<Produto> findAll();

    //mono retorna um objeto
    Mono<Produto> findById(String id);


    Mono<Produto> save(Produto produto);

    Mono<Produto> update(String id, Produto produto);

    Mono<Void> delete(String id);

}
