const plantilla_header = () => {
    let vista =
        `
        <div class="navbar navbar-dark bg-dark text-light justify-content-between ">
            <p class="h4 mx-4">
            Sistema de Gestión de Pacientes
            </p>
            <button id="datos_de_ejemplo" class="badge p-2 mx-4 bg-warning text-dark" type="button">
                Cargar datos de ejemplo
            </button>

        </div>
        `
    return vista
}