// Test 1
// -------------------

let c = new Clinica()

c.registrarConsulta(consulta.tipo.urgencias, "Dr. Ramirez")
c.registrarConsulta(consulta.tipo.urgencias, "Dra. Cepeda")
c.registrarConsulta(consulta.tipo.mi, "Dra. Ortiz")
c.registrarConsulta(consulta.tipo.pediatria, "Dr. Porras")

c.registrarPaciente("María", 25, 50, 1.53,false,0,true)
c.registrarPaciente("Fernando", 13, 60, 1.55, false, 0, false)
c.registrarPaciente("Gloria", 35, 60, 1.57,true,12,false)
c.registrarPaciente("Pedro", 73, 70, 1.71,false,0,true)
c.registrarPaciente("Juan", 33, 70, 170, false, 0, false)
c.registrarPaciente("Nicolas", 39, 80, 1.62,true,5,false)

// console.log("Pendientes:")
// console.log(c.listaPendientes)
// c.Atender_Paciente()
// console.log("nuevos Pendientes:")
// console.log(c.listaPendientes)
// console.log("sala de espera: ")
// console.log(c.salaEspera)
// console.log("sala de atencion: ")
// console.log(c.salaAtencion)


// c.moverPacienteDePendienteASalaEspera(c.listaPendientes[1])
// c.moverPacienteDePendienteASalaEspera(c.listaPendientes[4])
// c.moverPacienteDePendienteASalaEspera(c.listaPendientes[2])
// c.moverPacienteDePendienteASalaEspera(c.listaPendientes[3])
// c.moverPacienteDePendienteASalaEspera(c.listaPendientes[0])
// c.moverPacienteDePendienteASalaEspera(c.listaPendientes[5])

// c.moverPacienteDeSalaEsperaASalaAtencion(c.salaEspera[0],c.listaConsultas[1])
// c.moverPacienteDeSalaEsperaASalaAtencion(c.salaEspera[0],c.listaConsultas[1])
// c.moverPacienteDeSalaEsperaASalaAtencion(c.salaEspera[0],c.listaConsultas[3])
// c.moverPacienteDeSalaEsperaASalaAtencion(c.salaEspera[0],c.listaConsultas[3])
