const form = document.getElementById('login');

if (form) {
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const contraseña = document.getElementById('contraseña').value;

    const datosAlmacenados = localStorage.getItem('datos');
    if (datosAlmacenados) {
      const datosRecuperados = JSON.parse(datosAlmacenados);
      if (email === datosRecuperados.email && contraseña === datosRecuperados.contraseña) {
        alert("¡Bienvenido, " + datosRecuperados.nombre + " " + datosRecuperados.apellido + "!");
        window.location.href = "../inicio/inicio.html"; // Redirecciona a la página de inicio
      } else {
        alert("Correo electrónico o contraseña incorrecta.");
      }
    } else {
      alert("No hay datos almacenados.");
    }
  });
}