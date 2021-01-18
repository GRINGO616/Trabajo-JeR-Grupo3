package com.example.demo;

import java.util.Collection;
import java.util.Date;
import java.util.Map;

import java.util.concurrent.ConcurrentHashMap;

import javax.net.ssl.HttpsURLConnection;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;


@RestController
@EnableScheduling
@CrossOrigin
public class PlayerController {

    Map<String,Player> players=new ConcurrentHashMap<>();
    Map<String,Player> playersConected=new ConcurrentHashMap<>();

    //PLAYERS CONECTED

    @GetMapping("/playersConected")
    public int getPlayersConected(){
        return playersConected.size();
    }

    @DeleteMapping("/playersConected/{name}")
    public ResponseEntity<Player> DisconectPlayer(@PathVariable String name){
        Player p=playersConected.get(name);
        if(p!=null){
            playersConected.remove(name);
            return new ResponseEntity<>(p,HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/playersConected/{name}")
    public ResponseEntity<Player> isPlayerConected(@PathVariable String name){
        Player p=playersConected.get(name);
        if(p!=null){
            return new ResponseEntity<>(p,HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/playersConected")
    @ResponseStatus(HttpStatus.CREATED)
    public Player ConectPlayer(@RequestBody Player p){
        playersConected.put(p.getName(),p);
        return p;
    }

    @PutMapping("/playersConected/{name}")
    public ResponseEntity<Player> StillConected(@PathVariable String name){
        //Si quitas la condicion if y todo el else, si el jugador que intentas modificar no existe, lo crea automaticamente.
        Player p=playersConected.get(name);
        if(p!=null){
            p.setDate(new Date());
            playersConected.put(name,p);
            return new ResponseEntity<>(playersConected.get(name),HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @Scheduled(fixedDelay = 500)
    public void checkIfPlayersOnline(){
        for (Player player : playersConected.values()) {
            long elapsed = new Date().getTime()-player.getDate().getTime();
            System.out.println(elapsed);
            if ( elapsed >10000) {
                DisconectPlayer(player.getName());
            }
        }
    }

    //PLAYERS

    @GetMapping("/players/{name}")
    public ResponseEntity<Player> getPlayer(@PathVariable String name){
        Player p=players.get(name);
        if(p!=null){
            return new ResponseEntity<>(p,HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/players")
    @ResponseStatus(HttpStatus.CREATED)
    public Player AddPlayer(@RequestBody Player p){
        players.put(p.getName(),p);
        return p;
    }

    @DeleteMapping("/players/{name}")
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

    @PutMapping("/players/{name}")
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
