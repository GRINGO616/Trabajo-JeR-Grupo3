package com.example.demo;

import java.io.IOException;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;


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
        int i=0;
        for (WebSocketSession[] participants : groups.values()) {
            if (participants[1]!=null && participants[1].getId().equals(session.getId())) {
                if (participants[0] != null) {
                    participants[0].sendMessage(new TextMessage("{\"id\":4}"));
                    sessions.remove(participants[1].getId());
                    participants[1]=null;
                } else{
                    sessions.remove(participants[1].getId());
                    participants[1]=null;
                }
                    
            } else if (participants[0]!=null && participants[0].getId().equals(session.getId())){
                if (participants[1] != null) {
                    participants[1].sendMessage(new TextMessage("{\"id\":4}"));
                    sessions.remove(participants[1].getId());
                    participants[0]=null;
                } else{
                    sessions.remove(participants[0].getId());
                    participants[0]=null;
                }
            }
            i++;
        } 
    }
    

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        
        System.out.println("Message received: " + message.getPayload());
        JsonNode node= mapper.readTree(message.getPayload());
        sendOtherParticipants(session,node);
        
    }
    private void sendOtherParticipants(WebSocketSession session, JsonNode node) throws IOException {
        System.out.println("Message sent: " + node.toString());
		
        int id= node.get("group").asInt();
        
        for(WebSocketSession participant : groups.get(id)) {
			if(participant!=null && !participant.getId().equals(session.getId()) ) {
				participant.sendMessage(new TextMessage(node.toString()));
			}
		}
	}
}
