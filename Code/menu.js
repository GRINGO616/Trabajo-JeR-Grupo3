class Menu extends Phaser.Scene{
    constructor(){
        super("Menu")
    }
    create(){
        
        // Declaración de la configuración principal del menú.
        this.background=this.add.image(config.width/2,config.height/2,'menuBackground').setScale(1.2);
        var escena = this;

        // Declaración de los botones del menú principal.
        this.arcade_button=this.add.image(0.9*config.width/3,1.5*config.height/4,'arcade_button').setScale(0.4)
        this.storyMode_button=this.add.image(2.1*config.width/3,1.5*config.height/4,'storyMode_button').setScale(0.4)
        this.controls_button=this.add.image(config.width/2,2.1*config.height/4,'controls_button').setScale(0.4)
        this.settings_button=this.add.image(config.width/2,2.7*config.height/4,'settings_button').setScale(0.4)
        this.credit_button=this.add.image(config.width/2,3.3*config.height/4,'credits_button').setScale(0.3)
        
        // Paso de interfaces y activación de los botones.
        this.arcade_button.setInteractive().on('pointerdown', function () {
            menuMusic.stop();
            stageMusic.play();
            escena.scene.start("GameScene");
        })

        this.storyMode_button.setInteractive().on('pointerdown', function() {
            menuMusic.stop();
            stageMusic.play();
            escena.scene.start("GameScene");
        })

        this.controls_button.setInteractive().on('pointerdown', () => {
            this.scene.start("Configuration");
        })

        this.settings_button.setInteractive().on('pointerdown', () => {
            this.scene.start("Settings");
        })

        this.credit_button.setInteractive().on('pointerdown', () => {
            this.scene.start("Credits")
        })
    }
}