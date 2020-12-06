class Loading extends Phaser.Scene {
    constructor(){
        super("Carga")
        
    }
    preload(){
        this.load.image('background','Assets/background.png');
        this.load.image('logo','Assets/logo_pixelart.PNG');
        this.load.image('white','Assets/white.jpg');
        this.load.image('arcade_button','Assets/arcade_button.png');
        this.load.image('storyMode_button','Assets/storyMode_button.png');
        this.load.image('settings_button','Assets/settings_button.png');
        this.load.image('controls_button','Assets/controls_button.png');
        this.load.image('exit_button','Assets/exit_button.png');
        this.load.image('Lysha','Assets/Lysha.png');
        this.load.image('bat','Assets/bat.png');
        this.load.image('bat_potion','Assets/bat_potion.png');
        this.load.image('cut_bat','Assets/cut_bat.png');
        this.load.image('bat_potion_order','Assets/bat.png');
        this.load.image('herb','Assets/herb.png');
        this.load.image('cut_herb','Assets/cut_herb.png');
        this.load.image('herbal_potion','Assets/herbal_potion.png');
        this.load.image('herbal?potion?order','Assets/herb.png')
        this.load.image('cauldron','Assets/cauldron.png');
        this.load.image('coins','Assets/coins.png');
        this.load.image('time','Assets/time.png');
        this.load.image('ground','Assets/ground.png');
        this.load.image('wall1','Assets/wall1.png');
        this.load.image('wall2','Assets/wall2.png');
        this.load.image('wall3','Assets/wall3.png');
        this.load.image('wall4','Assets/wall4.png');
        this.load.image('table','Assets/table.png');
    }
    create(){
        /*
        var scene=this;
        var white = this.add.image(config.width/2,config.height/2,'white');
        var logo = this.add.image(config.width/2,config.height/2,'logo').setScale(0.3);

        
        this.cameras.main.once('camerafadeoutcomplete', function (camera) {
            logo.destroy();
            white.destroy();
            scene.scene.start("Menu");
        });

        setTimeout(function(){
            scene.cameras.main.fadeOut(2000);
             }, 2000);*/
             this.scene.start("GameScene");
    }
}