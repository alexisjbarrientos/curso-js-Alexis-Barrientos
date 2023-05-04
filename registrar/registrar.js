const form = document.getElementById('registro');

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
    contraseña: contraseña
  };

  const datosIngreso = JSON.stringify(datos);

  localStorage.setItem('datos', datosIngreso);

  // Borra los datos del formulario después de enviarlo
  form.reset();

  // Accede a los datos de localStorage después de guardarlos
  const datosAlmacenados = localStorage.getItem('datos');
  if (datosAlmacenados) {
    const datosRecuperados = JSON.parse(datosAlmacenados);
    console.log(datosRecuperados);
  }

  form.action ="./../ingresar/ingresar.html";
});