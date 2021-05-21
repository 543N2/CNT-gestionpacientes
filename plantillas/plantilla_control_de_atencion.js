const plantilla_control_de_atencion = () => {
    let vista = 
    `   
        <!-- Monitor -->
        <p class="h6 my-3 text-center">Monitor</p>
        <div class="container-fluid p-2 mb-3 border bg-danger rounded-2 text-light">
          <!-- <p class="h6 my-2 text-center"> -->
          <textarea id="monitor" class="bg-light text-dark p-0 form-control" rows="3"></textarea>
        </div>
        
        <div class="row justify-content-evenly">
            <button id="atender_paciente" class="btn btn-danger col-5 " type="button">Atender paciente</button>
            <button id="liberar_consultas" class="btn btn-danger col-5 " type="button">Liberar consultas</button>
        </div> 
    `
    return vista
}