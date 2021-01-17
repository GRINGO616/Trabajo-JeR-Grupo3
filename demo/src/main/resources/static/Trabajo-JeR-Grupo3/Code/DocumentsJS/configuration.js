class Configuration extends Phaser.Scene{
    constructor(){
        super("Configuration")
    }

    create(){

        // Declaración de la configuración principal del menú de configuration.
        this.background=this.add.image(config.width/2,config.height/2,'configurationBackground');
        this.controlsArea= this.add.image(config.width/2,config.height/2,'controlsArea');
        var jugador = true;

        if(jugador === true){
            this.onePlayerButton = this.add.image(config.width/2.4,config.height/7,'onePlayerButtonHold');
            this.twoPlayerButton = this.add.image(config.width/1.6,config.height/7,'twoPlayersButtonUnhold');
        }

        if(jugador === false){
            this.onePlayerButton = this.add.image(config.width/2.4,config.height/7,'onePlayerButtonUnhold');
            this.twoPlayerButton = this.add.image(config.width/1.6,config.height/7,'twoPlayersButtonHold');
        }

        // Declaración de los botones del menú de configuration.
        if(spanish === true && jugador === true){
            this.controlsZone=this.add.image(config.width/2,config.height/1.9,'controlsZone1PSpanish');
            this.configuration_return_button=this.add.image(config.width/2,config.height/1.1,'returnConfigurationSpanish')
        }

        if(spanish === true && jugador === false){
            this.controlsZone=this.add.image(config.width/2,config.height/1.9,'controlsZone2PSpanish').setScale(0.9);
            this.configuration_return_button=this.add.image(config.width/2,config.height/1.1,'returnConfigurationSpanish')
        }

        if(english === true && jugador === true){
            this.controlsZone=this.add.image(config.width/2,config.height/1.9,'controlsZone1PEnglish');
            this.configuration_return_button=this.add.image(config.width/2,config.height/1.1,'returnConfigurationEnglish')
        }

        if(english === true && jugador === false){
            this.controlsZone=this.add.image(config.width/2,config.height/1.9,'controlsZone2PEnglish').setScale(0.9);
            this.configuration_return_button=this.add.image(config.width/2,config.height/1.1,'returnConfigurationEnglish')
        }
        
        // Declaración de funcionalidades

        this.onePlayerButton.setInteractive().on('pointerdown', () => {
            if(musicON === true){
                overEffect.play();
                }
            this.controlsArea= this.add.image(config.width/2,config.height/2,'controlsArea');
            if(spanish === true){
            this.onePlayerButton = this.add.image(config.width/2.4,config.height/7,'onePlayerButtonHold');
            this.twoPlayerButton = this.add.image(config.width/1.6,config.height/7,'twoPlayersButtonUnhold');
            this.controlsZone=this.add.image(config.width/2,config.height/1.9,'controlsZone1PSpanish');
            this.configuration_return_button=this.add.image(config.width/2,config.height/1.1,'returnConfigurationSpanish')
            jugador = true;
            }

            if(english === true){
                this.onePlayerButton = this.add.image(config.width/2.4,config.height/7,'onePlayerButtonHold');
                this.twoPlayerButton = this.add.image(config.width/1.6,config.height/7,'twoPlayersButtonUnhold');
                this.controlsZone=this.add.image(config.width/2,config.height/1.9,'controlsZone1PEnglish');
                this.configuration_return_button=this.add.image(config.width/2,config.height/1.1,'returnConfigurationEnglish')
                jugador = true;
            }
        })

        this.twoPlayerButton.setInteractive().on('pointerdown', () => {
            if(musicON === true){
                overEffect.play();
                }
            this.controlsArea= this.add.image(config.width/2,config.height/2,'controlsArea');
            if(spanish === true){
            this.onePlayerButton = this.add.image(config.width/2.4,config.height/7,'onePlayerButtonUnhold');
            this.twoPlayerButton = this.add.image(config.width/1.6,config.height/7,'twoPlayersButtonHold');
            this.controlsZone=this.add.image(config.width/2,config.height/1.9,'controlsZone2PSpanish').setScale(0.9);
            this.configuration_return_button=this.add.image(config.width/2,config.height/1.1,'returnConfigurationSpanish')
            jugador = false;
            }

            if(english === true){
                this.onePlayerButton = this.add.image(config.width/2.4,config.height/7,'onePlayerButtonUnhold');
                this.twoPlayerButton = this.add.image(config.width/1.6,config.height/7,'twoPlayersButtonHold');
                this.controlsZone=this.add.image(config.width/2,config.height/1.9,'controlsZone2PEnglish').setScale(0.9);
                this.configuration_return_button=this.add.image(config.width/2,config.height/1.1,'returnConfigurationEnglish')
                jugador = false;
            }
        }) 

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