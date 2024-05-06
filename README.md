# Catalogo_Produtos_Java_Spring

### Spring Boot no Visual Studio Code
 #### Plugins
 *   **Spring Boot Extension Pack**: Este pacote é uma coleção de extensões populares que suportam desenvolvimento com Spring Boot. Ele inclui a Spring Boot Dashboard, Spring Boot Tools, e Spring Initializr Java Support. Com essas ferramentas, você pode facilmente criar novos projetos, gerenciar suas instâncias de servidor, e trabalhar com seus arquivos de aplicação.
    
*   **Java Extension Pack**: Este pacote inclui todas as ferramentas essenciais para desenvolvimento Java no VSCode. Ele inclui Language Support for Java(TM) by Red Hat, Debugger for Java, Test Runner for Java, Maven for Java, e mais. Essas extensões fornecem suporte para edição de código, debugging, execução de testes, e gerenciamento de projetos Maven.
    
*   **Spring Boot Tools**: Esta extensão fornece suporte para trabalhar com a configuração de aplicativos Spring Boot. Ela oferece validação e autocompletação para propriedades de configuração em arquivos 'application.properties' ou 'application.yml'.
    
*   **Spring Initializr Java Support**: Esta extensão permite que você rapidamente gere um novo projeto Spring Boot usando o Spring Initializr diretamente do VSCode.



### Web Security 
```
> Cors
> JWT
> Rate Limit
> Validação de Entrada (SQL injection e XSS)
> Proteção contra ataques CSRF
> Habilitar HTTPS
> Segurança de Cookie com HTTPOnly
> Auditoria e Monitoramento
> Firewall de Aplicativo Web (WAF)
> Práticas de Desenvolvimento Seguro
> Atualizações regulares
> Testes de Segurança
```


### Gerar um Projeto Spring Boot no VSCode
```

ctrl + shift + p // paleta de comandos
> Spring Initializr: Generate a Maven Project
> Escolher a Versão do Spring Boot
> Selecionar o Tipo de Projeto:
> Selecionar a Linguagem de Programação:
> Inserir Grupo e Artefato: (nome do pacote br.com.meuprojeto)
> nome do projeto (artefacto )
> Selecionar Dependências do Spring Boot:
> Escolher o Local para Salvar o Projeto:
> Abrir o Projeto:
> Explorar e Modificar o Projeto:

```
### Passos para instalar o JDK 21

1.  **Baixar o JDK 21**:
    
    *   Acesse o site oficial da Oracle ou uma distribuição de JDK como Adoptium para baixar o JDK 21. Aqui estão os links diretos:
        *   [Oracle JDK 21](https://www.oracle.com/java/technologies/javase/jdk21-archive-downloads.html)
        *   [Adoptium](https://adoptium.net/)
2.  **Instalar o JDK 21**:
    
    *   Siga as instruções de instalação fornecidas pelo instalador ou pelo site. No Windows, geralmente envolve executar um arquivo `.exe` e seguir o assistente de instalação.
3.  **Configurar o JAVA\_HOME**:
    
    *   Após instalar o JDK, você precisará configurar a variável de ambiente `JAVA_HOME` para apontar para o diretório onde o JDK 21 foi instalado. No Windows, você pode fazer isso acessando:
        *   Painel de Controle > Sistema e Segurança > Sistema > Configurações avançadas do sistema > Variáveis de Ambiente.
    *   Adicione uma nova variável de sistema chamada `JAVA_HOME` e defina seu valor para o caminho onde o JDK 21 foi instalado, por exemplo, `C:\Program Files\Java\jdk-21`.
    *   Certifique-se também de adicionar o caminho do diretório `bin` do JDK ao `PATH`. Você pode fazer isso editando a variável `PATH` em Variáveis de Ambiente e adicionando `%JAVA_HOME%\bin` ao final.
4.  **Atualizar a Configuração do VSCode**:
    
    *   No VSCode, atualize a configuração do JDK em `settings.json`. Adicione ou modifique a entrada para:
        
        json
        
        Copy code
        
        `"java.home": "C:\\Program Files\\Java\\jdk-21",`
        
5.  **Verificar a Instalação**:
    
    *   Abra um novo terminal ou prompt de comando e digite `java -version` para verificar se o JDK 21 está corretamente instalado e configurado.
6.  **Reiniciar o VSCode**:
    
    *   Feche e reabra o VSCode para garantir que ele reconheça a nova configuração do JDK.



  ## Praticas Adotadas

  ### SOLID

SOLID é um acrônimo para cinco princípios de design orientado a objetos que ajudam os desenvolvedores a criar sistemas mais fáceis de manter e estender:

1.  **Single Responsibility Principle (SRP)**: Uma classe deve ter apenas uma razão para mudar, significando que deve ter apenas uma tarefa ou responsabilidade.
2.  **Open/Closed Principle (OCP)**: Entidades de software (classes, módulos, funções, etc.) devem estar abertas para extensão, mas fechadas para modificação.
3.  **Liskov Substitution Principle (LSP)**: Objetos em um programa devem ser substituíveis por instâncias de suas subtipos sem afetar a correção do programa.
4.  **Interface Segregation Principle (ISP)**: Nenhum cliente deve ser forçado a depender de métodos que não usa. Ou seja, é melhor ter muitas interfaces específicas do que uma interface única.
5.  **Dependency Inversion Principle (DIP)**: Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações. Além disso, abstrações não devem depender de detalhes; detalhes devem depender de abstrações.

### DRY (Don't Repeat Yourself)

Este princípio enfatiza a importância de evitar a repetição de código. A ideia é reduzir a duplicação de conhecimento ou lógica para evitar inconsistências e erros, facilitando a manutenção do código.

### YAGNI (You Ain't Gonna Need It)

Originado na programação extrema (XP), este princípio aconselha os desenvolvedores a não adicionar funcionalidade até que seja realmente necessária. Isso ajuda a evitar a complexidade desnecessária e o trabalho extra que pode nunca ser usado ou valer a pena.

### KISS (Keep It Simple, Stupid)

KISS é um princípio de design que enfatiza a importância de manter o design de sistemas o mais simples possível. Isso ajuda a evitar complexidade desnecessária, tornando o sistema mais fácil de entender, manter e modificar.














