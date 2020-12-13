class Configuration extends Phaser.Scene{
    constructor(){
        super("Configuration")
    }

    create(){

        // Declaración de la configuración principal del menú de configuration.
        this.background=this.add.image(config.width/2,config.height/2,'configurationBackground');

        // Declaración de los botones del menú de configuration.
        if(spanish === true){
            this.controlsZone=this.add.image(config.width/2,config.height/1.5,'controlsZoneSpanish');
            this.onePlayer_button =this.add.image(config.width/2.5,config.height/2,'onePlayerButtonSpanish');
            this.onePlayer_button =this.add.image(config.width/3,config.height/2,'twoPlayersButtonSpanish');
            this.configuration_return_button=this.add.image(config.width/2,config.height/1.2,'returnConfigurationSpanish')
        }

        if(english === true){
            this.controlsZone=this.add.image(config.width/2,config.height/1.5,'controlsZoneEnglish');
            this.onePlayer_button =this.add.image(config.width/2.5,config.height/2,'onePlayerButtonEnglish');
            this.onePlayer_button =this.add.image(config.width/3,config.height/2,'twoPlayersButtonEnglish');
            this.configuration_return_button=this.add.image(config.width/2,config.height/1.2,'returnConfigurationEnglish')
        }
        
        // Declaración de funcionalidades
        this.configuration_return_button.setInteractive().on('pointerdown', () => {
            if(musicON===true){
                pulseEffect.play();
            }
            this.scene.start("Menu");
        })
        this.configuration_return_button.setInteractive().on('pointerover', () => {
            this.tweens.add({
                targets:this.configuration_return_button,
                duration:200,
                scale: 1.15,
            });
        })

        this.configuration_return_button.setInteractive().on('pointerout',()=>{
            this.tweens.add({
                targets:this.configuration_return_button,
                duration:200,
                scale: 1,
            });
        })

        }

}