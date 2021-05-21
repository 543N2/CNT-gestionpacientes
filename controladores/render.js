
let vista_header = document.getElementById('vista_header')
vista_header.innerHTML = plantilla_header()

let vista_registro_pacientes = document.getElementById('vista_registro_pacientes')
vista_registro_pacientes.innerHTML = plantilla_registro_pacientes()

let vista_registro_consultas = document.getElementById('vista_registro_consultas')
vista_registro_consultas.innerHTML = plantilla_registro_consultas()

let vista_control_de_atencion = document.getElementById('vista_control_de_atencion')
vista_control_de_atencion.innerHTML = plantilla_control_de_atencion()

let vista_funciones = document.getElementById('vista_funciones')
vista_funciones.innerHTML = plantilla_funciones()


function renderizar_sala_de_pacientes_pendientes(pacientes) {
    let vista_sala_de_pacientes_pendientes = document.getElementById('vista_sala_de_pacientes_pendientes')
    if (pacientes) {
        vista_sala_de_pacientes_pendientes.innerHTML = plantilla_sala_de_pacientes_pendientes(pacientes)
    }
    else {
        vista_sala_de_pacientes_pendientes.innerHTML = plantilla_sala_de_pacientes_pendientes("")
    }
}

function renderizar_sala_de_espera(pacientes) {
    let vista_sala_de_espera = document.getElementById('vista_sala_de_espera')
    if (pacientes) {
        vista_sala_de_espera.innerHTML = plantilla_sala_de_espera(pacientes)
    }
    else {
        vista_sala_de_espera.innerHTML = plantilla_sala_de_espera("")
    }
}

function renderizar_sala_de_atencion(pacientes) {
    let vista_sala_de_atencion = document.getElementById('vista_sala_de_atencion')
    if (pacientes) {
        vista_sala_de_atencion.innerHTML = plantilla_sala_de_atencion(pacientes)
    }
    else {
        vista_sala_de_atencion.innerHTML = plantilla_sala_de_atencion("")
    }
}

function renderizar_pacientes(lista, esAtencion) {
    if (esAtencion){
        let tarjetas_pacientes = lista.map(p => plantilla_paciente(p.paciente, p.consulta))
        return tarjetas_pacientes.join('')
    }
    else{
        let tarjetas_pacientes = lista.map(p => plantilla_paciente(p))
        return tarjetas_pacientes.join('')
    }
}

function actualizar_render_salas() {

    let lista_tarjetas_pendientes = renderizar_pacientes(c.listaPendientes)
    renderizar_sala_de_pacientes_pendientes(lista_tarjetas_pendientes)
    
    let lista_tarjetas_espera = renderizar_pacientes(c.salaEspera)
    renderizar_sala_de_espera(lista_tarjetas_espera)
    
    let lista_tarjetas_atencion = renderizar_pacientes(c.salaAtencion, true)
    renderizar_sala_de_atencion(lista_tarjetas_atencion)
}

// Renderizado de salas vacías
// renderizar_sala_de_pacientes_pendientes()
// renderizar_sala_de_espera()
// renderizar_sala_de_atencion()
