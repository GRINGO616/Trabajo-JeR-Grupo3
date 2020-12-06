class Menu extends Phaser.Scene{
    constructor(){
        super("Menu")
    }
    create(){
        this.cameras.main.fadeIn(2000)
        this.backgroud=this.add.image(config.width/2,config.height/2,'background').setScale(1.2)
        this.arcade_button=this.add.image(0.9*config.width/3,1.5*config.height/4,'arcade_button').setScale(0.4)
        this.storyMode_button=this.add.image(2.1*config.width/3,1.5*config.height/4,'storyMode_button').setScale(0.4)
        this.controls_button=this.add.image(config.width/2,2.1*config.height/4,'controls_button').setScale(0.4)
        this.settings_button=this.add.image(config.width/2,2.7*config.height/4,'settings_button').setScale(0.4)
        this.exit_button=this.add.image(config.width/2,3.3*config.height/4,'exit_button').setScale(0.3)
        this.arcade_button.setInteractive().on('pointerdown', () => {
            this.scene.start("GameScene");
        })
    }
}