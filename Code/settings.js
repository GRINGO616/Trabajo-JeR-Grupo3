class Settings extends Phaser.Scene{
    constructor(){
        super("Settings")
    }

    create(){
        
            // Declaración de la configuración principal del menú de settings.
            this.backgroud=this.add.image(config.width/2,config.height/2,'settingsBackground');
            
            // Declaración de los botones del menú de settings.
            this.musicON_button=this.add.image(config.width/1.6,config.height/3,'musicON');
            this.musicOFF_button=this.add.image(config.width/2.4,config.height/3,'musicOFF');
            this.english_button=this.add.image(config.width/1.6,config.height/2,'english');
            this.spanish_button=this.add.image(config.width/2.4,config.height/2,'spanish');
            this.settings_return_button=this.add.image(config.width/2,config.height/1.3,'returnSettings');

            // Declaración de funcionalidades
            this.musicON_button.setInteractive().on('pointerdown', () => {
                menuMusic.play();
            })

            this.musicOFF_button.setInteractive().on('pointerdown', () => {
                menuMusic.stop();
            })

            this.settings_return_button.setInteractive().on('pointerdown', () => {
            this.scene.start("Menu");
            })

        }

}