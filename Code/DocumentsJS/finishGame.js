class FinishGameScene extends Phaser.Scene{
    constructor(){
        super("FinishGameScene")
    }
    create(){
        
        //Finished game interface
        //this.background = this.add.image(config.width/2,config.height/2,'finishGameBackground');
        this.backgroundFinishedGame=this.add.image(config.width*0.5,config.height*0.5,'points_background');
        this.firstblackStarFinishedGame=this.add.sprite(config.width*0.4,config.height*0.45,'blackStar');
        this.secondblackStarFinishedGame=this.add.sprite(config.width*0.5,config.height*0.45,'blackStar');
        this.thirdblackStarFinishedGame=this.add.sprite(config.width*0.6,config.height*0.45,'blackStar');

        if(spanish === true){
        this.levelFinishedGameText=this.add.text(config.width*0.52,config.height*0.35,"Nivel "+GameManager.level, { font: "38px PixelFont", fill: "#ffffff", align: "center" }).setOrigin(0.5).setResolution(10);
        }
        if(english=== true){
            this.levelFinishedGameText=this.add.text(config.width*0.52,config.height*0.35,"Level "+GameManager.level, { font: "38px PixelFont", fill: "#ffffff", align: "center" }).setOrigin(0.5).setResolution(10);
        }

        this.firstStar=this.add.image(config.width*0.4,config.height*0.45,'star').setScale(0);
        this.secondStar=this.add.image(config.width*0.5,config.height*0.45,'star').setScale(0);
        this.thirdStar=this.add.image(config.width*0.6,config.height*0.45,'star').setScale(0);

        if(spanish === true){
        this.retryButton=this.add.image(config.width*0.4,config.height*0.25,'retryButtonSpanish').setScale(0);
        this.returnFinishGame=this.add.image(config.width*0.6,config.height*0.25,'returnFinishGameSpanish').setScale(0);
        }

        if(english=== true){
            this.retryButton=this.add.image(config.width*0.4,config.height*0.25,'retryButtonEnglish').setScale(0);
            this.returnFinishGame=this.add.image(config.width*0.6,config.height*0.25,'returnFinishGameEnglish').setScale(0);
        }

        this.levelFinishedGameText=this.add.text(config.width*0.5,config.height*0.6,GameManager.levelCoins, { font: "38px PixelFont", fill: "#ffffff", align: "center" }).setOrigin(0.5).setResolution(10);
        
        // El caso de que no saquen ninguna estrella.

        if(GameManager.levelCoins < 100){
                this.tweens.add({
                    targets:this.retryButton,
                    scale: 1,
                    delay:1000,
                    duration:100,
                    repeat:0
                });
                this.tweens.add({
                    targets:this.returnFinishGame,
                    scale: 1,
                    delay:1000,
                    duration:100,
                    repeat:0
                });
        }
        //El caso de que saquen una estrella.
        if(GameManager.levelCoins>99 && GameManager.levelCoins < 301){
            this.tweens.add({
                targets:this.firstStar,
                scale: 1,
                delay:1000,
                duration:200,
                repeat:0
            });

                this.tweens.add({
                    targets:this.retryButton,
                    scale: 1,
                    delay:1500,
                    duration:100,
                    repeat:0
                });
                this.tweens.add({
                    targets:this.returnFinishGame,
                    scale: 1,
                    delay:1500,
                    duration:100,
                    repeat:0
                });
            
        }

        // El caso en que se consigan dos estrellas
        if(GameManager.levelCoins>300 && GameManager.levelCoins<501){
            this.tweens.add({
                targets:this.firstStar,
                scale: 1,
                delay:1000,
                duration:200,
                repeat:0
            });

            this.tweens.add({
                targets:this.secondStar,
                scale: 1,
                delay:1500,
                duration:200,
                repeat:0
            });

                this.tweens.add({
                    targets:this.retryButton,
                    scale: 1,
                    delay:2000,
                    duration:100,
                    repeat:0
                });
                this.tweens.add({
                    targets:this.returnFinishGame,
                    scale: 1,
                    delay:2000,
                    duration:100,
                    repeat:0
                });
            

        }
        if(GameManager.levelCoins>500){

            this.tweens.add({
                targets:this.firstStar,
                scale: 1,
                delay:1000,
                duration:200,
                repeat:0
            });

            this.tweens.add({
                targets:this.secondStar,
                scale: 1,
                delay:1500,
                duration:200,
                repeat:0
            });

            this.tweens.add({
                targets:this.thirdStar,
                scale: 1,
                delay:2000,
                duration:200,
                repeat:0
            });

            this.tweens.add({
                targets:this.retryButton,
                scale: 1,
                delay:2500,
                duration:100,
                repeat:0
            });
            this.tweens.add({
                targets:this.returnFinishGame,
                scale: 1,
                delay:2500,
                duration:100,
                repeat:0
            });
        }
        
        this.retryButton.setInteractive().on('pointerdown', () => {
                if(musicON===true){
                    pulseEffect.play();
                    stageMusic.stop();
                    stageMusic.volume = 0.4;
                    stageMusic.play();
                    }
                    this.scene.stop("GameScene");
                    this.scene.start("PreloadLevel");
            })
            this.retryButton.setInteractive().on('pointerover', () => {
                this.tweens.add({
                    targets:this.retryButton,
                    duration:200,
                    scale: 1.15,
                });
            })
            this.retryButton.setInteractive().on('pointerout',()=>{
                this.tweens.add({
                    targets:this.retryButton,
                    duration:200,
                    scale: 1,
                });
            })

            this.returnFinishGame.setInteractive().on('pointerdown', () => {
                if(musicON===true){
                    pulseEffect.play();
                    stageMusic.stop();
                    }
                    this.scene.stop("GameScene");
                    this.scene.start("Menu");
            })
            this.returnFinishGame.setInteractive().on('pointerover', () => {
                this.tweens.add({
                    targets:this.returnFinishGame,
                    duration:200,
                    scale: 1.15,
                });
            })
            this.returnFinishGame.setInteractive().on('pointerout',()=>{
                this.tweens.add({
                    targets:this.returnFinishGame,
                    duration:200,
                    scale: 1,
                });
            })

            


        
    }
}