
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
        // console.log(`Paciente: ${nombre}.`)
        this.consecutivoHistorias++
        let pacienteNuevo = new Paciente(this.consecutivoHistorias, nombre, edad, peso, estatura, esFumador, annosFuma, tieneDieta)
        this.listaPacientes.push(pacienteNuevo)
        this.listaPendientes.push(pacienteNuevo)
        this.ordenarPacientesPorPrioridad()
    }


    registrarConsulta(tipo, profesional) {
        this.consecutivoConsultas++
        let consultaNueva = new Consulta(this.consecutivoConsultas, tipo, profesional)
        this.listaConsultas.push(consultaNueva)
    }


    listarDisponibilidadConsultas(paciente) {
        let consultas = []
        paciente.tipoConsulta.forEach(tipoConsulta => {
            let coincidencias = this.listaConsultas.filter(cons => {
                return tipoConsulta === cons.tipo && cons.estado === consulta.estado.desocupada
            })
            consultas.push(...coincidencias)
        });
        consultas.sort((cA, cB) => cA.tipo - cB.tipo)
        consultas.reverse()
        return (consultas)
    }

    moverPacienteDePendienteASalaEspera(paciente) {
        let indicePaciente = this.listaPendientes.indexOf(paciente)
        this.listaPendientes.splice(indicePaciente, 1)
        this.salaEspera.push(paciente)
        this.ordenarPacientesPorPrioridad()
    }

    moverPacienteDePendienteASalaAtencion(paciente, consulta) {
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
        let paciente
        let consultas
        let salaEsperaVacia = this.salaEspera.length === 0

        if (salaEsperaVacia) {
            paciente = this.listaPendientes[0]
            consultas = this.listarDisponibilidadConsultas(paciente)
            let sinDisponibilidad = consultas.length === 0
            if (sinDisponibilidad) {
                c.moverPacienteDePendienteASalaEspera(paciente)
            }
            else {
                c.moverPacienteDePendienteASalaAtencion(paciente, consultas[0])
            }
        }
        else if (!salaEsperaVacia) {
            paciente = this.salaEspera[0]
            consultas = this.listarDisponibilidadConsultas(paciente)
            this.moverPacienteDeSalaEsperaASalaAtencion(paciente, consultas[0])
        }
    }


    Liberar_Consultas() {
        this.listaConsultas.forEach(c => {
            if (c.estado === consulta.estado.ocupada) {
                c.desocupar()
                console.log(this.salaAtencion)
            }
        })
        this.salaAtencion = []
    }


    Listar_Pacientes_Fumadores_Urgentes() {
        return this.listaPendientes.filter(p => p.esFumador === true)
    }


    Consulta_mas_Pacientes_Atendidos() {
        let atendidos = this.listaConsultas.map(c => c.pacientesAtendidos.length)
        let maximo = Math.max(...atendidos)
        let consultas = this.listaConsultas.filter(c => c.pacientesAtendidos.length === maximo)
        return consultas
    }


    Paciente_mas_Anciano() {
        let edades = this.salaEspera.map(p => p.edad)
        let mayor = Math.max(...edades)
        let ancianos = this.salaEspera.filter(p => p.edad === mayor)
        return ancianos
    }


    Optimizar_Atencion() {
        
    }

}