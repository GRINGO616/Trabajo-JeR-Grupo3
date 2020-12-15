class PreloadLevel extends Phaser.Scene{
    constructor(){
        super("PreloadLevel")
    }

    create(){

    // Se establece la escena inicial del propio videojuego.
     var scene=this;

    // Se establecen los elementos principales de la pantalla de carga.
    var preloadBackground= this.add.image(config.width/2,config.height/2,'preloadBackground');
    
    if(spanish === true){
        var J1=this.add.image(config.width/3.5,config.height/2.85,'preloadControlsJ1Spanish').setScale(0.8);
        var J2=this.add.image(config.width/1.4,config.height/2.85,'preloadControlsJ2Spanish').setScale(0.8);
        var instructionsZone = this.add.image(config.width/2.1,config.height/1.2,'preloadInstructionsSpanish');
    }

    if(english === true){
        var J1=this.add.image(config.width/3.5,config.height/2.85,'preloadControlsJ1English').setScale(0.8);
        var J2=this.add.image(config.width/1.4,config.height/2.85,'preloadControlsJ2English').setScale(0.8);
        var instructionsZone = this.add.image(config.width/2.1,config.height/1.2,'preloadInstructionsEnglish');
    }

    this.cameras.main.once('camerafadeoutcomplete', function (camera) {

        preloadBackground.destroy();
        J1.destroy();
        J2.destroy();
        instructionsZone.destroy();

        if (level === 1){
            scene.scene.start("GameScene");
        }
        
        if (level === 2){
            scene.scene.start("Level2");
        }
    });
        setTimeout(function(){
            scene.cameras.main.fadeOut(3000);
             }, 7000);
        }

}