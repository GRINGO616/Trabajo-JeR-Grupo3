# Trabajo-JeR-Grupo3
Repositorio de GitHub perteneciente al trabajo de Juegos en Red de la URJC del grupo de trabajo Nº3

Nombre del juego: EXPOTION

# Grupo 03

Benítez Vicente, Sergio - s.benitez.2017@alumnos.urjc.es

Galán Castillo, Raúl - r.galan.2017@alumnos.urjc.es

Olaya Maciá, Pedro - p.olaya.2018@alumnos.urjc.es

Ortuño Guisado, Lucía - l.ortuno.2017@alumnos.urjc.es 

Cuenta en GitHub: GRINGO616 - Repositorio: GRINGO616/Trabajo-JeR-Grupo3

Enlace a Trello: https://trello.com/b/DfmTVe1f/juegos-en-red-grupo-3


# HISTORIA DE VERSIONES

Con el propósito de analizar los diferentes cambios que va sufriendo el proyecto que supone Expotion, a lo largo de su desarrollo, es conveniente establecer cada uno de los cambios que se van generando en las diferentes versiones. De esta forma, esta parte del documento mantendrá una continua actualización.

Versión 0.0: idea del propio videojuego, puesta en común por todo el equipo de desarrollo, además de la elaboración del propio documento de diseño del videojuego.

Versión 0.5: diferentes logos del propio videojuego y fuentes de inspiración para el estilo y diseño del mismo.

Versión 0.9: implementación local del videojuego con un solo nivel.

Versión 1.0: implementación local del videojuego con los dos niveles propuestos.

Versión 1.5: implementación con conexión y el uso de API REST para el funcionamiento de un login.

Versión 1.8: implementación del modo de juego online cooperativo, uso de WebSockets para la transmisión de datos y mejoras finales.


#PRE-REQUISITOS

Al tratarse de un videojuego que se realiza dentro de los navegadores y ser un juego local, actualmente solo se precisaría de un navegador y los archivos HTML, CSS y JavaScript del videojuego. Una vez que se tengan todos se debe de ejecutar el proyecto a través de algún compilador como puede ser Visual Code.

# INTRODUCCIÓN AL VIDEOJUEGO

De forma general, es oportuno poder dejar explicado todo tipo de orientaciones e ideas que puede presentar Expotion. Con este propósito, cualquier usuario que consulte el documento de diseño obtendría una idea general del título, sin necesidad de tener ningún tipo de avance visual. 

Antes de continuar con el proyecto, Expotion se contempla como una versión similar al videojuego ya existente conocido como Overcooked. Teniendo este título como principal referencia, se trata de generar un homenaje, en la medida de lo posible, dentro de la asignatura de Juegos en Red para el grado de Diseño y Desarrollo de Videojuegos de la Universidad Rey Juan Carlos.

#  2.1- Concepto del juego
 
Expotion está concebido como un videojuego para navegador en el cual se realiza una tarea cooperativa entre dos jugadores con el fin de conseguir el máximo número de puntuación posible dentro de un tiempo determinado. Ambos jugadores interpretarán dos magos estudiantes de la Universidad Seudo Invisible de Magia, que deben de gestionar la creación y venta de pócimas, con el fin de mantener a flote su lugar de estudios.

La Universidad Seudo Invisible de Magia se ha visto sumida en una catastrófica situación por la que todos los docentes han desaparecido en extrañas circunstancias. Cuatro de los estudiantes más aventajados deberán coger las riendas del negocio que ha mantenido a flote la universidad: la venta de pócimas. Ya sea por la increíble adicción de los habitantes de Sejismondia a ellas o por sus diferentes usos en el ámbito sanitario, han sido el estandarte de la universidad desde siempre y los cuatro protagonistas deberán descubrir información del paradero de sus profesores mientras mantienen a flote el edificio.

# 2.2- Características principales

Planteado como un juego de navegador, Expotion tiene muy claro los límites que puede alcanzar y hasta dónde puede llegar a desarrollarse. Razón de esto es que queden bastante claras las características que hace único a este videojuego.

Cooperación: la principal clave que se quería fomentar a través de Expotion era el juego en cooperativo. Utilizando las habilidades de los dos personajes que pueden verse por pantalla, se consigue una mayor agilidad y velocidad para poder ejecutar los objetivos, algo esencial conseguir una puntuación mayor.

Destreza: aunque la cooperación es importante, la medida de los tiempos y la realización de las tareas en el orden adecuado va a ser crucial para conseguir cuanto antes los objetivos individuales, mezclando perfectamente la rapidez con la habilidad, en lo que se engloba como destreza dentro del juego.

Humor: desde la historia inicial, hasta el aspecto general que pueda presentar el título se observa un continuo tono jocoso. Sobrellevar un título con unas mecánicas sencillas y un estilo más desenfadado y lleno de humor, suele hacer mucho más llevadera la experiencia de los jugadores.

Estrategia: ante el planteamiento de diferentes niveles con algunas adversidades para ellos, establecer un plan de actuación puede ser crucial. No solamente la destreza y cooperar va a ser importante, sino analizar el espacio que se da en cada momento puede ser determinante para la victoria.

Expansión: comenzando como un concepto bastante primario, Expotion puede llegar a expandirse hasta varios límites, ya sea con un aumento en el desarrollo de niveles como diferentes modos que pueden llegar a implementarse.

El cómputo global de todas estas características puede generar una increíble mezcla que llegue a gustar a más de uno, ya que puede generar muchas horas de diversión entre amigos y diferentes maneras de afrontar el mismo problema. Para los tiempos de la actualidad, el poder jugar con amigos desde la casa de cada uno, es uno de los principales fuertes de los videojuegos más populares y si, además, lo acompañas con diversidad y humor, obtienes una importante apuesta.

# 2.3- Géneros

Aunque las mecánicas y funcionamiento del título puedan resultar muy sencillos, se puede clasificar su género como una mezcla de tres ya existentes. Expotion no llega a verse influenciado al 100% de ninguno de estos géneros, pero va rescatando detalles importantes para obtener una mezcla que casa muy bien.

Arcade: las mecánicas principales del título y la forma en la que se desarrollan las partidas son completamente fundamentadas por los arcades más clásicos, ya que presentan una puntuación y un ritmo rápido, ante partidas muy delimitadas por el tiempo que está corriendo. El mero hecho de solo contar con las habilidades iniciales y no haber ningún tipo de mejora, más allá de la habilidad del jugador, hace que se asemeje muchísimo a los clásicos de los videojuegos.

Puzles: cogido un poco más de soslayo, cuando los niveles llegan a complicarse tanto o las recetas son muy laboriosas, es importante mantener un correcto tratamiento de los ingredientes de las pociones y un orden adecuado, ya que de lo contrario no se consigue ejecutar el objetivo principal. Esto casa muy bien con el género de puzles, por el hecho que hace pensar constantemente en la forma de realizar las tareas en el orden concreto, aunque deba hacerse de una forma más rápida que en otros títulos.

Estrategia: la distribución de los niveles, teniendo en cuenta las adversidades, y el mero hecho de existir una cooperación, va a generar que se deban de gestionar bien los espacios y lo recursos. Una correcta efectividad en la labor de cada individuo y una estrategia de trabajo en equipo será crucial para poder conseguir el éxito en el nivel, teniendo en cuenta las características de la zona en la que se encuentren los jugadores para sacar el máximo provecho.

Es cierto que Expotion podría tener otro tipo de clasificación, en función al tipo de criterio que se utilice, pero centrándose en la forma en la que se ejecuta y el jugador va a interaccionar con él, han sido estos tres géneros lo que resumen perfectamente la experiencia del título. Si se fundamenta la clasificación en aspectos más visuales o técnicos, podría haber otros nombres en esa lista, pero el objetivo es valorar el criterio de la jugabilidad frente al resto.

# 2.4- Propósito y público objetivo

Sea el que sea el videojuego que se quiere realizar, muchas veces el propósito principal que se busca es el entretenimiento. Con Expotion no va tan desencaminada la situación, ya que el hecho de mezclar un estilo vistoso y colorido, con un estilo de juego más cooperativo y un desenfreno de niveles, se consigue enganchar al jugador, con el objetivo de superarse cada vez más, como se hacía en los inicios de las recreativas.

Analizando correctamente las características del título, no se puede decir que el público objetivo sean todas las edades. Es verdad que cualquier jugador podría echar una partida al título y divertirse, pero para poder disfrutar de toda la experiencia y entender algunas de las cosas que se intentan transmitir con la historia, sería conveniente una clasificación por edad para mayores de 7 años. Como se ha especificado, la razón principal para ello es el entendimiento general de todo el título, aunque pueda ser jugador por cualquier tipo de jugador y disfrutado por igual. Los controles es otro aspecto que permite una gran accesibilidad, ya que las mecánicas son capaces de controlarse por los cuatro botones de movimiento y dos botones de acción, algo que permite una gran apertura a nuevos jugadores que no sean tan habilidosos en el mundo de los videojuegos.

Tanto si eres un jugador que echa pocas horas, como un jugador que juega mucho, Expotion puede ser tu videojuego. Habrá jugadores que quieran despejarse y echar una rápida partida con amigos, mientras que otros simplemente quieran perfeccionarse para conseguir las mejores marcas en los niveles. Para un caso como para el otro Expotion es una buena elección, ya que el objetivo principal es poder llegar a todo jugador que quiera pasar un rato divertido con sus amigos.

# 2.5- Jugabilidad general

El propósito principal del videojuego de Expotion es hacer que los jugadores vayan realizando pócimas dentro de una zona en concreto y precisen de su cooperación para poder conseguir la máxima puntuación posible. Dejando de lado los posibles modos de juego que pueda haber, todos los niveles van a ser diferentes, ya que la realización de pócimas para los protagonistas deberá realizarse en diferentes laboratorios de magos, cada uno de ellos con sus trampas o sus adversidades climáticas, que lo dificultarán.

A pesar de todo ello, cada jugador presentará las mismas habilidades o actividades, siendo de relativa importancia conocerlas para poder completar correctamente el nivel. Enlistando cada una de ellas quedan las siguientes:

Movilidad: a través de las cuatro direcciones del teclado, el jugador será capaz de moverse a lo largo del mapa para realizar las diferentes tareas que tiene que hacer.
Cortar, batir, mezclar y coger ingredientes: con el uso de tan solo dos botones, el jugador podrá coger los ingredientes, batirlos en el caldero oportuno, mezclarlos entre sí o manipularlos de un lado a otro, con el fin de poder pasarlos al otro jugador o preparar las pócimas que el nivel pida.

Listado de pócimas y sus ingredientes: a medida que el tiempo va pasando, en la parte superior de la pantalla aparece un listado de las pócimas que deben ir preparándose para conseguir más puntuación. Normalmente no tiene un final, ya que el objetivo es conseguir el máximo número de puntos posibles.

Trampas y obstáculos de la zona: para impedir que los jugadores consigan su objetivo, en las zonas diversas en las que se juegue habrá elementos que puedan entorpecer el camino hacia el objetivo de realizar las pócimas. Ya sea con trampas que enlentecen o pozos que deben ser rodeados, cada zona tendrá algunas peculiaridades que servirán como un aumento de la dificultad para ir observando el progreso.

Puntuación y tiempo: según se vayan realizando las pócimas en el tiempo estipulado se conseguirán más o menos cantidad de puntos. Todo transcurre a contrarreloj por lo que cuanto antes se consiga una pócima, más puntos generará para el cómputo global del nivel. Cada vez que termine la partida se realizará un recuento de todos los puntos obtenidos en el tiempo estipulado y se clasificará con un ranking entre 1 a 3 estrellas en función de lo obtenido.

Todo esto resume la parte jugable que presentará Expotion en el momento de jugar a cualquier nivel, mientras que la navegación por las interfaces se realizará a través de un control sencillo por ratón. No obstante, las modalidades que tendrá el propio título se irán conformando y avanzando a lo largo del desarrollo del mismo, empezando con un modo arcade, donde se elige el nivel a jugar y se realiza para conseguir una puntuación, y un modo historia en construcción para conocer todo lo que tiene para contar Expotion.

# 2.6- Estilo visual

Planteando una visión isométrica de la zona en la que está transcurriendo la acción y teniendo en cuenta el equipo del que se dispone, Expotion se presentará con un estilo bastante influenciado por el pixel art y los diseños simples. Con el fin de enfocarlo todo desde un punto de vista humorístico, se establecerán colores bastante llamativos y momentos bastante surrealistas, teniendo en cuenta también que todo transcurre en un lugar donde existe la magia.

Con el fin de conseguir un mejor acabado, las intersecciones entre niveles que tengan que ver con un avance en la posible historia o diálogos entre los personajes, serán llevados a cabo en un estilo un poco más detallado, ya que se tratan de escenas no tan centradas en el gameplay del título.

# 2.7- Alcance

Debido a la formación de un equipo de desarrollo más centrado en la programación que en el apartado artístico, el objetivo primordial es conseguir un título jugable y efectivo con unas mecánicas lo más pulidas posibles. En primera instancia, teniendo en cuenta las diferentes entregas del proyecto, se plantea implementar un modo arcade con varios niveles para elegir y un modo historia a modo de early access con unos pocos niveles y algo de historia de Expotion.

Según avance el desarrollo del videojuego será posible encontrar otros frentes que se puedan explorar, pero con este primer contacto, el objetivo será éste que, aunque algo ambicioso, puede dar un interesante resultado. No obstante, ya se han pensado ideas para expandir la experiencia del videojuego, como una inclusión de un modo para hasta cuatro jugadores, un modo competitivo por equipos o individual y más niveles del modo historia.


# MECÁNICAS DE JUEGO		

Aunque algunos de los conceptos básicos de las mecánicas y aspectos técnicos del título han quedado ya especificados, será conveniente indagar un poco más en ellos, analizando la forma en la que se buscará implementar todos los detalles. Uno de los pilares fundamentales de Expotion es la jugabilidad, ya que su atractivo principal es la habilidad de los jugadores y su posible cooperación. 

Indagar en las mecánicas primordiales del juego y en las posibilidades que tienen los jugadores en función del lugar donde se encuentren, siempre es interesante para poder hacerse una concepción inicial. No solo se indagará ahí, sino que este documento mantendrá una actualización constante con ideas nuevas, debido a la facilidad para ello del título.

# 3.1- Jugabilidad por niveles

Con el fin de explicar un poco cómo transcurre cada una de las partidas que se pueden ejecutar dentro de Expotion, será conveniente analizar cada uno de los componentes que pueden encontrarse en ellas. Uniéndolo con la historia que trata de narrar el título, se dará una cohesión mayor para cada uno de los elementos que se analizan.

Niveles o laboratorios: dentro de la Universidad Seudo Invisible de Magia existen diferentes zonas donde se pueden realizar las pócimas que tanta fama han dado al edificio y tanto sustento monetario han garantizado. Los protagonistas de Expotion deberán de realizar sus tareas como creadores de pócimas en estos diferentes laboratorios, debido principalmente a que en cada uno de ellos será posible la realización de ciertas recetas u otras. Junto con las pócimas posibles, también cambia la peligrosidad y los obstáculos que puede haber, ya que según se avanza en el juego, la habilidad para moverse por los laboratorios y para realizar las tareas deberá ser mayor.

Enfoque cooperativo: normalmente todos los laboratorios están planteados para que se pueda trabajar con dos integrantes. De esta forma, existe una división clara en cada uno para que la cooperación sea algo esencial, pudiendo ir cambiando los roles en cualquier momento que se precie o a petición de los jugadores. Con esto se plantea un modo de juego más coordinado, de forma que con el esfuerzo de un único individuo no se pueda conseguir la victoria.

Peticiones exponenciales: según comienza un nivel existe una zona de la pantalla con la lista de comandas de pócimas que se van solicitando. En función de la velocidad de los jugadores, esta lista puede ir acumulando más y más pócimas, que tienen un tiempo para ser preparadas. Así, el jugador mantiene una presión constante, ya que según se va avanzando el tiempo aumentan estas comandas y si no es capaz de servirlas en su tiempo estipulado, la puntuación del equipo se verá afectada. 

Gestión de recursos: es verdad que los recursos de los que dispondrán los jugadores van a ser ilimitados, pero ocuparán un espacio en los laboratorios. Si no se gestionan bien, deberán de desecharlos, algo que puede afectar negativamente a la puntuación final para ellos. Esto genera que deba de mantenerse un control de lo que se usa y lo que no para poder llevar mejor los puntos.

Puntuación final: como forma de superación personal, al final de cada nivel la puntuación obtenida por ejecutar todas las tareas correctamente deberá evaluarse. Si consigue encontrarse dentro de unos límites se otorgarán estrellas de puntuación, con un máximo de 3. De esta forma, se incentiva al jugador a poder mejorarse a sí mismo, ya que si no se consiguen al menos 2 estrellas no se puede avanzar en el modo historia, mientras que al conseguir 3 estrellas se consiguen desbloquear secretos y otros ítems más enfocados en el coleccionismo.

Esquema de dificultad progresiva: aunque existen dos modos de juego, habrá una dificultad progresiva en su realización por niveles. Si se escoge la opción más arcade, la dificultad del nivel es siempre la misma, pero si se decide usar el modo historia, aunque presentan los mismos niveles, la forma de mostrar las nuevas adversidades al jugador serán diferentes. En un primer lugar se conseguirá presentar el nuevo nivel, tras ello se realizará algún contacto con las nuevas adquisiciones para el nivel y que el jugador se familiarice y una vez que todo esto se ha realizado, vuelve a haber una dificultad progresiva del nivel en concreto, ya que comienza el reto.


Todos estos elementos configuran la jugabilidad, en su totalidad, de Expotion, ya que se ha concebido como un proyecto más pequeño. No obstante, con las capacidades de expansión que puede llegar a presentar, podría obtener algunas mejoras en el futuro o incluso más elementos de jugabilidad, que no se pensaron en un inicio.

# 3.2- Flujo de juego

Los caminos que puede llegar a seguir un jugador cuando trata de iniciar Expotion pueden ser diferentes, en función de las opciones que se escojan. El mero hecho de que existan tres tipos de modos de juego para el título hace que haya una parte común entre todos ellos, para las interfaces iniciales, mientras que para el caso de cada modo se seguirá un camino diferente. 

Nada más comenzar la aplicación, el jugador se encontrará con una animación que presenta el estudio encargado del videojuego y tras ello un mensaje que solicita el nombre de usuario. Una vez terminada esta parte, se inicializa, acompañándose de música e imágenes, la interfaz del menú inicial con las opciones de “modo arcade”, “modo historia”, “controles”, “ajustes” y “salir”. Según la opción que elija cada jugador ocurrirán las siguientes acciones:

Modo arcade: en este modo de juego se elegirá uno de los niveles jugables, dentro del modo historia, y se realizará una partida directamente, sin ningún tipo de introducción de mecánicas, para que los dos jugadores que cooperan intenten conseguir la máxima puntuación posible. Simula perfectamente el estilo de juego de una recreativa, ya que simplemente se juega la partida y se obtiene una puntuación. Lo primero que harán los jugadores es elegir su personaje, entre las cuatro opciones y después elegir el nivel en el que jugarán. Una vez que se acabe la partida, aparece una pantalla con el recuento de la puntuación que han cosechado los dos jugadores y coloca en el ranking su puntuación. Después de esto último se despide con un “Fin de la partida” y devuelve al menú principal.

Modo historia: se trata del modo en el que se intentará introducir a los jugadores y explicar lo que pasa en toda la historia de Expotion. Al tratarse de una versión en early access solo contendrá tres niveles de la historia con sus correspondientes diálogos, ya que la estructura de este modo es sencilla: cinemáticas estáticas de diálogos entre los protagonistas, nivel jugable y diálogos al final del nivel entre los protagonistas. No obstante, antes de empezar por la historia, cada jugador tendrá que elegir a su personaje jugable entre cuatro opciones. Hay que recordar que el nivel en modo historia, como se anunció previamente, tendrá una estructura de escalabilidad de dificultad. Se comenzará con la explicación del nivel, se seguirá con unas pequeñas comandas para adaptarse al nivel y se terminará con el nivel completo. De esta forma se garantiza una correcta adaptación al gameplay del título, una vez ha terminado el nivel, pudiendo pulirlo mejor en el modo arcade o reiniciando el nivel. Es importante recordar que si no se consigue la puntuación adecuada, se deberá repetir el nivel hasta entonces, determinándolo con un mensaje de “Has fallado”. Cuando se falla el nivel aparecen dos opciones: salir al menú o reintentar, mientras que cuando se consigue una victoria, aparecen las opciones de continuar, reintentar o salir al menú principal. Una vez que se han terminado los tres niveles del early access se anuncia que llegará una versión mejorada y se vuelve al menú principal.

Controles: para esta opción se ha optado por una pantalla en la que aparece un ajuste de controles, indicando los controles del jugador y la posibilidad de cambiarlos de configuración.

Ajustes: un apartado más centrado a las opciones del propio título, ya sea la música, el brillo de la pantalla o el lenguaje en el que se quiera jugar, dando opciones de español o inglés.

Salir: como indica la propia opción se sale del juego, apareciendo una imagen del logo del equipo de desarrollo y dando las gracias por probar el juego. Tras esto último la ventana se cierra.

Se puede comprobar una estructura bastante sencilla y un progreso muy esquematizado, para facilitar la comprensión del jugador. Con el avance del desarrollo es posible que puedan llegar más opciones, aunque mientras tanto estas son las que se tienen en cuenta. Más adelante se analizará el flujo del videojuego a través de un diagrama de estados, especificando todas las posibilidades de una forma más visual.

# 3.3- Personajes

Aunque el juego contará con cuatro personajes jugables, como los estudiantes protagonistas del título, es importante remarcar que todos ellos presentan las mismas habilidades. Básicamente la elección de uno u otro solo será un mero elemento estético, dando algo de diversidad entre los posibles jugadores que habrá. No solo habrá estos personajes, sino que al final del early access aparecerán otros personajes como enemigos que solo entorpecerán el progreso de los jugadores. Para analizar correctamente cada tipo de personaje se desglosarán, en función de su papel en la historia.

Protagonistas: para la historia de Expotion se tendrán como protagonistas cuatro estudiantes aventajados de la Universidad Seudo Invisible de Magia, los cuales deberán de sacar a flote al edificio ante la desaparición de sus profesores y la entrada en pánico del resto de sus compañeros. Cada uno de ellos es igual de habilidoso y capaz que el resto por lo que las únicas diferencias que presentan son su aspecto y su nombre. Para todo lo demás, los cuatro protagonistas ejecutarán y tendrán las mismas habilidades, no obteniendo ninguna ventaja por elegir a uno u otro.

Lysha: se trata de una de las estudiantes más inteligentes de toda la universidad y, aunque tuvo un poco de temor por tomar el control de la creación de pociones, junto con el ánimo de sus tres compañeros echó el valor necesario para ser una clara referente. Se caracteriza por llevar una vestimenta de hechicero roja.

Freddie: uno de los estudiantes más despreocupados de toda la universidad, pero que cuando hay que trabajar es el primero que se ofrece a echar una mano. No destaca por su intelecto, pero sí por su perseverancia en las cosas que le importan. Está caracterizado por llevar ropajes no tan elegantes de magia y de unas tonalidades verdes.

Mary Anne: el ojito derecho de todos los profesores de la universidad, razón de más para querer ayudar en todo lo que puede. A veces ha pecado de ser un tanto pesada con los profesores, pero ahora tendrá que demostrar más que nunca que necesitan su ayuda. Para caracterizarse utiliza ropajes muy estilizados y de color amarillo, algo que demuestra su marcado propósito de llamar la atención.

Ricko: siempre que hay un problema, Ricko está ahí. No cabe duda de que se trata de uno de los estudiantes más valerosos de toda la universidad, queriendo ser siempre el centro de atención y el valeroso mago que salvará a todo el mundo que lo necesite, velando por los débiles. Se presenta con colores morados y unos ropajes de héroe, o por lo menos que él considera héroe.

Enemigos: existe una fuerza mayor que está detrás de todo este problema que envuelve a la universidad, pero no se llega a conocer a fondo en este early access. A pesar de ello, sí que se observa al final del tercer nivel unos enemigos encapuchados, como si pertenecieran a una secta que tratan de impedir que los protagonistas consigan su objetivo. Se les conoce como acólitos y, aunque no se revele en esta versión del videojuego, se tratan de los súbditos de una refinería de pócimas que existe en Sejismondia y que ha sido uno de los principales competidores de la universidad. Bautizada como AnkyPotions, han contratado a un importante hechicero que parece estar detrás de todo esto y que no parará hasta dejar en jaque a la Universidad Seudo Invisible. Todo enemigo que aparezca en los niveles será considerado como una trampa más del propio escenario, ya que no se podrá hacer nada para combatirlo, simplemente sumarlo a la ecuación para generar pócimas más deprisa o esquivarlos.

Como se trata de un juego con una tonalidad tan arcade, se puede comprobar como no es necesario de tanta interacción entre los personajes principales y los enemigos. Al final, todo resulta meramente narrativo, no influyendo mucho más en el propio gameplay del videojuego, que puede llegar a ser uno de los principales atrayentes para los jugadores.

# 3.4- Movimiento y físicas

Expotion se plantea como un videojuego de visión isométrica en la que se puede observar toda la zona de trabajo del nivel desde el inicio. Los jugadores no deberán interaccionar con otros personajes, sino que deberán interaccionar con los ingredientes y las herramientas de trabajo para generar las pócimas. Esto plantea que las acciones que realiza el jugador con los personajes se resuman en:

Moverse por el escenario a través del uso de las teclas de dirección, las cuales pueden modificarse en ajustes. 

Coger y dejar objetos con el botón de acción 1, que estará por defecto en la tecla Z, aunque se puede modificar.

Cortar ingredientes con el botón de acción 2, que estará por defecto en la tecla X, aunque se puede modificar.

Mezclar ingredientes en los calderos con el botón de acción 2, que estará por defecto en la tecla X, aunque se puede modificar.

Usar objetos de la zona con el botón de acción 2, que estará por defecto en la tecla X, aunque se puede modificar.

Realizar sprint para llegar cuanto antes a cualquier dirección, manteniendo pulsado la tecla de CTRL IZQUIERDO y una dirección de movimiento, aunque se puede modificar.
No son necesarias más interacciones entre el jugador y el nivel jugable de Expotion. A pesar de todo esto, los menús y las interfaces serán controladas a través del ratón del ordenador.

# INTERFAZ

Cuando se plantea un videojuego, siempre existe un esquema que debe de seguirse para ir pasando de un lugar a otro. Se pueden referir a ellos como estados de juego, teniendo en cuenta las diferentes circunstancias por las que va a pasar el proyecto. No solo se tratará de los niveles jugables que presenta el título, sino también hay que tener en cuenta todas las posibles pantallas con las que el jugador podrá interaccionar.

En puntos anteriores han quedado mostrado los diferentes estados que va a poder experimentar el jugador cuando está navegando por el videojuego. Para ofrecer un primer vistazo a lo que se encontrará, será importante hacer un acercamiento a grandes rasgos, analizando cada uno de los elementos que conforman la estructura del videojuego.

# 4.1- Diagrama de flujo

A través del siguiente esquema, se puede observar cómo podrá ir navegando el jugador a lo largo del videojuego. Según las decisiones y casillas que vaya marcando, se irá yendo por una interfaz o por otra, llegando a veces a alcanzar el mismo camino o los mismos lugares.

De esta forma, se engloban las diferentes interfaces que puede visitar el jugador cuando se encuentra arrancando el proyecto. No obstante, cada una de ellas debe de quedar explicada de forma exhaustiva, con el fin de conocer las opciones en cada una de ellas.

# 4.2- Logo del estudio

Cuando cualquier jugador comienza una partida nueva en Expotion lo primero que va a ver nada más arrancarlo será una animación con el logo del equipo encargado de ellos. Esto sirve como carta de presentación para que el propio usuario conozca al estudio detrás de todo el proyecto que se ha realizado. No presenta ningún momento de interacción con el usuario, solo dejando que ocurra y luego continúa con la siguiente interfaz.

# 4.3- Selección de nombre

Antes de poder empezar a desarrollar cualquier tipo de partida será importante llevar un registro del nombre que va a usar el usuario. Por esta razón, justo después de comenzar con la presentación del estudio encargado, la aplicación solicita el nombre al usuario, de forma que luego pueda reconocerse en el propio juego compartido.
De esta forma, se obtiene el primer momento de comunicación entre el usuario y el videojuego, solicitando que se escriba el nombre que va a usar dentro del recuadro que queda marcado.

# 4.4- Menú principal

Llega la primera interfaz donde existirá más libertad para el propio usuario. Utilizando el propio ratón para seleccionar una opción u otra existirán varias opciones, como quedaron previamente detalladas. Eligiendo cada una de ellas, el jugador se trasladará a otra interfaz centrada en el propósito que define el propio botón. Si se escoge la opción de salir, será posible volver a ver el logo del estudio, es decir, una interfaz que ya se vio, y la aplicación se cerrará, mientras que en el resto de las opciones se permanece en la aplicación.

# 4.5- Controles

Es preciso poder adaptar el videojuego a todo tipo de jugador. De esta forma, existe una opción para que cada uno de los jugadores que ejecute el videojuego sea capaz de adaptar los controles a sus gustos. Con esta interfaz, donde aparecen cada uno de los botones y la acción que realizan, el usuario podrá modificarlo a su gusto, tan solo seleccionándolo y cambiándolo por el que prefieran. Para esta interfaz, las opciones del usuario se quedan reducidas a cambiar los controles y volver al menú principal, pulsando para esto último el botón de volver.

# 4.6- Ajustes

Otra de las opciones que puede tener el jugador una vez que se encuentra en el menú principal será los ajustes. En ellos será posible adecuar un poco más las condiciones audiovisuales del videojuego para que el jugador se encuentre más cómodo. Se da opción de poder tener la música activada o no, además de ajustar el propio brillo del videojuego o el idioma en el que se quiera jugar. La última opción viable, al igual que en controles, será la vuelta al menú principal.

# 4.7- Selección de personajes

Tanto si el jugador decide ir al modo arcade como al modo historia, deberá elegir con qué personaje quiere jugar. En dicha interfaz se presenta una imagen del personaje con una breve descripción y su posición en la historia del juego. Con unas flechas se puede ir cambiando de personaje para poder ver a los cuatro posibles que hay. Desde aquí, el jugador podrá volver al menú, si decide elegir otra opción o salir, y podrá, una vez que ha escogido a su personaje, jugar una partida.

# 4.8- Selección de niveles

Continuando con las escenas comunes entre los dos modos de videojuego se encuentra la selección de niveles. Tanto en uno como en otro se irán actualizando los niveles en función se vayan desbloqueando dentro del propio modo historia, por lo que si no se han jugado en el modo historia no aparecerán en el modo arcade. En la interfaz aparecerá una imagen del nivel, describiéndolo, con el nombre del nivel y la opción de seleccionarlo. Una vez que se ha escogido se marca la opción de jugar y se empieza el nivel.

# 4.9- Nivel

Aquí se encuentra la jugabilidad máxima del título, donde el jugador podrá poner en funcionamiento las teclas con las que moverá al personaje, realizando las acciones que vayan surgiendo para el progreso del nivel. El jugador podrá mover al personaje por la zona jugable, pero podrá ver también las comandas que deberá realizar, la puntuación y el tiempo que queda para que termine el nivel.

# 4.10- Pantalla victoria

Este tipo de pantalla solo se podrá ver en el modo historia, ya que se exige una puntuación para poder obtener la victoria, es decir, dos o tres estrellas. De esta forma, se muestran las estrellas conseguidas con el número de puntuación y diferentes posibilidades que tiene el jugador. Las tres opciones que tendrá serán: volver al menú principal, continuar con el modo historia o reintentar el nivel para buscar más puntuación.

# 4.11- Pantalla derrota

Se trata de otra interfaz que solo se verá en el modo historia, por la misma razón que la interfaz previa de la importancia de obtener una u otra puntuación. Para este caso, el jugador no podrá continuar en la historia, mientras que solo se le permite reintentar el nivel en el que se ha quedado o volver al menú principal. Al igual que en el caso anterior, aparecerá la puntuación y las estrellas que se han obtenido, siendo como máximo una.

# 4.12- Recuento de puntos

La única interfaz que será exclusiva del modo arcade, ya que, para el otro modo, aunque también es determinante la puntuación, no se determina el progreso de una historia. En dicha pantalla se observará un ranking de la puntuación que hay en el nivel escogido, además de la posición que han ocupado los dos jugadores que están jugando en línea.

# 4.13- Sala de espera
Esta interfaz ha sido de las últimas en ser implementadas. Es una interfaz única del modo online y la encontraremos tras introducir nuestro nombre y contraseña en la pantalla de login. Tras eso el jugador accede a esta sala donde esperará a que otro jugador online sea conectado a su misma partida. El juego no dará comienzo hasta que ambos jugadores no estén listos, algo que pueden indicar pulsando el botón de “listo” que se encuentra debajo del personaje. Una vez se cumpla esta condición dará comienzo la partida, se mostrará la pantalla de carga y a continuación la pantalla del nivel.

# DISEÑO AUDIOVISUAL

Expotion es un videojuego concebido por un equipo de desarrollo que no presenta grandes aptitudes en el ámbito artístico de los videojuegos. De esta forma, una de las opciones que se barajó para el mismo era un arte simple y fácil de manejar, ya que realizar un juego en red bajo el motor de Phaser era algo nuevo para todos y la simplicidad ayuda a familiarizarse mejor con un entorno nuevo.

No obstante, es importante remarcar todos los aspectos audiovisuales y el estilo que va a presentar el título, para que se pueda conocer un poco el público al que puede ir dirigido. El mero hecho de no contar con un buen equipo artístico no debe impedir la realización de una idea, ya que uno mismo puede mejorar en otros aspectos o adaptarlos.

# 5.1- Estilo visual

Con el propósito de facilitar las cosas, el estilo que se va a utilizar va a ser sin duda el de arte en 2D. Mucho más sencillo que el hecho de modelar cualquier tipo de figuras, además de que se trata de un juego en navegador, siendo mucho más manejable este tipo de arte. Si debe de definirse algún estilo dentro de este tipo de arte, el pixelart es una de las opciones más sencillas y que trabajadores menos familiarizados con el arte pueden abordar mejor.

De esta forma, el videojuego se presentará como una forma más familiar y cartoon, permitiendo el humor que desprende desde la base de su narrativa. Tanto los personajes como los escenarios rebosarán colorido, ya que no trata de mostrar una parte oscura del mundo en el que transcurre sino diversión y acercamiento a los jugadores.

Una vez que se inicializa la partida, el jugador obtendrá una visión completa del nivel, visto desde arriba. De esta forma, se puede ver la forma en la que está distribuido el nivel, dando lugar a una opción para que el jugador pueda establecer una estrategia de acción desde un primer momento en el que está jugando.

# 5.2- Audio

Para este tipo de juegos, en los que predomina mucho lo arcade, será bastante relevante la música que lo acompañe. Tanto es así, que muchos han recordado por mucho tiempo algunas melodías de los juegos clásicos, incentivando mucho más a los jugadores a seguir jugando. De esta razón surge la idea de establecer una música interesante para el propio Expotion, que se asemeje bastante a la temática, pero también al estilo.

Reuniendo todas las ideas en mente, el estilo musical escogido para el videojuego será algo similar a la música de los juglares de épocas medievales, pero con un filtro similar al de la música de 8bit. De esta forma no se deja de lado el estilo medieval y de magia, además de incluir el estilo visual dentro de la propia música. Lo planeado para el título será la realización de dos o tres melodías, siendo una para los menús y las otras destinadas a los niveles jugables.

Como se puede observar, no existirán efectos de sonido ni grabaciones de voces. Todos los diálogos serán sustituidos por ruidos similares a una voz y aparecerán los textos de los mismos a través de la pantalla. Utilizando esta herramienta se le da más importancia a los hilos musicales que al resto de los efectos sonoros.

# API-REST UTILIZADAS

Con el objetivo de poder compartir información entre cliente y servidor por una posible conexión en red, se ha decidido usar este tipo de tecnologías para poder realizar un login. De esta forma, usando Spring Boot se ha podido elaborar el levantamiento de un servidor para el videojuego, que más tarde ha sido enlazado. Para poder gestionarlo se han dividido los recursos de la forma correcta, con su parte estática y su parte de servidor, creando 3 documentos .java para el levantamiento del servidor.

- Player.java : se trata de una clase que va a servir como constructor de las variables Player, de forma que contengan como variables internas un nombre, un password y una variable "date", que almacena la "fecha", en milisegundos, en la que se ha hecho la última petición al servidor, además de todas las funciones de getters y setters que requiere la clase.

- PlayerController.java: será la clase que se va a encargar de gestionar los métodos encargados de peticiones HTTP con el servidor que afecten a la clase Player, definiéndose, también, como manejador.

- DemoApplication.java: a través de esta clase se lanza el servidor con el que se van a realizar las peticiones de servicio de conexión.

Teniendo como objetivo, esquematizar un poco más todo, se concretará todo esto a través de un UML para observar las relaciones que hay entre estas clases.

# WEBSOCKETS

Para la adaptación de nuestro juego a multijugador online se ha utilizado una transmisión de datos entre clientes y con el servidor a través de websockets.
Esto lo conseguimos con una nueva clase, WebSocketEchoHandler. A través de esta clase, se gestionaran todas las sesiones que se unan al servidor y el intercambio de mensajes entre ellas. Este actuará como listener de los mensajes que se envíen y de cuando se abren o cierran sesiones, actuando de manera diferente en cada situación.

- afterConnectionEstablished: esta función es la encargada de registrar las nuevas sesiones que se inician vinculadas en este servidor. Almacenará la sesión en una lista de sesiones activas que se identificaran por su id y además se le vinculara a un grupo, ya que las partidas son por parejas.

- afterConnectionClosed: se encarga de sacar de la lista de sesiones activa a aquella que esta desconectándose. Además, la sesión que este vinculada a esta por que pertenezcan al mismo grupo será avisada de que su compañero se ha desconectado para que se le saque de la partida.

- handleTextMessage: será la función encargada de actuar como listener de los mensajes que se envían, los codificará a json y se los transmitirá a otra función (sendOtherParticipants), la cual encontramos en el mismo WebSocketEchoHandler.java, para que el mensaje sea enviado a la sesión con la que está vinculado.

Teniendo como objetivo, esquematizar un poco más todo, se concretará todo esto a través de un UML para observar las relaciones que hay entre estas clases: 


# EJECUCIÓN DE LA APLICACIÓN

Debido a que nos encontramos frente a un juego en red, el establecimiento de algunas APIs REST puede ser fundamental para el funcionamiento de la conexión y el intercambio de datos. A través de la fase 3 de la asignatura se ha decidido implementar un tipo de API REST centrada en las actividades relacionadas con el login de usuario dentro de Expotion. Por esta sencilla razón, el juego debe de seguir una serie de pasos para poder llegar a ejecutarse, teniendo en mente que nuestra aplicación para desarrollar el juego ha sido Visual Code.

1- Ejecutar el programa de Visual Code e importar el proyecto.

2- Entrar dentro de archivo DemoApplication.java y comenzar a correr el servidor, para que pueda estar funcionando una vez que se comience el juego. 

3- Escoger el elemento index.html y ejecutar el juego, de forma que aparecerá en el navegador que el usuario tenga por defecto.

4- Disfrutar del videojuego.

Un apunte que se quiere dejar claro es que el juego es tolerante a fallos, ya que, aunque surgen errores por consola con el servidor, nunca van a interrumpir la ejecución del videojuego.

# MEJORAS IMPLEMENTADAS EN LA FASE 5

Respecto a la fase cinco tuvimos en cuenta una lista de mejoras que fuimos acumulando a lo largo de las diferentes fases, teniendo en cuenta peticiones que nos sugerían las personas que probaban el juego o referencias que tomábamos de nuestros compañeros.

Pero antes de empezar a hacer esas mejoras, hicimos cambios en el código del juego para arreglar bugs como que se podían coger ingredientes mientras se estaban cortando. Esto provocaba una desincronización ya que cuando acababa el tiempo de cortar se volvía a guardar ese objeto ahora cortado en el bolsillo pero no te dejaba dejarlo en ningún sitio ni hacer nada con él. Esto se vio solucionado poniendo una condición de que solo podías coger objetos si habías terminado de cortar.

En segundo lugar se reorganizó todo el flujo de escenas para que fuese más intuitivo para el jugador, llevando al jugador al menú principal nada más empezar el juego y ya a partir de ahí dejándole total libertad de navegar por las escenas.

Otro cambio que se realizo fue desarrollar nuevos botones para las nuevas interfaces o algunas ya existentes en el que los botones no dejaban claro a que escena te llevaban.
Además se ha ajustado el tiempo de las comandas para que no saliesen tan rápido ya que podía saturar al jugador.

Por último se han añadido nuevas interfaces según las necesidades del proyecto, como la sala de espera en el caso de jugar online, el login para identificar al jugador de manera única y la pantalla de error para notificar al jugador que se le va a redirigir a la pantalla de inicio.

# FUTURAS MEJORAS A IMPLEMENTAR

Aun habiendo hecho algunas mejoras para la fase 5, ha quedado una amplia lista de aspectos a mejorar para que el juego sea lo más cómodo e intuitivo para los usuarios.

Lo primero serían mejoras de optimización que permitirían que el juego se ejecutase más fluidamente. Esto lo conseguiríamos refactorizando el código, haciendo así que no haya fragmentos del código repetidos y evitando así posibles errores en zonas puntuales y haciéndolo más entendible. Por otra parte, los niveles en vez de estar montados directamente en el código, los guardaríamos en un archivo json que sería leído al principio de la ejecución y montaría el escenario con todos los objetos de manera más óptima.

A nivel de mecánicas, se querían hacer algunas implementaciones. La primera seria la incorporación de powerups que permitiesen al jugador andar más rápido, cortar más rápido o poder llevar más de un objeto en el inventario.

Por otro lado queríamos poner un tiempo límite de realización de comandas, forzando así al jugador a priorizar unas con respecto a otras.

Por último se querían hacer algunas mejoras a nivel visual. Por ejemplo, hacer una barra de progreso en la carga de recursos, de esta manera permitimos al usuario saber cuántos recursos lleva cargados y cuanto le queda. Además de añadir nuevos sprites de personajes y dejar que el jugador seleccione el que más le guste.

# EQUIPO DE DESARROLLO

Una cosa ha quedado clara a lo largo del documento acerca del apartado visual del propio título y es que no cuenta con un equipo que tenga grandes aptitudes en él. Todo el equipo que conforma Aim High Studios son perfiles de la industria de los videojuegos más destinados a la programación, por lo que puede ser que otros aspectos queden un poco más descolgados.

A pesar de la realidad, uno de los objetivos importantes establecidos para conseguir que Expotion se pueda llevar a cabo ha sido la perseverancia y la renovación en los conocimientos, de forma que se amplíen horizontes entre los integrantes del equipo. Por esta razón, se ha buscado establecer claramente los apartados en los que van a trabajar cada uno de ellos, además de en la programación que era algo claro, intentando mejorar individualmente y con ayuda del equipo entero.

Con el propósito de aclararlo mejor, se ha decidido establecer una matriz de multifuncionalidad con los apartados básicos para el videojuego de Expotion. De esta forma se observan los puntos fuertes de cada uno y algunos en los que hay una aptitud más baja y que pretende seguirse mejorando, en pos del proyecto.

Al final del proyecto, el objetivo de todos será conseguir grandes aptitudes en todos los campos que se han marcado, además de establecer un gran proyecto para la asignatura de Juegos en Red, que no deja de ser el principal objetivo.

# BIBLIOGRAFÍA

El Documentalista Audiovisual. Documentación en Videojuegos: Documento de diseño (GDD). El Documentalista Audiovisual. 2015. Disponible online en: https://eldocumentalistaudiovisual.com/2015/02/06/documentacion-en-videojuegos-documento-de-diseno-gdd/

Saltares D. Sion Tower. Documento de diseño. 2010. Disponible online en: https://eldocumentalistaudiovisual.files.wordpress.com/2015/02/gdd.pdf
Ryan T. The Anatomy of a Design Document, Part 1: Documentation Guidelines for the Game Concept and Proposal. Gamasutra. 1999. Disponible online en: https://www.gamasutra.com/view/feature/3384/the_anatomy_of_a_design_document_.php

Manual del Game Designer. Design Document (GDD).  Manual del Game Designer. 2014. Disponible online en: http://manualdelgamedesigner.blogspot.com/2014/08/design-document-gdd.html

# RECURSOS DE LIBRE ACCESO USADOS

Con el fin de poder obtener un correcto uso de los elementos que hemos encontrado de otros artistas que los dejan libres de acceso, hemos decidido modificarlos en cierta manera para que no queden tal cual. A continuación se dejan enlaces directos a los elementos utilizados de base y luego modificados.

RELOJ DE ARENA 
https://www.pngkey.com/detail/u2q8q8w7t4t4o0i1_sand-clock-svg-png-icon-free-download-hourglass/

MURO
https://www.pixilart.com/art/dungeon-tileset-91dcf397b84d654

ALA DE MURCIÉLAGO
https://es.vexels.com/png-svg/vista-previa/202513/icono-de-dibujos-animados-de-ala-de-murcielago

POCIÓN VERDE 
https://www.kindpng.com/imgv/ixxowTh_zelda-potion-bottle-drawing-hd-png-download/

HOJA VERDE
https://www.pngkit.com/bigpic/u2w7y3u2r5y3o0a9/

ESTANTERÍA
https://seminecraftgratuit.blogspot.com/2019/08/make-pixel-art.html

PUERTA
https://www.pinterest.es/pin/283163895305825926/?amp_client_id=CLIENT_ID(_)&mweb_unauth_id=&amp_url=https%3A%2F%2Fwww.pinterest.es%2Famp%2Fpin%2F283163895305825926%2F&amp_expand=true

PERGAMINO
https://es.123rf.com/photo_21233700_old-cartoon-pergamino-ilustración-vectorial.html

CAJAS
https://www.pinterest.es/pin/574068283735760242/

SUELO
https://bepxl.art/2020/03/16/texturas-pixel-art/

CALDERO
https://twitter.com/duckbearlab/status/1094279786464247808

POCIÓN MORADA
https://ageofmagicgame.fandom.com/wiki/Level_and_Experience_Potions

BARRAS DE PROGRESO
https://es.clipdealer.com/vector/media/A:86375486

LIBRO ABIERTO
https://www.dreamstime.com/pixel-art-design-bit-retro-icon-opened-closed-book-dark-background-image157429343

PREPARADO
https://www.dlf.pt/ddetail/hRToih_bowl-of-rice-cartoon-hd-png-download/

CUCHILLO
https://roobs.artstation.com/projects/rgdZO

EFECTOS DE SONIDO
https://mixkit.co/free-sound-effects/

TEXTURA DE CUERO
https://www.freepik.es/fotos-premium/fondo-textura-cuero-marron-oscuro-superficie-transparente-alta-resolucion_6564939.html

PÓCIMA MORADA++
https://www.google.com/search?q=659BC07C-E83E-11E9-BE85-F00384B3E742&tbm=isch&ved=2ahUKEwiC-r_Z79DtAhVIexoKHcQVDlUQ2-cCegQIABAA&oq=659BC07C-E83E-11E9-BE85-F00384B3E742&gs_lcp=CgNpbWcQA1DPygFYz8oBYIngAWgAcAB4AIABnAGIAZwBkgEDMC4xmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=yyLZX8LoJ8j2acSruKgF&bih=942&biw=917&client=opera-gx#imgrc=6a6asCjgpdf_KM

PÓCIMA NARANJA
https://www.pngkey.com/maxpic/u2q8e6r5u2e6t4u2/

PÓCIMA VERDE++
https://ar.pinterest.com/pin/581457001883421009/

FOSO
https://www.pinterest.es/pin/15692298681653507/

PARED DE BACKGROUND
https://www.redbubble.com/es/people/stevenfholmes/works/27821328-paredes-del-castillo-de-pixel-art