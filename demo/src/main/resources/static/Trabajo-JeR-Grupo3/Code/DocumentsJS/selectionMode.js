class SelectionMode extends Phaser.Scene {
    constructor() {
        super("SelectionMode")
    }

    create() {
        Scene=this;
        connection = new WebSocket('ws://127.0.0.1:8080/echo');
    conexionError=false;
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
                    conexionError=true;
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

        this.background = this.add.image(config.width / 2, config.height / 2, 'modeSelectionBackground');
        
        this.lyshaIcon = this.add.image(config.width * 0.25, config.height * 0.5, 'Lysha_forward').setScale(2);
        
        this.localButton = this.add.image(config.width / 1.4, config.height * 0.5, 'modeSelectionLocalButton');
        
        this.errorText = this.add.text(config.width * 0.1, config.height * 0.3, "Error de conexion, \nredirigiendo a Menú", { font: "70px PixelFont", fill: "#ff0000", align: "center" }).setResolution(10).setVisible(false);

        this.playersConectedSprite = this.add.image(config.width * 0.9, config.height * 0.1, 'players_conected_english').setScale(0.4);
        this.numConectedPlayers = this.add.text(config.width * 0.89, config.height * 0.15, "0", { font: "28px PixelFont", fill: "#ffffff", align: "center" }).setResolution(10);

        
        this.localButton.setInteractive().on('pointerdown', () => {
            
            Scene.scene.start("OnlineGameScene")
        })


    }
    update() {
        this.getPlayersConected(this);
        if(conexionError){
            Scene.scene.pause("SelectionMode");
            Scene.scene.launch("ErrorScene");
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