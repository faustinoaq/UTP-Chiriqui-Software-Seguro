(function () {
  var id = document.querySelector("#app")
  var saludo = "¡Hola UTP Chiriqui!"
  var mensaje = "Desarrollando software para todos."

  id.insertAdjacentHTML("beforeend", `
    <h1>${saludo}</h1>
    <p>${mensaje}</p>
  `)
})()
