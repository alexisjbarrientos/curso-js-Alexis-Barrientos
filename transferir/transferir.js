// Obtener el formulario de transferencia
const transferForm = document.querySelector('form');

// Manejar el evento de envío del formulario
function transferir(event) {
    event.preventDefault();

    // Obtener los valores ingresados por el usuario
    const nombreUsuario = document.getElementById('ndu').value;
    const montoTransferir = parseFloat(document.getElementById('montoatransferir').value);

    // Verificar si el monto de transferencia es válido
    if (montoTransferir <= 0 || isNaN(montoTransferir)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ingrese una cantidad de dinero válida.'
        });
        return;
    }

    // Verificar si la transferencia excede el límite diario de $100,000
    if (montoTransferir > 100000) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No puede transferir más de $100,000 por día.'
        });
        return;
    }

    // Recuperar el usuario actual del Local Storage
    const usuarioActual = JSON.parse(localStorage.getItem('usuarioActual'));

    // Verificar si el usuario actual existe
    if (usuarioActual) {
        // Verificar si el usuario actual tiene saldo suficiente para transferir
        if (montoTransferir > usuarioActual.saldo) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No tiene suficiente dinero disponible para realizar la transferencia.'
            });
            return;
        }

        // Restar el monto de transferencia al saldo del usuario actual
        usuarioActual.saldo -= montoTransferir;

        // Guardar el usuario actualizado en el Local Storage
        localStorage.setItem('usuarioActual', JSON.stringify(usuarioActual));

        // Mostrar el mensaje de transferencia exitosa
        Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Transferencia exitosa. Se ha transferido $' + montoTransferir.toFixed(2) + ' a ' + nombreUsuario + '.'
        });

        // Redireccionar a la página de inicio
        window.location.href = "../inicio/inicio.html";
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No ha iniciado sesión. Por favor, inicie sesión para realizar una transferencia.'
        });
    }

    // Restablecer los campos del formulario
    transferForm.reset();
}

// Asignar la función al evento de envío del formulario
transferForm.addEventListener('submit', transferir);
