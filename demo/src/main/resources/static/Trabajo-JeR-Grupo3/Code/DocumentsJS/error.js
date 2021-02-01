class ErrorScene extends Phaser.Scene{
    constructor(){
        super("ErrorScene")
    }

    create(){
        Scene=this;
        this.backgroundError=this.add.image(config.width*0.5,config.height*0.5,'points_background');
        this.levelFinishedGameText=this.add.text(config.width*0.52,config.height*0.5,"Error en conexión,\nredirigiendo a menú.", { font: "38px PixelFont", fill: "#ffffff", align: "center" }).setOrigin(0.5).setResolution(10);
        this.timer = this.time.addEvent({
            delay: 2000, // ms
            callback: this.loadMenu,
        });
    }
    loadMenu(){
        Scene.scene.stop("FinishGameScene");
        Scene.scene.stop("GameScene");
        Scene.scene.stop("OnlineGameScene");
        Scene.scene.stop("SelectionMode");
        Scene.scene.start("Menu");
    }
}