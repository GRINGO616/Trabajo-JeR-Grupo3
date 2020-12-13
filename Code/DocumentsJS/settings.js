class Settings extends Phaser.Scene{
    constructor(){
        super("Settings")
    }

    create(){
        
            // Declaración de la configuración principal del menú de settings.
            this.background=this.add.image(config.width/2,config.height/2,'settingsBackground');
            this.settingsZone=this.add.image(config.width/2,config.height/2,'settingsZone');

            // Declaración de los botones del menú de settings.
            if(musicON === true){
                this.musicON_button=this.add.image(config.width/1.55,config.height/2.5,'musicONActive');
                this.musicOFF_button=this.add.image(config.width/2.6,config.height/2.5,'musicOFFNoActive');
            }

            if(musicON === false){
                this.musicON_button=this.add.image(config.width/1.55,config.height/2.5,'musicONNoActive');
                this.musicOFF_button=this.add.image(config.width/2.6,config.height/2.5,'musicOFFActive');
            }

            if(spanish === true){
                this.english_button=this.add.image(config.width/1.55,config.height/1.6,'englishNoActive');
                this.spanish_button=this.add.image(config.width/2.6,config.height/1.6,'spanishActive');
                this.settings_return_button=this.add.image(config.width/2,config.height/1.2,'returnSettingsSpanish');
            }

            if(english === true){
                this.english_button=this.add.image(config.width/1.55,config.height/1.6,'englishActive');
                this.spanish_button=this.add.image(config.width/2.6,config.height/1.6,'spanishNoActive');
                this.settings_return_button=this.add.image(config.width/2,config.height/1.2,'returnSettingsEnglish');
            }

            // Declaración de funcionalidades
            this.musicON_button.setInteractive().on('pointerdown', () => {
                menuMusic.volume = 0.4;
                this.musicON_button=this.add.image(config.width/1.55,config.height/2.5,'musicONActive');
                this.musicOFF_button=this.add.image(config.width/2.6,config.height/2.5,'musicOFFNoActive');
                musicON = true;
            })

            this.musicOFF_button.setInteractive().on('pointerdown', () => {
                menuMusic.volume = 0.0;
                this.musicON_button=this.add.image(config.width/1.55,config.height/2.5,'musicONNoActive');
                this.musicOFF_button=this.add.image(config.width/2.6,config.height/2.5,'musicOFFActive');
                musicON = false;
            })

            this.english_button.setInteractive().on('pointerdown', () => {
                this.english_button=this.add.image(config.width/1.55,config.height/1.6,'englishActive');
                this.spanish_button=this.add.image(config.width/2.6,config.height/1.6,'spanishNoActive');
                this.settings_return_button=this.add.image(config.width/2,config.height/1.2,'returnSettingsEnglish');
                spanish = false;
                english = true;
            })

            this.spanish_button.setInteractive().on('pointerdown', () => {
                this.english_button=this.add.image(config.width/1.55,config.height/1.6,'englishNoActive');
                this.spanish_button=this.add.image(config.width/2.6,config.height/1.6,'spanishActive');
                this.settings_return_button=this.add.image(config.width/2,config.height/1.2,'returnSettingsSpanish');
                spanish = true;
                english = false;
            })

            this.settings_return_button.setInteractive().on('pointerdown', () => {
            this.scene.start("Menu");
            })

        }

}