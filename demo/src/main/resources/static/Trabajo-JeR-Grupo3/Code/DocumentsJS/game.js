var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: "phaser-game",
    backgroundColor: 0x000000,
    pixelArt: true, //Prevent pixel art from becoming blurred when scaled.
    //antialias: true,
    scene: [Loading, Login, Menu, Settings, Configuration, Credits, SelectionLevel, PreloadLevel, OnlineGameScene, ErrorScene, GameScene, FinishGameScene, SelectionMode],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,// para que al rescalar la pantalla se siga manteninedo igual
        autoCenter: Phaser.Scale.CENTER_BOTH, // centrar
        width: 800,
        height: 600,
        dom: {
            createContainer: true
        }
    }
}

// Para controlar la música se utilizarán las siguientes variables
var menuMusic;
var levelSelectionMusic;
var stageMusic;
var pulseEffect;
var overEffect;
var musicON;

// Para controlar el idioma se usarán las siguientes variables
var spanish;
var english;

// Para controlar los niveles en el arcade
var level = 1;

var singlePlayer;
var online;
var group;
var player;
var actionOnlinePlayer = { id: 1, group: 0, player: 0, action: "" }
var actionOnlinePlayerObjects = { id: 2, group: 0, player: 0, action: "" }
var commandTypeOnline = { id: 3, group: 0, player: 0, type: "" }
var nameP1 = null;
var nameP2 = null;
var serverFailed;
var serverActive;
var conexionError=false;
var Scene;
var partyFull;
var game;

// Variables para el multijugador
/*
var idPlayer = 0;
var infoWS = "";

this.setJugador = function (msg) {
    if (msg == "J1") {
        this.idPlayer = 1;
        console.log("Id del jugador: " + this.idPlayer);

        // Jugador 2 queda vinculado a los controladores del ws
    } else if (msg == "J2") {
        this.idPlayer = 2;
        console.log("Id del jugador: " + this.idPlayer)
    } else {
        this.idPlayer = -1;
        console.log("Servidor lleno");
    }
};*/


let connection;

window.onload = function () {
    game = new Phaser.Game(config);
    window.focus();
}