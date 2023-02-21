// Importación inicial de los datos del JSON, para que siempre aparezcan de primeras en la página
fetch('https://raw.githubusercontent.com/FRomero999/ExamenDIW2022/main/clientes.json')
.then(response => response.json())
.then(data => {

data.forEach(function (el) {
  const tableBody = document.querySelector('#table tbody');

  let fila = document.createElement("tr");

  let celdaNombre = document.createElement("td");
  let celdaApellidos = document.createElement("td");
  let celdaSexo = document.createElement("td");
  let celdaEdad = document.createElement("td");
  let celdaPeso = document.createElement("td");
  let celdaAltura = document.createElement("td");
  let celdaActividad = document.createElement("td");
  let celdaGET = document.createElement("td");
  let celdaGER = document.createElement("td");

  let spanSexo = document.createElement("span");
  let spanActividad = document.createElement("span");

// Función para obtener el GER
const metabolismoGER = function (peso, altura, edad, sexo) {
  if (sexo === 'hombre') {
    return Math.floor(66.473 + (13.751 * peso) + (5.0033 * altura) - (6.755 * edad));
  } else if (sexo === 'mujer') {
    return Math.floor(655.0955 + (9.463 * peso) + (1.8496 * altura) - (4.6756 * edad));
  } else {
    return "Error en el cálculo";
  }
};

// Función para obtener el GET
const metabolismoGET = function (nivelActividad, metabolismoGER, sexo) {
  if (nivelActividad === "sedentaria" && sexo === 'hombre') {
    return Math.floor(metabolismoGER * 1.3);
  } else if (nivelActividad === "ligera" && sexo === 'hombre'){
    return Math.floor(metabolismoGER * 1.6);
  } if (nivelActividad === "moderada" && sexo === 'hombre') {
    return Math.floor(metabolismoGER * 1.7);
  } else if (nivelActividad === "intensa" && sexo === 'hombre') {
    return Math.floor(metabolismoGER * 2.1);
  } else if (nivelActividad === "sedentaria" && sexo === 'mujer') {
    return Math.floor(metabolismoGER * 1.3);
  } else if (nivelActividad === "ligera" && sexo === 'mujer') {
    return Math.floor(metabolismoGER * 1.5);
  } else if (nivelActividad === "moderada" && sexo === 'mujer') {
    return Math.floor(metabolismoGER * 1.6);
  } else if (nivelActividad === "intensa" && sexo === 'mujer') {
    return Math.floor(metabolismoGER * 1.9);
  } else {
    return "Error en el cálculo";
  }
}

celdaNombre.textContent = el.nombre
celdaApellidos.textContent = el.apellidos
celdaEdad.textContent = el.edad
celdaPeso.textContent = el.peso
celdaAltura.textContent = el.altura

spanSexo.textContent = el.sexo
spanActividad.textContent = el.actividad
const calculoGER = metabolismoGER(el.peso, el.altura, el.edad, el.sexo);
celdaGER.textContent = calculoGER;
celdaGET.textContent = metabolismoGET(el.actividad, calculoGER, el.sexo);

spanSexo.classList.add("bg-primary", "rounded", "text-white", "px-2");
celdaSexo.appendChild(spanSexo);

spanActividad.classList.add("bg-secondary", "rounded", "text-white", "px-2");
celdaActividad.appendChild(spanActividad);

fila.appendChild(celdaNombre);
fila.appendChild(celdaApellidos);
fila.appendChild(celdaSexo);
fila.appendChild(celdaEdad);
fila.appendChild(celdaPeso);
fila.appendChild(celdaAltura);
fila.appendChild(celdaActividad);
fila.appendChild(celdaGER);
fila.appendChild(celdaGET);
tableBody.appendChild(fila);
})
  .catch(err => {
  alert("Hubo error. Recargue la página.")
  });
});

// Fetch para importar los datos del JSON externo, asociado al botón "Cargar datos externos"
function cargarDatos() {
	fetch('https://raw.githubusercontent.com/FRomero999/ExamenDIW2022/main/clientes.json')
	.then(response => response.json())
	.then(data => {

  data.forEach(function (el) {
    const tableBody = document.querySelector('#table tbody');

    let fila = document.createElement("tr");

    let celdaNombre = document.createElement("td");
    let celdaApellidos = document.createElement("td");
    let celdaSexo = document.createElement("td");
    let celdaEdad = document.createElement("td");
    let celdaPeso = document.createElement("td");
    let celdaAltura = document.createElement("td");
    let celdaActividad = document.createElement("td");
    let celdaGET = document.createElement("td");
    let celdaGER = document.createElement("td");

    let spanSexo = document.createElement("span");
    let spanActividad = document.createElement("span");

  // Función para obtener el GER
  const metabolismoGER = function (peso, altura, edad, sexo) {
    if (sexo === 'hombre') {
      return Math.floor(66.473 + (13.751 * peso) + (5.0033 * altura) - (6.755 * edad));
    } else if (sexo === 'mujer') {
      return Math.floor(655.0955 + (9.463 * peso) + (1.8496 * altura) - (4.6756 * edad));
    } else {
      return "Error en el cálculo";
    }
  };

  // Función para obtener el GET
  const metabolismoGET = function (nivelActividad, metabolismoGER, sexo) {
    if (nivelActividad === "sedentaria" && sexo === 'hombre') {
      return Math.floor(metabolismoGER * 1.3);
    } else if (nivelActividad === "ligera" && sexo === 'hombre'){
      return Math.floor(metabolismoGER * 1.6);
    } if (nivelActividad === "moderada" && sexo === 'hombre') {
      return Math.floor(metabolismoGER * 1.7);
    } else if (nivelActividad === "intensa" && sexo === 'hombre') {
      return Math.floor(metabolismoGER * 2.1);
    } else if (nivelActividad === "sedentaria" && sexo === 'mujer') {
      return Math.floor(metabolismoGER * 1.3);
    } else if (nivelActividad === "ligera" && sexo === 'mujer') {
      return Math.floor(metabolismoGER * 1.5);
    } else if (nivelActividad === "moderada" && sexo === 'mujer') {
      return Math.floor(metabolismoGER * 1.6);
    } else if (nivelActividad === "intensa" && sexo === 'mujer') {
      return Math.floor(metabolismoGER * 1.9);
    } else {
      return "Error en el cálculo";
    }
  }

  celdaNombre.textContent = el.nombre
  celdaApellidos.textContent = el.apellidos
  celdaEdad.textContent = el.edad
  celdaPeso.textContent = el.peso
  celdaAltura.textContent = el.altura

  spanSexo.textContent = el.sexo
  spanActividad.textContent = el.actividad
  const calculoGER = metabolismoGER(el.peso, el.altura, el.edad, el.sexo);
  celdaGER.textContent = calculoGER;
  celdaGET.textContent = metabolismoGET(el.actividad, calculoGER, el.sexo);

  spanSexo.classList.add("bg-primary", "rounded", "text-white", "px-2");
  celdaSexo.appendChild(spanSexo);

  spanActividad.classList.add("bg-secondary", "rounded", "text-white", "px-2");
  celdaActividad.appendChild(spanActividad);

  fila.appendChild(celdaNombre);
  fila.appendChild(celdaApellidos);
  fila.appendChild(celdaSexo);
  fila.appendChild(celdaEdad);
  fila.appendChild(celdaPeso);
  fila.appendChild(celdaAltura);
  fila.appendChild(celdaActividad);
  fila.appendChild(celdaGER);
  fila.appendChild(celdaGET);
  tableBody.appendChild(fila);
  })
    .catch(err => {
    alert("Hubo error. Recargue la página.")
    });
  });
};

var template = document.querySelector("template")
var tabla = document.querySelector("tbody")
var cajetinNombre = document.querySelector("#nombre")
var cajetinApellidos = document.querySelector("#apellidos")
var cajetinSexo = document.querySelector("#sexo")
var cajetinEdad = document.querySelector("#edad")
var cajetinPeso = document.querySelector("#peso")
var cajetinAltura = document.querySelector("#altura")
var cajetinActividad = document.querySelector("#actividad")
var formulario = document.querySelector("form")

var bd = window.localStorage

var usuarios = []

if (bd.getItem("datos")) {
  usuarios = JSON.parse(bd.getItem("datos"))
  usuarios.forEach((u) => {
    let nuevaFila = template.content.cloneNode(true)
    nuevaFila.querySelector("td.nombre").innerText = u.nombre
    nuevaFila.querySelector("td.apellidos").innerText = u.apellidos
    nuevaFila.querySelector("span.sexo").innerText = u.sexo
    nuevaFila.querySelector("td.edad").innerText = u.edad
    nuevaFila.querySelector("td.peso").innerText = u.peso
    nuevaFila.querySelector("td.altura").innerText = u.altura
    nuevaFila.querySelector("span.actividad").innerText = u.actividad
    tabla.appendChild(nuevaFila)
  })
}

formulario.addEventListener("submit", (ev) => {
  ev.preventDefault()

  let usuario = crearUsuario()
  let nuevaFila = template.content.cloneNode(true)
  nuevaFila.querySelector("td.nombre").innerText = usuario.nombre
  nuevaFila.querySelector("td.apellidos").innerText = usuario.apellidos
  nuevaFila.querySelector("span.sexo").innerText = usuario.sexo
  nuevaFila.querySelector("td.edad").innerText = usuario.edad
  nuevaFila.querySelector("td.peso").innerText = usuario.peso
  nuevaFila.querySelector("td.altura").innerText = usuario.altura
  nuevaFila.querySelector("span.actividad").innerText = usuario.actividad
  nuevaFila.querySelector("td.get").innerText = usuario.get
  nuevaFila.querySelector("td.ger").innerText = usuario.ger
  tabla.appendChild(nuevaFila)

  usuarios.push(usuario)

  bd.setItem("datos", JSON.stringify(usuarios))
})

// Esta función crea un usuario dependiendo de su sexo y nivel de actividad
function crearUsuario() {
  if (cajetinSexo.value == "hombre") {
    if (cajetinActividad.value == "sedentaria") {
      return {
        "nombre": cajetinNombre.value,
        "apellidos": cajetinApellidos.value,
        "sexo": cajetinSexo.value,
        "edad": cajetinEdad.value,
        "peso": cajetinPeso.value,
        "altura": cajetinAltura.value,
        "actividad": cajetinActividad.value,
        "get": Math.floor(66.473 + 13.751 * cajetinPeso.value + 5.0033 * cajetinAltura.value - 6.755 * cajetinEdad.value),
        "ger": Math.floor((66.473 + 13.751 * cajetinPeso.value + 5.0033 * cajetinAltura.value - 6.755 * cajetinEdad.value) * 1.3)
      }
    }
    if (cajetinActividad.value == "ligera") {
      return {
        "nombre": cajetinNombre.value,
        "apellidos": cajetinApellidos.value,
        "sexo": cajetinSexo.value,
        "edad": cajetinEdad.value,
        "peso": cajetinPeso.value,
        "altura": cajetinAltura.value,
        "actividad": cajetinActividad.value,
        "get": Math.floor(66.473 + 13.751 * cajetinPeso.value + 5.0033 * cajetinAltura.value - 6.755 * cajetinEdad.value),
        "ger": Math.floor((66.473 + 13.751 * cajetinPeso.value + 5.0033 * cajetinAltura.value - 6.755 * cajetinEdad.value) * 1.6)
      }
    }
    if (cajetinActividad.value == "moderada") {
      return {
        "nombre": cajetinNombre.value,
        "apellidos": cajetinApellidos.value,
        "sexo": cajetinSexo.value,
        "edad": cajetinEdad.value,
        "peso": cajetinPeso.value,
        "altura": cajetinAltura.value,
        "actividad": cajetinActividad.value,
        "get": Math.floor(66.473 + 13.751 * cajetinPeso.value + 5.0033 * cajetinAltura.value - 6.755 * cajetinEdad.value),
        "ger": Math.floor((66.473 + 13.751 * cajetinPeso.value + 5.0033 * cajetinAltura.value - 6.755 * cajetinEdad.value) * 1.7)
      }
    }
    if (cajetinActividad.value == "intensa") {
      return {
        "nombre": cajetinNombre.value,
        "apellidos": cajetinApellidos.value,
        "sexo": cajetinSexo.value,
        "edad": cajetinEdad.value,
        "peso": cajetinPeso.value,
        "altura": cajetinAltura.value,
        "actividad": cajetinActividad.value,
        "get": Math.floor(66.473 + 13.751 * cajetinPeso.value + 5.0033 * cajetinAltura.value - 6.755 * cajetinEdad.value),
        "ger": Math.floor((66.473 + 13.751 * cajetinPeso.value + 5.0033 * cajetinAltura.value - 6.755 * cajetinEdad.value) * 2.1)
      }
    }
  }
  if (cajetinSexo.value == "mujer") {
    if (cajetinActividad.value == "sedentaria") {
      return {
        "nombre": cajetinNombre.value,
        "apellidos": cajetinApellidos.value,
        "sexo": cajetinSexo.value,
        "edad": cajetinEdad.value,
        "peso": cajetinPeso.value,
        "altura": cajetinAltura.value,
        "actividad": cajetinActividad.value,
        "get": Math.floor(655.0955 + 9.463 * cajetinPeso.value + 1.8496 * cajetinAltura.value - 4.6756 * cajetinEdad.value),
        "ger": Math.floor((655.0955 + 9.463 * cajetinPeso.value + 1.8496 * cajetinAltura.value - 4.6756 * cajetinEdad.value) * 1.3)
      }
    }
    if (cajetinActividad.value == "ligera") {
      return {
        "nombre": cajetinNombre.value,
        "apellidos": cajetinApellidos.value,
        "sexo": cajetinSexo.value,
        "edad": cajetinEdad.value,
        "peso": cajetinPeso.value,
        "altura": cajetinAltura.value,
        "actividad": cajetinActividad.value,
        "get": Math.floor(655.0955 + 9.463 * cajetinPeso.value + 1.8496 * cajetinAltura.value - 4.6756 * cajetinEdad.value),
        "ger": Math.floor((655.0955 + 9.463 * cajetinPeso.value + 1.8496 * cajetinAltura.value - 4.6756 * cajetinEdad.value) * 1.5)
      }
    }
    if (cajetinActividad.value == "moderada") {
      return {
        "nombre": cajetinNombre.value,
        "apellidos": cajetinApellidos.value,
        "sexo": cajetinSexo.value,
        "edad": cajetinEdad.value,
        "peso": cajetinPeso.value,
        "altura": cajetinAltura.value,
        "actividad": cajetinActividad.value,
        "get": Math.floor(655.0955 + 9.463 * cajetinPeso.value + 1.8496 * cajetinAltura.value - 4.6756 * cajetinEdad.value),
        "ger": Math.floor((655.0955 + 9.463 * cajetinPeso.value + 1.8496 * cajetinAltura.value - 4.6756 * cajetinEdad.value) * 1.6)
      }
    }
    if (cajetinActividad.value == "intensa") {
      return {
        "nombre": cajetinNombre.value,
        "apellidos": cajetinApellidos.value,
        "sexo": cajetinSexo.value,
        "edad": cajetinEdad.value,
        "peso": cajetinPeso.value,
        "altura": cajetinAltura.value,
        "actividad": cajetinActividad.value,
        "get": Math.floor(655.0955 + 9.463 * cajetinPeso.value + 1.8496 * cajetinAltura.value - 4.6756 * cajetinEdad.value),
        "ger": Math.floor((655.0955 + 9.463 * cajetinPeso.value + 1.8496 * cajetinAltura.value - 4.6756 * cajetinEdad.value) * 1.7)
      }
    }
  }
}

// Función para eliminar los datos del localstorage, como se indica en las instrucciones del ejercicio
window.onbeforeunload = function()  {
  localStorage.removeItem('datos');
};

// Listener que permite cerrar el modal tras un submit exitoso
addEventListener("submit", (ev) => {
  ev.preventDefault();
  bootstrap.Modal.getInstance(document.getElementById('staticBackdrop')).hide();
});