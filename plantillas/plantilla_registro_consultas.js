const plantilla_registro_consultas = () => {
    let vista = 
    `
    <p class="h6 my-2 text-center">Registro consultas</p>
        <div class="container-fluid p-2 border bg-lightblue rounded-2 text-light" id="formulario_registro_consultas">
          <select id="consulta_tipo" class="form-select m-1" name="">
            <option value="">Tipo</option>
            <option value="urgencias">Urgencias</option>
            <option value="mi">Medicina Integral</option>
            <option value="pediatria">Pediatria</option>
          </select>
          <input id="consulta_nombre_del_profesional" class="form-control m-1" type="text" name="" placeholder="Nombre del profesional">
          <button id="consulta_registrar" class="btn btn-dark m-2" type="button">Registrar consulta</button>
        </div>
    `
    return vista
}