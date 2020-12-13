class PreloadLevel extends Phaser.Scene{
    constructor(){
        super("PreloadLevel")
    }

    create(){

    // Se establece la escena inicial del propio videojuego.
     var scene=this;

    // Se establecen los elementos principales de la pantalla de carga.
    var white = this.add.image(config.width/2,config.height/2,'loadingBackground');
    var logo = this.add.image(config.width/2,config.height/2,'logo');
                        this.cameras.main.once('camerafadeoutcomplete', function (camera) {
                    logo.destroy();
                    white.destroy();
                    scene.scene.start("GameScene");
        });
        setTimeout(function(){
            scene.cameras.main.fadeOut(2000);
             }, 2000);
        }

}