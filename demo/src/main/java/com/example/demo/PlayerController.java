package com.example.demo;

import java.util.Collection;
import java.util.Map;

import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/players")
@CrossOrigin
public class PlayerController {

    Map<Long,Player> players=new ConcurrentHashMap<>();

    AtomicLong nextId=new AtomicLong(0);

    @GetMapping
    public Collection<Player> getPlayers(){
        return players.values();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Player> getPlayer(@PathVariable long id){
        Player p=players.get(id);
        if(p!=null){
            return new ResponseEntity<>(p,HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Player AddPlayer(@RequestBody Player p){
        long id=nextId.getAndIncrement();
        p.setId(id);
        players.put(id,p);
        return p;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Player> DeletePlayer(@PathVariable long id){
        Player p=players.get(id);
        if(p!=null){
            players.remove(id);
            return new ResponseEntity<>(p,HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Player> ModifyPlayer(@PathVariable long id, @RequestBody Player modifiedPlayer){
        //Si quitas la condicion if y todo el else, si el jugador que intentas modificar no existe, lo crea automaticamente.
        Player p=players.get(id);
        modifiedPlayer.setId(id);
        if(p!=null){
            players.put(id,modifiedPlayer);
            return new ResponseEntity<>(players.get(id),HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


}
