class Menu extends Phaser.Scene {
    constructor() {
        super("Menu")
    }
    create() {

        // Declaración de la configuración principal del menú.
        this.background = this.add.image(config.width / 2, config.height / 2, 'menuBackground');
        this.logoGame = this.add.image(config.width / 2, 0.5 * config.height / 4, 'logoGame').setScale(0.14);
        var escena = this;

        // Declaración de la música en función a si está activa o no
        if (musicON === true) {

            menuMusic.volume = 0.4;
            stageMusic.stop();
            levelSelectionMusic.stop();

        }

        if (musicON === false) {

            menuMusic.volume = 0.0;
        }

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




        // Declaración de los botones del menú principal.

        if (spanish === true) {
            this.arcade_button = this.add.image(config.width / 2, 1.4 * config.height / 4.25, 'arcade_button').setScale(0.3)
            //this.storyMode_button=this.add.image(1.9*config.width/3,1.4*config.height/4.25,'storyMode_button_spanish').setScale(0.3)
            this.controls_button = this.add.image(config.width / 2, 1.8 * config.height / 4, 'controls_button_spanish').setScale(0.3)
            this.settings_button = this.add.image(config.width / 2, 2.3 * config.height / 4, 'settings_button_spanish').setScale(0.3)
            this.credit_button = this.add.image(config.width / 2, 2.8 * config.height / 4, 'credits_button_spanish').setScale(1.05);
            this.playersConectedSprite = this.add.image(config.width * 0.9, config.height * 0.1, 'players_conected_spanish').setScale(0.4);

        }

        if (english === true) {
            this.arcade_button = this.add.image(config.width / 2, 1.4 * config.height / 4.25, 'arcade_button').setScale(0.3)
            //this.storyMode_button=this.add.image(1.9*config.width/3,1.4*config.height/4.25,'storyMode_button_english').setScale(0.3)
            this.controls_button = this.add.image(config.width / 2, 1.8 * config.height / 4, 'controls_button_english').setScale(1.05);
            this.settings_button = this.add.image(config.width / 2, 2.3 * config.height / 4, 'settings_button_english').setScale(1.05);
            this.credit_button = this.add.image(config.width / 2, 2.8 * config.height / 4, 'credits_button_english').setScale(1.05);
            this.playersConectedSprite = this.add.image(config.width * 0.9, config.height * 0.1, 'players_conected_english').setScale(0.4);
        }

        this.numConectedPlayers = this.add.text(config.width * 0.89, config.height * 0.15, "0", { font: "28px PixelFont", fill: "#ffffff", align: "center" }).setResolution(10);

        // Paso de interfaces y activación de los botones.
        this.arcade_button.setInteractive().on('pointerdown', function () {
            if (musicON === true) {
                pulseEffect.play();
                menuMusic.volume = 0.0
                levelSelectionMusic.volume = 0.4;
                levelSelectionMusic.play();
            }
            if (musicON === false) {
                menuMusic.volume = 0.0;
            }

            escena.scene.start("SelectionLevel");
        })

        this.arcade_button.setInteractive().on('pointerover', () => {
            this.tweens.add({
                targets: this.arcade_button,
                duration: 200,
                scale: 0.35,
            });
        })

        this.arcade_button.setInteractive().on('pointerout', () => {
            this.tweens.add({
                targets: this.arcade_button,
                duration: 200,
                scale: 0.3,
            });
        })

        /*this.storyMode_button.setInteractive().on('pointerdown', function() {
            menuMusic.stop();
            stageMusic.play();
            escena.scene.start("GameScene");
        })*/

        this.controls_button.setInteractive().on('pointerdown', () => {
            if (musicON === true) {
                pulseEffect.play();
            }
            this.scene.start("Configuration");
        })

        if (spanish === true) {
            this.controls_button.setInteractive().on('pointerover', () => {
                this.tweens.add({
                    targets: this.controls_button,
                    duration: 200,
                    scale: 0.35,
                });
            })

            this.controls_button.setInteractive().on('pointerout', () => {
                this.tweens.add({
                    targets: this.controls_button,
                    duration: 200,
                    scale: 0.3,
                });
            })
        }

        if (english === true) {
            this.controls_button.setInteractive().on('pointerover', () => {
                this.tweens.add({
                    targets: this.controls_button,
                    duration: 200,
                    scale: 1.2,
                });
            })

            this.controls_button.setInteractive().on('pointerout', () => {
                this.tweens.add({
                    targets: this.controls_button,
                    duration: 200,
                    scale: 1.05,
                });
            })
        }

        this.settings_button.setInteractive().on('pointerdown', () => {
            if (musicON === true) {
                pulseEffect.play();
            }
            this.scene.start("Settings");
            this.postPetition();
        })

        if (spanish === true) {
            this.settings_button.setInteractive().on('pointerover', () => {
                this.tweens.add({
                    targets: this.settings_button,
                    duration: 200,
                    scale: 0.35,
                });
            })

            this.settings_button.setInteractive().on('pointerout', () => {
                this.tweens.add({
                    targets: this.settings_button,
                    duration: 200,
                    scale: 0.3,
                });
            })
        }

        if (english === true) {
            this.settings_button.setInteractive().on('pointerover', () => {
                this.tweens.add({
                    targets: this.settings_button,
                    duration: 200,
                    scale: 1.2,
                });
            })

            this.settings_button.setInteractive().on('pointerout', () => {
                this.tweens.add({
                    targets: this.settings_button,
                    duration: 200,
                    scale: 1.05,
                });
            })
        }

        this.credit_button.setInteractive().on('pointerdown', () => {
            if (musicON === true) {
                pulseEffect.play();
            }
            this.scene.start("Credits")
        })


        this.credit_button.setInteractive().on('pointerover', () => {
            this.tweens.add({
                targets: this.credit_button,
                duration: 200,
                scale: 1.2,
            });
        })

        this.credit_button.setInteractive().on('pointerout', () => {
            this.tweens.add({
                targets: this.credit_button,
                duration: 200,
                scale: 1.05,
            });
        })


    }
    update() {
        this.getPlayersConected(this);
    }

    getPlayersConected(scene) {
        $.ajax({
            url: "http://localhost:8080/playersConected",
        }).done(function (data) {
            scene.numConectedPlayers.setText("" + data);
        }).fail(function (jqXHR, Status, errorThrown){
            scene.numConectedPlayers.x=config.width * 0.89-30
            scene.numConectedPlayers.setText("Offline");
        });
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
        });
    }


}