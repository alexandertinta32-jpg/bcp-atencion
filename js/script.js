/* ========================================================= */
/* BCP - SISTEMA DE ATENCIÓN */
/* ========================================================= */


/* ========================================================= */
/* BASE DE DATOS DE DNI DE PRUEBA */
/* ========================================================= */

/*
    Esta base funciona de manera local.

    No necesita API.
    No necesita token.
    No necesita Internet.

    Puedes agregar más clientes siguiendo este formato:

    "DNI": "NOMBRE COMPLETO"
*/

const baseDNI = {

    "70592043": "ALEXANDER TINTA TORRES",
    "61106445": "EVELIN DIAZ AGUILAR",
    "10293847": "CARLOS EDUARDO MENDOZA SILVA",
    "29384756": "ANA MARIA GUTIERREZ RAMOS",
    "38475610": "JORGE LUIS VASQUEZ CASTRO",
    "47561029": "SOFIA SOLEDAD TORRES AGUILAR",
    "56102938": "FERNANDO GABRIEL RUIZ MORALES",
    "61029384": "VALERIA BEATRIZ DELGADO CABRERA",
    "70192837": "MIGUEL ANGEL CORTEZ ESPINOZA",
    "89012345": "LUCIA ESPERANZA VARGAS FLORES",
    "90123456": "DIEGO ANDRES NAVARRO RIVERA",
    "12345098": "CAMILA FERNANDA ROJAS GUERRERO",
    "23450987": "ROBERTO JOSE CHAVEZ MEDINA",
    "34509876": "PATRICIA ISABEL BENITEZ ORTIZ",
    "45098765": "ALEJANDRO MATIAS CAMPOS SALAZAR",
    "50987654": "ELENA BEATRIZ SOTO PAREDES",
    "67891234": "GABRIEL IGNACIO PALACIOS SUAREZ",
    "78912345": "DANIELA CONSTANZA VEGA RIOS",
    "89123456": "RICARDO JAVIER MEJIA BRAVO",
    "91234567": "NATALIA PAOLA CISNEROS PEÑA",
    "13579246": "SANTIAGO ESTEBAN FUENTES VILLANUEVA",
    "24680135": "ANDREA VERONICA BUSTAMANTE MIRANDA",
    "35791357": "HUGO ALBERTO VALENZUELA CONTRERAS",
    "46802468": "MARIANA BELEN ACOSTA BARRERA",
    "57913579": "MANUEL ENRIQUE SANDOVAL OROZCO",
    "68024680": "CLAUDIA ROXANA REYES FIGUEROA",
    "79135791": "SEBASTIAN TOMAS PACHECO ZUNIGA",
    "80246802": "GLORIA MERCEDES SALINAS CARDENAS",
    "91357913": "ADRIAN LEANDRO ROSALES BUSTOS",
    "14725836": "PAULA ALEJANDRA ESCUDERO MOLINA",
    "25836914": "GONZALO MARTIN LEIVA VALDES",
    "36914725": "LORENA VANESSA VILLALOBOS TAPIA",
    "47025836": "CRISTIAN OMAR DUARTE MARIN",
    "58136947": "MONICA PATRICIA CORONEL AVALOS",
    "69247058": "ESTEBAN MAURICIO SALAZAR GUZMAN",
    "70358169": "CECILIA ALONDRA SANTOS PONCE",
    "81469270": "RAUL ALFREDO CEPEDA ZAMORA",
    "92570381": "BEATRIZ ELIZABETH VERA GALLARDO",
    "15926374": "ALVARO NICOLAS CÁRDENAS MONTERO",
    "26037485": "XIMENA ALEJANDRA PINO ARANEDA",
    "37148596": "IVAN RODRIGO HURTADO BECERRA",
    "48259607": "SILVIA CRISTINA BARRIOS CARRASCO",
    "59360718": "MAURICIO FABIAN SEPULVEDA HENRIQUEZ",
    "60471829": "LILIANA ROCIO CARVAJAL LARA",
    "71582930": "CESAR AUGUSTO SOTELO AGUIRRE",
    "82693041": "DIANA MARCELA NIETO LOPEZ",
    "93704152": "LEONARDO GASTON SOLIS PAREDES",
    "18273645": "REBECA SUSANA BARRAGAN SANDOVAL",
    "29384710": "OSCAR DANIEL PRIETO MONTOYA",
    "30495821": "KARLA ELENA MANRIQUEZ TRUJILLO",
    "41506932": "MARCO ANTONIO GALLEGOS VILLEGAS",
    "52617043": "ROSARIO MONSERRAT VALLADARES ARCE"
    

};



/* ========================================================= */
/* CONSULTAR DNI EN BASE LOCAL */
/* ========================================================= */

async function consultarDNI(dni) {

    console.log("========================================");
    console.log("CONSULTA DNI LOCAL");
    console.log("DNI:", dni);
    console.log("========================================");


    /*
        Simulamos una pequeña espera
        para que se sienta como una consulta real.
    */

    await new Promise(
        resolve => setTimeout(resolve, 500)
    );


    const nombre =
        baseDNI[dni];


    /* ================================================= */
    /* DNI NO ENCONTRADO */
    /* ================================================= */

    if (!nombre) {

        console.warn(
            "DNI NO ENCONTRADO"
        );


        return {

            success: false,

            type: "not_found",

            message:
                "El DNI no fue encontrado en la base de datos."

        };

    }


    /* ================================================= */
    /* DNI ENCONTRADO */
    /* ================================================= */

    console.log(
        "DNI ENCONTRADO:",
        nombre
    );


    /*
        Intentamos separar el nombre
        para mantener la misma estructura
        que tenías con la API.
    */

    const partes =
        nombre.split(",");


    let nombres = "";
    let apellidoPaterno = "";
    let apellidoMaterno = "";


    if (partes.length >= 2) {

        const apellidos =
            partes[0].trim();

        nombres =
            partes.slice(1)
                .join(",")
                .trim();


        const apellidosSeparados =
            apellidos.split(/\s+/);


        apellidoPaterno =
            apellidosSeparados[0] ||
            "";


        apellidoMaterno =
            apellidosSeparados
                .slice(1)
                .join(" ");

    }
    else {

        nombres =
            nombre;

    }


    return {

        success: true,

        nombre: nombre,

        nombres: nombres,

        apellidoPaterno:
            apellidoPaterno,

        apellidoMaterno:
            apellidoMaterno,

        numero: dni

    };

}



/* ========================================================= */
/* VARIABLES */
/* ========================================================= */

let tipoAtencion = "";

let operacionSeleccionada = "";

let sedeSeleccionada = "";

let fechaSeleccionada = "";

let horarioSeleccionado = "";

let nombreCliente = "";

let dniCliente = "";

let consultaTexto = "";



/* ========================================================= */
/* FUNCIÓN PARA OBTENER ELEMENTOS */
/* ========================================================= */

function elemento(id) {

    return document.getElementById(id);

}



/* ========================================================= */
/* CAMBIAR DE PANTALLA */
/* ========================================================= */

function mostrarPantalla(idPantalla) {

    const pantallas =
        document.querySelectorAll(".screen");


    pantallas.forEach(
        pantalla => {

            pantalla.classList.remove(
                "active"
            );

        }
    );


    const pantalla =
        elemento(idPantalla);


    if (pantalla) {

        pantalla.classList.add(
            "active"
        );


        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }

}



/* ========================================================= */
/* ANIMACIÓN DE ERROR */
/* ========================================================= */

function animarError(elementoError) {

    if (!elementoError) {

        return;

    }


    elementoError.classList.remove(
        "input-error"
    );


    /*
        Fuerza al navegador a reiniciar
        la animación.
    */

    void elementoError.offsetWidth;


    elementoError.classList.add(
        "input-error"
    );

}



/* ========================================================= */
/* MOSTRAR ERROR DEL DNI */
/* ========================================================= */

function mostrarErrorDni(mensaje) {

    const error =
        elemento("dni-error");


    const input =
        elemento("dni");


    if (error) {

        error.textContent =
            mensaje;


        animarError(error);

    }


    if (input) {

        animarError(input);

        input.focus();

    }

}



/* ========================================================= */
/* LIMPIAR ERROR DEL DNI */
/* ========================================================= */

function limpiarErrorDni() {

    const error =
        elemento("dni-error");


    const input =
        elemento("dni");


    if (error) {

        error.textContent = "";

    }


    if (input) {

        input.classList.remove(
            "input-error"
        );

    }

}



/* ========================================================= */
/* DNI */
/* ========================================================= */

const dniInput =
    elemento("dni");


const dniError =
    elemento("dni-error");


const continuar =
    elemento("continuar");



if (dniInput) {

    dniInput.addEventListener(
        "input",
        function () {

            /*
                Solo números.
            */

            this.value =
                this.value.replace(
                    /\D/g,
                    ""
                );


            limpiarErrorDni();

        }
    );

}



/* ========================================================= */
/* CONTINUAR DNI */
/* ========================================================= */

if (continuar) {

    continuar.addEventListener(
        "click",
        async function () {

            const dni =
                dniInput
                    ? dniInput.value.trim()
                    : "";


            /* =========================================== */
            /* VALIDACIÓN LOCAL */
            /* =========================================== */

            if (
                !/^\d{8}$/.test(dni)
            ) {

                mostrarErrorDni(
                    "Ingresa un DNI válido de 8 dígitos."
                );

                return;

            }



            /* =========================================== */
            /* EVITAR DOBLE CLIC */
            /* =========================================== */

            continuar.disabled =
                true;


            const textoOriginal =
                continuar.textContent;


            continuar.textContent =
                "Consultando...";



            /* =========================================== */
            /* CONSULTAR BASE LOCAL */
            /* =========================================== */

            const resultado =
                await consultarDNI(dni);



            /* =========================================== */
            /* VOLVER A ACTIVAR BOTÓN */
            /* =========================================== */

            continuar.disabled =
                false;


            continuar.textContent =
                textoOriginal;



            /* =========================================== */
            /* ERROR */
            /* =========================================== */

            if (!resultado.success) {

                mostrarErrorDni(
                    resultado.message
                );

                return;

            }



            /* =========================================== */
            /* GUARDAR DATOS */
            /* =========================================== */

            dniCliente =
                resultado.numero ||
                dni;


            nombreCliente =
                resultado.nombre ||
                "Cliente";



            /* =========================================== */
            /* SALUDO */
            /* =========================================== */

            const saludo =
                elemento("saludo");


            if (saludo) {

                saludo.textContent =
                    `¡Hola, ${nombreCliente}!`;

            }



            /* =========================================== */
            /* IR A ATENCIÓN */
            /* =========================================== */

            mostrarPantalla(
                "pantalla-atencion"
            );

        }
    );

}



/* ========================================================= */
/* FUNCIÓN PARA QUITAR SELECCIONES */
/* ========================================================= */

function limpiarSeleccion(container) {

    if (!container) {

        return;

    }


    const opciones =
        container.querySelectorAll(
            ".opcion"
        );


    opciones.forEach(
        opcion => {

            opcion.classList.remove(
                "selected"
            );

        }
    );

}



/* ========================================================= */
/* VENTANILLA */
/* ========================================================= */

const ventanilla =
    elemento("ventanilla");


if (ventanilla) {

    ventanilla.addEventListener(
        "click",
        function () {

            tipoAtencion =
                "ventanilla";


            operacionSeleccionada =
                "";


            mostrarPantalla(
                "pantalla-ventanilla"
            );

        }
    );

}



/* ========================================================= */
/* PLATAFORMA */
/* ========================================================= */

const plataforma =
    elemento("plataforma");


if (plataforma) {

    plataforma.addEventListener(
        "click",
        function () {

            tipoAtencion =
                "plataforma";


            operacionSeleccionada =
                "";


            mostrarPantalla(
                "pantalla-plataforma"
            );

        }
    );

}



/* ========================================================= */
/* OTRA CONSULTA */
/* ========================================================= */

const otraConsulta =
    elemento("otra-consulta");


if (otraConsulta) {

    otraConsulta.addEventListener(
        "click",
        function () {

            tipoAtencion =
                "otra";


            operacionSeleccionada =
                "otra-consulta";


            mostrarPantalla(
                "pantalla-otra-consulta"
            );

        }
    );

}



/* ========================================================= */
/* VENTANILLA - OPERACIONES */
/* ========================================================= */

const opcionesVentanilla =
    document.querySelectorAll(
        ".opcion-ventanilla"
    );


opcionesVentanilla.forEach(
    opcion => {

        opcion.addEventListener(
            "click",
            function () {

                limpiarSeleccion(
                    elemento(
                        "opciones-ventanilla"
                    )
                );


                this.classList.add(
                    "selected"
                );


                operacionSeleccionada =
                    this.id;


                /*
                    Pasamos directamente
                    a selección de sede.
                */

                setTimeout(
                    () => {

                        mostrarPantalla(
                            "pantalla-sede"
                        );

                    },
                    180
                );

            }
        );

    }
);



/* ========================================================= */
/* PLATAFORMA - OPERACIONES */
/* ========================================================= */

const opcionesPlataforma =
    document.querySelectorAll(
        "#pantalla-plataforma .opcion"
    );


opcionesPlataforma.forEach(
    opcion => {

        opcion.addEventListener(
            "click",
            function () {

                limpiarSeleccion(
                    elemento(
                        "pantalla-plataforma"
                    )
                );


                this.classList.add(
                    "selected"
                );


                operacionSeleccionada =
                    this.id;


                setTimeout(
                    () => {

                        mostrarPantalla(
                            "pantalla-sede"
                        );

                    },
                    180
                );

            }
        );

    }
);



/* ========================================================= */
/* OTRA CONSULTA - TEXTO */
/* ========================================================= */

const consulta =
    elemento("consulta");


const contadorPalabras =
    elemento("contador-palabras");


if (consulta) {

    consulta.addEventListener(
        "input",
        function () {

            let texto =
                this.value.trim();


            if (texto === "") {

                if (contadorPalabras) {

                    contadorPalabras.textContent =
                        "0 / 400 palabras";

                }


                consultaTexto =
                    "";


                return;

            }


            let palabras =
                texto.split(/\s+/);


            /* ========================================== */
            /* MÁXIMO 400 PALABRAS */
            /* ========================================== */

            if (
                palabras.length > 400
            ) {

                palabras =
                    palabras.slice(
                        0,
                        400
                    );


                this.value =
                    palabras.join(" ");

            }


            consultaTexto =
                this.value.trim();


            if (contadorPalabras) {

                contadorPalabras.textContent =
                    palabras.length +
                    " / 400 palabras";

            }

        }
    );

}



/* ========================================================= */
/* CONFIRMAR OTRA CONSULTA */
/* ========================================================= */

const confirmarConsulta =
    elemento(
        "confirmar-consulta"
    );


if (confirmarConsulta) {

    confirmarConsulta.addEventListener(
        "click",
        function () {

            const texto =
                consulta
                    ? consulta.value.trim()
                    : "";


            if (texto === "") {

                const error =
                    elemento(
                        "consulta-error"
                    );


                if (error) {

                    error.textContent =
                        "Escribe tu consulta antes de continuar.";


                    animarError(error);

                }


                return;

            }


            consultaTexto =
                texto;


            tipoAtencion =
                "otra";


            operacionSeleccionada =
                "otra-consulta";


            mostrarPantalla(
                "pantalla-sede"
            );

        }
    );

}



/* ========================================================= */
/* SELECCIÓN DE SEDE */
/* ========================================================= */

const opcionesSede =
    document.querySelectorAll(
        ".opcion-sede"
    );


opcionesSede.forEach(
    sede => {

        sede.addEventListener(
            "click",
            function () {

                document
                    .querySelectorAll(
                        ".opcion-sede"
                    )
                    .forEach(
                        s => {

                            s.classList.remove(
                                "selected"
                            );

                        }
                    );


                this.classList.add(
                    "selected"
                );


                sedeSeleccionada =
                    this.dataset.sede ||
                    this.querySelector(
                        ".opcion-titulo"
                    )?.textContent.trim() ||
                    "";


                setTimeout(
                    () => {

                        mostrarPantalla(
                            "pantalla-fecha"
                        );


                        cargarFechas();

                    },
                    180
                );

            }
        );

    }
);



/* ========================================================= */
/* CARGAR FECHAS */
/* ========================================================= */

function cargarFechas() {

    const contenedor =
        elemento("fechas");


    if (!contenedor) {

        return;

    }


    contenedor.innerHTML =
        "";


    fechaSeleccionada =
        "";


    horarioSeleccionado =
        "";


    actualizarBotonContinuar();


    const hoy =
        new Date();


    /*
        Mostramos los siguientes
        7 días.
    */

    for (
        let i = 0;
        i < 7;
        i++
    ) {

        const fecha =
            new Date(hoy);


        fecha.setDate(
            hoy.getDate() + i
        );


        const diaSemana =
            fecha.toLocaleDateString(
                "es-PE",
                {
                    weekday: "short"
                }
            );


        const diaNumero =
            fecha.getDate();


        const mes =
            fecha.toLocaleDateString(
                "es-PE",
                {
                    month: "short"
                }
            );


        const boton =
            document.createElement(
                "button"
            );


        boton.type =
            "button";


        boton.className =
            "fecha";


        /* =========================================== */
        /* FECHA LOCAL */
        /* =========================================== */

        const año =
            fecha.getFullYear();


        const mesNumero =
            String(
                fecha.getMonth() + 1
            ).padStart(
                2,
                "0"
            );


        const diaNumeroFormato =
            String(
                fecha.getDate()
            ).padStart(
                2,
                "0"
            );


        boton.dataset.fecha =
            `${año}-${mesNumero}-${diaNumeroFormato}`;


        boton.dataset.dia =
            fecha.getDay();


        boton.innerHTML = `

            <span class="fecha-dia">
                ${diaSemana}
            </span>

            <span class="fecha-numero">
                ${diaNumero}
            </span>

            <span class="fecha-mes">
                ${mes}
            </span>

        `;


        boton.addEventListener(
            "click",
            function () {

                document
                    .querySelectorAll(
                        ".fecha"
                    )
                    .forEach(
                        f => {

                            f.classList.remove(
                                "selected"
                            );

                        }
                    );


                this.classList.add(
                    "selected"
                );


                fechaSeleccionada =
                    this.dataset.fecha;


                const dia =
                    Number(
                        this.dataset.dia
                    );


                cargarHorarios(
                    dia
                );


                actualizarBotonContinuar();

            }
        );


        contenedor.appendChild(
            boton
        );

    }

}



/* ========================================================= */
/* CARGAR HORARIOS */
/* ========================================================= */

function cargarHorarios(
    diaSemana
) {

    const contenedor =
        elemento("horarios");


    const informacion =
        elemento("horario-info");


    if (!contenedor) {

        return;

    }


    contenedor.innerHTML =
        "";


    horarioSeleccionado =
        "";


    /*
        Domingo = 0
        Lunes = 1
        Martes = 2
        Miércoles = 3
        Jueves = 4
        Viernes = 5
        Sábado = 6
    */

    let horaInicio =
        9;


    let horaFin =
        18;



    /* =============================================== */
    /* SÁBADO */
    /* =============================================== */

    if (
        diaSemana === 6
    ) {

        horaFin =
            13;

    }



    /* =============================================== */
    /* DOMINGO */
    /* =============================================== */

    if (
        diaSemana === 0
    ) {

        if (informacion) {

            informacion.textContent =
                "La sede no atiende los domingos.";

        }


        actualizarBotonContinuar();


        return;

    }



    /* =============================================== */
    /* INFORMACIÓN */
    /* =============================================== */

    if (informacion) {

        informacion.textContent =
            diaSemana === 6

                ? "Atención los sábados de 09:00 a 13:00."

                : "Atención de lunes a viernes de 09:00 a 18:00.";

    }



    /* =============================================== */
    /* HORARIOS CADA 15 MINUTOS */
    /* =============================================== */

    for (
        let minutos =
            horaInicio * 60;

        minutos <
            horaFin * 60;

        minutos += 15
    ) {

        const hora =
            Math.floor(
                minutos / 60
            );


        const minuto =
            minutos % 60;


        const horaTexto =
            String(hora)
                .padStart(
                    2,
                    "0"
                );


        const minutoTexto =
            String(minuto)
                .padStart(
                    2,
                    "0"
                );


        const horario =
            `${horaTexto}:${minutoTexto}`;


        const boton =
            document.createElement(
                "button"
            );


        boton.type =
            "button";


        boton.className =
            "horario";


        boton.textContent =
            horario;


        boton.dataset.hora =
            horario;


        boton.addEventListener(
            "click",
            function () {

                document
                    .querySelectorAll(
                        ".horario"
                    )
                    .forEach(
                        h => {

                            h.classList.remove(
                                "selected"
                            );

                        }
                    );


                this.classList.add(
                    "selected"
                );


                horarioSeleccionado =
                    this.dataset.hora;


                actualizarBotonContinuar();

            }
        );


        contenedor.appendChild(
            boton
        );

    }

}



/* ========================================================= */
/* BOTÓN CONTINUAR FECHA + HORARIO */
/* ========================================================= */

const continuarHorario =
    elemento(
        "continuar-horario"
    );


function actualizarBotonContinuar() {

    if (!continuarHorario) {

        return;

    }


    const listo =
        fechaSeleccionada !== "" &&
        horarioSeleccionado !== "";


    continuarHorario.disabled =
        !listo;

}



if (continuarHorario) {

    continuarHorario.addEventListener(
        "click",
        function () {

            if (
                !fechaSeleccionada ||
                !horarioSeleccionado
            ) {

                return;

            }


            generarTicket();

        }
    );

}



/* ========================================================= */
/* GENERAR NÚMERO DE TICKET */
/* ========================================================= */

function generarNumeroTicket() {

    const numero =
        Math.floor(
            Math.random() * 99
        ) + 1;


    const numeroTexto =
        String(numero)
            .padStart(
                2,
                "0"
            );


    if (
        tipoAtencion ===
        "ventanilla"
    ) {

        return "V" +
            numeroTexto;

    }


    return "P" +
        numeroTexto;

}



/* ========================================================= */
/* FORMATEAR FECHA */
/* ========================================================= */

function formatearFecha(
    fecha
) {

    if (!fecha) {

        return "-";

    }


    const partes =
        fecha.split("-");


    if (
        partes.length !== 3
    ) {

        return fecha;

    }


    return `${partes[2]}/${partes[1]}/${partes[0]}`;

}



/* ========================================================= */
/* OBTENER MOTIVO DE LA VISITA */
/* ========================================================= */

function obtenerMotivoVisita() {

    /* =============================================== */
    /* VENTANILLA */
    /* =============================================== */

    if (
        tipoAtencion ===
        "ventanilla"
    ) {

        switch (
            operacionSeleccionada
        ) {

            case "depositos":

                return "Depósitos";


            case "retiros":

                return "Retiros";


            case "giros":

                return "Giros nacionales";


            case "cambio-moneda":

                return "Cambio de moneda";


            default:

                return "Ventanilla";

        }

    }



    /* =============================================== */
    /* PLATAFORMA */
    /* =============================================== */

    if (
        tipoAtencion ===
        "plataforma"
    ) {

        const opcion =
            elemento(
                operacionSeleccionada
            );


        if (opcion) {

            const titulo =
                opcion.querySelector(
                    ".opcion-titulo"
                );


            if (titulo) {

                return titulo
                    .textContent
                    .trim();

            }

        }


        return "Plataforma";

    }



    /* =============================================== */
    /* OTRA CONSULTA */
    /* =============================================== */

    if (
        tipoAtencion ===
        "otra"
    ) {

        const texto =
            consultaTexto ||

            (
                consulta
                    ? consulta.value.trim()
                    : ""
            );


        if (texto) {

            return (
                "Otra consulta: " +
                texto
            );

        }


        return "Otra consulta";

    }


    return "-";

}



/* ========================================================= */
/* GENERAR TICKET */
/* ========================================================= */

function generarTicket() {

    /* =============================================== */
    /* NÚMERO */
    /* =============================================== */

    const numeroTicket =
        generarNumeroTicket();


    const ticketNumero =
        elemento(
            "numero-ticket"
        );


    if (ticketNumero) {

        ticketNumero.textContent =
            numeroTicket;

    }



    /* =============================================== */
    /* CLIENTE */
    /* =============================================== */

    const ticketNombre =
        elemento(
            "ticket-nombre"
        );


    if (ticketNombre) {

        ticketNombre.textContent =
            nombreCliente ||
            "Cliente";

    }



    /* =============================================== */
    /* DNI */
    /* =============================================== */

    const ticketDni =
        elemento(
            "ticket-dni"
        );


    if (ticketDni) {

        ticketDni.textContent =
            dniCliente ||
            "-";

    }



    /* =============================================== */
    /* SEDE */
    /* =============================================== */

    const ticketSede =
        elemento(
            "ticket-sede"
        );


    if (ticketSede) {

        ticketSede.textContent =
            sedeSeleccionada ||
            "-";

    }



    /* =============================================== */
    /* MOTIVO */
    /* =============================================== */

    const ticketMotivo =
        elemento(
            "ticket-motivo"
        );


    if (ticketMotivo) {

        ticketMotivo.textContent =
            obtenerMotivoVisita();

    }



    /* =============================================== */
    /* FECHA */
    /* =============================================== */

    const ticketFecha =
        elemento(
            "ticket-fecha"
        );


    if (ticketFecha) {

        ticketFecha.textContent =
            formatearFecha(
                fechaSeleccionada
            );

    }



    /* =============================================== */
    /* HORA */
    /* =============================================== */

    const ticketHora =
        elemento(
            "ticket-hora"
        );


    if (ticketHora) {

        ticketHora.textContent =
            horarioSeleccionado ||
            "-";

    }



    /* =============================================== */
    /* MOSTRAR TICKET */
    /* =============================================== */

    mostrarPantalla(
        "pantalla-ticket"
    );

}



/* ========================================================= */
/* REGRESAR: ATENCIÓN → DNI */
/* ========================================================= */

const regresarDni =
    elemento(
        "regresar-dni"
    );


if (regresarDni) {

    regresarDni.addEventListener(
        "click",
        function () {

            mostrarPantalla(
                "pantalla-dni"
            );

        }
    );

}



/* ========================================================= */
/* REGRESAR: VENTANILLA → ATENCIÓN */
/* ========================================================= */

const regresarAtencion =
    elemento(
        "regresar-atencion"
    );


if (regresarAtencion) {

    regresarAtencion.addEventListener(
        "click",
        function () {

            mostrarPantalla(
                "pantalla-atencion"
            );

        }
    );

}



/* ========================================================= */
/* REGRESAR: PLATAFORMA → ATENCIÓN */
/* ========================================================= */

const regresarPlataforma =
    elemento(
        "regresar-plataforma"
    );


if (regresarPlataforma) {

    regresarPlataforma.addEventListener(
        "click",
        function () {

            mostrarPantalla(
                "pantalla-atencion"
            );

        }
    );

}



/* ========================================================= */
/* REGRESAR: OTRA CONSULTA → ATENCIÓN */
/* ========================================================= */

const regresarOtraConsulta =
    elemento(
        "regresar-otra-consulta"
    );


if (regresarOtraConsulta) {

    regresarOtraConsulta.addEventListener(
        "click",
        function () {

            mostrarPantalla(
                "pantalla-atencion"
            );

        }
    );

}



/* ========================================================= */
/* REGRESAR: SEDE */
/* ========================================================= */

const regresarSede =
    elemento(
        "regresar-sede"
    );


if (regresarSede) {

    regresarSede.addEventListener(
        "click",
        function () {

            if (
                tipoAtencion ===
                "ventanilla"
            ) {

                mostrarPantalla(
                    "pantalla-ventanilla"
                );

                return;

            }


            if (
                tipoAtencion ===
                "plataforma"
            ) {

                mostrarPantalla(
                    "pantalla-plataforma"
                );

                return;

            }


            if (
                tipoAtencion ===
                "otra"
            ) {

                mostrarPantalla(
                    "pantalla-otra-consulta"
                );

            }

        }
    );

}



/* ========================================================= */
/* REGRESAR: FECHA → SEDE */
/* ========================================================= */

const regresarFecha =
    elemento(
        "regresar-fecha"
    );


if (regresarFecha) {

    regresarFecha.addEventListener(
        "click",
        function () {

            mostrarPantalla(
                "pantalla-sede"
            );

        }
    );

}



/* ========================================================= */
/* REGRESAR: HORARIO → FECHA */
/* ========================================================= */

const regresarHorario =
    elemento(
        "regresar-horario"
    );


if (regresarHorario) {

    regresarHorario.addEventListener(
        "click",
        function () {

            mostrarPantalla(
                "pantalla-fecha"
            );

        }
    );

}



/* ========================================================= */
/* INICIALIZACIÓN */
/* ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const pantallas =
            document.querySelectorAll(
                ".screen"
            );


        pantallas.forEach(
            pantalla => {

                pantalla.classList.remove(
                    "active"
                );

            }
        );


        const pantallaDni =
            elemento(
                "pantalla-dni"
            );


        if (pantallaDni) {

            pantallaDni.classList.add(
                "active"
            );

        }


        /*
            El botón de continuar de
            fecha/hora comienza deshabilitado.
        */

        actualizarBotonContinuar();

    }
);