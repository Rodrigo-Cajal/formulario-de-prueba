<?php 
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = $_POST['nombre'];
    $email = $_POST['mail'];
    $celular = $_POST['celular'];
    $mensaje = $_POST['mensaje'];

    $destinatario = 'rodriezecajal@hotmail.com';
    $asunto = 'Formulario de prueba';

    $contenido = "Nombre: $nombre\n";
    $contenido .= "Email: $email\n";
    $contenido .= "Celular: $celular\n";
    $contenido .= "Mensaje: $mensaje\n";

    $headers = "From: $nombre <$email>";

    if (mail($destinatario, $asunto, $contenido, $headers)) {
        echo 'exito';
    } else {
        echo 'error';
    }
}
?>


