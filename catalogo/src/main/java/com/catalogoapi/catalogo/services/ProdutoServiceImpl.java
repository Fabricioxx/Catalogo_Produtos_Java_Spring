package com.catalogoapi.catalogo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.catalogoapi.catalogo.models.Produto;
import com.catalogoapi.catalogo.repositories.ProdutoRepository;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class ProdutoServiceImpl implements ProdutoService {

    @Autowired
    private final ProdutoRepository repository;

    public ProdutoServiceImpl(ProdutoRepository repository) {
        this.repository = repository;
    }

    @Override
    public Flux<Produto> findAll() {
        return repository.findAll();
    }

    @Override
    public Mono<Produto> findById(String id) {
        return repository.findById(id);
    }

    @Override
    public Mono<Produto> save(Produto produto) {
        return repository.save(produto);
    }

    @Override
    public Mono<Produto> update(String id, Produto produto) {
        return repository.findById(id)
                .flatMap(existingProduct -> {
                    String defaultImageUrl = "https://via.placeholder.com/150";
                    String imageUrl = produto.imageUrl() == null || produto.imageUrl().isEmpty() ? defaultImageUrl
                            : produto.imageUrl();

                    Produto updatedProduct = new Produto(
                            id, // manter o mesmo ID
                            produto.nome(),
                            produto.preco(),
                            produto.descricao(),
                            imageUrl,
                            produto.categoria());
                    return repository.save(updatedProduct);
                })
                .switchIfEmpty(Mono.error(
                        new ResponseStatusException(HttpStatus.NOT_FOUND, "Produto não encontrado com ID: " + id)));
    }

    @Override
    public Mono<Void> delete(String id) {
        return repository.deleteById(id);
    }

}
