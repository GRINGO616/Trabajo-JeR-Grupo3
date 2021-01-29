package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@SpringBootApplication
@EnableWebSocket
public class DemoApplication implements WebSocketConfigurer{

	public static void main(String[] args) {
		//Player prueba = new Player();
		//prueba.createDataBase();
		SpringApplication.run(DemoApplication.class, args);
		PlayerController aux = new PlayerController();
		var map = aux.loadAllPlayers();
		PlayerController.players = map;
		
	}

	@Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(echoHandler(), "/echo").setAllowedOrigins("*");
    }

    @Bean
    public WebSocketEchoHandler echoHandler() {
        return new WebSocketEchoHandler();
    }

}
