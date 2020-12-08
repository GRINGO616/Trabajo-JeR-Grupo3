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
        colisionableObjects.create(config.width*6/7,config.height/2,'table').setScale(0.9);
        colisionableObjects.create(config.width/5.5,config.height*4.3/5,'table').setScale(0.9);
        colisionableObjects.create(config.width*0.15,config.height*0.25,'cauldron');
        colisionableObjects.create(config.width*0.88,config.height*0.25,'cauldron');

        this.player = this.physics.add.sprite(200, 450, 'Lysha').setScale(0.5);
        this.player.body.offset.y=120
        this.player.body.setSize(70,20,0);
        this.physics.add.collider(this.player, colisionableObjects);
    }
    update (){
        if (this.cursors.left.isDown)
        {
            this.player.setVelocityX(-160);
        }
        else if (this.cursors.right.isDown)
        {
            this. player.setVelocityX(160);
        }
        else if (this.cursors.down.isDown)
        {
            this.player.setVelocityY(160);
        }
        else if (this.cursors.up.isDown)
        {
            this.player.setVelocityY(-160);
        }
        else
        {
            this.player.setVelocityX(0);
            this.player.setVelocityY(0);
        }

    }
}