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

            this.musicON_button.setInteractive().on('pointerover', () => {
                if (musicON ===false){
                    if(musicON === true){
                    overEffect.play();
                    }
                    this.musicON_button.setTint(0xE197FE)
            }
            })

            this.musicON_button.setInteractive().on('pointerout',()=>{
                if (musicON === false){
                    this.musicON_button.setTint()
                }
            })

            this.musicOFF_button.setInteractive().on('pointerdown', () => {
                menuMusic.volume = 0.0;
                this.musicON_button=this.add.image(config.width/1.55,config.height/2.5,'musicONNoActive');
                this.musicOFF_button=this.add.image(config.width/2.6,config.height/2.5,'musicOFFActive');
                musicON = false;
            })

            this.musicOFF_button.setInteractive().on('pointerover', () => {
                if (musicON ===true){
                    if(musicON === true){
                        overEffect.play();
                    }
                    this.musicOFF_button.setTint(0xE197FE)
            }
            })

            this.musicOFF_button.setInteractive().on('pointerout',()=>{
                if (musicON === true){
                    this.musicOFF_button.setTint()
                }
            })

            this.english_button.setInteractive().on('pointerdown', () => {
                this.english_button=this.add.image(config.width/1.55,config.height/1.6,'englishActive');
                this.spanish_button=this.add.image(config.width/2.6,config.height/1.6,'spanishNoActive');
                this.settings_return_button=this.add.image(config.width/2,config.height/1.2,'returnSettingsEnglish');
                spanish = false;
                english = true;
            })

            this.english_button.setInteractive().on('pointerover', () => {
                if (spanish===true){
                    if(musicON === true){
                        overEffect.play();
                    }
                    this.english_button.setTint(0xE197FE)
            }
            })

            this.english_button.setInteractive().on('pointerout',()=>{
                if (spanish === true){
                    this.english_button.setTint()
                }
            })

            this.spanish_button.setInteractive().on('pointerdown', () => {
                this.english_button=this.add.image(config.width/1.55,config.height/1.6,'englishNoActive');
                this.spanish_button=this.add.image(config.width/2.6,config.height/1.6,'spanishActive');
                this.settings_return_button=this.add.image(config.width/2,config.height/1.2,'returnSettingsSpanish');
                spanish = true;
                english = false;
            })

            this.spanish_button.setInteractive().on('pointerover', () => {
                if (english ===true){
                    if(musicON === true){
                        overEffect.play();
                        }
                    this.spanish_button.setTint(0xE197FE)
            }
            })

            this.spanish_button.setInteractive().on('pointerout',()=>{
                if (english === true){
                    this.spanish_button.setTint()
                }
            })

            this.settings_return_button.setInteractive().on('pointerdown', () => {
                if(musicON===true){
                    pulseEffect.play();
                    }
                this.scene.start("Menu");
            })

            this.settings_return_button.setInteractive().on('pointerover', () => {
                this.tweens.add({
                    targets:this.settings_return_button,
                    duration:200,
                    scale: 1.15,
                });
            })
    
            this.settings_return_button.setInteractive().on('pointerout',()=>{
                this.tweens.add({
                    targets:this.settings_return_button,
                    duration:200,
                    scale: 1,
                });
            })

        }

}