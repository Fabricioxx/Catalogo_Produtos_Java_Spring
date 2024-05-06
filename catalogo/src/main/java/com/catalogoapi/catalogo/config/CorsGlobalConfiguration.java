package com.catalogoapi.catalogo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsWebFilter;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;


@Configuration
public class CorsGlobalConfiguration {


    @Bean
    public CorsWebFilter corsWebFilter() {
        CorsConfiguration config = new CorsConfiguration();
      // CorsConfiguration config = new CorsConfiguration().applyPermitDefaultValues();
       config.addAllowedOrigin("http://localhost:3000");  // Permite CORS de localhost:3000
       config.addAllowedMethod("*");  // Permite todos os métodos HTTP
       config.addAllowedHeader("*");  // Permite todos os cabeçalhos de requisição

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);

        
        return new CorsWebFilter(source);
    }
}
