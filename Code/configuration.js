class Configuration extends Phaser.Scene{
    constructor(){
        super("Configuration")
    }

    create(){

        // Declaración de la configuración principal del menú de configuration.
        this.backgroud=this.add.image(config.width/2,config.height/2,'configurationBackground');

        // Declaración de los botones del menú de configuration.
        this.configuration_return_button=this.add.image(config.width/1.2,config.height/1.5,'returnConfiguration')

        // Declaración de funcionalidades
        this.configuration_return_button.setInteractive().on('pointerdown', () => {
            this.scene.start("Menu");
        })

        }

}