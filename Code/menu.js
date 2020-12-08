class Menu extends Phaser.Scene{
    constructor(){
        super("Menu")
    }
    create(){
        
        // Declaración de la configuración principal del menú.
        this.background=this.add.image(config.width/2,config.height/2,'menuBackground');
        this.logoGame = this.add.image(config.width/2,0.5*config.height/4,'logoGame').setScale(0.14);
        var escena = this;

        // Declaración de los botones del menú principal.
        this.arcade_button=this.add.image(1.1*config.width/3,1.4*config.height/4.25,'arcade_button').setScale(0.3)
        this.storyMode_button=this.add.image(1.9*config.width/3,1.4*config.height/4.25,'storyMode_button').setScale(0.3)
        this.controls_button=this.add.image(config.width/2,1.8*config.height/4,'controls_button').setScale(0.3)
        this.settings_button=this.add.image(config.width/2,2.3*config.height/4,'settings_button').setScale(0.3)
        this.credit_button=this.add.image(config.width/2,2.8*config.height/4,'credits_button').setScale(1.05);
        
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