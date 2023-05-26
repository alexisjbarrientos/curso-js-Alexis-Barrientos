window.addEventListener("DOMContentLoaded", function() {
    // Recuperar el usuario actual del Local Storage
    const usuarioActual = JSON.parse(localStorage.getItem('usuarioActual'));

    // Verificar si hay un usuario actual
    if (usuarioActual) {
      // Mostrar el nombre del usuario actual en el encabezado
    const h2Bienvenido = document.querySelector("h2");
    h2Bienvenido.textContent = "Bienvenido " + usuarioActual.nombre;

      // Mostrar el saldo del usuario actual
    const saldoElement = document.getElementById("saldo-value");

      // Verificar si el usuario actual tiene un saldo definido
    if (typeof usuarioActual.saldo !== 'undefined') {
        saldoElement.textContent = "Saldo disponible: $" + usuarioActual.saldo;
    } else {
        saldoElement.textContent = "Saldo disponible: $0";
    }
    } else {
      // Redireccionar al inicio de sesión si no hay usuario actual
    window.location.href = "../ingresar/ingresar.html";
    }
});
