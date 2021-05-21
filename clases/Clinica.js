
class Clinica {


    constructor() {
        this.inicializar()
    }


    inicializar() {
        this.consecutivoHistorias = -1
        this.consecutivoConsultas = -1
        this.listaPacientes = []
        this.listaConsultas = []
        this.listaPendientes = []
        this.salaEspera = []
        this.salaAtencion = []
    }


    registrarPaciente(nombre, edad, peso, estatura, esFumador, annosFuma, tieneDieta) {
        this.consecutivoHistorias++
        let pacienteNuevo = new Paciente(this.consecutivoHistorias, nombre, edad, peso, estatura, esFumador, annosFuma, tieneDieta)
        this.listaPacientes.push(pacienteNuevo)
        this.listaPendientes.push(pacienteNuevo)
        this.ordenarPacientesPorPrioridad()
    }


    registrarConsulta(tipo, profesional) {
        this.consecutivoConsultas++
        let consultaNueva = new Consulta(this.consecutivoConsultas, tipo, profesional)
        // console.log(consultaNueva.tipo === consulta.tipo.urgencias)
        if (consultaNueva.tipo === consulta.tipo.urgencias) {
            this.listaConsultas.unshift(consultaNueva)
        }
        else {
            this.listaConsultas.push(consultaNueva)
        }
    }


    listarDisponibilidadConsultas(paciente) {
        let consultas = []
        paciente.tipoConsulta.forEach(tipoConsulta => {
            // console.log(c.listaConsultas.forEach(c=>console.log(c.tipo)))
            // console.log(c.listaConsultas.forEach(c=>console.log(c)))
            // let coincidencias = this.listaConsultas.forEach(cons => {
            //     console.log("Puede tomar consulta de:"+ tipoConsulta)
            //     console.log("Consulta disponibles en clinica:")
            //     console.log('-> '+cons.tipo)
            //     console.log('coincide?: ' + String(tipoConsulta === consulta.tipo[cons.tipo]))
            //     console.log('------')
               
            // })
            let coincidencias = this.listaConsultas.filter(cons => {
                return tipoConsulta === consulta.tipo[cons.tipo] && cons.estado === consulta.estado.desocupada
            })
            consultas.push(...coincidencias)
        });
        // consultas.sort((cA, cB) => cA.tipo - cB.tipo)
        // consultas.reverse()
        console.log("listado disponibilidad consultas para el paciente")
        console.log(consultas)
        return (consultas)
    }

    moverPacienteDePendienteASalaEspera(paciente) {
        this.ordenarPacientesPorPrioridad()
        let indicePaciente = this.listaPendientes.indexOf(paciente)
        this.listaPendientes.splice(indicePaciente, 1)
        this.salaEspera.push(paciente)
        this.ordenarPacientesPorPrioridad()
    }

    moverPacienteDePendienteASalaAtencion(paciente, consulta) {
        this.ordenarPacientesPorPrioridad()
        let indicePaciente = this.listaPendientes.indexOf(paciente)
        this.listaPendientes.splice(indicePaciente, 1)

        let indiceConsulta = this.listaConsultas.indexOf(consulta)
        this.listaConsultas[indiceConsulta].ocupar(paciente)

        this.salaAtencion.push({
            paciente: paciente,
            consulta: consulta,
        })

        this.ordenarPacientesPorPrioridad()
    }

    moverPacienteDeSalaEsperaASalaAtencion(paciente, consulta) {
        this.ordenarPacientesPorPrioridad()
        let indicePaciente = this.salaEspera.indexOf(paciente)
        this.salaEspera.splice(indicePaciente, 1)

        let indiceConsulta = this.listaConsultas.indexOf(consulta)
        this.listaConsultas[indiceConsulta].ocupar(paciente)

        this.salaAtencion.push({
            paciente: paciente,
            consulta: consulta,
        })
        this.ordenarPacientesPorPrioridad()
    }

    ordenarPacientesPorPrioridad() {
        this.listaPendientes.sort((pA, pB) => pB.prioridad - pA.prioridad)
        this.salaEspera.sort((pA, pB) => pB.prioridad - pA.prioridad)
    }


    Listar_Pacientes_Mayor_Riesgo(historiaClinica) {
        return this.listaPacientes.filter(p => p.riesgo > this.listaPacientes[historiaClinica].riesgo)
    }


    Atender_Paciente() {
        try {

            let paciente
            let consultas
            let salaEsperaVacia = this.salaEspera.length === 0

            if (salaEsperaVacia) {
                console.log("espera vacia")
                m.imprimir("espera vacia")
                paciente = this.listaPendientes[0]
                console.log(paciente)
                consultas = this.listarDisponibilidadConsultas(paciente)
                console.log(consultas)
                let sinDisponibilidad = consultas.length === 0
                if (sinDisponibilidad) {
                    c.moverPacienteDePendienteASalaEspera(paciente)
                    console.log(`Paciente enviado a sala de espera.`)
                }
                else {
                    c.moverPacienteDePendienteASalaAtencion(paciente, consultas[0])
                    console.log(`Paciente enviado a sala de atencion.`)
                }
            }
            else if (!salaEsperaVacia) {
                paciente = this.salaEspera[0]
                consultas = this.listarDisponibilidadConsultas(paciente)
                if (consultas.length !== 0) {
                    this.moverPacienteDeSalaEsperaASalaAtencion(paciente, consultas[0])
                    console.log(`Paciente enviado a sala de atención.`)
                }
                else {
                    m.imprimir("Todas las consultas se encuentran ocupadas. Favor espere a que se liberen.")
                    console.log("Todas las consultas estan ocupadas.")
                }
            }
        }
        catch (e) {
            console.log("No hay más pacientes por atender. ", e)
            m.imprimir("No hay pacientes por atender.")
            actualizar_render_salas()
        }
    }


    Liberar_Consultas() {

        try {
            this.listaConsultas.forEach(c => {
                if (c.estado === consulta.estado.ocupada) {
                    c.desocupar()
                    console.log(this.salaAtencion)
                }
            })
            this.salaAtencion = []
        }
        catch (e) {
            actualizar_render_salas()
            console.log("Ocurrio un error inesperado.", e)
        }
    }


    Listar_Pacientes_Fumadores_Urgentes() {
        let lista = this.listaPendientes.filter(p => p.esFumador === true)
        if (lista.length !== 0) {
            return lista
        }
        return [{ nombre: "N/A" }]
    }


    Consulta_mas_Pacientes_Atendidos() {
        let consultas
        let atendidos = this.listaConsultas.map(c => c.pacientesAtendidos.length)
        let maximo = Math.max(...atendidos)
        if (maximo !== 0) {
            consultas = this.listaConsultas.filter(c => c.pacientesAtendidos.length === maximo)
        }
        else {
            consultas = [{ tipo: "N/A", profesional: "N/A" }]
        }
        return consultas
    }


    Paciente_mas_Anciano() {
        let edades = this.salaEspera.map(p => p.edad)
        let mayor = Math.max(...edades)
        let ancianos = this.salaEspera.filter(p => p.edad === mayor)
        if (ancianos.length !== 0) {
            return ancianos
        }
        else {
            return [{ nombre: "N/A" }]
        }
    }


    Optimizar_Atencion() {

    }

}