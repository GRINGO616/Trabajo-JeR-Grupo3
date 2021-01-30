package com.example.demo;

import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

public class WebSocketEchoHandler extends TextWebSocketHandler {

    WebSocketSession[] sessionUsers = new WebSocketSession[2];
     
    int usersRegistered = 0;

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception{
        System.out.println("Message received: " +
        message.getPayload());

        if (message.getPayload().equals("registrar")){
        if (usersRegistered == 0){
            sessionUsers[0] = session;
            session.sendMessage(new TextMessage("J1"));
            System.out.println("J1 connected");
            usersRegistered++;
        } else if(usersRegistered == 1){
            sessionUsers[1] = session;
            session.sendMessage(new TextMessage("J2"));
            System.out.println("J2 connected");
            usersRegistered++;
        }else{
            session.sendMessage(new TextMessage("Server Completed"));
        }   
    }
        String msg = message.getPayload();
        session.sendMessage(new TextMessage(msg));
    }
}
