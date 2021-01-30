package com.example.demo;

import java.io.IOException;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;
;

public class WebSocketEchoHandler extends TextWebSocketHandler {

    private Map<String, WebSocketSession> sessions = new ConcurrentHashMap<>();
    private Map<Integer,WebSocketSession[]> groups = new ConcurrentHashMap<>();
    AtomicInteger groupNum = new AtomicInteger();
    AtomicInteger users = new AtomicInteger();
    ObjectMapper mapper = new ObjectMapper();

    @Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		System.out.println("New session: " + session.getId());
        sessions.put(session.getId(), session);
        int numUsers=users.incrementAndGet();
        if(numUsers%2==1){
            var aux= new WebSocketSession [2];
            aux[0]=session;
            groups.put(groupNum.get(), aux);
            session.sendMessage(new TextMessage("{\"id\":0,\"group\":"+groupNum.get()+",\"numPlayer\":1}"));
        }
        else {
            var aux=groups.get(groupNum.get());
            aux[1]=session;
            groups.remove(groupNum.get());
            groups.put(groupNum.get(), aux);
            session.sendMessage(new TextMessage("{\"id\":0,\"group\":"+groupNum.getAndIncrement()+",\"numPlayer\":2}"));
        }
        
	}
	
	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		System.out.println("Session closed: " + session.getId());
		sessions.remove(session.getId());
    }
    
    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        
        /* if (message.getPayload().equals("registrar")) {
            if (usersRegistered%2 == 1) {
                sessionUsers[0] = session;
                session.sendMessage(new TextMessage("J1"));
                System.out.println("J1 connected");
                usersRegistered++;
            } else if (usersRegistered%2 == 0) {
                sessionUsers[1] = session;
                session.sendMessage(new TextMessage("J2"));
                System.out.println("J2 connected");
                usersRegistered++;
            } else {
                session.sendMessage(new TextMessage("Server Completed"));
            }
        } */
        System.out.println("Message received: " + message.getPayload());
        JsonNode node= mapper.readTree(message.getPayload());
        sendOtherParticipants(session,node);
        
    }
    private void sendOtherParticipants(WebSocketSession session, JsonNode node) throws IOException {
        System.out.println("Message sent: " + node.toString());
		
        ObjectNode newNode = mapper.createObjectNode();
        
        
        for(WebSocketSession participant : sessions.values()) {
			if(!participant.getId().equals(session.getId())) {
				participant.sendMessage(new TextMessage(node.toString()));
			}
		}
	}
}
