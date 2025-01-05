
# Catalogo_Produtos_Java_Spring_WebFlux

## Introdução
Este projeto é um catálogo de produtos desenvolvido com Java e Spring WebFlux, utilizando o Visual Studio Code como IDE.

## Configuração do Ambiente

### Spring Boot no Visual Studio Code

#### Plugins
- **Spring Boot Extension Pack**: Extensões para desenvolvimento com Spring Boot, incluindo Spring Boot Dashboard, Spring Boot Tools e Spring Initializr Java Support.
- **Java Extension Pack**: Ferramentas essenciais para desenvolvimento Java no VSCode, como Language Support for Java(TM) by Red Hat, Debugger for Java, Test Runner for Java, Maven for Java, etc.
- **Spring Boot Tools**: Suporte para configuração de aplicativos Spring Boot com validação e autocompletação para propriedades de configuração.
- **Spring Initializr Java Support**: Geração rápida de novos projetos Spring Boot diretamente do VSCode.

### Segurança Web
- Cors
- JWT
- Rate Limit
- Validação de Entrada (SQL injection e XSS)
- Proteção contra ataques CSRF
- Habilitar HTTPS
- Segurança de Cookie com HTTPOnly
- Auditoria e Monitoramento
- Firewall de Aplicativo Web (WAF)
- Práticas de Desenvolvimento Seguro
- Atualizações regulares
- Testes de Segurança

### Gerar um Projeto Spring Boot no VSCode
1. Pressione `ctrl + shift + p` para abrir a paleta de comandos.
2. Selecione `Spring Initializr: Generate a Maven Project`.
3. Escolha a Versão do Spring Boot.
4. Selecione o Tipo de Projeto e a Linguagem de Programação.
5. Insira o Grupo e Artefato (ex: `br.com.meuprojeto`).
6. Nomeie o projeto (artefato).
7. Selecione Dependências do Spring Boot.
8. Escolha o local para salvar o projeto.
9. Abra e modifique o projeto conforme necessário.

## Instalação do JDK 21

1. **Baixar o JDK 21**:
    - [Oracle JDK 21](https://www.oracle.com/java/technologies/javase/jdk21-archive-downloads.html)
    - [Adoptium](https://adoptium.net/)
2. **Instalar o JDK 21**: 
    - Siga as instruções de instalação fornecidas pelo instalador ou pelo site.
3. **Configurar o JAVA_HOME**:
    - Adicione uma variável de sistema `JAVA_HOME` apontando para o diretório do JDK instalado.
    - Adicione `%JAVA_HOME%\bin` ao `PATH`.
4. **Atualizar a Configuração do VSCode**:
    - No `settings.json`, adicione: `"java.home": "C:\\Program Files\\Java\\jdk-21",`
5. **Verificar a Instalação**:
    - No terminal, execute `java -version` para verificar a instalação.
6. **Reiniciar o VSCode**:
    - Feche e reabra o VSCode.

## Práticas Adotadas

### SOLID
1. **Single Responsibility Principle (SRP)**: Uma classe deve ter apenas uma responsabilidade.
2. **Open/Closed Principle (OCP)**: Entidades devem estar abertas para extensão, mas fechadas para modificação.
3. **Liskov Substitution Principle (LSP)**: Instâncias de subtipos devem substituir objetos sem afetar a corretude.
4. **Interface Segregation Principle (ISP)**: Interfaces específicas para cada cliente.
5. **Dependency Inversion Principle (DIP)**: Dependência de abstrações, não de detalhes.

### DRY (Don't Repeat Yourself)
Evite a repetição de código para facilitar a manutenção e reduzir inconsistências.

### YAGNI (You Ain't Gonna Need It)
Não adicione funcionalidades até que sejam realmente necessárias.

### KISS (Keep It Simple, Stupid)
Mantenha o design simples para facilitar a manutenção e modificação.

---
