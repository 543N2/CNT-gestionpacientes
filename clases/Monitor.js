class Monitor {
    
    constructor () {
        this.item = document.getElementById('monitor')
        this.mensaje = ""
        this.date
        this.log = []
    }

    imprimir (mensaje) {
        let fecha = new Date() 
        let hora = String(fecha.getHours()).padStart(2,'0') +":"+ String(fecha.getMinutes()).padStart(2,'0') +":"+ String(fecha.getSeconds()).padStart(2,'0')
        let mensajeFinal = hora +" >> " + mensaje + '\n'
        this.item.innerHTML += mensajeFinal
        this.item.scrollTop = this.item.scrollHeight
        this.log.push({fecha: fecha, mensaje: mensaje})
    }
}   