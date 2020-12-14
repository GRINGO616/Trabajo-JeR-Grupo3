class PreloadLevel extends Phaser.Scene{
    constructor(){
        super("PreloadLevel")
    }

    create(){

    // Se establece la escena inicial del propio videojuego.
     var scene=this;

    // Se establecen los elementos principales de la pantalla de carga.
    var loadingBackground= this.add.image(config.width/2,config.height/2,'loadingBackground');
    var controlsArea = this.add.image(config.width/2,config.height/2,'controlsArea');
    var controlsZone;
    
    if(spanish === true){
        controlsZone= this.add.image(config.width/2,config.height/1.9,'controlsZone2PSpanish');
    }

    if(english === true){
        controlsZone= this.add.image(config.width/2,config.height/1.9,'controlsZone2PEnglish');
    }

    this.cameras.main.once('camerafadeoutcomplete', function (camera) {
        controlsZone.destroy();
        controlsArea.destroy();
        loadingBackground.destroy();
        scene.scene.start("GameScene");
    });
        setTimeout(function(){
            scene.cameras.main.fadeOut(3000);
             }, 7000);
        }

}