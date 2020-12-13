class SelectionLevel extends Phaser.Scene{
    constructor(){
        super("SelectionLevel")
    }

    create(){

        // Declaración de la configuración principal del menú de configuration.
        this.background=this.add.image(config.width/2,config.height/2,'selectionLevelBackground');
        var elected;

        // Declaración de los botones del menú de configuration.
        if(spanish === true){
            this.level1_button =this.add.image(config.width/2.5,config.height/2,'level1Spanish');
            this.level2_button =this.add.image(config.width/3,config.height/2,'level2Spanish');
            this.next_button =this.add.image(config.width/3,config.height/2,'nextSelectionLevelSpanish');
            this.selection_level_return_button=this.add.image(config.width/2,config.height/1.2,'returnSelectionLevelSpanish')
        }

        if(english === true){
            this.level1_button =this.add.image(config.width/2.5,config.height/2,'level1English');
            this.level2_button =this.add.image(config.width/3,config.height/2,'level2English');
            this.next_button =this.add.image(config.width/3,config.height/2,'nextSelectionLevelEnglish');
            this.selection_level_return_button=this.add.image(config.width/2,config.height/1.2,'returnSelectionLevelEnglish')
        }
        
        // Declaración de funcionalidades
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
            if(musicON===true){
                pulseEffect.play();
            }
            this.scene.start("PreloadLevel");
        })
        }

}