<h1 align="center">
  Catalogo de Produtos
</h1>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=Youtube&message=@giulianabezerra&color=8257E5&labelColor=000000" alt="@giulianabezerra" />
 <img src="https://img.shields.io/static/v1?label=Tipo&message=Desafio&color=8257E5&labelColor=000000" alt="Desafio" />
</p>

API para gerenciar tarefas (CRUD) que faz parte [desse desafio](https://github.com/simplify-liferay/desafio-junior-backend-simplify) para pessoas desenvolvedoras backend júnior, que se candidatam para a Simplify.

O projeto foi elaborado [nesse vídeo](https://youtu.be/IjProDV001o).

doc swegger -   http://localhost:8080/swagger-ui.html

## Tecnologias
 
- [Spring Boot](https://spring.io/projects/spring-boot)
- [MongoDB Reactive](https://docs.spring.io/spring-framework/reference/web/webmvc.html)
- [WebFlux - Reactive](https://spring.io/projects/spring-data-jpa)
- [Swegger - SpringDoc OpenAPI 3](https://springdoc.org/v2/#spring-webflux-support)

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
http DELETE :8080/todos/1

[ ]
```

## Classes para o Pacote "Security"

O pacote `config` em um projeto Spring Boot é um lugar ideal para centralizar todas as suas configurações específicas do aplicativo. Aqui estão algumas sugestões de classes de configuração que você pode considerar adicionar ao seu pacote `config`, dependendo das necessidades do seu projeto:

### 1\. **Security Configuration**

Se você está implementando segurança em seu aplicativo, especialmente usando Spring Security, você pode criar uma classe de configuração de segurança para definir regras de segurança, métodos de autenticação, etc.

java

Copy code

`import org.springframework.context.annotation.Configuration; import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;  @Configuration @EnableWebFluxSecurity public class SecurityConfig {     // Configurações de segurança }`

### 2\. **Database Configuration**

Para projetos que requerem configurações específicas de conexão com banco de dados ou configurações de JPA/Hibernate, você pode adicionar uma classe de configuração de banco de dados.

java

Copy code

`import org.springframework.context.annotation.Configuration; import org.springframework.data.jpa.repository.config.EnableJpaRepositories;  @Configuration @EnableJpaRepositories(basePackages = "com.seuprojeto.repository") public class DatabaseConfig {     // Configurações do banco de dados }`

### 3\. **Swagger/OpenAPI Configuration**

Para adicionar documentação API usando Swagger/OpenAPI, você pode definir uma classe para configurar o Swagger.

java

Copy code

`import org.springframework.context.annotation.Bean; import org.springframework.context.annotation.Configuration; import springfox.documentation.builders.PathSelectors; import springfox.documentation.builders.RequestHandlerSelectors; import springfox.documentation.spi.DocumentationType; import springfox.documentation.spring.web.plugins.Docket; import springfox.documentation.swagger2.annotations.EnableSwagger2;  @Configuration @EnableSwagger2 public class SwaggerConfig {     @Bean     public Docket api() {         return new Docket(DocumentationType.SWAGGER_2)             .select()           .apis(RequestHandlerSelectors.any())           .paths(PathSelectors.any())           .build();     } }`

### 4\. **Message Source Configuration**

Para internacionalização, você pode definir uma classe de configuração para gerenciar mensagens e localizações.

java

Copy code

`import org.springframework.context.annotation.Bean; import org.springframework.context.annotation.Configuration; import org.springframework.context.support.ReloadableResourceBundleMessageSource;  @Configuration public class MessageSourceConfig {     @Bean     public ReloadableResourceBundleMessageSource messageSource() {         ReloadableResourceBundleMessageSource messageSource = new ReloadableResourceBundleMessageSource();         messageSource.setBasename("classpath:messages");         messageSource.setDefaultEncoding("UTF-8");         return messageSource;     } }`

### 5\. **Web Client Configuration**

Para configurações de clientes web reativos, como o `WebClient` para fazer chamadas HTTP externas, você pode criar uma classe de configuração.

java

Copy code

`import org.springframework.context.annotation.Bean; import org.springframework.context.annotation.Configuration; import org.springframework.web.reactive.function.client.WebClient;  @Configuration public class WebClientConfig {     @Bean     public WebClient webClient(WebClient.Builder builder) {         return builder.baseUrl("http://api.example.com").build();     } }`

### 6\. **Bean Validation Configuration**

Para configurações de validação de beans, você pode configurar um validador personalizado.

java

Copy code

`import org.springframework.context.annotation.Bean; import org.springframework.context.annotation.Configuration; import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;  @Configuration public class ValidationConfig {     @Bean     public LocalValidatorFactoryBean validator() {         return new LocalValidatorFactoryBean();     } }`

### 7\. **Async and Task Execution Configuration**

Para configurar a execução de tarefas assíncronas e o agendamento de tarefas.

java

Copy code

`import org.springframework.context.annotation.Configuration; import org.springframework.scheduling.annotation.EnableAsync; import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;  import java.util.concurrent.Executor;  @Configuration @EnableAsync public class AsyncConfig {     @Bean(name = "taskExecutor")     public Executor taskExecutor() {         ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();         executor.setCorePoolSize(4);         executor.setMaxPoolSize(4);         executor.setQueueCapacity(100);         executor.setThreadNamePrefix("CarThread-");         executor.initialize();         return executor;     } }`

Cada uma dessas classes de configuração serve a propósitos específicos e pode ser muito útil para manter seu código organizado e facilmente gerenciável. Ajuste as configurações e os exemplos fornecidos de acordo com as necessidades específicas do seu projeto Spring Boot.

![User](https://lh3.googleusercontent.com/a/AItbvmmCXxRJqwLcDhFF2W6s9VXwMxH5eLHZIyPRtCIe=s96-c)

You

vou incluir essas requisitos no segunça na aplicação de Produtos e Spring fornece ferramentas para esses requisitos: > Cors > JWT > Rate Limit > Validação de Entrada (SQL injection e XSS) > Proteção contra ataques CSRF > Habilitar HTTPS > Segurança de Cookie com HTTPOnly > Auditoria e Monitoramento > Firewall de Aplicativo Web (WAF) > Práticas de Desenvolvimento Seguro > Atualizações regulares > Testes de Segurança

ChatGPT

ChatGPT

Memory updated

Incluir esses requisitos de segurança em sua aplicação de produtos com Spring é uma excelente decisão para garantir que sua aplicação seja robusta e segura. Vou descrever como você pode implementar esses recursos usando o Spring Framework e outras tecnologias relacionadas:

### 1\. **CORS (Cross-Origin Resource Sharing)**

*   Utilize o `WebFluxConfigurer` para configurar globalmente o CORS ou crie um `WebFilter` para uma configuração mais granular, como já discutimos.

### 2\. **JWT (JSON Web Tokens)**

*   Implemente autenticação JWT usando Spring Security. Isso envolve configurar um filtro que valida os tokens JWT em cada requisição protegida.

### 3\. **Rate Limiting**

*   Use bibliotecas como o Bucket4j ou implementações customizadas com Redis para limitar a taxa de requisições a certos endpoints, prevenindo abuso.

### 4\. **Validação de Entrada (SQL injection e XSS)**

*   Para SQL injection, certifique-se de usar JPA ou JDBC templates que automaticamente tratam a sanitização da entrada.
*   Para XSS, sanitize as entradas de usuário que serão renderizadas na página web, utilizando bibliotecas como OWASP Java HTML Sanitizer.

### 5\. **Proteção contra ataques CSRF**

*   No Spring Security, habilite a proteção CSRF, que é padrão para aplicações baseadas em sessões. Para APIs REST, onde o uso de tokens CSRF pode não ser ideal, certifique-se de usar tokens de autenticação como Bearer tokens (JWT).

### 6\. **Habilitar HTTPS**

*   Configure seu servidor de aplicação para usar HTTPS, adicionando um certificado SSL/TLS. No Spring Boot, isso pode ser configurado no `application.properties`.

### 7\. **Segurança de Cookie com HTTPOnly**

*   Configure os cookies para usar a flag HTTPOnly, que impede que os cookies sejam acessados por scripts do lado do cliente.

### 8\. **Auditoria e Monitoramento**

*   Use o Spring Boot Actuator para monitoramento e métricas. Configure logs de auditoria para ações críticas dentro da aplicação.

### 9\. **Firewall de Aplicativo Web (WAF)**

*   Em um ambiente de produção, considere colocar um WAF (como ModSecurity) na frente de sua aplicação para filtrar tráfego malicioso antes que ele atinja sua aplicação.

### 10\. **Práticas de Desenvolvimento Seguro**

*   Adote práticas de desenvolvimento seguro, como revisões de código, programação em pares e use ferramentas de análise estática de código.

### 11\. **Atualizações Regulares**

*   Mantenha todas as dependências do projeto atualizadas para evitar vulnerabilidades conhecidas. Use ferramentas como o OWASP Dependency Check.

### 12\. **Testes de Segurança**

*   Realize testes de penetração regularmente e use scanners de vulnerabilidades durante o desenvolvimento para identificar e remediar problemas de segurança precocemente.

Para cada um desses itens, você pode encontrar bibliotecas e ferramentas específicas que se integram bem com o ecossistema Spring e facilitam a implementação dessas funcionalidades. Se precisar de ajuda com algum desses tópicos específicos ou exemplos de código, sinta-se à vontade para pedir!

![User](https://lh3.googleusercontent.com/a/AItbvmmCXxRJqwLcDhFF2W6s9VXwMxH5eLHZIyPRtCIe=s96-c)

You

no meu projeto eu adicionei o pacote config para adicionar as configuração do cors e recomendado ou necessario adicionar um pacote com o nome "security" para configurações de segurança ?

ChatGPT

ChatGPT

Memory updated

Adicionar um pacote separado chamado "security" para as configurações de segurança é uma prática recomendada, especialmente em projetos maiores ou mais complexos onde a segurança é uma grande preocupação. Isso não apenas ajuda a manter seu código organizado, mas também torna mais fácil gerenciar as configurações de segurança de forma centralizada. Aqui estão algumas vantagens de adotar essa abordagem:

### Vantagens de Ter um Pacote Dedicado para Configurações de Segurança

1.  **Organização e Legibilidade**: Separar suas configurações de segurança em um pacote dedicado ajuda a manter seu projeto organizado. Isso torna o código mais legível e fácil de manter, especialmente para novos desenvolvedores que possam trabalhar no projeto.
    
2.  **Foco na Segurança**: Um pacote dedicado para segurança destaca a importância da segurança no seu projeto. Isso também facilita a revisão e atualização das configurações de segurança, pois tudo está centralizado em um único local.
    
3.  **Reutilização**: Com as configurações de segurança isoladas em seu próprio pacote, fica mais fácil reutilizar essas configurações em outros projetos ou partes do mesmo projeto, sem ter que copiar e colar código entre diferentes locais.
    
4.  **Facilidade de Testes**: Testar as configurações de segurança torna-se mais fácil quando elas estão isoladas em seu próprio pacote. Você pode focar nos testes de segurança sem se preocupar com o impacto em outras partes do código.
    

### Exemplo de Estrutura de Pacote

Suponha que seu pacote base seja `com.seuprojeto`. Você poderia estruturar seus pacotes da seguinte maneira:

css

Copy code

`src/ └── main/     └── java/         └── com/             └── seuprojeto/                 ├── config/                 ├── security/                 │   ├── SecurityConfig.java                 │   ├── JwtConfig.java                 │   └── CorsConfig.java                 ├── controller/                 ├── service/                 ├── repository/                 └── Application.java`

Nesta estrutura, todas as suas classes de configuração de segurança, como configurações de JWT, configurações de CORS específicas para segurança e qualquer outra configuração de segurança relacionada, estariam no pacote `security`.

### Implementando a Configuração de Segurança

Dentro do pacote `security`, você poderia ter uma classe `SecurityConfig.java` que configuraria o Spring Security, por exemplo:

java

Copy code

`package com.seuprojeto.security;  import org.springframework.context.annotation.Configuration; import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;  @Configuration @EnableWebFluxSecurity public class SecurityConfig {     // Configurações de segurança como JWT, autenticação, autorização, etc. }`

Adotar essa abordagem não só melhora a manutenção e a legibilidade do seu código, mas também enfatiza a importância da segurança no seu projeto. Se você já tem um pacote `config`, você pode incluir configurações de segurança relacionadas a CORS lá, ou, se preferir, pode refinar ainda mais as responsabilidades movendo configurações de segurança CORS para o pacote `security`.

![User](https://lh3.googleusercontent.com/a/AItbvmmCXxRJqwLcDhFF2W6s9VXwMxH5eLHZIyPRtCIe=s96-c)

You

qual outras classe poderiam ser criadas no pacote security

ChatGPT

ChatGPT

Dentro do pacote `security` de um projeto Spring Boot, você pode incluir várias classes específicas para lidar com diferentes aspectos da segurança da sua aplicação. Aqui estão algumas classes comumente usadas que você pode considerar adicionar ao seu pacote `security`:

### 1\. **SecurityConfig**

Esta é a classe principal de configuração de segurança que configura os aspectos fundamentais do Spring Security no projeto.

java

Copy code

`import org.springframework.context.annotation.Configuration; import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity; import org.springframework.security.config.web.server.ServerHttpSecurity; import org.springframework.security.web.server.SecurityWebFilterChain;  @Configuration @EnableWebFluxSecurity public class SecurityConfig {      public SecurityWebFilterChain securityWebFilterChain(ServerHttpSecurity http) {         http             .csrf().disable()             .authorizeExchange()             .pathMatchers("/api/public/**").permitAll()             .anyExchange().authenticated()             .and().httpBasic();         return http.build();     } }`

### 2\. **JwtAuthenticationManager**

Gerencia a autenticação usando JWT, verificando e validando os tokens JWT para as requisições recebidas.

java

Copy code

`import org.springframework.security.authentication.ReactiveAuthenticationManager; import reactor.core.publisher.Mono;  public class JwtAuthenticationManager implements ReactiveAuthenticationManager {      @Override     public Mono<Authentication> authenticate(Authentication authentication) {         // Lógica para validar o token JWT         return Mono.just(authentication);     } }`

### 3\. **JwtTokenProvider**

Responsável por gerar e validar tokens JWT.

java

Copy code

`import io.jsonwebtoken.Claims; import io.jsonwebtoken.Jwts; import io.jsonwebtoken.SignatureAlgorithm; import java.util.Date;  public class JwtTokenProvider {      private String secretKey = "your_secret";      public String createToken(String username, List<String> roles) {         Claims claims = Jwts.claims().setSubject(username);         claims.put("roles", roles);          Date now = new Date();         Date validity = new Date(now.getTime() + 3600000); // 1 hour          return Jwts.builder()             .setClaims(claims)             .setIssuedAt(now)             .setExpiration(validity)             .signWith(SignatureAlgorithm.HS256, secretKey)             .compact();     }      public boolean validateToken(String token) {         try {             Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token);             return true;         } catch (Exception e) {             // Handle exception         }         return false;     } }`

### 4\. **CorsConfig**

Configurações específicas para CORS que podem ser incluídas no pacote de segurança se forem consideradas parte das políticas de segurança.

java

Copy code

`import org.springframework.context.annotation.Bean; import org.springframework.context.annotation.Configuration; import org.springframework.web.cors.reactive.CorsWebFilter; import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource; import org.springframework.web.util.pattern.PathPatternParser;  @Configuration public class CorsConfig {      @Bean     public CorsWebFilter corsWebFilter() {         CorsConfiguration config = new CorsConfiguration();         config.addAllowedOrigin("*");         config.addAllowedMethod("*");         config.addAllowedHeader("*");          UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource(new PathPatternParser());         source.registerCorsConfiguration("/**", config);          return new CorsWebFilter(source);     } }`

### 5\. **UserDetailsServiceImpl**

Implementa `UserDetailsService` para carregar dados do usuário durante a autenticação.

java

Copy code

`import org.springframework.security.core.userdetails.ReactiveUserDetailsService; import reactor.core.publisher.Mono;  public class UserDetailsServiceImpl implements ReactiveUserDetailsService {      @Override     public Mono<UserDetails> findByUsername(String username) {         // Implementar lógica para buscar usuário no banco de dados         return Mono.just(user);     } }`

### 6\. **SecurityWebFilterChainCustomizer**

Para customizações adicionais do `SecurityWebFilterChain`.

java

Copy code

`import org.springframework.security.config.web.server.ServerHttpSecurity; import org.springframework.stereotype.Component;  @Component public class SecurityWebFilterChainCustomizer {      public void customize(ServerHttpSecurity http) {         // Customizações adicionais     } }`

Estas são apenas algumas das muitas classes que você pode criar no pacote `security` para gerenciar diferentes aspectos da segurança da sua aplicação Spring Boot. Cada classe tem um propósito específico e juntas, elas ajudam a garantir que a aplicação seja segura e robusta.