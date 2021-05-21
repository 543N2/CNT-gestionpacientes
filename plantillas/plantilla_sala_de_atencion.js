const plantilla_sala_de_atencion = (paciente) => {
  let vista =
  `
  <p class="h6 my-2 text-center">Sala de Atencion</p>
  <div class="col text-center my-3 p-1 border border-2 rounded-2 bg-light d-flex flex-wrap justify-content-evenly">
    ${paciente}
  </div>
`
return vista
}