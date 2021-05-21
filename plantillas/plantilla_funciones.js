const plantilla_funciones = () => {
    let vista = 
    `
    <p class="h6 my-2 text-center">Funciones</p>
        <div class="container-fluid p-2 mb-3 border bg-lightblue rounded-2 text-light">
          <input id="historia_clinica" class="form-control my-1" type="number" placeholder="# de historia clínica">
          <button id="pacientes_de_mayor_riesgo" class="btn btn-dark m-1" type="button">Pacientes de mayor
            riesgo</button>
          <button id="pacientes_fumadores_urgentes" class="btn btn-dark m-1" type="button">Pacientes fumadores
            urgentes</button>
          <button id="consulta_mas_frecuentada" class="btn btn-dark m-1" type="button">Consulta con más pacientes atendidos</button>
          <button id="paciente_mas_anciano" class="btn btn-dark m-1" type="button">Paciente más anciano en sala de espera</button>
        </div>
    `
    return vista
}