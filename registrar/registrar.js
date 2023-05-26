// Obtener el formulario de registro
const form = document.getElementById('registro');

// Recuperar usuarios almacenados o inicializar un array vacío
const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const nombre = form.elements['nombre'].value;
  const apellido = form.elements['apellido'].value;
  const email = form.elements['email'].value;
  const contraseña = form.elements['contraseña'].value;

  const datos = {
    nombre: nombre,
    apellido: apellido,
    email: email,
    contraseña: contraseña,
    saldo: 0 // Agregar el campo de saldo inicializado en 0
  };

  usuariosRegistrados.push(datos); // Agregar nuevos datos al array

  localStorage.setItem('usuarios', JSON.stringify(usuariosRegistrados)); // Guardar array actualizado en el Local Storage

  // Borra los datos del formulario después de enviarlo
  form.reset();

  // Accede a los datos de localStorage después de guardarlos
  const usuariosAlmacenados = JSON.parse(localStorage.getItem('usuarios'));
  if (usuariosAlmacenados) {
    console.log(usuariosAlmacenados);
  }

  // Redirecciona a la página de ingreso
  window.location.href = "./../ingresar/ingresar.html";
});


