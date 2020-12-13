var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: 0x000000,
    pixelArt: true, //Prevent pixel art from becoming blurred when scaled.
    //antialias: true,
    scene: [Loading,Login,Menu,Settings,Configuration,Credits,SelectionLevel,GameScene,FinishGameScene],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: true
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
var musicON;

// Para controlar el idioma se usarán las siguientes variables
var spanish;
var english;

window.onload = function(){
    var game = new Phaser.Game(config);
    window.focus();
}