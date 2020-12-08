class Credits extends Phaser.Scene{
    constructor(){
        super("Credits")
    }

    create(){

        // Declaración de la configuración principal del menú de configuration.
        this.background=this.add.image(config.width/2,config.height/2,'creditsBackground');
        this.creditsText=this.add.image(config.width/2,config.height/2,'creditsText');

        // Declaración de los botones del menú de configuration.
        this.credits_return_button=this.add.image(config.width/1.2,config.height/1.5,'returnCredits')
        
        // Declaración de funcionalidades
        this.credits_return_button.setInteractive().on('pointerdown', () => {
            this.scene.start("Menu");
        })
        }

}