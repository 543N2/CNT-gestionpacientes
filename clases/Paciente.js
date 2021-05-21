
class Paciente {


  constructor(historia, nombre, edad, peso, estatura, esFumador, annosFuma, tieneDieta) {
    this.inicializar(historia, nombre, edad, peso, estatura)
    this.establecerTipoPaciente(edad)
    this.establecerPrioridad(this.tipo, edad, peso, estatura, esFumador, annosFuma, tieneDieta, nombre)
    this.establecerRiesgo(this.tipo, this.prioridad, edad)
    this.establecerTipoConsulta(this.tipo, this.prioridad)
  }


  inicializar(historiaClinica, nombre, edad, peso, estatura, esFumador, annosFuma, tieneDieta) {
    this.historiaClinica = historiaClinica
    this.nombre = nombre
    this.edad = edad
    this.peso = peso || undefined
    this.estatura = estatura || undefined
    this.esFumador = esFumador || undefined
    this.annosFuma = annosFuma || undefined
    this.tieneDieta = tieneDieta || undefined
    this.tipoConsulta = []
  }


  establecerTipoPaciente(edad) {
    if (edad >= 1 && edad <= 15) {
      this.tipo = paciente.tipo.ninno
    }
    else if (edad >= 16 && edad <= 40) {
      this.tipo = paciente.tipo.joven
    }
    else if (edad >= 41) {
      this.tipo = paciente.tipo.anciano
    }
    else {
      console.log("Error. Edad inválida.")
      this.tipo = ""
    }
    // console.log(` -Tipo: ${this.tipo}.`)
  }


  establecerPrioridad(tipo, edad, peso, estatura, esFumador, annosFuma, tieneDieta, nombre) {
    let prioridad = undefined
    switch (tipo) {
      case paciente.tipo.ninno:
        prioridad = this.establecerPrioridadNinno(peso, estatura, esFumador, annosFuma)
        break
      case paciente.tipo.joven:
        prioridad = this.establecerPrioridadJoven(esFumador, annosFuma)
        break
      case paciente.tipo.anciano:
        prioridad = this.establecerPrioridadAnciano(edad, tieneDieta)
        break
    }
    this.prioridad = prioridad
    // console.log(` -Prioridad: ${this.prioridad}.`)
  }


  establecerPrioridadNinno(peso, estatura, edad) {
    // Calcula relación peso-estatura. Datos tomados de: https://www.cdc.gov/healthyweight/spanish/bmi/resultgraph.html?&method=metric&gender=f&age_y=15&age_m=0&hcm=160&wkg=43
    const percentil5 = edad => (15.1 - 0.513 * edad + 0.0404 * edad * edad)
    const percentil85 = edad => (18 - 0.424 * edad + 0.0557 * edad * edad)
    const percentil95 = edad => (18.6 - 0.213 * edad + 0.059 * edad * edad)
    const imc = (peso, estatura) => {
      return estatura >= 100 ? 10000 * peso / estatura / estatura : peso / estatura / estatura
    }
    let bajoPeso = imc(peso, estatura) >= 0 && imc(peso, estatura) < percentil5(edad)
    let pesoSaludable = imc(peso, estatura) >= percentil5(edad) && imc(peso, estatura) < percentil85(edad)
    let sobrepeso = imc >= imc(peso, estatura) >= percentil85(edad) && imc(peso, estatura) < percentil95(edad)
    let obeso = imc(peso, estatura) >= percentil95(edad)
    let relacionPesoEstatura
    if (bajoPeso) {
      relacionPesoEstatura = 4
    }
    else if (obeso) {
      relacionPesoEstatura = 3
    }
    else if (sobrepeso) {
      relacionPesoEstatura = 2
    }
    else if (pesoSaludable) {
      relacionPesoEstatura = 1
    }
    else {
      relacionPesoEstatura = null
    }
    this.relacionPesoEstatura = relacionPesoEstatura
    let criterio1 = this.edad >= 1 && this.edad <= 5 && peso && estatura
    let criterio2 = this.edad >= 6 && this.edad <= 12 && peso && estatura
    let criterio3 = this.edad >= 13 && this.edad <= 15 && peso && estatura
    if (criterio1) {
      return relacionPesoEstatura + 3
    }
    else if (criterio2) {
      return relacionPesoEstatura + 2
    }
    else if (criterio3) {
      return relacionPesoEstatura + 1
    }
    else {
      console.log("Error. Favor revisar Peso y Estatura del niño.")
      return null
    }
  }


  establecerPrioridadJoven(esFumador, annosFuma) {
    let criterio1 = esFumador || annosFuma > 0
    let criterio2 = !esFumador || annosFuma === 0
    if (criterio1) {
      this.esFumador = true
      this.annosFuma = annosFuma
      return annosFuma / 4 + 2
    }
    else if (criterio2) {
      this.esFumador = false
      this.annosFuma = 0
      return 2
    }
    else {
      console.log("Lleva menos de un año fumando.")
      return 1 / 4 + 2
    }
  }


  establecerPrioridadAnciano(edad, tieneDieta) {
    this.tieneDieta = tieneDieta
    let criterio1 = tieneDieta && edad >= 60 && edad <= 100
    if (criterio1) {
      return edad / 20 + 4
    }
    else {
      return edad / 30 + 3
    }
  }


  establecerRiesgo(tipo, prioridad, edad) {
    let riesgo = undefined
    if (tipo === paciente.tipo.anciano) {
      riesgo = edad * prioridad / 100 + 5.3
    }
    else if (tipo === paciente.tipo.ninno || tipo === paciente.tipo.joven) {
      riesgo = edad * prioridad / 100
    }
    // console.log(` -Riesgo: ${riesgo}.`)
    this.riesgo = riesgo
  }


  establecerTipoConsulta(tipo, prioridad) {
    let criterioPediatria = tipo === paciente.tipo.ninno && prioridad <= 4
    let criterioMi = tipo === paciente.tipo.joven || tipo === paciente.tipo.anciano
    let criterioUrgencias = prioridad > 4
    if (criterioPediatria) {
      this.tipoConsulta.push(consulta.tipo.pediatria)
    }
    if (criterioMi) {
      this.tipoConsulta.push(consulta.tipo.mi)
    }
    if (criterioUrgencias) {
      this.tipoConsulta.push(consulta.tipo.urgencias)
    }
    // console.log(` -Tipos de consulta: ${this.tipoConsulta}.`)
  }
}
