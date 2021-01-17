package com.example.demo;

import java.util.Collection;
import java.util.Map;

import java.util.concurrent.ConcurrentHashMap;

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

    Map<String,Player> players=new ConcurrentHashMap<>();

    @GetMapping
    public Collection<Player> getPlayers(){
        return players.values();
    }

    @GetMapping("/{name}")
    public ResponseEntity<Player> getPlayer(@PathVariable String n){
        Player p=players.get(n);
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
        players.put(p.getName(),p);
        return p;
    }

    @DeleteMapping("/{name}")
    public ResponseEntity<Player> DeletePlayer(@PathVariable String name){
        Player p=players.get(name);
        if(p!=null){
            players.remove(name);
            return new ResponseEntity<>(p,HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{name}")
    public ResponseEntity<Player> ModifyPlayer(@PathVariable String name, @RequestBody Player modifiedPlayer){
        //Si quitas la condicion if y todo el else, si el jugador que intentas modificar no existe, lo crea automaticamente.
        Player p=players.get(name);
        modifiedPlayer.setName(name);
        if(p!=null){
            players.put(name,modifiedPlayer);
            return new ResponseEntity<>(players.get(name),HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


}
