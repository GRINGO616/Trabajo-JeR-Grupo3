package com.example.demo;

import java.util.ArrayList;
import java.util.List;
import java.util.Collections;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ranking")
@CrossOrigin

public class RankingController {

    List<Team> ranking = new ArrayList<>();

    @GetMapping
    public List<Team> getRanking(){

        List<Team> rankingAux = new ArrayList<>();

        for (int i = 0; i<10;i++){
            rankingAux.add(ranking.get(i));
        }

        return rankingAux;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Team AddTeam(@RequestBody Team T ){
		boolean encontrado = false;
        int posRep = 0;
		
		for (int i = 0; i < ranking.size();i++) {
			if(T.getP1().getName().equals(ranking.get(i).getP1().getName()) && T.getP2().getName().equals(ranking.get(i).getP2().getName())) {
				encontrado = true;
				posRep = i;
			}
			
			if(T.getP2().getName().equals(ranking.get(i).getP1().getName()) && T.getP1().getName().equals(ranking.get(i).getP2().getName())) {
				encontrado = true;
				posRep = i;
			}
		}
		
		if(encontrado == true) {
			
			if(T.getPoints() > ranking.get(posRep).getPoints()){
			ranking.get(posRep).setPoints(T.getPoints());
			}
			Collections.sort(ranking);
		} else {
			
			ranking.add(T);
			Collections.sort(ranking);
        }
        
        return T;
    }
}