class Login extends Phaser.Scene {
    constructor() {
        super("Login")
    }

    create() {

        // Declaración de la configuración principal del menú de logging.
        this.cameras.main.fadeIn(2000)
        this.background = this.add.image(config.width / 2, config.height / 2, 'loginBackground');
        this.getPlayers();

        menuMusic.play();

        // Declaración de la música en función a si está activa o no
        if (musicON === true) {

            menuMusic.volume = 0.4;
            stageMusic.stop();
            levelSelectionMusic.stop();

        }

        if (musicON === false) {

            menuMusic.volume = 0.0;
        }
        serverFailed = 0;

        // Declaración de los botones del menú de logging.
        this.onePlayer = this.add.image(config.width * 0.3, config.height * 0.3, 'one_player').setScale(1.2);
        this.lyshaIcon = this.add.image(config.width * 0.2, config.height * 0.18, 'Lysha_forward').setScale(0.7);
        if(!online){
            this.twoPlayers = this.add.image(config.width * 0.7, config.height * 0.3, 'two_players').setScale(1.2);
            this.lyshaIcon2 = this.add.image(config.width * 0.6, config.height * 0.18, 'Lysha_forward').setScale(0.7);
            this.freddieIcon = this.add.image(config.width * 0.8, config.height * 0.18, 'Freddie_forward').setScale(0.7);
        }
        
        this.continueButton = this.add.image(config.width * 0.5, config.height * 0.9, 'loginNextButton').setScale(1.2).setVisible(false);
        this.readyPlayerOne = false;
        this.readyPlayerTwo = false;

        //Seleccion de nombre y contraseña
        this.loginInfoText = this.add.text(config.width * 0.15, config.height * 0.03, "Escribe tu nombre y contraseña o registra uno nuevo", { font: "28px PixelFont", fill: "#ffffff", align: "center" }).setResolution(10);
        this.playerOneText = this.add.text(config.width * 0.15, config.height * 0.4, "Jugador 1", { font: "28px PixelFont", fill: "#ffffff", align: "center" }).setResolution(10).setVisible(false);
        this.namePlayerOne = this.add.text(config.width * 0.1, config.height * 0.5, "Nombre:", { font: "28px PixelFont", fill: "#ffffff", align: "center" }).setResolution(10).setVisible(false);
        this.errorPlayerOne = this.add.text(config.width * 0.1, config.height * 0.57, "La contraseña es incorrecta", { font: "20px PixelFont", fill: "#ff0000", align: "center" }).setResolution(10).setVisible(false);
        this.readyNamePlayerOne = this.add.text(config.width * 0.2, config.height * 0.52, "", { font: "28px PixelFont", fill: "#ffffff", align: "center" }).setResolution(10).setVisible(false);
        this.readyTextPlayerOne = this.add.text(config.width * 0.2, config.height * 0.57, "Listo", { font: "20px PixelFont", fill: "#00ff00", align: "center" }).setResolution(10).setVisible(false);
        this.passwordPlayerOne = this.add.text(config.width * 0.1, config.height * 0.62, "Contraseña:", { font: "28px PixelFont", fill: "#ffffff", align: "center" }).setResolution(10).setVisible(false);
        this.readyButtonPlayerOne = this.add.image(config.width * 0.25, config.height * 0.72, 'readyButton').setScale(0.7).setVisible(false);
        this.inputNamePlayerOne = document.getElementById("inputNamePlayerOne");
        this.inputNamePlayerOne.style.position = "absolute";
        this.inputNamePlayerOne.style.top = 470 + "px";
        this.inputNamePlayerOne.style.left = 610 + "px";
        this.inputNamePlayerOne.style.width = 300 + "px";
        this.inputNamePlayerOne.style.height = 50 + "px";
        this.inputNamePlayerOne.style.backgroundColor = "#EBA5F0";
        this.inputNamePlayerOne.style.borderColor = "#EBA5F0";
        
        this.inputPasswordPlayerOne = document.getElementById("inputPasswordPlayerOne");
        this.inputPasswordPlayerOne.style.position = "absolute";
        this.inputPasswordPlayerOne.style.top = 580 + "px";
        this.inputPasswordPlayerOne.style.left = 660 + "px";
        this.inputPasswordPlayerOne.style.width = 300 + "px";
        this.inputPasswordPlayerOne.style.height = 50 + "px";
        this.inputPasswordPlayerOne.style.backgroundColor = "#EBA5F0";
        this.inputPasswordPlayerOne.style.borderColor = "#EBA5F0";

        this.playerTwoText = this.add.text(config.width * 0.6, config.height * 0.4, "Jugador 2", { font: "28px PixelFont", fill: "#ffffff", align: "center" }).setResolution(10).setVisible(false);
        this.namePlayerTwo = this.add.text(config.width * 0.55, config.height * 0.5, "Nombre:", { font: "28px PixelFont", fill: "#ffffff", align: "center" }).setResolution(10).setVisible(false);
        this.errorPlayerTwo = this.add.text(config.width * 0.55, config.height * 0.57, "La contraseña es incorrecta", { font: "20px PixelFont", fill: "#ff0000", align: "center" }).setResolution(10).setVisible(false);
        this.readyNamePlayerTwo = this.add.text(config.width * 0.65, config.height * 0.52, "", { font: "28px PixelFont", fill: "#ffffff", align: "center" }).setResolution(10).setVisible(false);
        this.readyTextPlayerTwo = this.add.text(config.width * 0.65, config.height * 0.57, "Listo", { font: "20px PixelFont", fill: "#00ff00", align: "center" }).setResolution(10).setVisible(false);
        this.passwordPlayerTwo = this.add.text(config.width * 0.55, config.height * 0.62, "Contraseña:", { font: "28px PixelFont", fill: "#ffffff", align: "center" }).setResolution(10).setVisible(false);
        this.readyButtonPlayerTwo = this.add.image(config.width * 0.7, config.height * 0.72, 'readyButton').setScale(0.7).setVisible(false);

        this.inputNamePlayerTwo = document.getElementById("inputNamePlayerTwo");
        this.inputNamePlayerTwo.style.position = "absolute";
        this.inputNamePlayerTwo.style.top = 470 + "px";
        this.inputNamePlayerTwo.style.left = 1170 + "px";
        this.inputNamePlayerTwo.style.width = 300 + "px";
        this.inputNamePlayerTwo.style.height = 50 + "px";
        this.inputNamePlayerTwo.style.backgroundColor = "#EBA5F0";
        this.inputNamePlayerTwo.style.borderColor = "#EBA5F0";

        this.inputPasswordPlayerTwo = document.getElementById("inputPasswordPlayerTwo");
        this.inputPasswordPlayerTwo.style.position = "absolute";
        this.inputPasswordPlayerTwo.style.top = 580 + "px";
        this.inputPasswordPlayerTwo.style.left = 1220 + "px";
        this.inputPasswordPlayerTwo.style.width = 300 + "px";
        this.inputPasswordPlayerTwo.style.height = 50 + "px";
        this.inputPasswordPlayerTwo.style.backgroundColor = "#EBA5F0";
        this.inputPasswordPlayerTwo.style.borderColor = "#EBA5F0";

        this.onePlayer.setInteractive().on('pointerdown', () => {
            this.playerOneText.setVisible(true);
            this.namePlayerOne.setVisible(true);
            this.passwordPlayerOne.setVisible(true);
            this.playerTwoText.setVisible(false);
            this.namePlayerTwo.setVisible(false);
            this.passwordPlayerTwo.setVisible(false);
            this.inputNamePlayerOne.style.display = "inline";
            this.inputNamePlayerTwo.style.display = "none";
            this.inputPasswordPlayerOne.style.display = "inline";
            this.inputPasswordPlayerTwo.style.display = "none";
            singlePlayer = true;
            this.readyButtonPlayerOne.setVisible(true);
            this.readyButtonPlayerTwo.setVisible(false);
        })
        if(!online){
            this.twoPlayers.setInteractive().on('pointerdown', () => {
                this.playerOneText.setVisible(true);
                this.namePlayerOne.setVisible(true);
                this.passwordPlayerOne.setVisible(true);
                this.playerTwoText.setVisible(true);
                this.namePlayerTwo.setVisible(true);
                this.passwordPlayerTwo.setVisible(true);
                this.inputNamePlayerOne.style.display = "inline";
                this.inputNamePlayerTwo.style.display = "inline";
                this.inputPasswordPlayerOne.style.display = "inline";
                this.inputPasswordPlayerTwo.style.display = "inline";
                singlePlayer = false;
                this.readyButtonPlayerOne.setVisible(true);
                this.readyButtonPlayerTwo.setVisible(true);
            })
        }
        

        this.readyButtonPlayerOne.setInteractive().on('pointerdown', () => {
            //aqui intenta meter al jugador en mapa
            //if falla activa mensaje de error, sino el de ready
            if (this.inputNamePlayerOne.value != "" && this.inputPasswordPlayerOne.value != "") {
                this.getPlayer(this.inputNamePlayerOne.value, this.inputPasswordPlayerOne.value, 1, this);

            }
        })
        this.readyButtonPlayerTwo.setInteractive().on('pointerdown', () => {
            //aqui intenta meter al jugador en mapa
            //if falla activa mensaje de error, sino el de ready
            if (this.inputNamePlayerTwo.value != "" && this.inputPasswordPlayerTwo.value != "") {
                this.getPlayer(this.inputNamePlayerTwo.value, this.inputPasswordPlayerTwo.value, 2, this);

            }
        })

        this.continueButton.setInteractive().on('pointerover', () => {
            this.tweens.add({
                targets: this.continueButton,
                duration: 200,
                scale: 1.2,
            });
        })

        this.continueButton.setInteractive().on('pointerout', () => {
            this.tweens.add({
                targets: this.continueButton,
                duration: 200,
                scale: 1.05,
            });
        })

    }
    
    /*
        getPlayer(name, password, jugador) {
            fetch("http://localhost:8080/players/" + name)
                .then(response => response.json())
                .then(data => this.mostrarTimer(name,password,jugador,data))
                .catch(err => this.correctLogin(name, password, jugador,true)); // Hacer algo con el error
    
        }
    
        postPlayer(Name, Password) {
            fetch("http://localhost:8080/players", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: Name,
                    password: Password
                })
            })
                .then(response => response.json())
                .then(data => console.log(data));
        }
    */

    correctLogin(name, password, jugador, nuevo) {
        this.conectPlayer(name, password)

        if (nuevo) {
            this.postPlayer(name, password);
        }

        if (jugador == 1) {
            this.playerOneText.setVisible(false);
            this.namePlayerOne.setVisible(false);
            this.passwordPlayerOne.setVisible(false);
            this.inputNamePlayerOne.style.display = "none";
            this.inputPasswordPlayerOne.style.display = "none";
            this.readyTextPlayerOne.setVisible(true);
            this.readyNamePlayerOne.setText("" + this.inputNamePlayerOne.value);
            this.readyNamePlayerOne.setVisible(true);
            this.readyButtonPlayerOne.setVisible(false);
            nameP1 = this.inputNamePlayerOne.value;
            this.readyPlayerOne = true;
            if ((!singlePlayer && this.readyPlayerTwo) || singlePlayer) {
                this.continueButton.setVisible(true);
                this.continueButton.setInteractive().on('pointerdown', () => {
                    if(!online){
                        this.scene.start("GameScene"); 
                    }
                    else{
                        this.scene.start("SelectionMode"); 
                    }
                                      
                })
            }
            this.timerP1 = this.time.addEvent({
                delay: 500, // ms
                callback: this.updatePlayer,
                args: [nameP1],
                loop: true,
            });


        }
        else if (jugador == 2) {
            this.playerTwoText.setVisible(false);
            this.namePlayerTwo.setVisible(false);
            this.passwordPlayerTwo.setVisible(false);
            this.inputNamePlayerTwo.style.display = "none";
            this.inputPasswordPlayerTwo.style.display = "none";
            this.readyTextPlayerTwo.setVisible(true);
            this.readyNamePlayerTwo.setText("" + this.inputNamePlayerTwo.value);
            this.readyNamePlayerTwo.setVisible(true);
            this.readyButtonPlayerTwo.setVisible(false);
            nameP2 = this.inputNamePlayerTwo.value;
            this.readyPlayerTwo = true;
            if (this.readyPlayerOne) {
                this.continueButton.setVisible(true);
                this.continueButton.setInteractive().on('pointerdown', () => {
                    if(!online){
                        this.scene.start("GameScene"); 
                    }
                    else{
                        this.scene.start("SelectionMode"); 
                    }
                })
            }
            this.timerP2 = this.time.addEvent({
                delay: 500, // ms
                callback: this.updatePlayer,
                args: [nameP2],
                loop: true,
            });


        }


    }

    mostrarTimer(name, password, jugador, data) {
        if (password == data.password) {
            this.correctLogin(name, password, jugador, false);
        }
        else {
            if (jugador == 1) {
                this.errorPlayerOne.setVisible(true);
            }
            else if (jugador == 2) {
                this.errorPlayerTwo.setVisible(true);
            }
            this.time.addEvent({
                delay: 2000, callback: function () {
                    if (jugador == 1) {
                        this.errorPlayerOne.setVisible(false);
                    }
                    else if (jugador == 2) {
                        this.errorPlayerTwo.setVisible(false);
                    }
                }, callbackScope: this
            })
        }

    }
    getPlayer(name, password, jugador, scene) {
        $.ajax({
            url: "http://localhost:8080/players/" + name,
        }).done(function (data) {
            scene.mostrarTimer(name, password, jugador, data)
        }).fail(function () {
            scene.correctLogin(name, password, jugador, true)
        });
    }

    getPlayers() {
        $.ajax({
            url: "http://localhost:8080/players",
        }).done(function (data) {
            console.log(data);
        }).fail(function () {
            //
        });
    }


    postPlayer(Name, Password) {
        let request = {
            name: Name,
            password: Password
        };
        $.ajax({
            method: "POST",
            url: "http://localhost:8080/players",
            data: JSON.stringify(request),
            headers: {
                "Content-type": "application/json; charset=UTF-8", // Indica el contenido
            },
        })
            .done((data) => {
                console.log(data);
            })
            .fail((jqXHR, Status, errorThrown) => {
                console.log(errorThrown);
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
            serverFailed = 0;
        }).fail(function (jqXHR, Status, errorThrown) {
            //aqui va el numero de veces que falla, if falla cinco veces, servidor caido
            if (name == nameP1) {
                serverFailed++;
                if (serverFailed > 3) {
                    console.log("Servidor caido");
                    serverActive = true;
                }
            }
        });
    }

    conectPlayer(Name, Password) {
        let request = {
            name: Name,
            password: Password,
            date: new Date()
        };
        $.ajax({
            method: "POST",
            url: "http://localhost:8080/playersConected",
            data: JSON.stringify(request),
            headers: {
                "Content-type": "application/json; charset=UTF-8", // Indica el contenido
            },
        })
            .done((data) => {
                console.log(data.name + " conected");
            })
            .fail((jqXHR, Status, errorThrown) => {
                console.log(errorThrown);
            });
    }
}

