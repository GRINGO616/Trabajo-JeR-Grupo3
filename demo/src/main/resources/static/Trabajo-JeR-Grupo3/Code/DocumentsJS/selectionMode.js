class SelectionMode extends Phaser.Scene{
    constructor(){
        super("SelectionMode")
    }

    create(){

        

        this.background = this.add.image(config.width / 2, config.height / 2, 'modeSelectionBackground');
        var elected = false;

        this.localButton = this.add.image(config.width / 1.4, config.height / 9, 'modeSelectionLocalButton');
        this.onlineButton = this.add.image(config.width / 3, config.height / 9, 'modeSelectionOnlineButton');

        this.nextButton = this.add.image(config.width / 2, config.height/2, 'modeSelectionNextButton');
        
        if (elected === false) {
            this.nextButton.setTint(0x676666);
        }

        this.localButton.setInteractive().on('pointerdown', () => {
            elected = true;
            this.tweens.add({
                targets: this.localButton,
                scale: 1.15,
            });
            this.tweens.add({
                targets: this.onlineButton,
                scale: 1.0,
                duration: 10
            })
            this.nextButton.setTint();
        })

        this.localButton.setInteractive().on('pointerover', () => {

            if (this.localButton.scale === 1) {
                if (musicON === true) {
                    overEffect.play();
                }
            }

            this.tweens.add({
                targets: this.localButton,
                duration: 200,
                scale: 1.15,
            });
        })

        this.localButton.setInteractive().on('pointerout', () => {
            if (elected === false || this.onlineButton.scale === 1.15) {
                this.tweens.add({
                    targets: this.localButton,
                    duration: 200,
                    scale: 1,
                });
            }
        })

        this.onlineButton.setInteractive().on('pointerdown', () => {
            elected = true;
            this.tweens.add({
                targets:this.onlineButton,
                scale: 1.15,
            });
            this.tweens.add({
                targets: this.localButton,
                scale: 1.0,
                duration: 10
            })
            connection.send("registrar");
            setJugador(infoWS);
            this.nextButton.setTint();
        })

        this.onlineButton.setInteractive().on('pointerover', () => {

            if(this.onlineButton.scale === 1){
                if(musicON === true){
                    overEffect.play();
                }
            }

            this.tweens.add({
                targets:this.onlineButton,
                duration:200,
                scale: 1.15,
            });
        })

        this.onlineButton.setInteractive().on('pointerout',()=>{
            if(elected === false|| this.localButton.scale === 1.15){
                this.tweens.add({
                    targets:this.onlineButton,
                    duration:200,
                    scale: 1,
                });
            }
        })

        this.nextButton.setInteractive().on('pointerdown', () => {
            if (elected === true) {
                if (musicON === true) {
                    pulseEffect.play();
                    levelSelectionMusic.stop();
                    stageMusic.volume = 0.4;
                    stageMusic.play();
                }
                this.scene.start("PreloadLevel");
            }
        })
        this.nextButton.setInteractive().on('pointerover', () => {
            if (elected === true) {
                this.tweens.add({
                    targets: this.nextButton,
                    duration: 200,
                    scale: 1.15,
                });
            }
        })

        this.nextButton.setInteractive().on('pointerout', () => {
            if (elected === true) {
                this.tweens.add({
                    targets: this.nextButton,
                    duration: 200,
                    scale: 1,
                });
            }
        })

        }

}