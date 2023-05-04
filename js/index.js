// let users = [  
//     {    name: "alexis",    password: "4432",    cash: 35000  }, 
//     {    name: "julia",    password: "1234",    cash: 10000  }, 
//     {    name: "juan",    password: "5678",    cash: 50000  }];

// function buscarUsuario(name) {
//   return users.find(user => user.name === name);
// }

// function login() {
//   let intentos = 3;

//   while (intentos > 0) {
//     let name = prompt("Ingrese su usuario:");
//     let password = prompt("Ingrese su contraseña:");

//     let user = buscarUsuario(name);

//     if (user && user.password === password) {
//       alert("¡Bienvenido, " + name + "!");
//       return user;
//     } else {
//       intentos--;
//       alert("Nombre de usuario o contraseña incorrecta. Le quedan " + intentos + " intentos.");
//     }
//   }

//   alert("Su usuario ha sido bloqueado. Por favor, comuníquese con el soporte técnico.");
// }

// let user = login();

// if (user) {
//   let menu = prompt(user.name + 
//     ", elija una opción:\n1. Ver saldo\n2. Ingresar dinero\n3. Transferir dinero\n0. Salir");

//   while (menu !== "0") {
//     switch (menu) {
//       case "1":
//         alert("Su saldo es de $" + user.cash);
//         break;
//       case "2":
//         let monto = parseInt(prompt("Ingrese el monto a ingresar:"));

//         if (isNaN(monto)) {
//           alert("El monto ingresado no es válido.");
//         } else {
//           user.cash += monto;
//           alert("Se han ingresado $" + monto + ". Su saldo actual es de $" + user.cash);
//         }

//         break;
//       case "3":
//         let destino = prompt("Ingrese el usuario al que desea transferir:");
//         let destinatario = buscarUsuario(destino);

//         if (!destinatario) {
//           alert("El usuario ingresado no existe.");
//         } else {
//           let monto = parseInt(prompt("Ingrese el monto a transferir:"));

//           if (isNaN(monto)) {
//             alert("El monto ingresado no es válido.");
//           } else if (monto > user.cash) {
//             alert("Saldo insuficiente.");
//           } else if (monto > 50000) {
//             alert("El monto ingresado excede el límite diario de transferencia.");
//           } else {
//             user.cash -= monto;
//             destinatario.saldo += monto;
//             alert("Se han transferido $" + monto + " a " + destinatario.name +
//              ". Su saldo actual es de $" + user.cash);
//           }
//         }

//         break;
//       default:
//         alert("Opción inválida.");
//     }

//     menu = prompt(user.cash +
//          ", elija una opción:\n1. Ver saldo\n2. Ingresar dinero\n3. Transferir dinero\n0. Salir");
//   }
// }
