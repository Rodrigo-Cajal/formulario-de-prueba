document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.querySelector('form');
    const mensajeExito = document.querySelector('.mensaje-exito');
    const mensajeError = document.querySelector('.mensaje-error');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#mail').value;
        const celular = document.querySelector('#celular').value;
        const mensaje = document.querySelector('#mensaje').value;

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'enviar.php', true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        xhr.onload = function() {
            if (xhr.status === 200) {
                if (xhr.responseText.trim() === 'exito') {
                    mensajeExito.textContent = 'El mensaje ha sido enviado correctamente.';
                    mensajeExito.style.display = 'block';
                    setTimeout(function() {
                        mensajeExito.style.display = 'none';
                        formulario.reset();
                    }, 2500);
                } else {
                    mensajeError.textContent = 'Error al enviar el mensaje.';
                    mensajeError.style.display = 'block';
                    setTimeout(function() {
                        mensajeError.style.display = 'none';
                    }, 2500);
                }
            }
        }

        const data = 'nombre=' + encodeURIComponent(nombre) +
            '&mail=' + encodeURIComponent(email) +
            '&celular=' + encodeURIComponent(celular) +
            '&mensaje=' + encodeURIComponent(mensaje);

        xhr.send(data);
    });
});




//Mostrar error en pantalla

function mostrarError(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');

    formulario.appendChild( error );



    setTimeout(() => {
    error.remove();
    }, 3000);
}



function mostrarMensaje(mensaje) {
    const valido = document.createElement('P');
    valido.textContent = mensaje;
    valido.classList.add('valido');

    formulario.appendChild( valido );



    setTimeout(() => {
    valido.remove();
    }, 3000);




    setTimeout(() => {
        window.location.replace("index.html");
        }, 4000);
}


