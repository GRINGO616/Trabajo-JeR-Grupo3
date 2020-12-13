class SelectionLevel extends Phaser.Scene{
    constructor(){
        super("SelectionLevel")
    }

    create(){

        // Declaración de la configuración principal del menú de configuration.
        this.backgroud=this.add.image(config.width/2,config.height/2,'selectionLevelBackground');

        // Declaración de los botones del menú de configuration.
        if(spanish === true){
            this.selection_level_return_button=this.add.image(config.width/1.2,config.height/1.5,'returnSelectionLevelSpanish')
        }

        if(english === true){
            this.selection_level_return_button=this.add.image(config.width/1.2,config.height/1.5,'returnSelectionLevelEnglish')
        }
        
        // Declaración de funcionalidades
        this.selection_level_return_button.setInteractive().on('pointerdown', () => {
            this.scene.start("Menu");
        })

        }

}