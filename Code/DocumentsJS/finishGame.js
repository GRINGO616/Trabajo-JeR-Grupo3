class FinishGameScene extends Phaser.Scene{
    constructor(){
        super("FinishGameScene")
    }
    create(){
        
        //Finished game interface
        this.backgroundFinishedGame=this.add.sprite(config.width*0.5,config.height*0.5,'points_background');
        this.crossFinishedGame=this.add.sprite(config.width*0.75,config.height*0.27,'cross').setScale(0.05);
        this.firstblackStarFinishedGame=this.add.sprite(config.width*0.4,config.height*0.45,'blackStar');
        this.secondblackStarFinishedGame=this.add.sprite(config.width*0.5,config.height*0.45,'blackStar');
        this.thirdblackStarFinishedGame=this.add.sprite(config.width*0.6,config.height*0.45,'blackStar');
        this.levelFinishedGameText=this.add.text(config.width*0.52,config.height*0.35,"Level "+GameManager.level, { font: "38px PixelFont", fill: "#ffffff", align: "center" }).setOrigin(0.5).setResolution(10);
        this.firstStar=this.add.image(config.width*0.4,config.height*0.45,'star').setScale(0);
        this.secondStar=this.add.image(config.width*0.5,config.height*0.45,'star').setScale(0);
        this.thirdStar=this.add.image(config.width*0.6,config.height*0.45,'star').setScale(0);
        this.levelFinishedGameText=this.add.text(config.width*0.5,config.height*0.6,GameManager.levelCoins, { font: "38px PixelFont", fill: "#ffffff", align: "center" }).setOrigin(0.5).setResolution(10);
        //boton de replay si saca una o ninguna estrella y boton de nextLevel si ha sacado dos o mas. boton de back
        if(GameManager.levelCoins>100){
            this.tweens.add({
                targets:this.firstStar,
                scale: 1,
                delay:1000,
                duration:200,
                repeat:0
            });
        }
        if(GameManager.levelCoins>300){
            this.tweens.add({
                targets:this.secondStar,
                scale: 1,
                delay:1500,
                duration:200,
                repeat:0
            });
        }
        if(GameManager.levelCoins>500){
            this.tweens.add({
                targets:this.thirdStar,
                scale: 1,
                delay:2000,
                duration:200,
                repeat:0
            });
        }
        


        
    }
}