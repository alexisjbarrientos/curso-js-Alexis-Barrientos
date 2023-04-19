
// // variables
// let usuario = "alexis";
// let contra ="4432";
// let exito = login();

// // ingreso
// function login(){
//     let ingreso = false;

//     for (let i =2; i >= 0 ;i--){
//         let user = prompt("ingresar usuario");
//         let pin = prompt ("ingrese contraseña");

//         if (user==usuario && pin == contra) {
//             alert ("bienvenido " + usuario);
//             ingreso = true;
//             break;
//         } else {
//             alert("Error de Usuario o Contraseña te quedan " + i + " oportunidades");
//         }
//     }
//     return ingreso;
// }

// if (exito){
//     let saldo = 35000;
//     let menu = prompt (usuario + "Elija una opción: \n1- ver saldo. \n2- ingresar dinero. \n3- transferir dinero. \n5 Presionar 0 para finalizar.");

//     while(menu != "0"){
//         switch (menu) {
//             case "1":
//                 alert("su saldo es $" + saldo);
//             break;
//             case "2":
//                 let depositar = parseInt(prompt("Ingresar monto"));
//                 saldo =saldo + depositar;
//                 alert("Su saldo es de " + saldo);
//             break;
//             case "3":
//                 let transferir= parseInt(prompt("Ingresar monto a transferir "));
//                 if (transferir <= saldo) {
//                     saldo = saldo - transferir;
//                     alert("Transferiste $ " + transferir + ", tu saldo actual es $ " + saldo);
//                     if(transferir<= 50000){
//                         saldo = saldo - transferir;
//                         alert("Transferiste $ " + transferir + ", tu saldo actual es $ " + saldo);
//                     } else {
//                         alert("Excede el limite diario de transferencia");
//                     }
//                 } else {
//                     alert("Saldo insuficiente, Ingrese otro monto");
//                 }
//             break;
//             default:
//                 alert("Opcion no valida");
//             break;
//         }
//         menu = prompt (usuario + "Elija una opción: \n1- ver saldo. \n2- ingresar dinero. \n3- transferir dinero. \n5 Presionar 0 para finalizar.");
//     }
// } else {
//     alert("Usuario bloqueado");
// }
