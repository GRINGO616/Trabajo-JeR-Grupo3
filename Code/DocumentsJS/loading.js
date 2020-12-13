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
        this.load.audio('levelSelectionMusic',['Assets/music/levelSelectionMusic.ogg','Assets/music/levelSelectionMusic.mp3']);

        // Elementos de pantalla de carga
        this.load.image('loadingBackground','Assets/loadingScene/loadingBackground.jpg');
        this.load.image('logo','Assets/loadingScene/logo_pixelart.PNG');

        // Elementos de pantalla de login
        this.load.image('loginBackground','Assets/loggingScene/loginBackground.jpg');
        this.load.image('loginBox','Assets/loggingScene/loginBox.png');
        this.load.image('loginNextButton','Assets/loggingScene/loginNextButton.png');
        
        // Elementos de pantalla de menú
        this.load.image('logoGame', 'Assets/menuScene/logoGame.PNG');
        this.load.image('menuBackground','Assets/menuScene/menuBackground.png');
        this.load.image('arcade_button','Assets/menuScene/arcade_button.png');

        this.load.image('storyMode_button_spanish','Assets/menuScene/storyMode_button_spanish.png');
        this.load.image('settings_button_spanish','Assets/menuScene/settings_button_spanish.png');
        this.load.image('controls_button_spanish','Assets/menuScene/controls_button_spanish.png');
        this.load.image('credits_button_spanish','Assets/menuScene/credits_button_spanish.png');

        this.load.image('storyMode_button_english','Assets/menuScene/storyMode_button_english.png');
        this.load.image('settings_button_english','Assets/menuScene/settings_button_english.png');
        this.load.image('controls_button_english','Assets/menuScene/controls_button_english.png');
        this.load.image('credits_button_english','Assets/menuScene/credits_button_english.png');

        // Elementos de pantalla de configuración
        this.load.image('configurationBackground','Assets/configurationScene/configurationBackground.jpg');
        this.load.image('returnConfigurationSpanish','Assets/configurationScene/returnConfigurationSpanish.png');
        this.load.image('returnConfigurationEnglish','Assets/configurationScene/returnConfigurationEnglish.png');

        // Elementos de pantalla de ajustes
        this.load.image('settingsBackground','Assets/settingsScene/settingsBackground.jpg');
        this.load.image('settingsZone','Assets/settingsScene/settingsZone.png');
        this.load.image('musicONActive','Assets/settingsScene/musicONActive.png');
        this.load.image('musicONNoActive','Assets/settingsScene/musicONNoActive.png');
        this.load.image('musicOFFActive','Assets/settingsScene/musicOFFActive.png');
        this.load.image('musicOFFNoActive','Assets/settingsScene/musicOFFNoActive.png');
        this.load.image('englishActive','Assets/settingsScene/englishActive.png');
        this.load.image('englishNoActive','Assets/settingsScene/englishNoActive.png');
        this.load.image('spanishActive','Assets/settingsScene/spanishActive.png');
        this.load.image('spanishNoActive','Assets/settingsScene/spanishNoActive.png');
        this.load.image('returnSettingsSpanish','Assets/settingsScene/returnSettingsSpanish.png');
        this.load.image('returnSettingsEnglish','Assets/settingsScene/returnSettingsEnglish.png');

        // Elementos de pantalla de créditos
        this.load.image('creditsBackground','Assets/creditsScene/creditsBackground.jpg');
        this.load.image('creditsTextSpanish','Assets/creditsScene/creditsTextSpanish.png');
        this.load.image('returnCreditsSpanish','Assets/creditsScene/returnCreditsSpanish.png');
        this.load.image('creditsTextEnglish','Assets/creditsScene/creditsTextEnglish.png');
        this.load.image('returnCreditsEnglish','Assets/creditsScene/returnCreditsEnglish.png');

        // Elementos de pantalla de selección de nivel
        this.load.image('selectionLevelBackground','Assets/selectionLevelScene/selectionLevelBackground.jpg');
        this.load.image('returnSelectionLevelSpanish','Assets/selectionLevelScene/returnSelectionLevelSpanish.png');
        this.load.image('returnSelectionLevelEnglish','Assets/selectionLevelScene/returnSelectionLevelEnglish.png');

        //Elementos pantalla de victoria
        this.load.image('cross','Assets/cross.png');
        this.load.image('blackStar','Assets/blackStar.png');
        this.load.image('star','Assets/star.png');
        this.load.image('points_background','Assets/points_background.png');

        // Elementos de pantallas de juego.
        this.load.spritesheet('Lysha_forward','Assets/Lysha_forward.png',{frameWidth: 75, frameHeight: 140});
        this.load.spritesheet('Lysha_left','Assets/Lysha_left.png',{frameWidth: 75, frameHeight: 150});
        this.load.spritesheet('Lysha_right','Assets/Lysha_right.png',{frameWidth: 75, frameHeight: 140});
        this.load.spritesheet('Lysha_backwards','Assets/Lysha_backwards.png',{frameWidth: 75, frameHeight: 140});

        this.load.spritesheet('Freddie_forward','Assets/Freddie_forward.png',{frameWidth: 75, frameHeight: 140});
        this.load.spritesheet('Freddie_left','Assets/Freddie_left.png',{frameWidth: 75, frameHeight: 145});
        this.load.spritesheet('Freddie_right','Assets/Freddie_right.png',{frameWidth: 75, frameHeight: 145});
        this.load.spritesheet('Freddie_backwards','Assets/Freddie_backwards.png',{frameWidth: 75, frameHeight: 140});

        this.load.spritesheet('Lysha_walkcycle','Assets/Lysha_walk_cycle_1.png', {frameWidth: 75 , frameHeight: 154} );
        this.load.spritesheet('Lysha_walkcycle_2','Assets/Lysha_walk_cycle_2.png', {frameWidth: 77 , frameHeight: 154});
        this.load.spritesheet('Lysha_walkcycle_3','Assets/Lysha_walk_cycle_3.png', {frameWidth: 75 , frameHeight: 150});
        this.load.spritesheet('Lysha_walkcycle_4','Assets/Lysha_walk_cycle_4.png', {frameWidth: 75 , frameHeight: 150});
        
        this.load.spritesheet('Freddie_walkcycle','Assets/Freddie_walk_cycle_1.png', {frameWidth: 75 , frameHeight: 154} );
        this.load.spritesheet('Freddie_walkcycle_2','Assets/Freddie_walk_cycle_2.png', {frameWidth: 75 , frameHeight: 154});
        this.load.spritesheet('Freddie_walkcycle_3','Assets/Freddie_walk_cycle_3.png', {frameWidth: 75 , frameHeight: 150});
        this.load.spritesheet('Freddie_walkcycle_4','Assets/Freddie_walk_cycle_4.png', {frameWidth: 75 , frameHeight: 150});

        this.load.spritesheet('cauldronAnimation','Assets/cauldronAnimation.png', {frameWidth: 53 , frameHeight: 60});
        this.load.spritesheet('cauldron','Assets/cauldron.png', {frameWidth: 53 , frameHeight: 47});
        this.load.spritesheet('empty_cauldron','Assets/empty_cauldron.png', {frameWidth: 53 , frameHeight: 47});

        this.load.image('bat','Assets/bat.png');
        this.load.image('bat_potion','Assets/bat_potion.png');
        this.load.image('cut_bat','Assets/cut_bat.png');
        this.load.image('bat_potion_order','Assets/bat.png');
        this.load.image('herb','Assets/herb.png');
        this.load.image('cut_herb','Assets/cut_herb.png');
        this.load.image('herbal_potion','Assets/herbal_potion.png');
        this.load.image('herbal_potion_order','Assets/herb.png');
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
        this.load.image('bookshelf','Assets/bookshelf.png');
        this.load.image('comandBat','Assets/comandBat.png');
        this.load.image('comandHerb','Assets/comandHerb.png');
        this.load.image('bag','Assets/bag.png');


        
    }

    create(){
        
        // Se establece la escena inicial del propio videojuego.
        var scene=this; 
        // Se establecen los elementos principales de la pantalla de carga.
        var white = this.add.image(config.width/2,config.height/2,'loadingBackground');
        var logo = this.add.image(config.width/2,config.height/2,'logo');
                this.cameras.main.once('camerafadeoutcomplete', function (camera) {
            logo.destroy();
            white.destroy();
            scene.scene.start("Menu");
        });
        
        // Se establecen los parámetros para poder declarar la música del videojuego.
        menuMusic = this.sound.add('menuMusic',{loop:true, volume: 0.0});
        stageMusic = this.sound.add('stageMusic',{loop:true, volume: 0.0});
        levelSelectionMusic = this.sound.add('levelSelectionMusic',{loop:true, volume: 0.0});
        menuMusic.play()

        musicON = true;

        // Se establecen los parámetros para poder establecer el idioma.
        spanish = true;
        english = false;

        setTimeout(function(){
            scene.cameras.main.fadeOut(2000);
             }, 2000);
    }
}