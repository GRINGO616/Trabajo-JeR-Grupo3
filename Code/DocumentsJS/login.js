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

        /*var userName;
        var inputText = this.add.rexInputText(310, 160,{
            type: 'textarea',
            text: 'Introduce tu nombre...',
            color: 'black',
            fontSize: '40px',
            valign: 'center',
            fontFamily: "Arial"
        })
            .setOrigin(0.5)
            .on('textchange', function (inputText) {
                printText.text = inputText.text;
            })
            .on('focus', function (inputText) {
                console.log('On focus');
            })
            .on('blur', function (inputText) {
                console.log('On blur');
            })
            .on('click', function (inputText) {
                console.log('On click');
            })
            .on('dblclick', function (inputText) {
                console.log('On dblclick');
            })

        userName = inputText.text;*/

        var printText = this.add.text(310, 160, 'Introduce tu nombre...', {
            color: 'black',
            fontSize: '40px',
            valign: 'center',
            fontFamily: "Arial"
        })
            .setOrigin(0.5)
            .setInteractive()
            .on('pointerdown', function () {
                this.plugins.get('rextexteditplugin').edit(printText);
            }, this);
        
        this.login_next_button.setInteractive().on('pointerdown', () => {
            this.scene.start("Menu");
        })

        }
    }
