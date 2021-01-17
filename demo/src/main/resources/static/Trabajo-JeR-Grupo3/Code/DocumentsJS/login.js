class Login extends Phaser.Scene {
    constructor() {
        super("Login")
    }

    create() {

        // Declaración de la configuración principal del menú de logging.
        this.cameras.main.fadeIn(2000)
        this.background = this.add.image(config.width / 2, config.height / 2, 'loginBackground');
        

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

        // Declaración de los botones del menú de logging.
        this.onePlayer = this.add.image(config.width * 0.3, config.height * 0.3, 'loginNextButton').setScale(1.2);
        this.twoPlayers = this.add.image(config.width * 0.7, config.height * 0.3, 'loginNextButton').setScale(1.2);
        this.lyshaIcon = this.add.image(config.width * 0.2, config.height * 0.18, 'Lysha_forward').setScale(0.7);
        this.lyshaIcon2 = this.add.image(config.width * 0.6, config.height * 0.18, 'Lysha_forward').setScale(0.7);
        this.freddieIcon = this.add.image(config.width * 0.8, config.height * 0.18, 'Freddie_forward').setScale(0.7);
        this.continueButton = this.add.image(config.width/1.4,config.height/9, 'loginNextButton').setScale(1.2).setVisible(false);
        this.readyPlayerOne = false;
        this.readyPlayerTwo = false;

        //Seleccion de nombre y contraseña
        this.playerOneText = this.add.text(config.width * 0.15, config.height * 0.4, "Jugador 1", { font: "28px PixelFont", fill: "#ffffff", align: "center" }).setResolution(10).setVisible(false);
        this.playerTwoText = this.add.text(config.width * 0.6, config.height * 0.4, "Jugador 2", { font: "28px PixelFont", fill: "#ffffff", align: "center" }).setResolution(10).setVisible(false);

        this.namePlayerOne = this.add.text(config.width * 0.1, config.height * 0.5, "Nombre:", { font: "28px PixelFont", fill: "#ffffff", align: "center" }).setResolution(10).setVisible(false);
        this.namePlayerTwo = this.add.text(config.width * 0.55, config.height * 0.5, "Nombre:", { font: "28px PixelFont", fill: "#ffffff", align: "center" }).setResolution(10).setVisible(false);

        this.errorPlayerOne = this.add.text(config.width * 0.1, config.height * 0.57, "La contraseña es incorrecta", { font: "20px PixelFont", fill: "#ff0000", align: "center" }).setResolution(10).setVisible(false);
        this.errorPlayerTwo = this.add.text(config.width * 0.55, config.height * 0.57, "La contraseña es incorrecta", { font: "20px PixelFont", fill: "#ff0000", align: "center" }).setResolution(10).setVisible(false);

        this.readyNamePlayerOne = this.add.text(config.width * 0.2, config.height * 0.52, "", { font: "28px PixelFont", fill: "#ffffff", align: "center" }).setResolution(10).setVisible(false);
        this.readyNamePlayerTwo = this.add.text(config.width * 0.65, config.height * 0.52, "", { font: "28px PixelFont", fill: "#ffffff", align: "center" }).setResolution(10).setVisible(false);

        this.readyTextPlayerOne = this.add.text(config.width * 0.2, config.height * 0.57, "Listo", { font: "20px PixelFont", fill: "#00ff00", align: "center" }).setResolution(10).setVisible(false);
        this.readyTextPlayerTwo = this.add.text(config.width * 0.65, config.height * 0.57, "Listo", { font: "20px PixelFont", fill: "#00ff00", align: "center" }).setResolution(10).setVisible(false);

        this.passwordPlayerOne = this.add.text(config.width * 0.1, config.height * 0.62, "Contraseña:", { font: "28px PixelFont", fill: "#ffffff", align: "center" }).setResolution(10).setVisible(false);
        this.passwordPlayerTwo = this.add.text(config.width * 0.55, config.height * 0.62, "Contraseña:", { font: "28px PixelFont", fill: "#ffffff", align: "center" }).setResolution(10).setVisible(false);

        this.readyButtonPlayerOne = this.add.image(config.width * 0.25, config.height * 0.72, 'loginNextButton').setScale(0.7).setVisible(false);
        this.readyButtonPlayerTwo = this.add.image(config.width * 0.7, config.height * 0.72, 'loginNextButton').setScale(0.7).setVisible(false);


        this.inputNamePlayerOne = document.getElementById("inputNamePlayerOne");
        this.inputNamePlayerOne.style.position = "absolute";
        this.inputNamePlayerOne.style.top = 470 + "px";
        this.inputNamePlayerOne.style.left = 610 + "px";
        this.inputNamePlayerOne.style.width = 300 + "px";
        this.inputNamePlayerOne.style.height = 50 + "px";
        this.inputNamePlayerOne.style.backgroundColor = "#EBA5F0";
        this.inputNamePlayerOne.style.borderColor = "#EBA5F0";


        this.inputNamePlayerTwo = document.getElementById("inputNamePlayerTwo");
        this.inputNamePlayerTwo.style.position = "absolute";
        this.inputNamePlayerTwo.style.top = 470 + "px";
        this.inputNamePlayerTwo.style.left = 1170 + "px";
        this.inputNamePlayerTwo.style.width = 300 + "px";
        this.inputNamePlayerTwo.style.height = 50 + "px";
        this.inputNamePlayerTwo.style.backgroundColor = "#EBA5F0";
        this.inputNamePlayerTwo.style.borderColor = "#EBA5F0";


        this.inputPasswordPlayerOne = document.getElementById("inputPasswordPlayerOne");
        this.inputPasswordPlayerOne.style.position = "absolute";
        this.inputPasswordPlayerOne.style.top = 580 + "px";
        this.inputPasswordPlayerOne.style.left = 660 + "px";
        this.inputPasswordPlayerOne.style.width = 300 + "px";
        this.inputPasswordPlayerOne.style.height = 50 + "px";
        this.inputPasswordPlayerOne.style.backgroundColor = "#EBA5F0";
        this.inputPasswordPlayerOne.style.borderColor = "#EBA5F0";


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

        this.readyButtonPlayerOne.setInteractive().on('pointerdown', () => {
            //aqui intenta meter al jugador en mapa
            //if falla activa mensaje de error, sino el de ready
            if (this.inputNamePlayerOne.value != "") {
                this.playerOneText.setVisible(false);
                this.namePlayerOne.setVisible(false);
                this.passwordPlayerOne.setVisible(false);
                this.inputNamePlayerOne.style.display = "none";
                this.inputPasswordPlayerOne.style.display = "none";
                this.readyTextPlayerOne.setVisible(true);
                this.readyNamePlayerOne.setText("" + this.inputNamePlayerOne.value);
                this.readyNamePlayerOne.setVisible(true);
                this.readyPlayerOne = true;
                this.readyButtonPlayerOne.setVisible(false);

                nameP1 = this.inputNamePlayerOne.value;
                this.postPlayer(this.inputNamePlayerOne.value, this.inputPasswordPlayerOne.value);

                if ((!singlePlayer && this.readyPlayerTwo) || singlePlayer) {
                    this.continueButton.setVisible(true);
                    this.continueButton.setInteractive().on('pointerdown', () => {
                        this.scene.start("Menu");
                    })
                }


            }
        })
        this.readyButtonPlayerTwo.setInteractive().on('pointerdown', () => {
            //aqui intenta meter al jugador en mapa
            //if falla activa mensaje de error, sino el de ready
            this.playerTwoText.setVisible(false);
            this.namePlayerTwo.setVisible(false);
            this.passwordPlayerTwo.setVisible(false);
            this.inputNamePlayerTwo.style.display = "none";
            this.inputPasswordPlayerTwo.style.display = "none";
            this.readyTextPlayerTwo.setVisible(true);
            this.readyNamePlayerTwo.setText("" + this.inputNamePlayerTwo.value);
            this.readyNamePlayerTwo.setVisible(true);
            this.readyPlayerTwo = true;
            this.readyButtonPlayerTwo.setVisible(false);
            
            nameP2 = this.inputNamePlayerTwo.value;
            
            this.postPlayer(this.inputNamePlayerTwo.value, this.inputPasswordPlayerTwo.value);

            if (this.readyPlayerOne) {
                this.continueButton.setVisible(true);
                this.continueButton.setInteractive().on('pointerdown', () => {
                    this.scene.start("Menu");
                })
            }
        })

        this.continueButton.setInteractive().on('pointerover', () => {
            this.tweens.add({
                targets:this.continueButton,
                duration:200,
                scale: 1.2,
            });
        })

        this.continueButton.setInteractive().on('pointerout',()=>{
            this.tweens.add({
                targets:this.continueButton,
                duration:200,
                scale: 1.05,
            });
        })

    }

    getPlayers() {
        fetch("http://localhost:8080/players")
            .then(response => response.json())
            .then(data => console.log(data));

    }

    postPlayer(Name, Password) {
        fetch("http://localhost:8080/players", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: Name ,
                password: Password
            })
        })
            .then(response => response.json())
            .then(data => console.log(data));
    }

}

