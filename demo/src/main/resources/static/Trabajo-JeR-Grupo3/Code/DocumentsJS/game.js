var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: "phaser-game",
    backgroundColor: 0x000000,
    pixelArt: true, //Prevent pixel art from becoming blurred when scaled.
    //antialias: true,
    scene: [Loading,Login,Menu,Settings,Configuration,Credits,SelectionLevel,SelectionMode,PreloadLevel,GameScene,FinishGameScene],
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
var level;

var singlePlayer;
var nameP1 = null;
var nameP2 = null;
var serverFailed;
var serverActive;

// Variables para el multijugador

var idPlayer = 0;
var infoWS = "";

this.setJugador = function (msg) {
    if (msg == "J1") {
      this.idPlayer= 1;
      console.log("Id del jugador: " + this.idPlayer);
        
      // Jugador 2 queda vinculado a los controladores del ws
    } else if (msg == "J2") {
    this.idPlayer = 2;
    console.log("Id del jugador: " + this.idPlayer)
    } else {
        this.idPlayer = -1;
        console.log("Servidor lleno");
    }
  };


let connection = new WebSocket('ws://127.0.0.1:8080/echo');

connection.onopen = function () {
    connection.send('Conexion establecida');
}

connection.onmessage = function (msg) {
    infoWS = msg;
    console.log("Mensaje "+ msg.data);
}

connection.onerror = function (e) {
    console.log("Se ha producido el error " + e);
}

connection.onclose = function () {
    console.log("La conexión se ha cerrado con éxito");
}



window.onload = function(){
    var game = new Phaser.Game(config);
    window.focus();
}