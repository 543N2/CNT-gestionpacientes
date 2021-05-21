let c = new Clinica()
let m = new Monitor()

// Registro de Pacientes
let paciente_registrar = document.getElementById('paciente_registrar')
paciente_registrar.addEventListener('click', (e) => {

    let nombre = document.getElementById('paciente_nombre').value
    let edad = document.getElementById('paciente_edad').value
    let peso = document.getElementById('paciente_peso').value
    let estatura = document.getElementById('paciente_estatura').value
    let es_fumador = document.getElementById('paciente_es_fumador').checked
    let annos_fumador = document.getElementById('paciente_annos_fumador').value
    let tiene_dieta = document.getElementById('paciente_tiene_dieta').checked

    let dummy = new Paciente(0, nombre, edad, peso, estatura, es_fumador, annos_fumador, tiene_dieta)
    let datosVacios = dummy.nombre === "" || dummy.edad === ""
    let datosInvalidos = (dummy.tipo === paciente.tipo.ninno && peso === "" && estatura === "")
    if (datosVacios || datosInvalidos) {
        m.imprimir("Se debe suministrar el nombre y la edad. Para niños se debe suministrar edad y estatura.")
    }
    else {
        c.registrarPaciente(nombre, parseInt(edad), parseInt(peso), estatura, es_fumador, annos_fumador , tiene_dieta)
        actualizar_render_salas()
        m.imprimir(`Paciente ${dummy.nombre} registrado.`)
        document.getElementById('paciente_nombre').value = ""
        document.getElementById('paciente_edad').value = ""
        document.getElementById('paciente_peso').value = ""
        document.getElementById('paciente_estatura').value = ""
        document.getElementById('paciente_es_fumador').checked = false
        document.getElementById('paciente_annos_fumador').value = ""
        document.getElementById('paciente_tiene_dieta').checked = false   
    }

})

// Registro de Consultas
let consulta_registrar = document.getElementById('consulta_registrar')
consulta_registrar.addEventListener('click', (e) => {
    let tipo = document.getElementById('consulta_tipo').value
    let nombre_del_profesional = document.getElementById('consulta_nombre_del_profesional').value
    let entradaInvalida = tipo === "" ||
        tipo === undefined ||
        nombre_del_profesional === "" ||
        nombre_del_profesional === undefined
    if (entradaInvalida) {
        m.imprimir("No puede haber campos vacios en el registro de consulta.")
    }
    else {
        m.imprimir(`Registrada consulta de ${consulta.tipo[tipo]}, profesional: ${nombre_del_profesional}.`)
        c.registrarConsulta(tipo, nombre_del_profesional)
        document.getElementById('consulta_tipo').value = ""
        document.getElementById('consulta_nombre_del_profesional').value = ""
    }
})

let atender_paciente = document.getElementById('atender_paciente')
atender_paciente.addEventListener('click', (e) => {
    actualizar_render_salas()
    m.imprimir(`Paciente atendido.`)
    c.Atender_Paciente()
    actualizar_render_salas()
})

let liberar_consultas = document.getElementById('liberar_consultas')
liberar_consultas.addEventListener('click', (e) => {
    actualizar_render_salas()
    m.imprimir(`Consultas liberadas.`)
    c.Liberar_Consultas()
    actualizar_render_salas()
})


// Pacientes de mayor riesgo que el de la historia clinica ingresada
let pacientes_de_mayor_riesgo = document.getElementById('pacientes_de_mayor_riesgo')
pacientes_de_mayor_riesgo.addEventListener('click', (e) => {
    let mensaje = []
    let historia_clinica = parseInt(document.getElementById('historia_clinica').value)
    let nombre_paciente = c.listaPacientes.find(p => p.historiaClinica === historia_clinica).nombre
    let intro = `Los pacientes con mayor riesgo que ${nombre_paciente} son: `
    let lista = c.Listar_Pacientes_Mayor_Riesgo(historia_clinica)
    lista.forEach(p => mensaje.push(p.nombre))
    m.imprimir(intro + mensaje)
})

let pacientes_fumadores_urgentes = document.getElementById('pacientes_fumadores_urgentes')
pacientes_fumadores_urgentes.addEventListener('click', (e) => {
    let mensaje = []
    let intro = `Los pacientes fumadores urgentes son: `
    let lista = c.Listar_Pacientes_Fumadores_Urgentes()
    lista.forEach(p => mensaje.push(p.nombre))
    m.imprimir(intro + mensaje)
    console.log(intro + mensaje)
})

let consulta_mas_frecuentada = document.getElementById('consulta_mas_frecuentada')
consulta_mas_frecuentada.addEventListener('click', (e) => {
    let mensaje = []
    let intro = `La consulta con más pacientes atendidos es: `
    let lista = c.Consulta_mas_Pacientes_Atendidos()
    lista.forEach(p => mensaje.push(` ${p.tipo} con ${p.profesional}`))
    m.imprimir(intro + mensaje)
    console.log(intro + mensaje)
})

let paciente_mas_anciano = document.getElementById('paciente_mas_anciano')
paciente_mas_anciano.addEventListener('click', (e) => {
    let mensaje = []
    let intro = `El paciente más anciano en Sala de Espera es: `
    let lista = c.Paciente_mas_Anciano()
    lista.forEach(p => mensaje.push(p.nombre))
    m.imprimir(intro + mensaje)
    console.log(intro + mensaje)
})

function load_data() {

    c.registrarConsulta(consulta.tipo.urgencias, "Dr. Ramirez")
    c.registrarConsulta(consulta.tipo.urgencias, "Dra. Cepeda")
    c.registrarConsulta(consulta.tipo.mi, "Dra. Ortiz")
    c.registrarConsulta(consulta.tipo.pediatria, "Dr. Porras")

    c.registrarPaciente("María", 25, 50, 1.53, false, 0, true)
    c.registrarPaciente("Fernando", 13, 60, 1.55, false, 0, false)
    c.registrarPaciente("Gloria", 35, 60, 1.57, true, 12, false)
    c.registrarPaciente("Pedro", 73, 70, 1.71, false, 0, true)
    c.registrarPaciente("Juan", 33, 70, 170, false, 0, false)
    c.registrarPaciente("Nicolas", 39, 80, 1.62, true, 5, false)
}


let datos_de_ejemplo = document.getElementById('datos_de_ejemplo')
datos_de_ejemplo.addEventListener('click', (e) => {
    load_data()
    actualizar_render_salas()
    datos_de_ejemplo.style.display = "none"
    console.log("Cargados datos de ejemplo.")
    m.imprimir("Cargados datos de ejemplo.")
})

actualizar_render_salas()
