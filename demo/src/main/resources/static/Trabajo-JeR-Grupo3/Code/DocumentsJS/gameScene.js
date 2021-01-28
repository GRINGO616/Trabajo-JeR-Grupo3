class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene")
    }

    preload() {
        // Conexión para WebSockets

        var connection = new WebSocket('ws://127.0.0.1:8080/echo');

        connection.onopen = function () {
            connection.send('Conexion establecida');
        }

        connection.onmessage = function (msg) {
            switch (msg) {
                case move:
                    break;
                case points:
                    break;
                case table:
                    break;
            }
        }

        connection.onerror = function(e){
            console.log("Se ha producido el error "+e);
        }

        connection.onclose = function(){
            console.log("La conexión se ha cerrado con éxito");
        }
    }

    create() {
        var gm = new GameManager(this);
        
        connection.open();

        this.startGame();
        this.resetVariables();
        this.gameTimer = this.time.addEvent({ delay: (GameManager.gameTime * 10), callback: this.finishGame, callbackScope: this });
        this.textTime = this.time.addEvent({ delay: 1000, loop: true, callback: subtractTime, callbackScope: this });

        this.timerP1 = this.time.addEvent({
            delay: 500, // ms
            callback: this.updatePlayer,
            args: [nameP1],
            loop: true,
        });

        if (!singlePlayer) {
            this.timerP2 = this.time.addEvent({
                delay: 500, // ms
                callback: this.updatePlayer,
                args: [nameP2],
                loop: true,
            });
        }



        this.anims.create({
            key: 'cooking',
            frames: this.anims.generateFrameNumbers('cauldronAnimation'),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'empty',
            frames: this.anims.generateFrameNumbers('empty_cauldron'),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'full',
            frames: this.anims.generateFrameNumbers('cauldron'),
            frameRate: 10,
            repeat: 1
        });
        this.colisionableObjects = this.physics.add.staticGroup();
        this.colisionableObjects.create(config.width / 2, config.height / 8 - 2, 'wall1');

        switch (level) {
            case 1:
                this.levelOneSettings();
                break;
            case 2:
                this.levelTwoSettings();
                break;
        }

        this.colisionableObjects.create(config.width * 0.96, config.height / 2 - 2, 'wall2');
        this.colisionableObjects.create(config.width / 2, config.height * 0.98 - 1, 'wall3');
        this.colisionableObjects.create(config.width * 0.054, config.height / 2 - 1, 'wall4');

        this.interfaceSettings();
        this.firstCharacterSettings();
        if (!singlePlayer) {
            this.secondCharacterSettings();
        }

    }

    resetVariables() {

        //GameManager
        GameManager.timeLeft = GameManager.gameTime;
        GameManager.levelCoins = 0;
        GameManager.objectPlayerOne = null;
        GameManager.objectPlayerTwo = null;
        //Comandas
        this.rithim = 0.99;
        this.comandDone = false;
        Slot.cuttingSlotsList.removeAll();
        Slot.cookingSlotsList.removeAll();
        Slot.comandSlots.removeAll();
    }

    levelOneSettings() {
        this.add.sprite(config.width / 2, config.height / 2, 'ground');

        //Objetos colisionables del escenario

        this.colisionableObjects.create(config.width * 6.05 / 7, config.height / 2, 'table').setSize(90, 96).setScale(0.9);
        this.colisionableObjects.create(config.width / 6, config.height * 4.35 / 5, 'table').setSize(90, 96).setScale(0.9);
        this.cauldronZero = this.colisionableObjects.create(config.width * 0.15, config.height * 0.25, 'empty_cauldron');
        this.cauldronOne = this.colisionableObjects.create(config.width * 0.88, config.height * 0.25, 'empty_cauldron');
        this.colisionableObjects.create(config.width * 0.51, config.height * 0.57, 'boxes');
        this.colisionableObjects.create(config.width * 0.71, config.height * 0.25, 'box');
        this.colisionableObjects.create(config.width * 0.135, config.height * 0.60, 'box');
        this.colisionableObjects.create(config.width * 0.892, config.height * 0.70, 'box');
        this.colisionableObjects.create(config.width * 0.32, config.height * 0.25, 'box');
        this.colisionableObjects.create(config.width * 0.5, config.height * 0.925, 'goal_box');
        this.colisionableObjects.create(config.width * 0.51, config.height * 0.2, 'bookshelf');

        //Taking objects area
        this.herbArea = this.physics.add.sprite(config.width * 0.38, config.height * 0.64, 'box').setScale(0.5, 1).setVisible(false);
        this.herbAreaTwo = this.physics.add.sprite(config.width * 0.64, config.height * 0.64, 'box').setScale(0.5, 1).setVisible(false);
        this.batArea = this.physics.add.sprite(config.width * 0.38, config.height * 0.46, 'box').setScale(0.5, 1).setVisible(false);
        this.batAreaTwo = this.physics.add.sprite(config.width * 0.64, config.height * 0.46, 'box').setScale(0.5, 1).setVisible(false);

        //Leaving objects area
        //this.leavingTopArea=this.physics.add.sprite(config.width * 0.51, config.height * 0.32, 'box').setScale(3, 0.4).setVisible(false);
        //this.leavingDownArea=this.physics.add.sprite(config.width * 0.51, config.height * 0.82, 'box').setScale(3, 0.4).setVisible(false);

        //Comands
        Slot.comandSlots.add(new Slot(config.width * 0.05, config.height * 0.1, 0));
        Slot.comandSlots.add(new Slot(config.width * 0.05, config.height * 0.2, 1));
        Slot.comandSlots.add(new Slot(config.width * 0.05, config.height * 0.3, 2));
        Slot.comandSlots.add(new Slot(config.width * 0.05, config.height * 0.4, 3));
        Slot.comandSlots.add(new Slot(config.width * 0.05, config.height * 0.5, 4));
        Slot.comandSlots.add(new Slot(config.width * 0.05, config.height * 0.6, 5));

        //Goal area
        this.goalArea = this.physics.add.sprite(config.width * 0.5, config.height * 0.87, 'box').setScale(5.2, 0.4).setVisible(false);

        //Cutting area
        Slot.cuttingSlotsList.add(new Slot(config.width * 0.32, config.height * 0.22, 0));
        Slot.cuttingSlotsList.add(new Slot(config.width * 0.71, config.height * 0.22, 1));
        Slot.cuttingSlotsList.add(new Slot(config.width * 0.135, config.height * 0.58, 2));
        Slot.cuttingSlotsList.add(new Slot(config.width * 0.892, config.height * 0.68, 3));

        this.cuttingAreaZero = [];
        this.cuttingAreaZero[0] = this.physics.add.sprite(config.width * 0.28, config.height * 0.27, 'box').setScale(0.5, 0.4).setVisible(false);
        this.cuttingAreaZero[1] = this.physics.add.sprite(config.width * 0.32, config.height * 0.32, 'box').setScale(0.6, 0.3).setVisible(false);
        this.cuttingAreaZero[2] = this.physics.add.sprite(config.width * 0.36, config.height * 0.27, 'box').setScale(0.5, 0.4).setVisible(false);

        this.cuttingAreaOne = [];
        this.cuttingAreaOne[0] = this.physics.add.sprite(config.width * 0.67, config.height * 0.27, 'box').setScale(0.5, 0.4).setVisible(false);
        this.cuttingAreaOne[1] = this.physics.add.sprite(config.width * 0.71, config.height * 0.32, 'box').setScale(0.6, 0.3).setVisible(false);
        this.cuttingAreaOne[2] = this.physics.add.sprite(config.width * 0.75, config.height * 0.27, 'box').setScale(0.5, 0.4).setVisible(false);

        this.cuttingAreaTwo = [];
        this.cuttingAreaTwo[0] = this.physics.add.sprite(config.width * 0.13, config.height * 0.53, 'box').setScale(0.6, 0.3).setVisible(false);
        this.cuttingAreaTwo[1] = this.physics.add.sprite(config.width * 0.18, config.height * 0.6, 'box').setScale(0.5, 0.4).setVisible(false);
        this.cuttingAreaTwo[2] = this.physics.add.sprite(config.width * 0.13, config.height * 0.67, 'box').setScale(0.6, 0.3).setVisible(false);

        this.cuttingAreaThree = [];
        this.cuttingAreaThree[0] = this.physics.add.sprite(config.width * 0.89, config.height * 0.63, 'box').setScale(0.6, 0.3).setVisible(false);
        this.cuttingAreaThree[1] = this.physics.add.sprite(config.width * 0.85, config.height * 0.71, 'box').setScale(0.5, 0.4).setVisible(false);
        this.cuttingAreaThree[2] = this.physics.add.sprite(config.width * 0.89, config.height * 0.77, 'box').setScale(0.6, 0.3).setVisible(false);

        //Cooking area
        this.cookingAreaZero = [];
        this.cookingAreaZero[0] = this.physics.add.sprite(config.width * 0.15, config.height * 0.305, 'box').setScale(0.6, 0.3).setVisible(false);
        this.cookingAreaZero[1] = this.physics.add.sprite(config.width * 0.19, config.height * 0.27, 'box').setScale(0.3, 0.4).setVisible(false);

        this.cookingAreaOne = [];
        this.cookingAreaOne[0] = this.physics.add.sprite(config.width * 0.84, config.height * 0.27, 'box').setScale(0.3, 0.4).setVisible(false);
        this.cookingAreaOne[1] = this.physics.add.sprite(config.width * 0.88, config.height * 0.305, 'box').setScale(0.6, 0.3).setVisible(false);

        Slot.cookingSlotsList.add(new Slot(config.width * 0.12, config.height * 0.18, 0));
        Slot.cookingSlotsList.add(new Slot(config.width * 0.85, config.height * 0.18, 1));
    }

    levelTwoSettings() {
        //Sprites escenario
        this.add.sprite(config.width * 0.514, config.height * 0.6, 'ground_level2');
        this.colisionableObjects.create(config.width * 0.52, config.height * 0.57, 'centralBoxes');
        this.colisionableObjects.create(config.width * 0.9, config.height * 0.4, 'boxesBat');
        this.colisionableObjects.create(config.width * 0.13, config.height * 0.75, 'boxesHerb');
        this.cauldronZero = this.colisionableObjects.create(config.width * 0.14, config.height * 0.35, 'empty_cauldron');
        this.cauldronOne = this.colisionableObjects.create(config.width * 0.89, config.height * 0.65, 'empty_cauldron');
        this.colisionableObjects.create(config.width * 0.14, config.height * 0.45, 'box');
        this.colisionableObjects.create(config.width * 0.89, config.height * 0.75, 'box');
        this.colisionableObjects.create(config.width * 0.3, config.height * 0.95, 'goal_box_level2');
        this.colisionableObjects.create(config.width * 0.72, config.height * 0.95, 'goal_box_level2');

        //Collider zona central
        this.colisionableObjects.create(config.width * 0.52, config.height * 0.6, 'box').setSize(50.0, 1000.0).setVisible(false);

        //Taking objects area
        this.herbArea = this.physics.add.sprite(config.width * 0.17, config.height * 0.75, 'box').setScale(0.5, 1.3).setVisible(false);
        this.herbAreaTwo = this.physics.add.sprite(config.width * 0.13, config.height * 0.65, 'box').setScale(0.7, 0.3).setVisible(false);
        this.batArea = this.physics.add.sprite(config.width * 0.86, config.height * 0.4, 'box').setScale(0.5, 1.3).setVisible(false);
        this.batAreaTwo = this.physics.add.sprite(config.width * 0.9, config.height * 0.5, 'box').setScale(0.7, 0.3).setVisible(false);
        this.batAreaThree = this.physics.add.sprite(config.width * 0.9, config.height * 0.305, 'box').setScale(0.7, 0.3).setVisible(false);
        this.midZoneLeft = this.physics.add.sprite(config.width * 0.47, config.height * 0.57, 'box').setScale(0.5, 2.0).setVisible(false);
        this.midZoneRight = this.physics.add.sprite(config.width * 0.57, config.height * 0.57, 'box').setScale(0.5, 2.0).setVisible(false);

        //Cutting area
        Slot.cuttingSlotsList.add(new Slot(config.width * 0.32, config.height * 0.22, 0));
        Slot.cuttingSlotsList.add(new Slot(config.width * 0.71, config.height * 0.22, 1));
        Slot.cuttingSlotsList.add(new Slot(config.width * 0.135, config.height * 0.58, 2));
        Slot.cuttingSlotsList.add(new Slot(config.width * 0.892, config.height * 0.68, 3));

        this.cuttingAreaZero = [];
        this.cuttingAreaZero[0] = this.physics.add.sprite(config.width * 0.14, config.height * 0.52, 'box').setScale(0.7, 0.3).setVisible(false);
        this.cuttingAreaZero[1] = this.physics.add.sprite(config.width * 0.19, config.height * 0.45, 'box').setScale(0.5, 0.6).setVisible(false);


        this.cuttingAreaOne = [];
        this.cuttingAreaOne[0] = this.physics.add.sprite(config.width * 0.85, config.height * 0.75, 'box').setScale(0.5, 0.7).setVisible(false);


        //Cooking area
        this.cookingAreaZero = [];
        this.cookingAreaZero[0] = this.physics.add.sprite(config.width * 0.14, config.height * 0.29, 'box').setScale(0.7, 0.3).setVisible(false);
        this.cookingAreaZero[1] = this.physics.add.sprite(config.width * 0.19, config.height * 0.35, 'box').setScale(0.4, 0.7).setVisible(false);

        this.cookingAreaOne = [];
        this.cookingAreaOne[0] = this.physics.add.sprite(config.width * 0.845, config.height * 0.65, 'box').setScale(0.4, 0.7).setVisible(false);
        this.cookingAreaOne[1] = this.physics.add.sprite(config.width * 0.89, config.height * 0.6, 'box').setScale(0.9, 0.3).setVisible(false);

        Slot.cookingSlotsList.add(new Slot(config.width * 0.12, config.height * 0.18, 0));
        Slot.cookingSlotsList.add(new Slot(config.width * 0.85, config.height * 0.18, 1));

        //Goal areas
        this.goalArea = this.physics.add.sprite(config.width * 0.3, config.height * 0.87, 'box').setScale(2.6, 0.4).setVisible(false);
        this.goalArea = this.physics.add.sprite(config.width * 0.72, config.height * 0.87, 'box').setScale(2.6, 0.4).setVisible(false);

        //Comands
        Slot.comandSlots.add(new Slot(config.width * 0.05, config.height * 0.1, 0));
        Slot.comandSlots.add(new Slot(config.width * 0.05, config.height * 1, 1));
        Slot.comandSlots.add(new Slot(config.width * 0.05, config.height * 1.9, 2));
        Slot.comandSlots.add(new Slot(config.width * 0.05, config.height * 2.8, 3));
        Slot.comandSlots.add(new Slot(config.width * 0.05, config.height * 3.7, 4));
        Slot.comandSlots.add(new Slot(config.width * 0.05, config.height * 4.6, 5));


    }

    interfaceSettings() {
        //Game interface
        this.add.sprite(config.width * 0.9, config.height * 0.08, 'coins').setScale(1.5);
        this.add.sprite(config.width * 0.7, config.height * 0.08, 'coins').setScale(1.5);
        this.add.sprite(config.width * 0.74, config.height * 0.08, 'time').setScale(0.8);
        var mins = Math.trunc(GameManager.timeLeft / 60);
        var secs = GameManager.timeLeft % 60;
        if (secs < 10) {
            secs = "0" + secs;
        }
        var text = "" + mins + ":" + secs;
        this.timeLeftText = this.add.text(config.width * 0.67, config.height * 0.08, text, { font: "34px PixelFont", fill: "#ffffff", align: "center" }).setOrigin(0.5).setResolution(10);
        this.coinsText = this.add.text(config.width * 0.87, config.height * 0.08, GameManager.levelCoins, { font: "34px PixelFont", fill: "#ffffff", align: "center" }).setOrigin(0.5).setResolution(10);

        //Bag
        this.add.sprite(config.width * 0.1, config.height * 0.9, 'bag');
    }

    firstCharacterSettings() {
        this.cursorsFirstPlayer = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D,
            take: Phaser.Input.Keyboard.KeyCodes.E,
            cut: Phaser.Input.Keyboard.KeyCodes.R
        });

        this.playerOne = this.physics.add.sprite(200, 450, 'Lysha_forward').setScale(0.5);
        this.playerOne.haveObject = false;
        this.playerOne.canMove = true;
        this.playerOne.bagCoord = [config.width * 0.1, config.height * 0.9]
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

        this.playerOne.lastMov = 2;
        if (level == 1) {
            //FOOD GENERATORS

            this.physics.add.overlap(this.playerOne, this.herbArea, function () {
                if (GameManager.scene.playerOne.lastMov == 1 && GameManager.scene.cursorsFirstPlayer.take.isDown) {
                    GameManager.scene.takeObject(1, 7)
                }
            })
            this.physics.add.overlap(this.playerOne, this.herbAreaTwo, function () {
                if (GameManager.scene.playerOne.lastMov == 0 && GameManager.scene.cursorsFirstPlayer.take.isDown) {
                    GameManager.scene.takeObject(1, 7)
                }
            })
            this.physics.add.overlap(this.playerOne, this.batArea, function () {
                if (GameManager.scene.playerOne.lastMov == 1 && GameManager.scene.cursorsFirstPlayer.take.isDown) {
                    GameManager.scene.takeObject(1, 8)
                }
            })
            this.physics.add.overlap(this.playerOne, this.batAreaTwo, function () {
                if (GameManager.scene.playerOne.lastMov == 0 && GameManager.scene.cursorsFirstPlayer.take.isDown) {
                    GameManager.scene.takeObject(1, 8)
                }
            })

            //GOAL AREA
            this.physics.add.overlap(this.playerOne, this.goalArea, function () {
                if (GameManager.scene.playerOne.lastMov == 2 && GameManager.scene.cursorsFirstPlayer.take.isDown && GameManager.scene.playerOne.haveObject && (GameManager.objectPlayerOne.texture.key == "herbal_potion" || GameManager.objectPlayerOne.texture.key == "bat_potion")) {
                    GameManager.scene.leavePotion(1);
                    GameManager.objectPlayerOne.destroy();
                    GameManager.scene.playerOne.haveObject = false;
                }
            })

            //CUTTING AREA 0

            this.physics.add.overlap(this.playerOne, this.cuttingAreaZero[0], function () {
                if (GameManager.scene.playerOne.lastMov == 1) {
                    if (GameManager.scene.cursorsFirstPlayer.take.isDown && !Slot.cuttingSlotsList.getAt(0).ocuppied) {
                        GameManager.scene.leaveObject(1, 0);
                    }
                    if (GameManager.scene.cursorsFirstPlayer.take.isDown && Slot.cuttingSlotsList.getAt(0).ocuppied) {
                        GameManager.scene.takeObject(1, 0);
                    }
                    if (GameManager.scene.cursorsFirstPlayer.cut.isDown && Slot.cuttingSlotsList.getAt(0).ocuppied) {
                        GameManager.scene.cut(1, 0);
                    }
                }

            })
            this.physics.add.overlap(this.playerOne, this.cuttingAreaZero[1], function () {
                if (GameManager.scene.playerOne.lastMov == 3) {
                    if (GameManager.scene.cursorsFirstPlayer.take.isDown && !Slot.cuttingSlotsList.getAt(0).ocuppied) {
                        GameManager.scene.leaveObject(1, 0);
                    }
                    else if (GameManager.scene.cursorsFirstPlayer.take.isDown && Slot.cuttingSlotsList.getAt(0).ocuppied) {
                        GameManager.scene.takeObject(1, 0);
                    }
                    if (GameManager.scene.cursorsFirstPlayer.cut.isDown && Slot.cuttingSlotsList.getAt(0).ocuppied) {
                        GameManager.scene.cut(1, 0);
                    }
                }

            })
            this.physics.add.overlap(this.playerOne, this.cuttingAreaZero[2], function () {
                if (GameManager.scene.playerOne.lastMov == 0) {
                    if (GameManager.scene.cursorsFirstPlayer.take.isDown && !Slot.cuttingSlotsList.getAt(0).ocuppied) {
                        GameManager.scene.leaveObject(1, 0);
                    }
                    if (GameManager.scene.cursorsFirstPlayer.take.isDown && Slot.cuttingSlotsList.getAt(0).ocuppied) {
                        GameManager.scene.takeObject(1, 0);
                    }
                    if (GameManager.scene.cursorsFirstPlayer.cut.isDown && Slot.cuttingSlotsList.getAt(0).ocuppied) {
                        GameManager.scene.cut(1, 0);
                    }
                }

            })

            //CUTTING AREA 1

            this.physics.add.overlap(this.playerOne, this.cuttingAreaOne[0], function () {
                if (GameManager.scene.playerOne.lastMov == 1) {
                    if (GameManager.scene.cursorsFirstPlayer.take.isDown && !Slot.cuttingSlotsList.getAt(1).ocuppied) {
                        GameManager.scene.leaveObject(1, 1);
                    }
                    if (GameManager.scene.cursorsFirstPlayer.take.isDown && Slot.cuttingSlotsList.getAt(1).ocuppied) {
                        GameManager.scene.takeObject(1, 1);
                    }
                    if (GameManager.scene.cursorsFirstPlayer.cut.isDown && Slot.cuttingSlotsList.getAt(1).ocuppied) {
                        GameManager.scene.cut(1, 1);
                    }
                }

            })
            this.physics.add.overlap(this.playerOne, this.cuttingAreaOne[1], function () {
                if (GameManager.scene.playerOne.lastMov == 3) {
                    if (GameManager.scene.cursorsFirstPlayer.take.isDown && !Slot.cuttingSlotsList.getAt(1).ocuppied) {
                        GameManager.scene.leaveObject(1, 1);
                    }
                    else if (GameManager.scene.cursorsFirstPlayer.take.isDown && Slot.cuttingSlotsList.getAt(1).ocuppied) {
                        GameManager.scene.takeObject(1, 1);
                    }
                    if (GameManager.scene.cursorsFirstPlayer.cut.isDown && Slot.cuttingSlotsList.getAt(1).ocuppied) {
                        GameManager.scene.cut(1, 1);
                    }
                }

            })
            this.physics.add.overlap(this.playerOne, this.cuttingAreaOne[2], function () {
                if (GameManager.scene.playerOne.lastMov == 0) {
                    if (GameManager.scene.cursorsFirstPlayer.take.isDown && !Slot.cuttingSlotsList.getAt(1).ocuppied) {
                        GameManager.scene.leaveObject(1, 1);
                    }
                    if (GameManager.scene.cursorsFirstPlayer.take.isDown && Slot.cuttingSlotsList.getAt(1).ocuppied) {
                        GameManager.scene.takeObject(1, 1);
                    }
                    if (GameManager.scene.cursorsFirstPlayer.cut.isDown && Slot.cuttingSlotsList.getAt(1).ocuppied) {
                        GameManager.scene.cut(1, 1);
                    }
                }

            })

            //CUTTING AREA 2

            this.physics.add.overlap(this.playerOne, this.cuttingAreaTwo[0], function () {
                if (GameManager.scene.playerOne.lastMov == 2) {
                    if (GameManager.scene.cursorsFirstPlayer.take.isDown && !Slot.cuttingSlotsList.getAt(2).ocuppied) {
                        GameManager.scene.leaveObject(1, 2);
                    }
                    if (GameManager.scene.cursorsFirstPlayer.take.isDown && Slot.cuttingSlotsList.getAt(2).ocuppied) {
                        GameManager.scene.takeObject(1, 2);
                    }
                    if (GameManager.scene.cursorsFirstPlayer.cut.isDown && Slot.cuttingSlotsList.getAt(2).ocuppied) {
                        GameManager.scene.cut(1, 2);
                    }
                }

            })
            this.physics.add.overlap(this.playerOne, this.cuttingAreaTwo[1], function () {
                if (GameManager.scene.playerOne.lastMov == 0) {
                    if (GameManager.scene.cursorsFirstPlayer.take.isDown && !Slot.cuttingSlotsList.getAt(2).ocuppied) {
                        GameManager.scene.leaveObject(1, 2);
                    }
                    else if (GameManager.scene.cursorsFirstPlayer.take.isDown && Slot.cuttingSlotsList.getAt(2).ocuppied) {
                        GameManager.scene.takeObject(1, 2);
                    }
                    if (GameManager.scene.cursorsFirstPlayer.cut.isDown && Slot.cuttingSlotsList.getAt(2).ocuppied) {
                        GameManager.scene.cut(1, 2);
                    }
                }

            })
            this.physics.add.overlap(this.playerOne, this.cuttingAreaTwo[2], function () {
                if (GameManager.scene.playerOne.lastMov == 3) {
                    if (GameManager.scene.cursorsFirstPlayer.take.isDown && !Slot.cuttingSlotsList.getAt(2).ocuppied) {
                        GameManager.scene.leaveObject(1, 2);
                    }
                    if (GameManager.scene.cursorsFirstPlayer.take.isDown && Slot.cuttingSlotsList.getAt(2).ocuppied) {
                        GameManager.scene.takeObject(1, 2);
                    }
                    if (GameManager.scene.cursorsFirstPlayer.cut.isDown && Slot.cuttingSlotsList.getAt(2).ocuppied) {
                        GameManager.scene.cut(1, 2);
                    }
                }

            })

            //CUTTING AREA 3

            this.physics.add.overlap(this.playerOne, this.cuttingAreaThree[0], function () {
                if (GameManager.scene.playerOne.lastMov == 2) {
                    if (GameManager.scene.cursorsFirstPlayer.take.isDown && !Slot.cuttingSlotsList.getAt(3).ocuppied) {
                        GameManager.scene.leaveObject(1, 3);
                    }
                    if (GameManager.scene.cursorsFirstPlayer.take.isDown && Slot.cuttingSlotsList.getAt(3).ocuppied) {
                        GameManager.scene.takeObject(1, 3);
                    }
                    if (GameManager.scene.cursorsFirstPlayer.cut.isDown && Slot.cuttingSlotsList.getAt(3).ocuppied) {
                        GameManager.scene.cut(1, 3);
                    }
                }

            })
            this.physics.add.overlap(this.playerOne, this.cuttingAreaThree[1], function () {
                if (GameManager.scene.playerOne.lastMov == 1) {
                    if (GameManager.scene.cursorsFirstPlayer.take.isDown && !Slot.cuttingSlotsList.getAt(3).ocuppied) {
                        GameManager.scene.leaveObject(1, 3);
                    }
                    else if (GameManager.scene.cursorsFirstPlayer.take.isDown && Slot.cuttingSlotsList.getAt(3).ocuppied) {
                        GameManager.scene.takeObject(1, 3);
                    }
                    if (GameManager.scene.cursorsFirstPlayer.cut.isDown && Slot.cuttingSlotsList.getAt(3).ocuppied) {
                        GameManager.scene.cut(1, 3);
                    }
                }

            })
            this.physics.add.overlap(this.playerOne, this.cuttingAreaThree[2], function () {
                if (GameManager.scene.playerOne.lastMov == 3) {
                    if (GameManager.scene.cursorsFirstPlayer.take.isDown && !Slot.cuttingSlotsList.getAt(3).ocuppied) {
                        GameManager.scene.leaveObject(1, 3);
                    }
                    if (GameManager.scene.cursorsFirstPlayer.take.isDown && Slot.cuttingSlotsList.getAt(3).ocuppied) {
                        GameManager.scene.takeObject(1, 3);
                    }
                    if (GameManager.scene.cursorsFirstPlayer.cut.isDown && Slot.cuttingSlotsList.getAt(3).ocuppied) {
                        GameManager.scene.cut(1, 3);
                    }
                }

            })

            //COOKING AREA 0
            this.physics.add.overlap(this.playerOne, this.cookingAreaZero[0], function () {
                if (GameManager.scene.playerOne.lastMov == 3) {
                    if (GameManager.scene.cursorsFirstPlayer.take.isDown && Slot.cookingSlotsList.getAt(0).numIngredients < 2) {
                        GameManager.scene.putIngredient(1, 0);
                    }
                    if (GameManager.scene.cursorsFirstPlayer.take.isDown && Slot.cookingSlotsList.getAt(0).numIngredients == 2 && Slot.cookingSlotsList.getAt(0).ready == true && !GameManager.scene.playerOne.haveObject) {
                        GameManager.scene.takePotion(1, 0);
                    }

                }
            })
            this.physics.add.overlap(this.playerOne, this.cookingAreaZero[1], function () {
                if (GameManager.scene.playerOne.lastMov == 0) {
                    if (GameManager.scene.cursorsFirstPlayer.take.isDown && Slot.cookingSlotsList.getAt(0).numIngredients < 2) {
                        GameManager.scene.putIngredient(1, 0);
                    }
                    if (GameManager.scene.cursorsFirstPlayer.take.isDown && Slot.cookingSlotsList.getAt(0).numIngredients == 2 && Slot.cookingSlotsList.getAt(0).ready == true && !GameManager.scene.playerOne.haveObject) {
                        GameManager.scene.takePotion(1, 0);
                    }

                }

            })

            //COOKING AREA 1
            this.physics.add.overlap(this.playerOne, this.cookingAreaOne[0], function () {
                if (GameManager.scene.playerOne.lastMov == 1) {
                    if (GameManager.scene.cursorsFirstPlayer.take.isDown && Slot.cookingSlotsList.getAt(1).numIngredients < 2) {
                        GameManager.scene.putIngredient(1, 1);
                    }
                    if (GameManager.scene.cursorsFirstPlayer.take.isDown && Slot.cookingSlotsList.getAt(1).numIngredients == 2 && Slot.cookingSlotsList.getAt(1).ready == true && !GameManager.scene.playerOne.haveObject) {
                        GameManager.scene.takePotion(1, 1);
                    }
                }

            })
            this.physics.add.overlap(this.playerOne, this.cookingAreaOne[1], function () {
                if (GameManager.scene.playerOne.lastMov == 3) {
                    if (GameManager.scene.cursorsFirstPlayer.take.isDown && Slot.cookingSlotsList.getAt(1).numIngredients < 2) {
                        GameManager.scene.putIngredient(1, 1);
                    }
                    if (GameManager.scene.cursorsFirstPlayer.take.isDown && Slot.cookingSlotsList.getAt(1).numIngredients == 2 && Slot.cookingSlotsList.getAt(1).ready == true && !GameManager.scene.playerOne.haveObject) {
                        GameManager.scene.takePotion(1, 1);
                    }

                }

            })

        }


    }

    secondCharacterSettings() {
        this.cursorsSecondPlayer = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.U,
            down: Phaser.Input.Keyboard.KeyCodes.J,
            left: Phaser.Input.Keyboard.KeyCodes.H,
            right: Phaser.Input.Keyboard.KeyCodes.K,
            take: Phaser.Input.Keyboard.KeyCodes.I,
            cut: Phaser.Input.Keyboard.KeyCodes.O
        });

        this.playerTwo = this.physics.add.sprite(600, 450, 'Freddie_forward').setScale(0.5);
        this.playerTwo.haveObject = false;
        this.playerTwo.canMove = true;
        this.playerTwo.bagCoord = [config.width * 0.9, config.height * 0.9]
        this.add.sprite(config.width * 0.9, config.height * 0.9, 'bag');

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
        if (level == 1) {
            //FOOD GENERATORS

            this.physics.add.overlap(this.playerTwo, this.herbArea, function () {
                if (GameManager.scene.playerTwo.lastMov == 1 && GameManager.scene.cursorsSecondPlayer.take.isDown) {
                    GameManager.scene.takeObject(2, 7)
                }
            })
            this.physics.add.overlap(this.playerTwo, this.herbAreaTwo, function () {
                if (GameManager.scene.playerTwo.lastMov == 0 && GameManager.scene.cursorsSecondPlayer.take.isDown) {
                    GameManager.scene.takeObject(2, 7)
                }
            })
            this.physics.add.overlap(this.playerTwo, this.batArea, function () {
                if (GameManager.scene.playerTwo.lastMov == 1 && GameManager.scene.cursorsSecondPlayer.take.isDown) {
                    GameManager.scene.takeObject(2, 8)
                }
            })
            this.physics.add.overlap(this.playerTwo, this.batAreaTwo, function () {
                if (GameManager.scene.playerTwo.lastMov == 0 && GameManager.scene.cursorsSecondPlayer.take.isDown) {
                    GameManager.scene.takeObject(2, 8)
                }
            })

            //GOAL AREA
            this.physics.add.overlap(this.playerTwo, this.goalArea, function () {
                if (GameManager.scene.playerTwo.lastMov == 2 && GameManager.scene.cursorsSecondPlayer.take.isDown && GameManager.scene.playerTwo.haveObject && (GameManager.objectPlayerTwo.texture.key == "herbal_potion" || GameManager.objectPlayerTwo.texture.key == "bat_potion")) {
                    GameManager.scene.leavePotion(2);
                    GameManager.objectPlayerTwo.destroy();
                    GameManager.scene.playerTwo.haveObject = false;
                }
            })

            //CUTTING AREA 0

            this.physics.add.overlap(this.playerTwo, this.cuttingAreaZero[0], function () {
                if (GameManager.scene.playerTwo.lastMov == 1) {
                    if (GameManager.scene.cursorsSecondPlayer.take.isDown && !Slot.cuttingSlotsList.getAt(0).ocuppied) {
                        GameManager.scene.leaveObject(2, 0);
                    }
                    if (GameManager.scene.cursorsSecondPlayer.take.isDown && Slot.cuttingSlotsList.getAt(0).ocuppied) {
                        GameManager.scene.takeObject(2, 0);
                    }
                    if (GameManager.scene.cursorsSecondPlayer.cut.isDown && Slot.cuttingSlotsList.getAt(0).ocuppied) {
                        GameManager.scene.cut(2, 0);
                    }
                }

            })
            this.physics.add.overlap(this.playerTwo, this.cuttingAreaZero[1], function () {
                if (GameManager.scene.playerTwo.lastMov == 3) {
                    if (GameManager.scene.cursorsSecondPlayer.take.isDown && !Slot.cuttingSlotsList.getAt(0).ocuppied) {
                        GameManager.scene.leaveObject(2, 0);
                    }
                    else if (GameManager.scene.cursorsSecondPlayer.take.isDown && Slot.cuttingSlotsList.getAt(0).ocuppied) {
                        GameManager.scene.takeObject(2, 0);
                    }
                    if (GameManager.scene.cursorsSecondPlayer.cut.isDown && Slot.cuttingSlotsList.getAt(0).ocuppied) {
                        GameManager.scene.cut(2, 0);
                    }
                }

            })
            this.physics.add.overlap(this.playerTwo, this.cuttingAreaZero[2], function () {
                if (GameManager.scene.playerTwo.lastMov == 0) {
                    if (GameManager.scene.cursorsSecondPlayer.take.isDown && !Slot.cuttingSlotsList.getAt(0).ocuppied) {
                        GameManager.scene.leaveObject(2, 0);
                    }
                    if (GameManager.scene.cursorsSecondPlayer.take.isDown && Slot.cuttingSlotsList.getAt(0).ocuppied) {
                        GameManager.scene.takeObject(2, 0);
                    }
                    if (GameManager.scene.cursorsSecondPlayer.cut.isDown && Slot.cuttingSlotsList.getAt(0).ocuppied) {
                        GameManager.scene.cut(2, 0);
                    }
                }

            })

            //CUTTING AREA 1

            this.physics.add.overlap(this.playerTwo, this.cuttingAreaOne[0], function () {
                if (GameManager.scene.playerTwo.lastMov == 1) {
                    if (GameManager.scene.cursorsSecondPlayer.take.isDown && !Slot.cuttingSlotsList.getAt(1).ocuppied) {
                        GameManager.scene.leaveObject(2, 1);
                    }
                    if (GameManager.scene.cursorsSecondPlayer.take.isDown && Slot.cuttingSlotsList.getAt(1).ocuppied) {
                        GameManager.scene.takeObject(2, 1);
                    }
                    if (GameManager.scene.cursorsSecondPlayer.cut.isDown && Slot.cuttingSlotsList.getAt(1).ocuppied) {
                        GameManager.scene.cut(2, 1);
                    }
                }

            })
            this.physics.add.overlap(this.playerTwo, this.cuttingAreaOne[1], function () {
                if (GameManager.scene.playerTwo.lastMov == 3) {
                    if (GameManager.scene.cursorsSecondPlayer.take.isDown && !Slot.cuttingSlotsList.getAt(1).ocuppied) {
                        GameManager.scene.leaveObject(2, 1);
                    }
                    else if (GameManager.scene.cursorsSecondPlayer.take.isDown && Slot.cuttingSlotsList.getAt(1).ocuppied) {
                        GameManager.scene.takeObject(2, 1);
                    }
                    if (GameManager.scene.cursorsSecondPlayer.cut.isDown && Slot.cuttingSlotsList.getAt(1).ocuppied) {
                        GameManager.scene.cut(2, 1);
                    }
                }

            })
            this.physics.add.overlap(this.playerTwo, this.cuttingAreaOne[2], function () {
                if (GameManager.scene.playerTwo.lastMov == 0) {
                    if (GameManager.scene.cursorsSecondPlayer.take.isDown && !Slot.cuttingSlotsList.getAt(1).ocuppied) {
                        GameManager.scene.leaveObject(2, 1);
                    }
                    if (GameManager.scene.cursorsSecondPlayer.take.isDown && Slot.cuttingSlotsList.getAt(1).ocuppied) {
                        GameManager.scene.takeObject(2, 1);
                    }
                    if (GameManager.scene.cursorsSecondPlayer.cut.isDown && Slot.cuttingSlotsList.getAt(1).ocuppied) {
                        GameManager.scene.cut(2, 1);
                    }
                }

            })

            //CUTTING AREA 2

            this.physics.add.overlap(this.playerTwo, this.cuttingAreaTwo[0], function () {
                if (GameManager.scene.playerTwo.lastMov == 2) {
                    if (GameManager.scene.cursorsSecondPlayer.take.isDown && !Slot.cuttingSlotsList.getAt(2).ocuppied) {
                        GameManager.scene.leaveObject(2, 2);
                    }
                    if (GameManager.scene.cursorsSecondPlayer.take.isDown && Slot.cuttingSlotsList.getAt(2).ocuppied) {
                        GameManager.scene.takeObject(2, 2);
                    }
                    if (GameManager.scene.cursorsSecondPlayer.cut.isDown && Slot.cuttingSlotsList.getAt(2).ocuppied) {
                        GameManager.scene.cut(2, 2);
                    }
                }

            })
            this.physics.add.overlap(this.playerTwo, this.cuttingAreaTwo[1], function () {
                if (GameManager.scene.playerTwo.lastMov == 0) {
                    if (GameManager.scene.cursorsSecondPlayer.take.isDown && !Slot.cuttingSlotsList.getAt(2).ocuppied) {
                        GameManager.scene.leaveObject(2, 2);
                    }
                    else if (GameManager.scene.cursorsSecondPlayer.take.isDown && Slot.cuttingSlotsList.getAt(2).ocuppied) {
                        GameManager.scene.takeObject(2, 2);
                    }
                    if (GameManager.scene.cursorsSecondPlayer.cut.isDown && Slot.cuttingSlotsList.getAt(2).ocuppied) {
                        GameManager.scene.cut(2, 2);
                    }
                }

            })
            this.physics.add.overlap(this.playerTwo, this.cuttingAreaTwo[2], function () {
                if (GameManager.scene.playerTwo.lastMov == 3) {
                    if (GameManager.scene.cursorsSecondPlayer.take.isDown && !Slot.cuttingSlotsList.getAt(2).ocuppied) {
                        GameManager.scene.leaveObject(2, 2);
                    }
                    if (GameManager.scene.cursorsSecondPlayer.take.isDown && Slot.cuttingSlotsList.getAt(2).ocuppied) {
                        GameManager.scene.takeObject(2, 2);
                    }
                    if (GameManager.scene.cursorsSecondPlayer.cut.isDown && Slot.cuttingSlotsList.getAt(2).ocuppied) {
                        GameManager.scene.cut(2, 2);
                    }
                }

            })

            //CUTTING AREA 3

            this.physics.add.overlap(this.playerTwo, this.cuttingAreaThree[0], function () {
                if (GameManager.scene.playerTwo.lastMov == 2) {
                    if (GameManager.scene.cursorsSecondPlayer.take.isDown && !Slot.cuttingSlotsList.getAt(3).ocuppied) {
                        GameManager.scene.leaveObject(2, 3);
                    }
                    if (GameManager.scene.cursorsSecondPlayer.take.isDown && Slot.cuttingSlotsList.getAt(3).ocuppied) {
                        GameManager.scene.takeObject(2, 3);
                    }
                    if (GameManager.scene.cursorsSecondPlayer.cut.isDown && Slot.cuttingSlotsList.getAt(3).ocuppied) {
                        GameManager.scene.cut(2, 3);
                    }
                }

            })
            this.physics.add.overlap(this.playerTwo, this.cuttingAreaThree[1], function () {
                if (GameManager.scene.playerTwo.lastMov == 1) {
                    if (GameManager.scene.cursorsSecondPlayer.take.isDown && !Slot.cuttingSlotsList.getAt(3).ocuppied) {
                        GameManager.scene.leaveObject(2, 3);
                    }
                    else if (GameManager.scene.cursorsSecondPlayer.take.isDown && Slot.cuttingSlotsList.getAt(3).ocuppied) {
                        GameManager.scene.takeObject(2, 3);
                    }
                    if (GameManager.scene.cursorsSecondPlayer.cut.isDown && Slot.cuttingSlotsList.getAt(3).ocuppied) {
                        GameManager.scene.cut(2, 3);
                    }
                }

            })
            this.physics.add.overlap(this.playerTwo, this.cuttingAreaThree[2], function () {
                if (GameManager.scene.playerTwo.lastMov == 3) {
                    if (GameManager.scene.cursorsSecondPlayer.take.isDown && !Slot.cuttingSlotsList.getAt(3).ocuppied) {
                        GameManager.scene.leaveObject(2, 3);
                    }
                    if (GameManager.scene.cursorsSecondPlayer.take.isDown && Slot.cuttingSlotsList.getAt(3).ocuppied) {
                        GameManager.scene.takeObject(2, 3);
                    }
                    if (GameManager.scene.cursorsSecondPlayer.cut.isDown && Slot.cuttingSlotsList.getAt(3).ocuppied) {
                        GameManager.scene.cut(2, 3);
                    }
                }

            })

            //COOKING AREA 0
            this.physics.add.overlap(this.playerTwo, this.cookingAreaZero[0], function () {
                if (GameManager.scene.playerTwo.lastMov == 3) {
                    if (GameManager.scene.cursorsSecondPlayer.take.isDown && Slot.cookingSlotsList.getAt(0).numIngredients < 2) {
                        GameManager.scene.putIngredient(2, 0);
                    }
                    if (GameManager.scene.cursorsSecondPlayer.take.isDown && Slot.cookingSlotsList.getAt(0).numIngredients == 2 && Slot.cookingSlotsList.getAt(0).ready == true && !GameManager.scene.playerTwo.haveObject) {
                        GameManager.scene.takePotion(2, 0);
                    }
                }

            })
            this.physics.add.overlap(this.playerTwo, this.cookingAreaZero[1], function () {
                if (GameManager.scene.playerTwo.lastMov == 0) {
                    if (GameManager.scene.cursorsSecondPlayer.take.isDown && Slot.cookingSlotsList.getAt(0).numIngredients < 2) {
                        GameManager.scene.putIngredient(2, 0);
                    }
                    if (GameManager.scene.cursorsSecondPlayer.take.isDown && Slot.cookingSlotsList.getAt(0).numIngredients == 2 && Slot.cookingSlotsList.getAt(0).ready == true && !GameManager.scene.playerTwo.haveObject) {
                        GameManager.scene.takePotion(2, 0);
                    }

                }

            })

            //COOKING AREA 1
            this.physics.add.overlap(this.playerTwo, this.cookingAreaOne[0], function () {
                if (GameManager.scene.playerTwo.lastMov == 1) {
                    if (GameManager.scene.cursorsSecondPlayer.take.isDown && Slot.cookingSlotsList.getAt(1).numIngredients < 2) {
                        GameManager.scene.putIngredient(2, 1);
                    }
                    if (GameManager.scene.cursorsSecondPlayer.take.isDown && Slot.cookingSlotsList.getAt(1).numIngredients == 2 && Slot.cookingSlotsList.getAt(1).ready == true && !GameManager.scene.playerTwo.haveObject) {
                        GameManager.scene.takePotion(2, 1);
                    }
                }

            })
            this.physics.add.overlap(this.playerTwo, this.cookingAreaOne[1], function () {
                if (GameManager.scene.playerTwo.lastMov == 3) {
                    if (GameManager.scene.cursorsSecondPlayer.take.isDown && Slot.cookingSlotsList.getAt(1).numIngredients < 2) {
                        GameManager.scene.putIngredient(2, 1);
                    }
                    if (GameManager.scene.cursorsSecondPlayer.take.isDown && Slot.cookingSlotsList.getAt(1).numIngredients == 2 && Slot.cookingSlotsList.getAt(1).ready == true && !GameManager.scene.playerTwo.haveObject) {
                        GameManager.scene.takePotion(2, 1);
                    }

                }

            })
        }

    }

    update() {

        if (this.playerOne.canMove) {
            this.updateFirstPlayer();
        }
        if (!singlePlayer) {
            if (this.playerTwo.canMove) {
                this.updateSecondPlayer();
            }
        }

        this.updateCauldron();
        this.updateComands();

    }

    updateCauldron() {
        if (level == 1) {
            if (Slot.cookingSlotsList.getAt(0).numIngredients == 2 && Slot.cookingSlotsList.getAt(0).ready == false && !Slot.cookingSlotsList.getAt(0).cooking) {
                Slot.cookingSlotsList.getAt(0).cooking = true;
                this.cauldronZero.anims.play('cooking', true);
                this.time.addEvent({
                    delay: 3000, callback: function () {
                        this.cauldronZero.anims.play('full', true);
                        Slot.cookingSlotsList.getAt(0).ready = true;
                        Slot.cookingSlotsList.getAt(0).cooking = false;
                    }, callbackScope: this
                });
            }
            if (Slot.cookingSlotsList.getAt(1).numIngredients == 2 && Slot.cookingSlotsList.getAt(1).ready == false && !Slot.cookingSlotsList.getAt(1).cooking) {
                Slot.cookingSlotsList.getAt(1).cooking = true;
                this.cauldronOne.anims.play('cooking', true);
                this.time.addEvent({
                    delay: 3000, callback: function () {
                        this.cauldronOne.anims.play('full', true);
                        Slot.cookingSlotsList.getAt(1).ready = true;
                        Slot.cookingSlotsList.getAt(1).coooking = false;
                    }, callbackScope: this
                });
            }
        }

    }

    updateComands() {
        var numComand = Math.random() * 10;
        if (numComand <= 5) {
            if (GameManager.timeLeft <= GameManager.gameTime * this.rithim) {
                var freeSlot = this.findFreeSlot();
                if (freeSlot != -1) {
                    Slot.comandSlots.getAt(freeSlot).currentObject = this.add.sprite(Slot.comandSlots.getAt(freeSlot).x, Slot.comandSlots.getAt(freeSlot).y, 'comandBat').setScale(0.65);
                    this.rithim -= 0.2;
                }
            }
        }
        else {
            if (GameManager.timeLeft <= GameManager.gameTime * this.rithim) {
                var freeSlot = this.findFreeSlot();
                if (freeSlot != -1) {
                    Slot.comandSlots.getAt(freeSlot).currentObject = this.add.sprite(Slot.comandSlots.getAt(freeSlot).x, Slot.comandSlots.getAt(freeSlot).y, 'comandHerb').setScale(0.65);
                    this.rithim -= 0.2;
                }

            }
        }
    }

    findFreeSlot() {

        var i = 0;
        var slot;
        var slotId = -1;
        var found = false;
        var maxSlots = 6;

        while (i < maxSlots && !found) {
            slot = Slot.comandSlots.getAt(i);
            if (!slot.occupied) {
                Slot.comandOccupiedSlots++;
                slot.occupied = true;
                slotId = i;
                found = true;
            }
            i++;
        }
        return slotId;
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

    takeObject(player, slot) {
        if (this.playerOne.canMove && player == 1 || this.playerTwo.canMove && player == 2) {
            if (slot < 4) {
                if (player == 1 && !this.playerOne.haveObject) {
                    Slot.cuttingSlotsList.getAt(slot).ocuppied = false;
                    GameManager.objectPlayerOne = Slot.cuttingSlotsList.getAt(slot).currentObject;
                    this.time.addEvent({
                        delay: 300, callback: function () {
                            this.playerOne.haveObject = true;
                        }, callbackScope: this
                    });
                    GameManager.objectPlayerOne.setPosition(GameManager.scene.playerOne.bagCoord[0], GameManager.scene.playerOne.bagCoord[1]).setScale(1.5);
                }
                if (player == 2 && !this.playerTwo.haveObject) {
                    Slot.cuttingSlotsList.getAt(slot).ocuppied = false;
                    GameManager.objectPlayerTwo = Slot.cuttingSlotsList.getAt(slot).currentObject;
                    this.time.addEvent({
                        delay: 300, callback: function () {
                            this.playerTwo.haveObject = true;
                        }, callbackScope: this
                    });
                    GameManager.objectPlayerTwo.setPosition(GameManager.scene.playerTwo.bagCoord[0], GameManager.scene.playerTwo.bagCoord[1]).setScale(1.5);
                }
            }
            if (slot == 7) {
                if (player == 1 && !this.playerOne.haveObject) {
                    GameManager.objectPlayerOne = this.add.sprite(GameManager.scene.playerOne.bagCoord[0], GameManager.scene.playerOne.bagCoord[1], 'herb').setScale(1.5);
                    this.playerOne.haveObject = true;
                }
                if (player == 2 && !this.playerTwo.haveObject) {
                    GameManager.objectPlayerTwo = this.add.sprite(GameManager.scene.playerTwo.bagCoord[0], GameManager.scene.playerTwo.bagCoord[1], 'herb').setScale(1.5);
                    this.playerTwo.haveObject = true;
                }
            }
            if (slot == 8) {
                if (player == 1 && !this.playerOne.haveObject) {
                    GameManager.objectPlayerOne = this.add.sprite(GameManager.scene.playerOne.bagCoord[0], GameManager.scene.playerOne.bagCoord[1], 'bat').setScale(1.5);
                    this.playerOne.haveObject = true;
                }
                if (player == 2 && !this.playerTwo.haveObject) {
                    GameManager.objectPlayerTwo = this.add.sprite(GameManager.scene.playerTwo.bagCoord[0], GameManager.scene.playerTwo.bagCoord[1], 'bat').setScale(1.5);
                    this.playerTwo.haveObject = true;
                }
            }
        }
    }

    leaveObject(player, slot) {
        if (player == 1 && GameManager.scene.playerOne.haveObject) {
            Slot.cuttingSlotsList.getAt(slot).ocuppied = true;
            Slot.cuttingSlotsList.getAt(slot).currentObject = GameManager.objectPlayerOne;
            this.time.addEvent({
                delay: 300, callback: function () {
                    this.playerOne.haveObject = false;
                }, callbackScope: this
            });
            Slot.cuttingSlotsList.getAt(slot).currentObject.setPosition(Slot.cuttingSlotsList.getAt(slot).x, Slot.cuttingSlotsList.getAt(slot).y).setScale(1);
            this.playerOne.depth = Slot.cuttingSlotsList.getAt(slot).currentObject.depth + 0.1;
        }
        if (player == 2 && GameManager.scene.playerTwo.haveObject) {
            Slot.cuttingSlotsList.getAt(slot).ocuppied = true;
            Slot.cuttingSlotsList.getAt(slot).currentObject = GameManager.objectPlayerTwo;
            this.time.addEvent({
                delay: 300, callback: function () {
                    this.playerTwo.haveObject = false;
                }, callbackScope: this
            });
            Slot.cuttingSlotsList.getAt(slot).currentObject.setPosition(Slot.cuttingSlotsList.getAt(slot).x, Slot.cuttingSlotsList.getAt(slot).y).setScale(1);
            this.playerTwo.depth = Slot.cuttingSlotsList.getAt(slot).currentObject.depth + 0.1;
        }
    }

    cut(player, slot) {
        if (player == 1) {
            this.playerOne.canMove = false;
            this.time.addEvent({
                delay: 2000, callback: function () {
                    GameManager.scene.playerOne.canMove = true;
                    var type = Slot.cuttingSlotsList.getAt(slot).currentObject.texture.key;
                    switch (type) {
                        case 'herb':
                            Slot.cuttingSlotsList.getAt(slot).currentObject.destroy();
                            Slot.cuttingSlotsList.getAt(slot).currentObject = this.add.sprite(Slot.cuttingSlotsList.getAt(slot).x, Slot.cuttingSlotsList.getAt(slot).y, 'cut_herb')
                            this.playerOne.depth = Slot.cuttingSlotsList.getAt(slot).currentObject.depth + 0.1;
                            break;
                        case 'bat':
                            Slot.cuttingSlotsList.getAt(slot).currentObject.destroy();
                            Slot.cuttingSlotsList.getAt(slot).currentObject = this.add.sprite(Slot.cuttingSlotsList.getAt(slot).x, Slot.cuttingSlotsList.getAt(slot).y, 'cut_bat')
                            this.playerOne.depth = Slot.cuttingSlotsList.getAt(slot).currentObject.depth + 0.1;
                            break;
                    }
                }, callbackScope: this
            });

        }
        else if (player == 2) {
            this.playerTwo.canMove = false;
            this.time.addEvent({
                delay: 2000, callback: function () {
                    GameManager.scene.playerTwo.canMove = true;
                    var type = Slot.cuttingSlotsList.getAt(slot).currentObject.texture.key;
                    switch (type) {
                        case 'herb':
                            Slot.cuttingSlotsList.getAt(slot).currentObject.destroy();
                            Slot.cuttingSlotsList.getAt(slot).currentObject = this.add.sprite(Slot.cuttingSlotsList.getAt(slot).x, Slot.cuttingSlotsList.getAt(slot).y, 'cut_herb')
                            this.playerTwo.depth = Slot.cuttingSlotsList.getAt(slot).currentObject.depth + 0.1;
                            break;
                        case 'bat':
                            Slot.cuttingSlotsList.getAt(slot).currentObject.destroy();
                            Slot.cuttingSlotsList.getAt(slot).currentObject = this.add.sprite(Slot.cuttingSlotsList.getAt(slot).x, Slot.cuttingSlotsList.getAt(slot).y, 'cut_bat')
                            this.playerTwo.depth = Slot.cuttingSlotsList.getAt(slot).currentObject.depth + 0.1;
                            break;
                    }
                }, callbackScope: this
            });

        }
    }

    putIngredient(player, slot) {
        if (player == 1 && GameManager.scene.playerOne.haveObject && (GameManager.objectPlayerOne.texture.key == "cut_bat" || GameManager.objectPlayerOne.texture.key == "cut_herb")) {
            Slot.cookingSlotsList.getAt(slot).ingredients[Slot.cookingSlotsList.getAt(slot).numIngredients] = GameManager.objectPlayerOne;
            this.playerOne.haveObject = false;
            Slot.cookingSlotsList.getAt(slot).ingredients[Slot.cookingSlotsList.getAt(slot).numIngredients].setPosition(Slot.cookingSlotsList.getAt(slot).x + (20 * Slot.cookingSlotsList.getAt(slot).numIngredients), Slot.cookingSlotsList.getAt(slot).y).setScale(1);
            Slot.cookingSlotsList.getAt(slot).numIngredients++;
            console.log("Ning: " + Slot.cookingSlotsList.getAt(slot).numIngredients + " readiu: " + Slot.cookingSlotsList.getAt(slot).ready + " cçooking: " + Slot.cookingSlotsList.getAt(slot).cooking)
        }
        if (player == 2 && GameManager.scene.playerTwo.haveObject && (GameManager.objectPlayerTwo.texture.key == "cut_bat" || GameManager.objectPlayerTwo.texture.key == "cut_herb")) {
            Slot.cookingSlotsList.getAt(slot).ingredients[Slot.cookingSlotsList.getAt(slot).numIngredients] = GameManager.objectPlayerTwo;
            this.playerTwo.haveObject = false;
            Slot.cookingSlotsList.getAt(slot).ingredients[Slot.cookingSlotsList.getAt(slot).numIngredients].setPosition(Slot.cookingSlotsList.getAt(slot).x + (20 * Slot.cookingSlotsList.getAt(slot).numIngredients), Slot.cookingSlotsList.getAt(slot).y).setScale(1);
            Slot.cookingSlotsList.getAt(slot).numIngredients++;
            console.log("Ning: " + Slot.cookingSlotsList.getAt(slot).numIngredients + " readiu: " + Slot.cookingSlotsList.getAt(slot).ready + " cçooking: " + Slot.cookingSlotsList.getAt(slot).cooking)
        }
    }

    takePotion(player, slot) {
        GameManager.scene.comandDone = false;
        Slot.cookingSlotsList.getAt(slot).numIngredients = 0;
        Slot.cookingSlotsList.getAt(slot).ready = false;
        if (player == 1) {
            this.playerOne.haveObject = true;
            var type = Slot.cookingSlotsList.getAt(slot).ingredients[slot].texture.key;
            switch (type) {
                case 'cut_herb':
                    GameManager.objectPlayerOne = this.add.sprite(GameManager.scene.playerOne.bagCoord[0], GameManager.scene.playerOne.bagCoord[1], 'herbal_potion').setScale(1.5);
                    break;
                case 'cut_bat':
                    GameManager.objectPlayerOne = this.add.sprite(GameManager.scene.playerOne.bagCoord[0], GameManager.scene.playerOne.bagCoord[1], 'bat_potion').setScale(1.5);
                    break;
            }
            Slot.cookingSlotsList.getAt(slot).ingredients[0].destroy();
            Slot.cookingSlotsList.getAt(slot).ingredients[1].destroy();
            if (slot == 0) {
                this.cauldronZero.anims.play("empty", true)
            }
            else if (slot == 1) {
                this.cauldronOne.anims.play("empty", true)
            }
            console.log("Ning: " + Slot.cookingSlotsList.getAt(slot).numIngredients + " readiu: " + Slot.cookingSlotsList.getAt(slot).ready + " cçooking: " + Slot.cookingSlotsList.getAt(slot).cooking)
        }
        else if (player == 2) {
            this.playerTwo.haveObject = true;
            var type = Slot.cookingSlotsList.getAt(slot).ingredients[slot].texture.key;
            switch (type) {
                case 'cut_herb':
                    GameManager.objectPlayerTwo = this.add.sprite(GameManager.scene.playerTwo.bagCoord[0], GameManager.scene.playerTwo.bagCoord[1], 'herbal_potion').setScale(1.5);
                    break;
                case 'cut_bat':
                    GameManager.objectPlayerTwo = this.add.sprite(GameManager.scene.playerTwo.bagCoord[0], GameManager.scene.playerTwo.bagCoord[1], 'bat_potion').setScale(1.5);
                    break;
            }
            Slot.cookingSlotsList.getAt(slot).ingredients[0].destroy();
            Slot.cookingSlotsList.getAt(slot).ingredients[1].destroy();
            if (slot == 0) {
                this.cauldronZero.anims.play("empty", true)
            }
            else if (slot == 1) {
                this.cauldronOne.anims.play("empty", true)
            }
            console.log("Ning: " + Slot.cookingSlotsList.getAt(slot).numIngredients + " readiu: " + Slot.cookingSlotsList.getAt(slot).ready + " cçooking: " + Slot.cookingSlotsList.getAt(slot).cooking)
        }
    }

    leavePotion(player) {
        if (player == 1) {
            var i = 0;
            while (i < Slot.comandSlots.length && GameManager.scene.comandDone == false) {
                var type = Slot.comandSlots.getAt(i).currentObject.texture.key;
                if (GameManager.objectPlayerOne.texture.key == 'herbal_potion' && type == 'comandHerb' && Slot.comandSlots.getAt(i).occupied == true) {

                    if (GameManager.timeLeft > (GameManager.gameTime / 2)) {

                        GameManager.levelCoins += 100;
                        GameManager.scene.comandDone = true;

                    }
                    else if (GameManager.timeLeft < (GameManager.gameTime / 2) && GameManager.timeLeft > (GameManager.gameTime / 3)) {
                        GameManager.levelCoins += 200;
                        GameManager.scene.comandDone = true;

                    }
                    else if (GameManager.timeLeft < (GameManager.gameTime / 3)) {
                        GameManager.levelCoins += 300;
                        GameManager.scene.comandDone = true;

                    }
                    Slot.comandSlots.getAt(i).currentObject.destroy();
                    Slot.comandSlots.getAt(i).occupied = false;
                }
                else if (GameManager.objectPlayerOne.texture.key == 'bat_potion' && type == 'comandBat' && Slot.comandSlots.getAt(i).occupied == true) {

                    if (GameManager.timeLeft > (GameManager.gameTime / 2)) {
                        GameManager.levelCoins += 100;
                        GameManager.scene.comandDone = true;

                    }
                    else if (GameManager.timeLeft < (GameManager.gameTime / 2) && GameManager.timeLeft > (GameManager.gameTime / 3)) {
                        GameManager.levelCoins += 200;
                        GameManager.scene.comandDone = true;

                    }
                    else if (GameManager.timeLeft < (GameManager.gameTime / 3)) {
                        GameManager.levelCoins += 300;
                        GameManager.scene.comandDone = true;

                    }
                    Slot.comandSlots.getAt(i).currentObject.destroy();
                    Slot.comandSlots.getAt(i).occupied = false;
                }
                i++;
            }

        }

        if (player == 2) {
            var i = 0;
            while (i < Slot.comandSlots.length) {
                var type = Slot.comandSlots.getAt(i).texture.key;

                if (GameManager.objectPlayerTwo.texture.key == 'herbal_potion' && type == 'comandHerb' && Slot.comandSlots.getAt(i).occupied == true) {
                    if (GameManager.timeLeft > (GameManager.gameTime / 2)) {

                        GameManager.levelCoins += 100;
                        GameManager.scene.comandDone = true;
                    }
                    else if (GameManager.timeLeft < (GameManager.gameTime / 2) && GameManager.timeLeft > (GameManager.gameTime / 3)) {
                        GameManager.levelCoins += 200;
                        GameManager.scene.comandDone = true;
                    }
                    else if (GameManager.timeLeft < (GameManager.gameTime / 3)) {
                        GameManager.levelCoins += 300;
                        GameManager.scene.comandDone = true;
                    }
                    Slot.comandSlots.getAt(i).currentObject.destroy();
                    Slot.comandSlots.getAt(i).occupied = false;

                }
                else if (GameManager.objectPlayerTwo.texture.key == 'bat_potion' && type == 'comandBat' && Slot.comandSlots.getAt(i).occupied == true) {
                    if (GameManager.timeLeft > (GameManager.gameTime / 2)) {
                        GameManager.levelCoins += 100;
                        GameManager.scene.comandDone = true;
                    }
                    else if (GameManager.timeLeft < (GameManager.gameTime / 2) && GameManager.timeLeft > (GameManager.gameTime / 3)) {
                        GameManager.levelCoins += 200;
                        GameManager.scene.comandDone = true;
                    }
                    else if (GameManager.timeLeft < (GameManager.gameTime / 3)) {
                        GameManager.levelCoins += 300;
                        GameManager.scene.comandDone = true;
                    }
                    Slot.comandSlots.getAt(i).currentObject.destroy();
                    Slot.comandSlots.getAt(i).occupied = false;
                }
                i++;
            }

        }
        GameManager.scene.coinsText.setText(GameManager.levelCoins);
    }

    finishGame() {
        this.scene.pause("GameScene");
        this.scene.launch("FinishGameScene");
    }
    startGame() {
        this.scene.resume("GameScene");
    }

    updatePlayer(name) {
        $.ajax({
            method: "PUT",
            url: "http://localhost:8080/playersConected/" + name,
            processData: false,
            headers: {
                "Content-Type": "application/json",
            },
        }).done(function (player) {
            console.log("Updated player: " + JSON.stringify(player));
        }).fail(function (jqXHR, Status, errorThrown) {
            //aqui va el numero de veces que falla, if falla cinco veces, servidor caido
            if (name == nameP1) {
                serverFailed++;
                if (serverFailed > 3) {
                    console.log("Servidor caido");
                }
            }
        });;
    }
}

class GameManager {
    static scene;
    static gameTime = 120;
    static timeLeft;
    static levelCoins;
    static objectPlayerOne;
    static objectPlayerTwo;
    constructor(scene) {
        GameManager.scene = scene;
    }
}

class Slot {
    static cuttingSlotsList = new Phaser.Structs.List();
    static cookingSlotsList = new Phaser.Structs.List();
    static comandSlots = new Phaser.Structs.List();
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.ocuppied = false;
        this.currentObject;
        //cooking
        this.numIngredients = 0;
        this.ingredients = [];
        this.ready = false;
        this.cooking = false;
        //Comands
        this.comandOccupiedSlots = 0;
        this.occupied = false;
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


