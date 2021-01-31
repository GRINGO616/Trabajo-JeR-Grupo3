class SelectionMode extends Phaser.Scene {
    constructor() {
        super("SelectionMode")
    }

    create() {
        Scene = this;
        connection = new WebSocket('ws://127.0.0.1:8080/echo');
        conexionError = false;

        connection.onopen = function () {
            console.log("La conexión se ha abierto con éxito");
            //connection.send(JSON.stringify({name:"conexion establecida"}));
        }

        connection.onmessage = function (msg) {

            //interpretar mensaje con switch
            var aux = JSON.parse(msg.data)
            switch (aux.id) {
                case 0: //asignacion de grupos
                    console.log("Grupo " + aux.group + " jugador " + aux.numPlayer);
                    group = aux.group;
                    player = aux.numPlayer;
                    actionOnlinePlayer.group = aux.group;
                    actionOnlinePlayer.player = aux.player;
                    if (player == 1)
                        Scene.infoPlayerOne();
                    if (player == 2) {
                        nameP2 = nameP1;
                        connection.send("{\"id\":5,\"group\":" + group + ",\"name\":\"" + nameP2 + "\"}")
                        Scene.infoPlayerTwo();
                    }
                    break;
                case 1: //movimiento
                    actionOnlinePlayer = aux;
                    break;
                case 2: //coger, dejar y entregar
                    actionOnlinePlayerObjects = aux;
                    break;
                case 3: //control de comandas
                    commandTypeOnline = aux;
                    break;
                case 4: //desconexion
                    connection.close();
                    conexionError = true;
                    break;
                case 5:
                    if (player == 1) {
                        nameP2 = aux.name;
                        connection.send("{\"id\":5,\"group\":" + group + ",\"name\":\"" + nameP1 + "\"}")
                        partyFull = true;
                    }
                    else if (player == 2) {
                        nameP1 = aux.name;
                        partyFull = true;
                    }
                    break;
                case 6:
                    Scene.onlineisready = true;
                    break;
                case 7:
                    Scene.scene.start("OnlineGameScene")
                    break;

            }
        }

        connection.onerror = function (e) {
            console.log("Se ha producido el error " + e);
        }

        connection.onclose = function () {
            console.log("Se ha cerrado la sesion");
        }

        this.timerP1 = this.time.addEvent({
            delay: 500, // ms
            callback: this.updatePlayer,
            args: [nameP1],
            loop: true,
        });
        this.imready = false;
        this.onlineready = false;
        this.background = this.add.image(config.width / 2, config.height / 2, 'modeSelectionBackground');

        this.lyshaIcon = this.add.image(config.width * 0.25, config.height * 0.5, 'Lysha_forward').setScale(2);

        this.freddieIcon = this.add.image(config.width * 0.75, config.height * 0.5, 'Freddie_forward').setScale(2).setVisible(false);

        this.playButton = this.add.image(config.width * 0.5, config.height * 0.9, 'nextSelectionLevelSpanish').setVisible(false);

        this.title = this.add.text(config.width * 0.45, config.height * 0.1, "Sala", { font: "50px PixelFont", fill: "#ffffff", align: "center" }).setResolution(10);
        this.namePlayerOne = this.add.text(config.width * 0.2, config.height * 0.8, "Name1", { font: "30px PixelFont", fill: "#ffffff", align: "center" }).setResolution(10);
        this.namePlayerTwo = this.add.text(config.width * 0.7, config.height * 0.8, "Name2", { font: "30px PixelFont", fill: "#ffffff", align: "center" }).setResolution(10).setVisible(false);

        this.playersConectedSprite = this.add.image(config.width * 0.9, config.height * 0.1, 'players_conected_english').setScale(0.4);
        this.numConectedPlayers = this.add.text(config.width * 0.89, config.height * 0.15, "0", { font: "28px PixelFont", fill: "#ffffff", align: "center" }).setResolution(10);

        this.readyButtonPlayerOne = this.add.image(config.width * 0.25, config.height * 0.9, 'readyButton').setScale(0.7).setVisible(false);
        this.readyButtonPlayerTwo = this.add.image(config.width * 0.75, config.height * 0.9, 'readyButton').setScale(0.7).setVisible(false);

        this.readyTextPlayerOne = this.add.text(config.width * 0.2, config.height * 0.9, "Listo", { font: "28px PixelFont", fill: "#00ff00", align: "center" }).setResolution(10).setVisible(false);
        this.readyTextPlayerTwo = this.add.text(config.width * 0.7, config.height * 0.9, "Listo", { font: "28px PixelFont", fill: "#00ff00", align: "center" }).setResolution(10).setVisible(false);


    }
    update() {
        this.getPlayersConected(this);
        if (conexionError) {
            Scene.scene.pause("SelectionMode");
            Scene.scene.launch("ErrorScene");
        }
        if (partyFull) {
            partyFull = false;
            this.updateInfo();

        }
        if (this.imready && this.onlineisready && player == 1) {
            this.playButton.setVisible(true);
            this.playButton.setInteractive().on('pointerdown', () => {
                connection.send("{\"id\":7,\"group\":" + group + "}")
                Scene.scene.start("OnlineGameScene")
            })

        }
    }
    infoPlayerOne() {
        this.namePlayerOne.setText(nameP1);
        this.readyButtonPlayerOne.setVisible(true);
        this.readyButtonPlayerOne.setInteractive().on('pointerdown', () => {
            this.readyButtonPlayerOne.setVisible(false);
            this.readyTextPlayerOne.setVisible(true);
            this.imready = true;
            connection.send("{\"id\":6,\"group\":" + group + "}")
        })
    }

    infoPlayerTwo() {
        this.namePlayerTwo.setText(nameP2);
        this.namePlayerTwo.setVisible(true);
        this.freddieIcon.setVisible(true);
        this.readyButtonPlayerTwo.setVisible(true);
        this.readyButtonPlayerTwo.setInteractive().on('pointerdown', () => {
            this.readyButtonPlayerTwo.setVisible(false);
            this.readyTextPlayerTwo.setVisible(true);
            this.imready = true;
            connection.send("{\"id\":6,\"group\":" + group + "}")
        })
    }
    updateInfo() {
        if (player == 1) {
            this.freddieIcon.setVisible(true);
            this.namePlayerTwo.setText(nameP2);
            this.namePlayerTwo.setVisible(true);
        }
        else if (player == 2) {
            this.namePlayerOne.setText(nameP1);
        }
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
            //console.log("Updated player: " + JSON.stringify(player));
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