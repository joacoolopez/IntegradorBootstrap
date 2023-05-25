const botonEnviar = document.querySelector("#botonEnviar")
const selectTipo = document.querySelector("#selectTipo")
const cantidad = document.querySelector("#cantidad")



botonEnviar.addEventListener("click", function(event) {
    event.preventDefault();
    const v = 1 - selectTipo.value
    const valor = 200 * cantidad.value * v
    document.querySelector(".precioImagen").innerHTML = "Total a Pagar: $" + valor

});
