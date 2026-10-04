/* =====================================================
   FERCHIS FM
   EDICIÓN VAMPII ❤️
===================================================== */


const audio = document.getElementById("audio");


/* =====================================================
   CANCIONES
===================================================== */

const canciones = [

    {
        archivo: "musica/cancion1.mp3",

        titulo: "Nuestra primera canción 💛",

        mensaje:
            "“Esta canción es para ti, mi niña, porque hay canciones que dejan de ser canciones cuando empiezan a recordarnos a alguien tan especial como tú.” 🥺❤️"
    },

    {
        archivo: "musica/cancion2.mp3",

        titulo: "La canción que me recuerda a mi Ferchis 🌙",

        mensaje:
            "“No sé en qué momento empezó a pasar, pero ahora hay canciones que tienen tu nombre aunque nadie lo haya escrito en ellas.”"
    },

    {
        archivo: "musica/cancion3.mp3",

        titulo: "Si pudiera dedicarte una canción ❤️",

        mensaje:
            "“Si pudiera guardar todo lo que mi corazón siente por ti dentro de una canción, probablemente duraría toda la vida.” 🥺"
    },

    {
        archivo: "musica/cancion4.mp3",

        titulo: "Una canción para mi niña bonita 💛",

        mensaje:
            "“Entre tantas canciones que existen, qué bonito que algunas terminen convirtiéndose en pequeños pedacitos de nosotros.”"
    },

    {
        archivo: "musica/cancion5.mp3",

        titulo: "Cuando tu Vampii piensa en ti 🧛🏻‍♂️❤️",

        mensaje:
            "“Hay canciones que escucho y automáticamente sonrío, porque sin pedir permiso apareces tú en mis pensamientos.”"
    },

    {
        archivo: "musica/cancion6.mp3",

        titulo: "Nuestra canción secreta 🤫❤️",

        mensaje:
            "“Quizá nadie más entienda lo que significa esta canción, pero tú y yo sabemos exactamente por qué está aquí.”"
    },

    {
        archivo: "musica/cancion7.mp3",

        titulo: "Para todas nuestras noches 🌙",

        mensaje:
            "“Para esas noches en las que hablar contigo hace que el tiempo pase demasiado rápido y tu Vampii quisiera que nunca terminara.”"
    },

    {
        archivo: "musica/cancion8.mp3",

        titulo: "La que siempre volvería a escuchar 🥺",

        mensaje:
            "“Así como volvería a elegirte, también volvería a escuchar esta canción todas las veces que fueran necesarias.”"
    },

    {
        archivo: "musica/cancion9.mp3",

        titulo: "Una canción para nuestro futuro 💛",

        mensaje:
            "“Esta todavía no cuenta un recuerdo, pero algún día quiero que podamos escucharla y decir: mira todo lo que hemos vivido.”"
    },

    {
        archivo: "musica/cancion10.mp3",

        titulo: "La última canción de nuestra estación ❤️",

        mensaje:
            "“Y si esta fuera la última canción de la noche, solamente quiero que recuerdes algo: siempre habrá una parte de tu Vampii que va a elegirte.”"
    }

];


let cancionActual = 0;


/* =====================================================
   ELEMENTOS
===================================================== */

const botonSintonizar =
    document.getElementById("sintonizar");

const inicio =
    document.getElementById("inicio");

const disco =
    document.getElementById("disco");

const botonPlay =
    document.getElementById("play");

const botonAnterior =
    document.getElementById("anterior");

const botonSiguiente =
    document.getElementById("siguienteCancion");

const volumen =
    document.getElementById("volumen");

const tituloCancion =
    document.getElementById("tituloCancion");

const dedicatoriaCancion =
    document.getElementById("dedicatoriaCancion");

const ecualizador =
    document.getElementById("ecualizador");

const listaCanciones =
    document.getElementById("listaCanciones");


const barraMusica =
    document.getElementById("barraMusica");

const barraTitulo =
    document.getElementById("barraTitulo");

const barraPlay =
    document.getElementById("barraPlay");

const barraAnterior =
    document.getElementById("barraAnterior");

const barraSiguiente =
    document.getElementById("barraSiguiente");

const barraVolumen =
    document.getElementById("barraVolumen");


/* =====================================================
   CREAR LISTA DE CANCIONES
===================================================== */

function crearListaCanciones() {

    listaCanciones.innerHTML = "";


    canciones.forEach((cancion, indice) => {

        const boton =
            document.createElement("button");


        boton.className =
            "cancion-btn";


        boton.textContent =
            `🎵 ${cancion.titulo}`;


        boton.addEventListener(
            "click",
            function () {

                seleccionarCancion(indice);

            }
        );


        listaCanciones.appendChild(boton);

    });

}


/* =====================================================
   NAVEGACIÓN ENTRE PROGRAMAS
===================================================== */

function mostrarPrograma(numero) {

    const programas =
        document.querySelectorAll(".programa");


    programas.forEach(programa => {

        programa.classList.add("oculto");

    });


    const programa =
        document.getElementById(
            `programa${numero}`
        );


    if (programa) {

        programa.classList.remove("oculto");

    }


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });


    if (numero >= 2) {

        barraMusica.classList.add("visible");

    }

}


/* =====================================================
   SINTONIZAR
===================================================== */

botonSintonizar.addEventListener(
    "click",
    function () {

        botonSintonizar.textContent =
            "SINTONIZANDO... 📻";


        botonSintonizar.style.pointerEvents =
            "none";


        setTimeout(function () {

            inicio.style.display =
                "none";


            mostrarPrograma(1);


            barraMusica.classList.add(
                "visible"
            );


            botonSintonizar.textContent =
                "📻 SINTONIZAR 98.7 FM ♡";


            botonSintonizar.style.pointerEvents =
                "auto";

        }, 1200);

    }
);


/* =====================================================
   CARGAR CANCIÓN
===================================================== */

function cargarCancion(numero) {

    cancionActual = numero;


    const cancion =
        canciones[numero];


    audio.src =
        cancion.archivo;


    tituloCancion.textContent =
        cancion.titulo;


    dedicatoriaCancion.textContent =
        cancion.mensaje;


    barraTitulo.textContent =
        cancion.titulo;


    const botones =
        document.querySelectorAll(
            ".cancion-btn"
        );


    botones.forEach(
        (boton, indice) => {

            boton.classList.toggle(
                "activo",
                indice === numero
            );

        }
    );


    audio.load();

}


/* =====================================================
   REPRODUCIR
===================================================== */

function reproducir() {

    audio.play()

        .then(function () {

            disco.classList.add(
                "girando"
            );


            ecualizador.classList.add(
                "activo"
            );


            botonPlay.textContent =
                "❚❚";


            barraPlay.textContent =
                "❚❚";

        })

        .catch(function (error) {

            console.log(
                "El navegador necesita interacción para reproducir el audio."
            );

            console.log(error);

        });

}


/* =====================================================
   PAUSAR
===================================================== */

function pausar() {

    audio.pause();


    disco.classList.remove(
        "girando"
    );


    ecualizador.classList.remove(
        "activo"
    );


    botonPlay.textContent =
        "▶";


    barraPlay.textContent =
        "▶";

}


/* =====================================================
   SELECCIONAR CANCIÓN
===================================================== */

function seleccionarCancion(numero) {

    cargarCancion(numero);

    reproducir();

}


/* =====================================================
   SIGUIENTE
===================================================== */

function siguienteCancion() {

    cancionActual++;


    if (
        cancionActual >=
        canciones.length
    ) {

        cancionActual = 0;

    }


    cargarCancion(
        cancionActual
    );


    reproducir();

}


/* =====================================================
   ANTERIOR
===================================================== */

function anteriorCancion() {

    cancionActual--;


    if (cancionActual < 0) {

        cancionActual =
            canciones.length - 1;

    }


    cargarCancion(
        cancionActual
    );


    reproducir();

}


/* =====================================================
   PLAY PRINCIPAL
===================================================== */

botonPlay.addEventListener(
    "click",
    function () {

        if (audio.paused) {

            reproducir();

        } else {

            pausar();

        }

    }
);


/* =====================================================
   PLAY BARRA
===================================================== */

barraPlay.addEventListener(
    "click",
    function () {

        if (audio.paused) {

            reproducir();

        } else {

            pausar();

        }

    }
);


/* =====================================================
   SIGUIENTE Y ANTERIOR
===================================================== */

botonSiguiente.addEventListener(
    "click",
    siguienteCancion
);


barraSiguiente.addEventListener(
    "click",
    siguienteCancion
);


botonAnterior.addEventListener(
    "click",
    anteriorCancion
);


barraAnterior.addEventListener(
    "click",
    anteriorCancion
);


/* =====================================================
   VOLUMEN
===================================================== */

function cambiarVolumen(valor) {

    audio.volume =
        parseFloat(valor);


    volumen.value =
        valor;


    barraVolumen.value =
        valor;

}


volumen.addEventListener(
    "input",
    function () {

        cambiarVolumen(
            this.value
        );

    }
);


barraVolumen.addEventListener(
    "input",
    function () {

        cambiarVolumen(
            this.value
        );

    }
);


/* =====================================================
   CUANDO TERMINA UNA CANCIÓN
===================================================== */

audio.addEventListener(
    "ended",
    function () {

        siguienteCancion();

    }
);


/* =====================================================
   CARTAS
===================================================== */

const cartas = {

    1: {

        titulo:
            "Para cuando me extrañes ❤️",

        texto:
`Mi niña bonita...

Si estás leyendo esta carta probablemente en este momento me estés extrañando un poquito.

Y si es así, quiero que cierres los ojos unos segundos y recuerdes que, aunque no esté físicamente a tu lado en ese momento, hay una parte de mi corazón que siempre está cerquita de ti.

A veces me gustaría poder aparecer mágicamente donde estás solamente para abrazarte.

Sin decir nada.

Solamente abrazarte.

De esos abrazos que duran un poquito más de lo normal porque ninguno de los dos quiere soltarse.

Quiero que recuerdes todas esas pequeñas cosas que nos hacen nosotros.

Nuestras conversaciones.

Nuestras risas.

Nuestros momentos.

Las cosas tontas que solamente nosotros entendemos.

Y todas esas veces en las que simplemente hablar contigo hizo que mi día fuera muchísimo mejor.

Ferchis, si algún día me extrañas demasiado, recuerda que tu Vampii también te extraña.

Y recuerda algo todavía más importante:

Te amo.

Te amo de una manera que muchas veces ni siquiera sé explicar.

Y aunque a veces no encuentre las palabras perfectas, quiero que nunca dudes de lo que siento por ti.

Así que cuando me extrañes, piensa en mí sonriendo mientras pienso en ti.

Porque probablemente eso es exactamente lo que está pasando.

Con muchísimo amor,

tu Vampii ❤️`

    },


    2: {

        titulo:
            "Para cuando tengas un día difícil 🌙",

        texto:
`Mi niña...

Si hoy fue un día difícil, quiero que por un momento dejes todo a un lado.

Respira.

No tienes que poder con absolutamente todo al mismo tiempo.

No tienes que estar bien todo el tiempo.

También tienes derecho a cansarte.

También tienes derecho a sentirte triste.

También tienes derecho a decir que hoy simplemente no fue un buen día.

Y si pudiera estar contigo en este momento, probablemente intentaría hacerte sonreír aunque fuera un poquito.

Tal vez te molestaría.

Tal vez te haría alguna tontería.

Tal vez solamente me sentaría contigo y te abrazaría.

Porque a veces no necesitamos que alguien solucione nuestros problemas.

A veces solamente necesitamos saber que no estamos solos.

Y quiero que sepas que tienes a tu Vampii.

No puedo prometerte que voy a poder arreglar absolutamente todo.

Pero sí puedo prometerte que voy a escucharte.

Voy a acompañarte.

Voy a intentar hacerte sentir querida.

Y voy a recordarte todas las veces que sean necesarias que eres una personita increíble.

Así que si hoy fue difícil, mañana será una nueva oportunidad.

Y mientras tanto...

descansa, mi niña bonita.

Permítete respirar.

Permítete recibir cariño.

Y recuerda:

Te amo muchísimo. ❤️

Con todo mi corazón,

tu Vampii 🧛🏻‍♂️❤️`

    },


    3: {

        titulo:
            "Para cuando dudes de cuánto te amo ❤️",

        texto:
`Ferchis...

Si alguna vez llegas a preguntarte cuánto te amo, quiero que vuelvas a esta carta.

Porque quizá nunca exista una cantidad exacta para medir lo que siento por ti.

No podría decirte simplemente cuánto.

No existe un número suficientemente grande.

No existe una palabra suficientemente perfecta.

No existe una canción que pueda guardar todo lo que siento.

Pero sí puedo decirte algo:

Te amo.

Te amo en los días bonitos.

Te amo en los días difíciles.

Te amo cuando estamos riendo.

Te amo cuando estamos hablando durante horas.

Te amo en esos momentos pequeños que probablemente para cualquier otra persona serían insignificantes.

Y te amo por todas esas pequeñas cosas que hacen que seas tú.

Tu forma de ser.

Tu manera de hablar.

Tus ocurrencias.

Tus detalles.

Tus gestos.

Tu manera de hacerme sonreír.

Y simplemente el hecho de saber que existes en mi vida.

No quiero que pienses que tienes que ser perfecta para merecer amor.

No tienes que serlo.

Para mí eres tú.

Y eso es suficiente.

Si algún día dudas, vuelve aquí.

Lee estas palabras.

Y recuerda que hay un Vampii que decidió guardar un pedacito enorme de su corazón con tu nombre.

Te amo, Ferchis.

Muchísimo.

Más de lo que probablemente sé explicar.

Siempre tuyo,

tu Vampii ❤️`

    },


    4: {

        titulo:
            "Para cuando necesites recordar lo nuestro 🥺",

        texto:
`Mi niña bonita...

Quiero que recuerdes que nuestra historia no está hecha solamente de momentos grandes.

Está hecha de pequeños detalles.

De conversaciones.

De risas.

De miradas.

De canciones.

De mensajes.

De recuerdos.

De esos momentos que probablemente nadie más entendería de la misma manera que nosotros.

Y eso es precisamente lo que hace que nuestra historia sea nuestra.

No quiero olvidar ninguna de esas pequeñas cosas.

Quiero guardar cada recuerdo que podamos crear.

Quiero que algún día podamos mirar hacia atrás y decir:

“¿Te acuerdas de esto?”

Y empezar a reírnos.

Quiero más recuerdos contigo.

Más fotografías.

Más canciones.

Más noches hablando.

Más momentos inesperados.

Más historias que contar.

Porque todavía nos faltan muchísimas páginas por escribir.

Y no sé exactamente qué va a pasar mañana.

No sé qué nos espera dentro de unos meses.

No sé qué historias vamos a terminar viviendo.

Pero sí sé algo.

Quiero seguir disfrutando el camino contigo.

Quiero seguir conociéndote.

Quiero seguir descubriendo nuevas razones para admirarte.

Y quiero seguir diciéndote algo que nunca me voy a cansar de decir:

Te amo.

Gracias por formar parte de mi historia.

Y gracias por permitir que yo también forme parte de la tuya.

Con todo mi corazón,

tu Vampii ❤️`

    },


    5: {

        titulo:
            "Para nuestro futuro 💛",

        texto:
`Mi Ferchis...

Esta carta es diferente.

Porque no quiero hablar solamente de lo que ya vivimos.

Quiero hablar de todo aquello que todavía nos falta vivir.

No sé exactamente cómo será nuestro futuro.

Y quizá eso sea lo bonito.

Todavía hay muchísimas cosas que no conocemos.

Lugares que todavía no hemos visitado.

Canciones que todavía no hemos escuchado juntos.

Fotografías que todavía no existen.

Conversaciones que todavía no hemos tenido.

Recuerdos que todavía no hemos creado.

Y eso me emociona.

Porque significa que nuestra historia todavía tiene muchísimo espacio para crecer.

Quiero que algún día podamos mirar todas estas cosas y recordar cómo empezó todo.

Recordar estas canciones.

Esta página.

FERCHIS FM.

La fecha 07 · 09 · 2026.

Y todas esas pequeñas cosas que hoy parecen pequeñas pero que algún día podrían convertirse en recuerdos enormes.

No quiero prometerte un futuro perfecto.

Quiero algo más real.

Quiero seguir construyendo momentos contigo.

Quiero seguir aprendiendo de ti.

Quiero seguir cuidando lo que tenemos.

Quiero seguir riéndome contigo.

Quiero seguir escuchándote.

Quiero seguir diciéndote que eres importante para mí.

Y sobre todo...

quiero que nunca olvides que hay alguien que te mira y piensa:

“Qué bonito que la vida me haya permitido conocerla.”

Ese alguien soy yo.

Tu Vampii.

Y si algún día escuchamos una de estas canciones después de muchísimo tiempo, quiero que podamos sonreír y decir:

“Mira todo lo que vivimos.”

Hasta entonces...

sigamos escribiendo nuestra historia.

Canción por canción.

Recuerdo por recuerdo.

Día por día.

Te amo, mi niña bonita.

Hoy.

Mañana.

Y en todos esos recuerdos que todavía nos faltan.

Con muchísimo amor,

tu Vampii 🧛🏻‍♂️❤️`

    }

};


/* =====================================================
   ABRIR CARTA
===================================================== */

function abrirCarta(numero) {

    const carta =
        cartas[numero];


    if (!carta) {
        return;
    }


    const tituloCarta =
        document.getElementById(
            "tituloCarta"
        );


    const textoCarta =
        document.getElementById(
            "textoCarta"
        );


    const cartaAbierta =
        document.getElementById(
            "cartaAbierta"
        );


    tituloCarta.textContent =
        carta.titulo;


    textoCarta.textContent =
        carta.texto;


    cartaAbierta.classList.remove(
        "oculto"
    );


    document.body.style.overflow =
        "hidden";

}


/* =====================================================
   CERRAR CARTA
===================================================== */

function cerrarCarta() {

    const cartaAbierta =
        document.getElementById(
            "cartaAbierta"
        );


    cartaAbierta.classList.add(
        "oculto"
    );


    document.body.style.overflow =
        "auto";

}


/* =====================================================
   FRECUENCIA SECRETA
===================================================== */

const activarSecreto =
    document.getElementById(
        "activarSecreto"
    );


const mensajeSecreto =
    document.getElementById(
        "mensajeSecreto"
    );


activarSecreto.addEventListener(
    "click",
    function () {

        mensajeSecreto.classList.remove(
            "oculto"
        );


        activarSecreto.textContent =
            "✨ FRECUENCIA ACTIVADA ♡";


        activarSecreto.disabled =
            true;


        activarSecreto.style.opacity =
            "0.5";

    }
);


/* =====================================================
   VOLVER AL INICIO
===================================================== */

function volverAlInicio() {

    pausar();


    const programas =
        document.querySelectorAll(
            ".programa"
        );


    programas.forEach(
        programa => {

            programa.classList.add(
                "oculto"
            );

        }
    );


    inicio.style.display =
        "flex";


    barraMusica.classList.remove(
        "visible"
    );


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* =====================================================
   INICIALIZACIÓN
===================================================== */

crearListaCanciones();


cargarCancion(0);


audio.volume =
    0.5;


volumen.value =
    0.5;


barraVolumen.value =
    0.5;


/* =====================================================
   EVITAR QUE ENTER/SPACE EN CARTAS CAUSE PROBLEMAS
===================================================== */

document.addEventListener(
    "keydown",
    function (evento) {

        if (
            evento.key === "Escape"
        ) {

            const cartaAbierta =
                document.getElementById(
                    "cartaAbierta"
                );


            if (
                !cartaAbierta.classList.contains(
                    "oculto"
                )
            ) {

                cerrarCarta();

            }

        }

    }
);