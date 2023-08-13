const usuarios = [
  {
    correo: "usuariosprueba1@prueba.com",
    contrasena: "123456",
    saldoInicial: 960,
  },
  {
    correo: "usuariosprueba2@prueba.com",
    contrasena: "123456",
    saldoInicial: 610,
  },
  {
    correo: "usuariosprueba3@prueba.com",
    contrasena: "123456",
    saldoInicial: 480,
  },
];

// Formulario login
const formularioLogin = document.getElementById("login");

if (formularioLogin) {
  formularioLogin.addEventListener("submit", function (event) {
    event.preventDefault();

    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;

    const usuarioLogueado = usuarios.find(
      (user) => user.correo === correo && user.contrasena === contrasena
    );

    if (usuarioLogueado) {
      window.localStorage.setItem(
        "usuarioLogueado",
        JSON.stringify(usuarioLogueado)
      );
      window.location.href = "/paginaprincipal.html";
    } else {
      alert("Datos erroneos");
    }
  });
}

//

function consultarSaldo() {
  const usuario = JSON.parse(window.localStorage.getItem("usuarioLogueado"));
    alert(usuario.saldoInicial);
}



function ingresarSaldo() {
  const ingresar = prompt("Cual es valor que desea ingresar?", "");
  const usuario = JSON.parse(window.localStorage.getItem("usuarioLogueado"));
  const nuevoSaldo = usuario.saldoInicial + parseInt(ingresar);


  if (nuevoSaldo > 990) {
    alert("No permite ingresar a su cuenta mas de 990");
  } else {
    usuario.saldoInicial = nuevoSaldo;
    window.localStorage.setItem("usuarioLogueado", JSON.stringify(usuario));

    alert("Su nuevo saldo es = " + nuevoSaldo);
  }
}
function retirarSaldo() {
  const retiro = prompt("Cual es valor que desea retirar?", "");
  const usuario = JSON.parse(window.localStorage.getItem("usuarioLogueado"));
  const nuevoSaldo = usuario.saldoInicial - retiro;

  if (nuevoSaldo < 10) {
    alert("No se puede dejar menos de 10 en su cuenta");
  } else {
    usuario.saldoInicial = nuevoSaldo;
    window.localStorage.setItem("usuarioLogueado", JSON.stringify(usuario));

    alert("Su nuevo saldo es = " + nuevoSaldo);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var salirBoton = document.getElementById("salir");
  salirBoton.addEventListener("click", function () {
    window.localStorage.clear();
  });
});
