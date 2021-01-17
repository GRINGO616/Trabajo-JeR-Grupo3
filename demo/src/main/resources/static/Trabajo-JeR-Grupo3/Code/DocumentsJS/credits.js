class Credits extends Phaser.Scene{
    constructor(){
        super("Credits")
    }

    create(){

        // Declaración de la configuración principal del menú de configuration.
        this.background=this.add.image(config.width/2,config.height/2,'creditsBackground');

        // Declaración de los botones del menú de configuration.
        if(spanish===true){
            this.creditsText=this.add.image(config.width/2,config.height/2,'creditsTextSpanish');
            this.credits_return_button=this.add.image(config.width/2,config.height/1.15,'returnCreditsSpanish')
        }

        if(english===true){
            this.creditsText=this.add.image(config.width/2,config.height/2,'creditsTextEnglish');
            this.credits_return_button=this.add.image(config.width/2,config.height/1.15,'returnCreditsEnglish')
        }
        
        // Declaración de funcionalidades
        this.credits_return_button.setInteractive().on('pointerdown', () => {
            if(musicON===true){
                pulseEffect.play();
            }
            this.scene.start("Menu");
        })

        this.credits_return_button.setInteractive().on('pointerover', () => {
            this.tweens.add({
                targets:this.credits_return_button,
                duration:200,
                scale: 1.15,
            });
        })

        this.credits_return_button.setInteractive().on('pointerout',()=>{
            this.tweens.add({
                targets:this.credits_return_button,
                duration:200,
                scale: 1,
            });
        })
        }

}