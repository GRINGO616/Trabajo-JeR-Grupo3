class SelectionMode extends Phaser.Scene {
    constructor() {
        super("SelectionMode")
    }

    create() {

        this.timerP1 = this.time.addEvent({
            delay: 500, // ms
            callback: this.updatePlayer,
            args: [nameP1],
            loop: true,
        });

        this.background = this.add.image(config.width / 2, config.height / 2, 'modeSelectionBackground');
        var elected = false;

        this.localButton = this.add.image(config.width / 1.4, config.height *0.5, 'modeSelectionLocalButton');
        this.onlineButton = this.add.image(config.width / 3, config.height *0.5, 'modeSelectionOnlineButton');

        this.playersConectedSprite = this.add.image(config.width * 0.9, config.height * 0.1, 'players_conected_english').setScale(0.4);
        this.numConectedPlayers = this.add.text(config.width * 0.89, config.height * 0.15, "0", { font: "28px PixelFont", fill: "#ffffff", align: "center" }).setResolution(10);

        this.nextButton = this.add.image(config.width / 2, config.height *0.66, 'modeSelectionNextButton');

        if (elected === false) {
            this.nextButton.setTint(0x676666);
        }

        this.localButton.setInteractive().on('pointerdown', () => {
            elected = true;
            this.tweens.add({
                targets: this.localButton,
                scale: 1.15,
            });
            this.tweens.add({
                targets: this.onlineButton,
                scale: 1.0,
                duration: 10
            })
            this.nextButton.setTint();
        })

        this.localButton.setInteractive().on('pointerover', () => {

            if (this.localButton.scale === 1) {
                if (musicON === true) {
                    overEffect.play();
                }
            }

            this.tweens.add({
                targets: this.localButton,
                duration: 200,
                scale: 1.15,
            });
        })

        this.localButton.setInteractive().on('pointerout', () => {
            if (elected === false || this.onlineButton.scale === 1.15) {
                this.tweens.add({
                    targets: this.localButton,
                    duration: 200,
                    scale: 1,
                });
            }
        })

        this.onlineButton.setInteractive().on('pointerdown', () => {
            elected = true;
            this.tweens.add({
                targets: this.onlineButton,
                scale: 1.15,
            });
            this.tweens.add({
                targets: this.localButton,
                scale: 1.0,
                duration: 10
            })
            connection.send("registrar");
            setJugador(infoWS);
            this.nextButton.setTint();
        })

        this.onlineButton.setInteractive().on('pointerover', () => {

            if (this.onlineButton.scale === 1) {
                if (musicON === true) {
                    overEffect.play();
                }
            }

            this.tweens.add({
                targets: this.onlineButton,
                duration: 200,
                scale: 1.15,
            });
        })

        this.onlineButton.setInteractive().on('pointerout', () => {
            if (elected === false || this.localButton.scale === 1.15) {
                this.tweens.add({
                    targets: this.onlineButton,
                    duration: 200,
                    scale: 1,
                });
            }
        })

        this.nextButton.setInteractive().on('pointerdown', () => {
            if (elected === true) {
                if (musicON === true) {
                    pulseEffect.play();
                    levelSelectionMusic.stop();
                    stageMusic.volume = 0.4;
                    stageMusic.play();
                }
                this.scene.start("PreloadLevel");
            }
        })
        this.nextButton.setInteractive().on('pointerover', () => {
            if (elected === true) {
                this.tweens.add({
                    targets: this.nextButton,
                    duration: 200,
                    scale: 1.15,
                });
            }
        })

        this.nextButton.setInteractive().on('pointerout', () => {
            if (elected === true) {
                this.tweens.add({
                    targets: this.nextButton,
                    duration: 200,
                    scale: 1,
                });
            }
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
        }).fail(function (jqXHR, Status, errorThrown) {
            scene.numConectedPlayers.x = config.width * 0.89 - 30
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