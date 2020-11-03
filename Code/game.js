var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: 0x000000,
    pixelArt: true, //Prevent pixel art from becoming blurred when scaled.
    //antialias: true,
    scene: [Start,Menu],
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
    height: 600
    }
}

window.onload = function(){
    var game = new Phaser.Game(config);
    window.focus();
}