const plantilla_registro_pacientes = () => {
    let vista = 
    `
    <p class="h6 my-2 text-center">Registro Pacientes</p>
        <div class="container-fluid p-2 mb-3 border bg-lightblue rounded-2 text-light">
          <input id="paciente_nombre" class="form-control my-1" type="text" placeholder="Nombre">
          <input id="paciente_edad" class="form-control my-1" type="number" placeholder="Edad">
          <input id="paciente_peso" class="form-control my-1" type="number" placeholder="Peso">
          <input id="paciente_estatura" class="form-control my-1" type="number" placeholder="Estatura">
          <div class="form-check m-1">
            <input id="paciente_es_fumador" class="form-check-input" type="checkbox" value="true">
            <label class="form-check-label" for="flexCheckDefault">
              ¿Es fumador?
            </label>
            <input id="paciente_annos_fumador" class="form-control m-1" type="number" placeholder="Años de fumador">
          </div>
          <div class="form-check m-1">
            <input id="paciente_tiene_dieta" class="form-check-input" type="checkbox" value="">
            <label class="form-check-label" for="flexCheckDefault">
              ¿Tiene dieta?
            </label>
          </div>
          <button id="paciente_registrar" class="btn btn-dark m-2" type="button">Registrar paciente</button>
        </div>
    `
    return vista
}