
class Consulta {


  constructor(id, pacientesAtendidos, profesional, estado, tipo, pacienteActual) {
    this.inicializar(id, pacientesAtendidos, profesional, estado, tipo, pacienteActual)
  }


  inicializar(id, tipo, profesional) {
    this.id = id
    this.tipo = tipo || undefined
    this.profesional = profesional || undefined
    this.estado = consulta.estado.desocupada  
    this.pacienteActual = undefined
    this.pacientesAtendidos = []
  }


  ocupar(paciente) {
    this.estado = consulta.estado.ocupada
    this.pacienteActual = paciente
    this.pacientesAtendidos.push(paciente)
  }


  desocupar() {
    this.estado = consulta.estado.desocupada
    this.pacienteActual = undefined
  }


  enEspera() {
    this.estado = consulta.estado.espera
  }

  
  asignarPaciente(paciente){
    this.pacienteActual = paciente
    this.pacientesAtendidos.push(paciente)
  }

}

