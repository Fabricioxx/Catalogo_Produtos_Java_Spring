Aqui está o conteúdo do outro README encontrado no repositório:

---

# Catalogo de Produtos

API para gerenciar tarefas (CRUD) que faz parte [desse desafio](https://github.com/simplify-liferay/desafio-junior-backend-simplify) para pessoas desenvolvedoras backend júnior.

O projeto foi elaborado [nesse vídeo](https://youtu.be/IjProDV001o).

Doc Swagger -   http://localhost:8080/swagger-ui.html

## Tecnologias
- [Spring Boot](https://spring.io/projects/spring-boot)
- [MongoDB Reactive](https://docs.spring.io/spring-framework/reference/web/webmvc.html)
- [WebFlux - Reactive](https://spring.io/projects/spring-data-jpa)
- [Swagger - SpringDoc OpenAPI 3](https://springdoc.org/v2/#spring-webflux-support)

## Práticas adotadas
- SOLID, DRY, YAGNI, KISS
- API REST
- Consultas com Spring Data JPA
- Injeção de Dependências
- Tratamento de respostas de erro
- Geração automática do Swagger com a OpenAPI 3

## Como Executar
- Clonar repositório git
- Construir o projeto:
```
$ ./mvnw clean package
```
- Executar a aplicação:
```
$ java -jar target/todolist-0.0.1-SNAPSHOT.jar
```
A API poderá ser acessada em [localhost:8080](http://localhost:8080).
O Swagger poderá ser visualizado em [localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)

## API Endpoints

Para fazer as requisições HTTP abaixo, foi utilizada a ferramenta [httpie](https://httpie.io):

- Criar Tarefa 
```
$ http POST :8080/todos nome="Todo 1" descricao="Desc Todo 1" prioridade=1

[
  {
    "descricao": "Desc Todo 1",
    "id": 1,
    "nome": "Todo 1",
    "prioridade": 1,
    "realizado": false
  }
]
```

- Listar Tarefas
```
$ http GET :8080/todos

[
  {
    "descricao": "Desc Todo 1",
    "id": 1,
    "nome": "Todo 1",
    "prioridade": 1,
    "realizado": false
  }
]
```

- Atualizar Tarefa
```
$ http PUT :8080/todos/1 nome="Todo 1 Up" descricao="Desc Todo 1 Up" prioridade=2

[
  {
    "descricao": "Desc Todo 1 Up",
    "id": 1,
    "nome": "Todo 1 Up",
    "prioridade": 2,
    "realizado": false
  }
]
```

- Remover Tarefa
```
$ http DELETE :8080/todos/1

[ ]
```

## Classes para o Pacote "Security"

### 1. **Security Configuration**
### 2. **Database Configuration**
### 3. **Swagger/OpenAPI Configuration**
### 4. **Message Source Configuration**
### 5. **Web Client Configuration**
### 6. **Bean Validation Configuration**
### 7. **Async and Task Execution Configuration**

---

Você pode acessar o arquivo completo [aqui](https://github.com/Fabricioxx/Catalogo_Produtos_Java_Spring/blob/eb270876e4e46a02f8a9135bc21a222fa0f48abc/catalogo/readme.md).
