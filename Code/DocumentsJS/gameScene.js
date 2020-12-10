class GameScene extends Phaser.Scene{
    constructor(){
        super("GameScene")
    }
    create(){
        this.add.image(config.width/2,config.height/2,'ground');

        this.cursors = this.input.keyboard.createCursorKeys();

        var colisionableObjects = this.physics.add.staticGroup();
        
        colisionableObjects.create(config.width/2,config.height/8-2,'wall1');
        colisionableObjects.create(config.width*0.96,config.height/2-2,'wall2');
        colisionableObjects.create(config.width/2,config.height*0.98-1,'wall3');
        colisionableObjects.create(config.width*0.054,config.height/2-1,'wall4');
        colisionableObjects.create(config.width*6.05/7,config.height/2,'table').setSize(90,96).setScale(0.9);
        colisionableObjects.create(config.width/6,config.height*4.35/5,'table').setSize(90,96).setScale(0.9);
        colisionableObjects.create(config.width*0.15,config.height*0.25,'cauldron');
        colisionableObjects.create(config.width*0.88,config.height*0.25,'cauldron');
        colisionableObjects.create(config.width*0.51,config.height*0.57,'boxes');
        colisionableObjects.create(config.width*0.71,config.height*0.25,'box');
        colisionableObjects.create(config.width*0.135,config.height*0.60,'box');
        colisionableObjects.create(config.width*0.892,config.height*0.70,'box');
        colisionableObjects.create(config.width*0.32,config.height*0.25,'box');
        colisionableObjects.create(config.width*0.5,config.height*0.925,'goal_box');


        this.player = this.physics.add.sprite(200, 450, 'Lysha').setScale(0.5);

        //Animaciones protagonista
        this.anims.create({
            key: 'stop',
            frames: this.anims.generateFrameNumbers('Lysha'),
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
        this.physics.add.collider(this.player, colisionableObjects);
    
        
    }
    update (){
        
        this.player.body.setVelocityX(0);
        this.player.body.setVelocityY(0);
        if (this.cursors.left.isDown)
        {
            
            this.player.body.offset.y=130;
            this.player.setVelocityX(-160);
            this.player.anims.play('left', true);
        }
        else if (this.cursors.right.isDown)
        {
            
            this.player.body.offset.y=130;
            this. player.setVelocityX(160);
            this.player.anims.play('right', true);
        }
        else if (this.cursors.down.isDown)
        {
            
            this.player.body.offset.y=130;
            this.player.setVelocityY(160);
            this.player.anims.play('forward', true);
        }
        else if (this.cursors.up.isDown)
        {
            this.player.body.offset.y=130;
            this.player.setVelocityY(-160);
            this.player.anims.play('backwards', true);
            
        }
        else{
            
        this.player.body.offset.y=120;
        this.player.anims.play('stop', true);
        }
    }
}