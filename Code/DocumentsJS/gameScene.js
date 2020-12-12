class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene")
    }
    create() {
        var gm = new GameManager(this);
        GameManager.timeLeft = GameManager.gameTime;
        GameManager.levelCoins = 600;
        this.gameTimer = this.time.addEvent({ delay: (GameManager.gameTime * 1000), callback: this.finishGame, callbackScope: this });
        this.textTime = this.time.addEvent({ delay: 1000, loop: true, callback: subtractTime, callbackScope: this })

        this.levelSettings();
        this.interfaceSettings();
        this.firstCharacterSettings();
        this.secondCharacterSettings();
    }

    levelSettings() {
        this.add.sprite(config.width / 2, config.height / 2, 'ground');

        //Objetos colisionables del escenario
        this.colisionableObjects = this.physics.add.staticGroup();

        this.colisionableObjects.create(config.width / 2, config.height / 8 - 2, 'wall1');
        this.colisionableObjects.create(config.width * 0.96, config.height / 2 - 2, 'wall2');
        this.colisionableObjects.create(config.width / 2, config.height * 0.98 - 1, 'wall3');
        this.colisionableObjects.create(config.width * 0.054, config.height / 2 - 1, 'wall4');
        this.colisionableObjects.create(config.width * 6.05 / 7, config.height / 2, 'table').setSize(90, 96).setScale(0.9);
        this.colisionableObjects.create(config.width / 6, config.height * 4.35 / 5, 'table').setSize(90, 96).setScale(0.9);
        this.colisionableObjects.create(config.width * 0.15, config.height * 0.25, 'empty_cauldron');
        this.colisionableObjects.create(config.width * 0.88, config.height * 0.25, 'empty_cauldron');
        this.colisionableObjects.create(config.width * 0.51, config.height * 0.57, 'boxes');
        this.colisionableObjects.create(config.width * 0.71, config.height * 0.25, 'box');
        this.colisionableObjects.create(config.width * 0.135, config.height * 0.60, 'box');
        this.colisionableObjects.create(config.width * 0.892, config.height * 0.70, 'box');
        this.colisionableObjects.create(config.width * 0.32, config.height * 0.25, 'box');
        this.colisionableObjects.create(config.width * 0.5, config.height * 0.925, 'goal_box');
        this.colisionableObjects.create(config.width * 0.51, config.height * 0.2, 'bookshelf');
        //Taking objects area
        this.herbArea=this.physics.add.sprite(config.width * 0.37, config.height * 0.64, 'box').setVisible(false);
        this.herbAreaTwo=this.physics.add.sprite(config.width * 0.65, config.height * 0.64, 'box').setVisible(false);
        this.batArea=this.physics.add.sprite(config.width * 0.37, config.height * 0.46, 'box').setVisible(false);
        this.batAreaTwo=this.physics.add.sprite(config.width * 0.65, config.height * 0.46, 'box').setVisible(false);
    }

    interfaceSettings() {
        //Game interface
        this.add.sprite(config.width * 0.9, config.height * 0.1, 'coins').setScale(1.5);
        this.add.sprite(config.width * 0.7, config.height * 0.1, 'coins').setScale(1.5);
        this.add.sprite(config.width * 0.74, config.height * 0.1, 'time').setScale(0.8);
        //Bag
        //player one
        this.add.sprite(config.width*0.1,config.height*0.9,'loadingBackground').setScale(0.15);
        //player two
        this.add.sprite(config.width*0.9,config.height*0.9,'loadingBackground').setScale(0.15);
        this.timeLeftText = this.add.text(config.width * 0.67, config.height * 0.1, "" + Math.trunc(GameManager.timeLeft / 60) + ":" + GameManager.timeLeft % 60, { font: "38px PixelFont", fill: "#ffffff", align: "center" }).setOrigin(0.5).setResolution(10);
        this.coinsText = this.add.text(config.width * 0.88, config.height * 0.1, GameManager.levelCoins, { font: "38px PixelFont", fill: "#ffffff", align: "center" }).setOrigin(0.5).setResolution(10);


    }

    firstCharacterSettings() {
        this.cursorsFirstPlayer = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
            take: Phaser.Input.Keyboard.KeyCodes.E
        });

        this.playerOne = this.physics.add.sprite(200, 450, 'Lysha_forward').setScale(0.5);
        this.playerOne.haveObject=false;
        //Animations
        this.anims.create({
            key: 'Lysha stop forward',
            frames: this.anims.generateFrameNumbers('Lysha_forward'),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: 'Lysha stop backwards',
            frames: this.anims.generateFrameNumbers('Lysha_backwards'),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: 'Lysha stop left',
            frames: this.anims.generateFrameNumbers('Lysha_left'),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: 'Lysha stop right',
            frames: this.anims.generateFrameNumbers('Lysha_right'),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: 'Lysha forward',
            frames: this.anims.generateFrameNumbers('Lysha_walkcycle'),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'Lysha backwards',
            frames: this.anims.generateFrameNumbers('Lysha_walkcycle_2'),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'Lysha right',
            frames: this.anims.generateFrameNumbers('Lysha_walkcycle_3'),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'Lysha left',
            frames: this.anims.generateFrameNumbers('Lysha_walkcycle_4'),
            frameRate: 10,
            repeat: -1
        });

        //Collider settings
        this.playerOne.body.offset.y = 120;
        this.playerOne.body.setSize(80, 20, 0);
        this.physics.add.collider(this.playerOne, this.colisionableObjects);

        this.playerOne.lastMov = 1;

        this.physics.add.overlap(this.playerOne,this.herbArea,function(){
            if(GameManager.scene.playerOne.lastMov==1 && GameManager.scene.cursorsFirstPlayer.take.isDown){
                GameManager.scene.takeObject("herb",1)
            }
        })
        this.physics.add.overlap(this.playerOne,this.herbAreaTwo,function(){
            if(GameManager.scene.playerOne.lastMov==0 && GameManager.scene.cursorsFirstPlayer.take.isDown){
                GameManager.scene.takeObject("herb",1)
            }
        })
        this.physics.add.overlap(this.playerOne,this.batArea,function(){
            if(GameManager.scene.playerOne.lastMov==1 && GameManager.scene.cursorsFirstPlayer.take.isDown){
                GameManager.scene.takeObject("bat",1)
            }
        })
        this.physics.add.overlap(this.playerOne,this.batAreaTwo,function(){
            if(GameManager.scene.playerOne.lastMov==0 && GameManager.scene.cursorsFirstPlayer.take.isDown){
                GameManager.scene.takeObject("bat",1)
            }
        })
    }

    secondCharacterSettings() {
        this.cursorsSecondPlayer = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.U,
            down: Phaser.Input.Keyboard.KeyCodes.J,
            left: Phaser.Input.Keyboard.KeyCodes.H,
            right: Phaser.Input.Keyboard.KeyCodes.K,
            take: Phaser.Input.Keyboard.KeyCodes.I,
        });

        this.playerTwo = this.physics.add.sprite(600, 450, 'Freddie_forward').setScale(0.5);
        this.playerTwo.haveObject=false;

        //Animations
        this.anims.create({
            key: 'Freddie stop forward',
            frames: this.anims.generateFrameNumbers('Freddie_forward'),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: 'Freddie stop backwards',
            frames: this.anims.generateFrameNumbers('Freddie_backwards'),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: 'Freddie stop left',
            frames: this.anims.generateFrameNumbers('Freddie_left'),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: 'Freddie stop right',
            frames: this.anims.generateFrameNumbers('Freddie_right'),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: 'Freddie forward',
            frames: this.anims.generateFrameNumbers('Freddie_walkcycle'),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'Freddie backwards',
            frames: this.anims.generateFrameNumbers('Freddie_walkcycle_2'),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'Freddie right',
            frames: this.anims.generateFrameNumbers('Freddie_walkcycle_3'),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'Freddie left',
            frames: this.anims.generateFrameNumbers('Freddie_walkcycle_4'),
            frameRate: 10,
            repeat: -1
        });

        //Collider settings
        this.playerTwo.body.offset.y = 120;
        this.playerTwo.body.setSize(80, 20, 0);
        this.physics.add.collider(this.playerTwo, this.colisionableObjects);

        this.playerTwo.lastMov = 2;

        this.physics.add.overlap(this.playerTwo,this.herbArea,function(){
            if(GameManager.scene.playerTwo.lastMov==1 && GameManager.scene.cursorsSecondPlayer.take.isDown){
                GameManager.scene.takeObject("herb",2)
            }
        })
        this.physics.add.overlap(this.playerTwo,this.herbAreaTwo,function(){
            if(GameManager.scene.playerTwo.lastMov==0 && GameManager.scene.cursorsSecondPlayer.take.isDown){
                GameManager.scene.takeObject("herb",2)
            }
        })
        this.physics.add.overlap(this.playerTwo,this.batArea,function(){
            if(GameManager.scene.playerTwo.lastMov==1 && GameManager.scene.cursorsSecondPlayer.take.isDown){
                GameManager.scene.takeObject("bat",2)
            }
        })
        this.physics.add.overlap(this.playerTwo,this.batAreaTwo,function(){
            if(GameManager.scene.playerTwo.lastMov==0 && GameManager.scene.cursorsSecondPlayer.take.isDown){
                GameManager.scene.takeObject("bat",2)
            }
        })
    }


    update() {
        this.updateFirstPlayer();
        this.updateSecondPlayer();
        
    }

    updateFirstPlayer() {
        this.playerOne.body.setVelocityX(0);
        this.playerOne.body.setVelocityY(0);
        if (this.cursorsFirstPlayer.left.isDown) {
            this.playerOne.lastMov = 0;
            this.playerOne.body.offset.y = 130;
            this.playerOne.setVelocityX(-160);
            this.playerOne.anims.play('Lysha left', true);
        }
        else if (this.cursorsFirstPlayer.right.isDown) {
            this.playerOne.lastMov = 1;
            this.playerOne.body.offset.y = 130;
            this.playerOne.setVelocityX(160);
            this.playerOne.anims.play('Lysha right', true);
        }
        else if (this.cursorsFirstPlayer.down.isDown) {
            this.playerOne.lastMov = 2;
            this.playerOne.body.offset.y = 130;
            this.playerOne.setVelocityY(160);
            this.playerOne.anims.play('Lysha forward', true);
        }
        else if (this.cursorsFirstPlayer.up.isDown) {
            this.playerOne.lastMov = 3;
            this.playerOne.body.offset.y = 130;
            this.playerOne.setVelocityY(-160);
            this.playerOne.anims.play('Lysha backwards', true);

        }
        else {

            this.playerOne.body.offset.y = 120;

            switch (this.playerOne.lastMov) {
                case 0:
                    this.playerOne.anims.play('Lysha stop left', true);
                    break;
                case 1:
                    this.playerOne.anims.play('Lysha stop right', true);
                    break;
                case 2:
                    this.playerOne.anims.play('Lysha stop forward', true);
                    break;
                case 3:
                    this.playerOne.anims.play('Lysha stop backwards', true);
                    break;
            }

        }
    }
    updateSecondPlayer() {
        this.playerTwo.body.setVelocityX(0);
        this.playerTwo.body.setVelocityY(0);
        if (this.cursorsSecondPlayer.left.isDown) {
            this.playerTwo.lastMov = 0;
            this.playerTwo.body.offset.y = 130;
            this.playerTwo.setVelocityX(-160);
            this.playerTwo.anims.play('Freddie left', true);
        }
        else if (this.cursorsSecondPlayer.right.isDown) {
            this.playerTwo.lastMov = 1;
            this.playerTwo.body.offset.y = 130;
            this.playerTwo.setVelocityX(160);
            this.playerTwo.anims.play('Freddie right', true);
        }
        else if (this.cursorsSecondPlayer.down.isDown) {
            this.playerTwo.lastMov = 2;
            this.playerTwo.body.offset.y = 130;
            this.playerTwo.setVelocityY(160);
            this.playerTwo.anims.play('Freddie forward', true);
        }
        else if (this.cursorsSecondPlayer.up.isDown) {
            this.playerTwo.lastMov = 3;
            this.playerTwo.body.offset.y = 130;
            this.playerTwo.setVelocityY(-160);
            this.playerTwo.anims.play('Freddie backwards', true);

        }
        else {

            this.playerTwo.body.offset.y = 120;

            switch (this.playerTwo.lastMov) {
                case 0:
                    this.playerTwo.anims.play('Freddie stop left', true);
                    break;
                case 1:
                    this.playerTwo.anims.play('Freddie stop right', true);
                    break;
                case 2:
                    this.playerTwo.anims.play('Freddie stop forward', true);
                    break;
                case 3:
                    this.playerTwo.anims.play('Freddie stop backwards', true);
                    break;
            }

        }
    }

    takeObject(object,player){
        if(player==1 && !this.playerOne.haveObject){
            switch(object){
                case "herb":
                    GameManager.objectPlayerOne=this.add.sprite(config.width*0.1,config.height*0.9,"herb");
                    this.playerOne.haveObject=true;
                    break;
                case "bat":
                    GameManager.objectPlayerOne=this.add.sprite(config.width*0.1,config.height*0.9,"bat");
                    this.playerOne.haveObject=true;
                    break;
            }
            
        }
        else if (player==2){
            switch(object){
                case "herb":
                    GameManager.objectPlayerTwo=this.add.sprite(config.width*0.9,config.height*0.9,"herb");
                    this.playerTwo.haveObject=true;
                    break;
                case "bat":
                    GameManager.objectPlayerTwo=this.add.sprite(config.width*0.9,config.height*0.9,"bat");
                    this.playerTwo.haveObject=true;
                    break;
            }
        }
    }

    finishGame() {
        this.scene.pause("GameScene");
        this.scene.launch("FinishGameScene");
    }
}

class GameManager {
    static scene;
    static level = 1;
    static gameTime = 40;
    static timeLeft;
    static levelCoins;
    static objectPlayerOne;
    static objectPlayerTwo;
    constructor(scene) {
        GameManager.scene = scene;
    }
}


function subtractTime() {
    if (GameManager.timeLeft) {
        GameManager.timeLeft--;
        var mins = Math.trunc(GameManager.timeLeft / 60);
        var secs = GameManager.timeLeft % 60;
        if (secs < 10) {
            secs = "0" + secs;
        }
        var text = "" + mins + ":" + secs;
        GameManager.scene.timeLeftText.setText(text);
    }
    else {
        GameManager.scene.textTime.paused = true;
    }
}
