package com.catalogoapi.catalogo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.RequestBody;

import com.catalogoapi.catalogo.models.Produto;
import com.catalogoapi.catalogo.services.ProdutoService;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
public class ProdutoController {


    private final ProdutoService produtoService;

    @Autowired
    public ProdutoController(ProdutoService produtoService) {
        this.produtoService = produtoService;
    }

    @GetMapping("/produtos")
    public Flux<Produto> getAllProdutos() {
        return produtoService.findAll();
    }

    @GetMapping("/produtos/{id}")
    public Mono<Produto> getProdutoById(@PathVariable String id) {
        return produtoService.findById(id);
    }

    @PostMapping("/produtos")
    public Mono<Produto> createProduto(@RequestBody Produto produto) {
        return produtoService.save(produto);
    }

    @PutMapping("/produtos/{id}")
    public Mono<Produto> updateProduto(@PathVariable String id, @RequestBody Produto produto) {
        return produtoService.update(id, produto);
    }

    @DeleteMapping("/produtos/{id}")
    public Mono<Void> deleteProduto(@PathVariable String id) {
        return produtoService.delete(id);
    }

}
