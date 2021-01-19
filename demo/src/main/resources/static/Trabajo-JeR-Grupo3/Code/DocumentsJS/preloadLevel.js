class PreloadLevel extends Phaser.Scene {
    constructor() {
        super("PreloadLevel")
    }

    create() {

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

        // Se establece la escena inicial del propio videojuego.
        var scene = this;

        // Se establecen los elementos principales de la pantalla de carga.
        var preloadBackground = this.add.image(config.width / 2, config.height / 2, 'preloadBackground');

        if (spanish === true) {
            var J1 = this.add.image(config.width / 3.5, config.height / 2.85, 'preloadControlsJ1Spanish').setScale(0.8);
            var J2 = this.add.image(config.width / 1.4, config.height / 2.85, 'preloadControlsJ2Spanish').setScale(0.8);
            var instructionsZone = this.add.image(config.width / 2.1, config.height / 1.2, 'preloadInstructionsSpanish');
        }

        if (english === true) {
            var J1 = this.add.image(config.width / 3.5, config.height / 2.85, 'preloadControlsJ1English').setScale(0.8);
            var J2 = this.add.image(config.width / 1.4, config.height / 2.85, 'preloadControlsJ2English').setScale(0.8);
            var instructionsZone = this.add.image(config.width / 2.1, config.height / 1.2, 'preloadInstructionsEnglish');
        }

        this.cameras.main.once('camerafadeoutcomplete', function (camera) {

            preloadBackground.destroy();
            J1.destroy();
            J2.destroy();
            instructionsZone.destroy();

            if (level === 1) {
                scene.scene.start("GameScene");
            }

            if (level === 2) {
                scene.scene.start("GameScene");
            }
        });
        setTimeout(function () {
            scene.cameras.main.fadeOut(3000);
        }, 7000);
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