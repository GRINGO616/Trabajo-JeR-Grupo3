class Start extends Phaser.Scene{
    constructor(){
        super("Start")
    }
    init(){
        
    }

    preload(){
        this.load.image('background','Assets/background.png');
        this.load.image('logo','Assets/logo_pixelart.PNG');
        this.load.image('white','Assets/white.jpg');
    }

    create(){
        var scene=this;
        var background = this.add.image(config.width/2,config.height/2,'background').setScale(1.2);
        var white = this.add.image(config.width/2,config.height/2,'white');
        var logo = this.add.image(config.width/2,config.height/2,'logo').setScale(0.3);

        this.cameras.main.once('camerafadeoutcomplete', function (camera) {
            logo.destroy();
            white.destroy();
            camera.fadeIn(1000);
            
        });

        setTimeout(function(){
            scene.cameras.main.fadeOut(1000);
             }, 2000);
          
    }


}