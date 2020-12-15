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
        this.load.audio('pulseMusic',['Assets/music/pulseMagicEffect.ogg','Assets/music/pulseMagicEffect.mp3']);
        this.load.audio('overMusic',['Assets/music/overEffect.ogg','Assets/music/overEffect.mp3']);

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
        this.load.image('controlsArea','Assets/configurationScene/controlsArea.png');
        this.load.image('controlsZone1PSpanish','Assets/configurationScene/controlsZone1PSpanish.png');
        this.load.image('controlsZone1PEnglish','Assets/configurationScene/controlsZone1PEnglish.png');
        this.load.image('controlsZone2PSpanish','Assets/configurationScene/controlsZone2PSpanish.png');
        this.load.image('controlsZone2PEnglish','Assets/configurationScene/controlsZone2PEnglish.png');
        this.load.image('onePlayerButtonHold','Assets/configurationScene/onePlayerButtonHold.png');
        this.load.image('onePlayerButtonUnhold','Assets/configurationScene/onePlayerButtonUnhold.png');
        this.load.image('twoPlayersButtonHold','Assets/configurationScene/twoPlayerButtonHold.png');
        this.load.image('twoPlayersButtonUnhold','Assets/configurationScene/twoPlayerButtonUnhold.png');
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
        this.load.image('level1Hold','Assets/selectionLevelScene/level1Hold.png');
        this.load.image('level2Hold','Assets/selectionLevelScene/level2Hold.png');
        this.load.image('nextSelectionLevelSpanish','Assets/selectionLevelScene/nextSelectionLevelSpanish.png');
        this.load.image('nextSelectionLevelEnglish','Assets/selectionLevelScene/nextSelectionLevelEnglish.png');
        this.load.image('returnSelectionLevelSpanish','Assets/selectionLevelScene/returnSelectionLevelSpanish.png');
        this.load.image('returnSelectionLevelEnglish','Assets/selectionLevelScene/returnSelectionLevelEnglish.png');

        // Elementos de pantalla de precarga nivel
        this.load.image('preloadBackground','Assets/preloadLevelScene/preloadBackground.jpg');
        this.load.image('preloadControlsJ1Spanish','Assets/preloadLevelScene/preloadControlsJ1Spanish.png');
        this.load.image('preloadControlsJ2Spanish','Assets/preloadLevelScene/preloadControlsJ2Spanish.png');
        this.load.image('preloadControlsJ1English','Assets/preloadLevelScene/preloadControlsJ1English.png');
        this.load.image('preloadControlsJ2English','Assets/preloadLevelScene/preloadControlsJ2English.png');
        this.load.image('preloadInstructionsSpanish','Assets/preloadLevelScene/preloadInstructionsSpanish.png');
        this.load.image('preloadInstructionsEnglish','Assets/preloadLevelScene/preloadInstructionsEnglish.png');

        //Elementos pantalla de victoria
        this.load.image('finishGameBackground','Assets/finishGameScene/finishGameBackground.jpg');
        this.load.image('blackStar','Assets/finishGameScene/blackStar.png');
        this.load.image('star','Assets/finishGameScene/star.png');
        this.load.image('points_background','Assets/finishGameScene/points_background.png');
        this.load.image('retryButtonSpanish','Assets/finishGameScene/retryButtonSpanish.png');
        this.load.image('retryButtonEnglish','Assets/finishGameScene/retryButtonEnglish.png');
        this.load.image('returnFinishGameSpanish','Assets/finishGameScene/returnFinishGameSpanish.png');
        this.load.image('returnFinishGameEnglish','Assets/finishGameScene/returnFinishGameEnglish.png');

        // Elementos de pantallas de juego.

            // Animacion y sprites de personajes nivel 1
            this.load.spritesheet('Lysha_forward','Assets/level1Scene/charactersAnimation/Lysha_forward.png',{frameWidth: 75, frameHeight: 140});
            this.load.spritesheet('Lysha_left','Assets/level1Scene/charactersAnimation/Lysha_left.png',{frameWidth: 75, frameHeight: 150});
            this.load.spritesheet('Lysha_right','Assets/level1Scene/charactersAnimation/Lysha_right.png',{frameWidth: 75, frameHeight: 140});
            this.load.spritesheet('Lysha_backwards','Assets/level1Scene/charactersAnimation/Lysha_backwards.png',{frameWidth: 75, frameHeight: 140});
            this.load.spritesheet('Freddie_forward','Assets/level1Scene/charactersAnimation/Freddie_forward.png',{frameWidth: 75, frameHeight: 140});
            this.load.spritesheet('Freddie_left','Assets/level1Scene/charactersAnimation/Freddie_left.png',{frameWidth: 75, frameHeight: 145});
            this.load.spritesheet('Freddie_right','Assets/level1Scene/charactersAnimation/Freddie_right.png',{frameWidth: 75, frameHeight: 145});
            this.load.spritesheet('Freddie_backwards','Assets/level1Scene/charactersAnimation/Freddie_backwards.png',{frameWidth: 75, frameHeight: 140});
            this.load.spritesheet('Lysha_walkcycle','Assets/level1Scene/charactersAnimation/Lysha_walk_cycle_1.png', {frameWidth: 75 , frameHeight: 154} );
            this.load.spritesheet('Lysha_walkcycle_2','Assets/level1Scene/charactersAnimation/Lysha_walk_cycle_2.png', {frameWidth: 77 , frameHeight: 154});
            this.load.spritesheet('Lysha_walkcycle_3','Assets/level1Scene/charactersAnimation/Lysha_walk_cycle_3.png', {frameWidth: 75 , frameHeight: 150});
            this.load.spritesheet('Lysha_walkcycle_4','Assets/level1Scene/charactersAnimation/Lysha_walk_cycle_4.png', {frameWidth: 75 , frameHeight: 150});  
            this.load.spritesheet('Freddie_walkcycle','Assets/level1Scene/charactersAnimation/Freddie_walk_cycle_1.png', {frameWidth: 75 , frameHeight: 154} );
            this.load.spritesheet('Freddie_walkcycle_2','Assets/level1Scene/charactersAnimation/Freddie_walk_cycle_2.png', {frameWidth: 75 , frameHeight: 154});
            this.load.spritesheet('Freddie_walkcycle_3','Assets/level1Scene/charactersAnimation/Freddie_walk_cycle_3.png', {frameWidth: 75 , frameHeight: 150});
            this.load.spritesheet('Freddie_walkcycle_4','Assets/level1Scene/charactersAnimation/Freddie_walk_cycle_4.png', {frameWidth: 75 , frameHeight: 150});

            // Elementos de interacción nivel 1
            this.load.spritesheet('cauldronAnimation','Assets/level1Scene/interactiveElements/cauldronAnimation.png', {frameWidth: 53 , frameHeight: 60});
            this.load.spritesheet('cauldron','Assets/level1Scene/interactiveElements/cauldron.png', {frameWidth: 53 , frameHeight: 47});
            this.load.spritesheet('empty_cauldron','Assets/level1Scene/interactiveElements/empty_cauldron.png', {frameWidth: 53 , frameHeight: 47});
            this.load.image('bat','Assets/level1Scene/interactiveElements/bat.png');
            this.load.image('bat_potion','Assets/level1Scene/interactiveElements/bat_potion.png');
            this.load.image('cut_bat','Assets/level1Scene/interactiveElements/cut_bat.png');
            this.load.image('bat_potion_order','Assets/level1Scene/interactiveElements/bat.png');
            this.load.image('herb','Assets/level1Scene/interactiveElements/herb.png');
            this.load.image('cut_herb','Assets/level1Scene/interactiveElements/cut_herb.png');
            this.load.image('herbal_potion','Assets/level1Scene/interactiveElements/herbal_potion.png');
            this.load.image('herbal_potion_order','Assets/level1Scene/interactiveElements/herb.png');
            
            // Elementos de interfaz nivel 1
            this.load.image('coins','Assets/level1Scene/interfaceElements/coins.png');
            this.load.image('time','Assets/level1Scene/interfaceElements/time.png');
            this.load.image('progress','Assets/level1Scene/interfaceElements/progress.png');
            this.load.image('empty_bar','Assets/level1Scene/interfaceElements/empty_bar.png');
            this.load.image('comandBat','Assets/level1Scene/interfaceElements/comandBat.png');
            this.load.image('comandHerb','Assets/level1Scene/interfaceElements/comandHerb.png');
            this.load.image('bag','Assets/level1Scene/interfaceElements/bag.png');

            // Elementos de colisión nivel 1
            this.load.image('ground','Assets/level1Scene/colisionElements/ground.png');
            this.load.image('wall1','Assets/level1Scene/colisionElements/wall1.png');
            this.load.image('wall2','Assets/level1Scene/colisionElements/wall2.png');
            this.load.image('wall3','Assets/level1Scene/colisionElements/wall3.png');
            this.load.image('wall4','Assets/level1Scene/colisionElements/wall4.png');
            this.load.image('table','Assets/level1Scene/colisionElements/table.png');
            this.load.image('boxes','Assets/level1Scene/colisionElements/boxes.png');
            this.load.image('box','Assets/level1Scene/colisionElements/box.png');
            this.load.image('goal_box','Assets/level1Scene/colisionElements/goal_box.png');
            this.load.image('bookshelf','Assets/level1Scene/colisionElements/bookshelf.png');

            // Animacion y sprites de personajes nivel 2
            this.load.spritesheet('Lysha_forward','Assets/level2Scene/charactersAnimation/Lysha_forward.png',{frameWidth: 75, frameHeight: 140});
            this.load.spritesheet('Lysha_left','Assets/level2Scene/charactersAnimation/Lysha_left.png',{frameWidth: 75, frameHeight: 150});
            this.load.spritesheet('Lysha_right','Assets/level2Scene/charactersAnimation/Lysha_right.png',{frameWidth: 75, frameHeight: 140});
            this.load.spritesheet('Lysha_backwards','Assets/level2Scene/charactersAnimation/Lysha_backwards.png',{frameWidth: 75, frameHeight: 140});
            this.load.spritesheet('Freddie_forward','Assets/level2Scene/charactersAnimation/Freddie_forward.png',{frameWidth: 75, frameHeight: 140});
            this.load.spritesheet('Freddie_left','Assets/level2Scene/charactersAnimation/Freddie_left.png',{frameWidth: 75, frameHeight: 145});
            this.load.spritesheet('Freddie_right','Assets/level2Scene/charactersAnimation/Freddie_right.png',{frameWidth: 75, frameHeight: 145});
            this.load.spritesheet('Freddie_backwards','Assets/level2Scene/charactersAnimation/Freddie_backwards.png',{frameWidth: 75, frameHeight: 140});
            this.load.spritesheet('Lysha_walkcycle','Assets/level2Scene/charactersAnimation/Lysha_walk_cycle_1.png', {frameWidth: 75 , frameHeight: 154} );
            this.load.spritesheet('Lysha_walkcycle_2','Assets/level2Scene/charactersAnimation/Lysha_walk_cycle_2.png', {frameWidth: 77 , frameHeight: 154});
            this.load.spritesheet('Lysha_walkcycle_3','Assets/level2Scene/charactersAnimation/Lysha_walk_cycle_3.png', {frameWidth: 75 , frameHeight: 150});
            this.load.spritesheet('Lysha_walkcycle_4','Assets/level2Scene/charactersAnimation/Lysha_walk_cycle_4.png', {frameWidth: 75 , frameHeight: 150});  
            this.load.spritesheet('Freddie_walkcycle','Assets/level2Scene/charactersAnimation/Freddie_walk_cycle_1.png', {frameWidth: 75 , frameHeight: 154} );
            this.load.spritesheet('Freddie_walkcycle_2','Assets/level2Scene/charactersAnimation/Freddie_walk_cycle_2.png', {frameWidth: 75 , frameHeight: 154});
            this.load.spritesheet('Freddie_walkcycle_3','Assets/level2Scene/charactersAnimation/Freddie_walk_cycle_3.png', {frameWidth: 75 , frameHeight: 150});
            this.load.spritesheet('Freddie_walkcycle_4','Assets/level2Scene/charactersAnimation/Freddie_walk_cycle_4.png', {frameWidth: 75 , frameHeight: 150});

            // Elementos de interacción nivel 2
            this.load.spritesheet('cauldronAnimation','Assets/level2Scene/interactiveElements/cauldronAnimation.png', {frameWidth: 53 , frameHeight: 60});
            this.load.spritesheet('cauldron','Assets/level2Scene/interactiveElements/cauldron.png', {frameWidth: 53 , frameHeight: 47});
            this.load.spritesheet('empty_cauldron','Assets/level2Scene/interactiveElements/empty_cauldron.png', {frameWidth: 53 , frameHeight: 47});
            this.load.image('bat','Assets/level2Scene/interactiveElements/bat.png');
            this.load.image('bat_potion','Assets/level2Scene/interactiveElements/bat_potion.png');
            this.load.image('cut_bat','Assets/level2Scene/interactiveElements/cut_bat.png');
            this.load.image('bat_potion_order','Assets/level2Scene/interactiveElements/bat.png');
            this.load.image('herb','Assets/level2Scene/interactiveElements/herb.png');
            this.load.image('cut_herb','Assets/level2Scene/interactiveElements/cut_herb.png');
            this.load.image('herbal_potion','Assets/level2Scene/interactiveElements/herbal_potion.png');
            this.load.image('herbal_potion_order','Assets/level2Scene/interactiveElements/herb.png');
            this.load.image('resist_potion','Assets/level2Scene/interactiveElements/resist_potion.png');
            this.load.image('herbal+_potion','Assets/level2Scene/interactiveElements/herbal+_potion.png');
            this.load.image('bat+_potion','Assets/level2Scene/interactiveElements/bat+_potion.png');

            // Elementos de interfaz nivel 2
            this.load.image('coins','Assets/level2Scene/interfaceElements/coins.png');
            this.load.image('time','Assets/level2Scene/interfaceElements/time.png');
            this.load.image('progress','Assets/level2Scene/interfaceElements/progress.png');
            this.load.image('empty_bar','Assets/level2Scene/interfaceElements/empty_bar.png');
            this.load.image('comandBat','Assets/level2Scene/interfaceElements/comandBat.png');
            this.load.image('comandHerb','Assets/level2Scene/interfaceElements/comandHerb.png');
            this.load.image('comandResist','Assets/level2Scene/interfaceElements/comandResist.png');
            this.load.image('comandHerb+','Assets/level2Scene/interfaceElements/comandHerb+.png');
            this.load.image('comandBat+','Assets/level2Scene/interfaceElements/comandBat+.png');
            this.load.image('bag','Assets/level2Scene/interfaceElements/bag.png');

            // Elementos de colisión nivel 2
            this.load.image('ground','Assets/level2Scene/colisionElements/ground.png');
            this.load.image('wall1','Assets/level2Scene/colisionElements/wall1.png');
            this.load.image('wall2','Assets/level2Scene/colisionElements/wall2.png');
            this.load.image('wall3','Assets/level1Scene/colisionElements/wall3.png');
            this.load.image('wall4','Assets/level2Scene/colisionElements/wall4.png');
            this.load.image('table','Assets/level2Scene/colisionElements/table.png');
            this.load.image('centralBoxes','Assets/level2Scene/colisionElements/centralBoxes.png');
            this.load.image('boxesBat','Assets/level2Scene/colisionElements/boxesBat.png');
            this.load.image('boxesHerb','Assets/level2Scene/colisionElements/boxesHerb.png');
            this.load.image('box','Assets/level2Scene/colisionElements/box.png');
            this.load.image('goal_box1','Assets/level2Scene/colisionElements/goal_box.png');
            this.load.image('goal_box2','Assets/level2Scene/colisionElements/goal_box.png');
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
        pulseEffect = this.sound.add('pulseMusic',{loop:false, volume: 0.6});
        overEffect = this.sound.add('overMusic',{loop:false, volume: 0.6});
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