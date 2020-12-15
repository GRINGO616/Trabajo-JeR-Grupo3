class SelectionLevel extends Phaser.Scene{
    constructor(){
        super("SelectionLevel")
    }

    create(){

        // Declaración de la configuración principal del menú de configuration.
        this.background=this.add.image(config.width/2,config.height/2,'selectionLevelBackground');
        var elected = false;

        // Declaración de los botones del menú de configuration.

        this.level1_button =this.add.image(config.width/3.25,config.height/1.6,'level1Hold');
        this.level2_button =this.add.image(config.width/1.5,config.height/1.6,'level2Hold');

        if(spanish === true){
            this.next_button =this.add.image(config.width/1.4,config.height/9,'nextSelectionLevelSpanish');
            this.selection_level_return_button=this.add.image(config.width/3,config.height/9,'returnSelectionLevelSpanish')
        }

        if(english === true){
            this.next_button =this.add.image(config.width/1.4,config.height/9,'nextSelectionLevelEnglish');
            this.selection_level_return_button=this.add.image(config.width/3,config.height/9,'returnSelectionLevelEnglish')
        }

        if (elected === false){
            this.next_button.setTint(0x676666);
        }
        
        // Declaración de funcionalidades
        this.level1_button.setInteractive().on('pointerdown', () => {
            elected = true;
            level = 1;
            this.tweens.add({
                targets:this.level1_button,
                scale: 1.15,
            });
            this.tweens.add({
                targets: this.level2_button,
                scale: 1.0,
                duration: 10
            })
            this.next_button.setTint();
        })

        this.level1_button.setInteractive().on('pointerover', () => {

            if(this.level1_button.scale === 1){
                if(musicON === true){
                    overEffect.play();
                }
            }
            
            this.tweens.add({
                targets:this.level1_button,
                duration:200,
                scale: 1.15,
            });
        })

        this.level1_button.setInteractive().on('pointerout',()=>{
            if(elected === false || this.level2_button.scale === 1.15){
                this.tweens.add({
                    targets:this.level1_button,
                    duration:200,
                    scale: 1,
                });
            }
        })

        this.level2_button.setInteractive().on('pointerdown', () => {
            elected = true;
            level = 2;
            this.tweens.add({
                targets:this.level2_button,
                scale: 1.15,
            });
            this.tweens.add({
                targets: this.level1_button,
                scale: 1.0,
                duration: 10
            })
            this.next_button.setTint();
        })

        this.level2_button.setInteractive().on('pointerover', () => {

            if(this.level2_button.scale === 1){
                if(musicON === true){
                    overEffect.play();
                }
            }

            this.tweens.add({
                targets:this.level2_button,
                duration:200,
                scale: 1.15,
            });
        })

        this.level2_button.setInteractive().on('pointerout',()=>{
            if(elected === false|| this.level1_button.scale === 1.15){
                this.tweens.add({
                    targets:this.level2_button,
                    duration:200,
                    scale: 1,
                });
            }
        })

        this.selection_level_return_button.setInteractive().on('pointerdown', () => {
            if(musicON===true){
                pulseEffect.play();
            }
            this.scene.start("Menu");
        })
        this.selection_level_return_button.setInteractive().on('pointerover', () => {
            this.tweens.add({
                targets:this.selection_level_return_button,
                duration:200,
                scale: 1.15,
            });
        })

        this.selection_level_return_button.setInteractive().on('pointerout',()=>{
            this.tweens.add({
                targets:this.selection_level_return_button,
                duration:200,
                scale: 1,
            });
        })
        
        this.next_button.setInteractive().on('pointerdown', () => {
            if(elected === true){
                if(musicON===true){
                    pulseEffect.play();
                    levelSelectionMusic.stop();
                    stageMusic.volume = 0.4;
                    stageMusic.play();
                    }
                    this.scene.start("PreloadLevel");
                }
            })
            this.next_button.setInteractive().on('pointerover', () => {
                if (elected === true){
                this.tweens.add({
                    targets:this.next_button,
                    duration:200,
                    scale: 1.15,
                });
            }
            })

            this.next_button.setInteractive().on('pointerout',()=>{
                if(elected === true){
                this.tweens.add({
                    targets:this.next_button,
                    duration:200,
                    scale: 1,
                });
            }
            })
        }
        

}