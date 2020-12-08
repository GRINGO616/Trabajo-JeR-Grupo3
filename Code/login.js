class Login extends Phaser.Scene{
    constructor(){
        super("Login")
    }
    create(){

        // Declaración de la configuración principal del menú de logging.
        this.cameras.main.fadeIn(2000)
        this.background=this.add.image(config.width/2,config.height/2,'loginBackground');
        menuMusic.play();

        // Declaración de los botones del menú de logging.
        this.log_box=this.add.image(config.width/2.7,config.height/4,'loginBox')
        this.login_next_button=this.add.image(config.width/3,config.height/1.7,'loginNextButton').setScale(1.2)

        // Declaración de funcionalidades
        /*var editor = "";
        var printText = this.add
            .rexBBCodeText(400,300,"",{
                color:"white",
                fontSize: "70px",
                fontFamily: "Arial",
                fixedWidth: 100,
                valign:"center", 
            })
            .setOrigin(0.5)
            .setInteractive()
            .on(
                "pointerdown",
                function(){
                    editor = this.plugins.get("rextexteditplugin").edit(printText);
                },
                this
            )
            .on("pointerout", function(){});*/
        this.login_next_button.setInteractive().on('pointerdown', () => {
            this.scene.start("Menu");
        })

        }
    }
