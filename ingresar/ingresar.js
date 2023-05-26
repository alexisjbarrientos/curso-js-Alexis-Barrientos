const form = document.getElementById('login');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const contraseña = document.getElementById('contraseña').value;
  const datosAlmacenados = localStorage.getItem('usuarios');

  if (datosAlmacenados) {
    const usuariosRegistrados = JSON.parse(datosAlmacenados);

    const usuarioEncontrado = usuariosRegistrados.find(usuario => usuario.email === email && usuario.contraseña === contraseña);
    
    if (usuarioEncontrado) {
      swal("¡Bienvenido, " + usuarioEncontrado.nombre + " " + usuarioEncontrado.apellido + "!");

      // Guardar el usuario actual en el Local Storage
      localStorage.setItem('usuarioActual', JSON.stringify(usuarioEncontrado));

      // Redirecciona a la página de inicio
      window.location.href = "../inicio/inicio.html";
    } else {
      alert("Correo electrónico o contraseña incorrecta.");
    }
  } else {
    alert("No hay usuarios registrados.");
  }
});
