class GameScene extends Phaser.Scene{
    constructor(){
        super("GameScene")
    }
    create(){
        var gm= new GameManager(this);
        GameManager.timeLeft=GameManager.gameTime;
        GameManager.levelCoins=0;
        this.gameTimer = this.time.addEvent({ delay: (GameManager.gameTime * 1000), callback: finishGame});
        this.textTime = this.time.addEvent({ delay: 1000, loop: true, callback: subtractTime, callbackScope: this })
        
        this.levelSettings();
        this.interfaceSettings(); 
        this.characterSettings();
    }

    levelSettings(){
        this.add.sprite(config.width/2,config.height/2,'ground');

        //Objetos colisionables del escenario
        this.colisionableObjects = this.physics.add.staticGroup();

        this.colisionableObjects.create(config.width/2,config.height/8-2,'wall1');
        this.colisionableObjects.create(config.width*0.96,config.height/2-2,'wall2');
        this.colisionableObjects.create(config.width/2,config.height*0.98-1,'wall3');
        this.colisionableObjects.create(config.width*0.054,config.height/2-1,'wall4');
        this.colisionableObjects.create(config.width*6.05/7,config.height/2,'table').setSize(90,96).setScale(0.9);
        this.colisionableObjects.create(config.width/6,config.height*4.35/5,'table').setSize(90,96).setScale(0.9);
        this.colisionableObjects.create(config.width*0.15,config.height*0.25,'cauldron');
        this.colisionableObjects.create(config.width*0.88,config.height*0.25,'cauldron');
        this.colisionableObjects.create(config.width*0.51,config.height*0.57,'boxes');
        this.colisionableObjects.create(config.width*0.71,config.height*0.25,'box');
        this.colisionableObjects.create(config.width*0.135,config.height*0.60,'box');
        this.colisionableObjects.create(config.width*0.892,config.height*0.70,'box');
        this.colisionableObjects.create(config.width*0.32,config.height*0.25,'box');
        this.colisionableObjects.create(config.width*0.5,config.height*0.925,'goal_box');
        this.colisionableObjects.create(config.width*0.51,config.height*0.2,'bookshelf');

    }

    interfaceSettings(){
        //Interfaz
        this.add.sprite(config.width*0.9,config.height*0.1,'coins').setScale(1.5);
        this.add.sprite(config.width*0.7,config.height*0.1,'coins').setScale(1.5);
        this.add.sprite(config.width*0.74,config.height*0.1,'time').setScale(0.8);
        this.timeLeftText = this.add.text(config.width*0.67,config.height*0.1,""+ Math.trunc(GameManager.timeLeft/60)+":"+GameManager.timeLeft%60, { font: "38px PixelFont", fill: "#ffffff", align: "center" }).setOrigin(0.5).setResolution(10);
        this.coinsText = this.add.text(config.width*0.88,config.height*0.1,GameManager.levelCoins, { font: "38px PixelFont", fill: "#ffffff", align: "center" }).setOrigin(0.5).setResolution(10);
        this.player = this.physics.add.sprite(200, 450, 'Lysha').setScale(0.5);

    }

    characterSettings(){
        this.cursors = this.input.keyboard.createCursorKeys();
        
        //Animaciones protagonista
        this.anims.create({
            key: 'stop forward',
            frames: this.anims.generateFrameNumbers('Lysha'),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: 'stop backwards',
            frames: this.anims.generateFrameNumbers('backwards'),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: 'stop left',
            frames: this.anims.generateFrameNumbers('left'),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: 'stop right',
            frames: this.anims.generateFrameNumbers('right'),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: 'forward',
            frames: this.anims.generateFrameNumbers('Lysha_walkcycle'),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'backwards',
            frames: this.anims.generateFrameNumbers('Lysha_walkcycle_2'),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('Lysha_walkcycle_3'),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('Lysha_walkcycle_4'),
            frameRate: 10,
            repeat: -1
        });


        this.player.body.offset.y=120;
        this.player.body.setSize(80,20,0);
        this.physics.add.collider(this.player, this.colisionableObjects);
        this.player.lastMov=2;
    }

    update (){
        
        this.player.body.setVelocityX(0);
        this.player.body.setVelocityY(0);
        if (this.cursors.left.isDown)
        {
            this.player.lastMov=0;
            this.player.body.offset.y=130;
            this.player.setVelocityX(-160);
            this.player.anims.play('left', true);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.lastMov=1;
            this.player.body.offset.y=130;
            this. player.setVelocityX(160);
            this.player.anims.play('right', true);
        }
        else if (this.cursors.down.isDown)
        {
            this.player.lastMov=2;
            this.player.body.offset.y=130;
            this.player.setVelocityY(160);
            this.player.anims.play('forward', true);
        }
        else if (this.cursors.up.isDown)
        {
            this.player.lastMov=3;
            this.player.body.offset.y=130;
            this.player.setVelocityY(-160);
            this.player.anims.play('backwards', true);
            
        }
        else{
            
            this.player.body.offset.y=120;
            
            switch(this.player.lastMov){
                case 0:
                    this.player.anims.play('stop left', true);
                    break;
                case 1:
                    this.player.anims.play('stop right', true);
                    break;
                case 2:
                    this.player.anims.play('stop forward', true);
                    break;
                case 3:
                    this.player.anims.play('stop backwards', true);
                    break;
            }
        
        }
    }
}
class GameManager{
    static scene;
    static gameTime=70;
    static timeLeft;
    static levelCoins;
    constructor(scene){
        GameManager.scene=scene;
    }
}
function subtractTime(){
    if(GameManager.timeLeft){
        GameManager.timeLeft--;
        var mins=Math.trunc(GameManager.timeLeft/60);
        var secs=GameManager.timeLeft%60;
        if (secs<10){
            secs="0"+secs;
        }
        var text=""+mins+":"+secs;
        GameManager.scene.timeLeftText.setText(text);
    }
    else{
        GameManager.scene.textTime.paused=true;
    }
}
function finishGame(){

}