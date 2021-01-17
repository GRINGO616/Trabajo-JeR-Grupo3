package com.example.demo;

public class Team implements Comparable<Team>{
    
    private Player p1;
	private Player p2;
	private int points;

	public Team(){

	/* 
	this.p1 = NULL;
	this.p2 = NULL;
	this.points = 0;
	*/	

	}
	
	
	public Team(Player one, Player two, int p){

	this.p1 = one;
	this.p2 = two;
	this.points =p;
	
	}

	
	public Player getP1(){
	
	return this.p1;	

	}

	public void setP1(Player one){
	
	this.p1 = one;	

	}
	
	public Player getP2(){
		
	return this.p2;	

	}

	public void setP2(Player two){
	
	this.p2 = two;	

	}

	public int getPoints(){
	
	return this.points;	

	}

	public void setPoints(int p){
	
	this.points = p;	

	}
	
	@Override
	public int compareTo(Team t) {
        if(t.getPoints()>points){
            return -1;
        }else if(t.getPoints()==points){
            return 0;
        }else{
            return 1;
        }
	}
}