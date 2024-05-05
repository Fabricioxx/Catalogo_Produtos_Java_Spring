package com.catalogoapi.catalogo.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public record Produto(

     @Id
     String id,
     String nome,
     Double preco,
     String descricao,
     String imageUrl,
     String categoria

) { }
