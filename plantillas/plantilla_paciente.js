const plantilla_paciente = (paciente, consulta) => {
  let nombre = paciente.nombre
  let prioridad = paciente.prioridad
  let riesgo = paciente.riesgo
  let vista
  if (consulta) {
    vista = 
    `
    <!-- Paciente -->
              <div class="card lh-sm text-sm border-secondary m-1" style="width: 7rem;">
                <div class="card-header p-2 bg-secondary text-light fw-bold">
                  ${nombre}
                </div>
                <ul class="list-group list-group-flush fw-light">
                  <li class="list-group-item p-1">Prioridad: ${prioridad}</li>
                  <li class="list-group-item p-1">Riesgo: ${riesgo}</li>
                  <li class="list-group-item p-1 bg-warning">${consulta.tipo} (${consulta.profesional})</li>
                </ul>
              </div>
    `
  }
  else {
    vista =
      `
    <!-- Paciente -->
              <div class="card lh-sm text-sm border-secondary m-1" style="width: 7rem;">
                <div class="card-header p-2 bg-secondary text-light fw-bold">
                  ${nombre}
                </div>
                <ul class="list-group list-group-flush fw-light">
                  <li class="list-group-item p-1">Prioridad: ${prioridad}</li>
                  <li class="list-group-item p-1">Riesgo: ${riesgo}</li>
                </ul>
              </div>
    `
  }
  return vista
}
