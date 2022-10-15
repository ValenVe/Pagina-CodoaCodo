const resumen = document.querySelector("#resumen")
const total = document.querySelector("#total")
const categoria = document.querySelector("#categoria")
const cantidad = document.querySelector("#cantidad")

const calcPrice = (cant, desc) => `Total a pagar: $ ${cant * 200 - (cant * 200) * desc}`

const descuentos = {
    Estudiante: 0.8,
    Trainee: 0.5,
    Junior: 0.15
}

resumen.addEventListener("click", function () {
    total.innerHTML = calcPrice(cantidad.value, descuentos[categoria.value])
})