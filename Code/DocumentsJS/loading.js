class Loading extends Phaser.Scene {
    constructor(){
        super("Loading")
        
    }
    preload(){

        //this.load.plugin('rexinputtextplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexinputtextplugin.min.js', true);    

        this.load.plugin('rexbbcodetextplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexbbcodetextplugin.min.js', true);
        this.load.plugin('rextexteditplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rextexteditplugin.min.js', true);
        
        // Elementos de sonido
        this.load.audio('menuMusic',['Assets/music/menuMusic.ogg','Assets/music/menuMusic.mp3']);
        this.load.audio('stageMusic',['Assets/music/stageMusic.ogg','Assets/music/stageMusic.mp3']);

        // Elementos de pantalla de carga
        this.load.image('loadingBackground','Assets/loadingScene/loadingBackground.jpg');
        this.load.image('logo','Assets/loadingScene/logo_pixelart.PNG');

        // Elementos de pantalla de logging
        this.load.image('loginBackground','Assets/loggingScene/loginBackground.jpg');
        this.load.image('loginBox','Assets/loggingScene/loginBox.png');
        this.load.image('loginNextButton','Assets/loggingScene/loginNextButton.png');
        
        // Elementos de pantalla de menú
        this.load.image('logoGame', 'Assets/menuScene/logoGame.PNG');
        this.load.image('menuBackground','Assets/menuScene/menuBackground.png');
        this.load.image('arcade_button','Assets/menuScene/arcade_button.png');
        this.load.image('storyMode_button','Assets/menuScene/storyMode_button.png');
        this.load.image('settings_button','Assets/menuScene/settings_button.png');
        this.load.image('controls_button','Assets/menuScene/controls_button.png');
        this.load.image('credits_button','Assets/menuScene/credits_button.png');

        // Elementos de pantalla de configuración
        this.load.image('configurationBackground','Assets/configurationScene/configurationBackground.jpg');
        this.load.image('returnConfiguration','Assets/configurationScene/returnConfiguration.png');

        // Elementos de pantalla de ajustes
        this.load.image('settingsBackground','Assets/settingsScene/settingsBackground.jpg');
        this.load.image('musicON','Assets/settingsScene/musicON.png');
        this.load.image('musicOFF','Assets/settingsScene/musicOFF.png');
        this.load.image('english','Assets/settingsScene/english.png');
        this.load.image('spanish','Assets/settingsScene/spanish.png');
        this.load.image('returnSettings','Assets/settingsScene/returnSettings.png');

        // Elementos de pantalla de créditos
        this.load.image('creditsBackground','Assets/creditsScene/creditsBackground.jpg');
        this.load.image('creditsText','Assets/creditsScene/creditsText.jpg');
        this.load.image('returnCredits','Assets/creditsScene/returnCredits.png');

        // Elementos de pantallas de juego.
        this.load.spritesheet('Lysha','Assets/Lysha.png',{frameWidth: 75, frameHeight: 140});
        this.load.spritesheet('Lysha_walkcycle','Assets/Lysha_walk_cycle_1.png', {frameWidth: 75 , frameHeight: 154} );
        this.load.spritesheet('Lysha_walkcycle_2','Assets/Lysha_walk_cycle_2.png', {frameWidth: 77 , frameHeight: 154});
        this.load.spritesheet('Lysha_walkcycle_3','Assets/Lysha_walk_cycle_3.png', {frameWidth: 75 , frameHeight: 150});
        this.load.spritesheet('Lysha_walkcycle_4','Assets/Lysha_walk_cycle_4.png', {frameWidth: 75 , frameHeight: 150});
        this.load.image('bat','Assets/bat.png');
        this.load.image('bat_potion','Assets/bat_potion.png');
        this.load.image('cut_bat','Assets/cut_bat.png');
        this.load.image('bat_potion_order','Assets/bat.png');
        this.load.image('herb','Assets/herb.png');
        this.load.image('cut_herb','Assets/cut_herb.png');
        this.load.image('herbal_potion','Assets/herbal_potion.png');
        this.load.image('herbal_potion_order','Assets/herb.png')
        this.load.image('cauldron','Assets/cauldron.png');
        this.load.image('coins','Assets/coins.png');
        this.load.image('time','Assets/time.png');
        this.load.image('ground','Assets/ground.png');
        this.load.image('wall1','Assets/wall1.png');
        this.load.image('wall2','Assets/wall2.png');
        this.load.image('wall3','Assets/wall3.png');
        this.load.image('wall4','Assets/wall4.png');
        this.load.image('table','Assets/table.png');
        this.load.image('boxes','Assets/boxes.png');
        this.load.image('box','Assets/box.png');
        this.load.image('progress','Assets/progress.png');
        this.load.image('empty_bar','Assets/empty_bar.png');
        this.load.image('goal_box','Assets/goal_box.png');

        
    }
    create(){
        
        // Se establece la escena inicial del propio videojuego.
        var scene=this;
        scene.scene.start("GameScene");
        /*
        // Se establecen los elementos principales de la pantalla de carga.
        var white = this.add.image(config.width/2,config.height/2,'loadingBackground');
        var logo = this.add.image(config.width/2,config.height/2,'logo');
                this.cameras.main.once('camerafadeoutcomplete', function (camera) {
            logo.destroy();
            white.destroy();
            scene.scene.start("Login");
        });
        
        // Se establecen los parámetros para poder declarar la música del videojuego.
        menuMusic = this.sound.add('menuMusic',{loop:true, volume: 0.4});
        stageMusic = this.sound.add('stageMusic',{loop:true, volume: 0.4});

        setTimeout(function(){
            scene.cameras.main.fadeOut(2000);
             }, 2000);
         */
    }
}