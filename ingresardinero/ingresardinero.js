document.getElementById("ingresar-dinero-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener el monto a ingresar
    const montoIngresar = parseFloat(document.getElementById("montoaingresar").value);

    // Obtener el usuario actual del localStorage
    const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));

    // Verificar si el usuario actual existe
    if (usuarioActual) {
        // Verificar si el monto ingresado es válido
        if (isNaN(montoIngresar) || montoIngresar <= 0) {
            Swal.fire("Error", "Ingrese un monto válido.", "error");
            return;
        }

        // Actualizar el saldo del usuario actual
        usuarioActual.saldo = montoIngresar;

        // Guardar el usuario actualizado en el localStorage
        localStorage.setItem("usuarioActual", JSON.stringify(usuarioActual));

        // Mostrar un mensaje de alerta con el resultado exitoso
        Swal.fire("Éxito", "Ingreso de dinero exitoso.", "success").then(() => {
            // Redireccionar a la página de inicio
            window.location.href = "../inicio/inicio.html";
        });
    } else {
        Swal.fire("Error", "No ha iniciado sesión. Por favor, inicie sesión para realizar un ingreso de dinero.", "error");
    }
});

