import axios from 'axios'


export function enviarSolicitud(metodo, parametros, url, mensaje) {
    axios({ method: metodo, url: url, data: parametros })
    .then(function (response) {
        let estado = response.status;
        if (estado === 200) {
            alert(mensaje);
            window.location.reload();
        }
    })
    .catch(function (error) {
        console.error("Estado de la petición: ", error);
        alert('No se pudo realizar la acción');
    });
}
