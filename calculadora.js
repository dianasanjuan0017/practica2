"use strict";
let v1;
let v2;
function sumar(v1, v2) {
    return v1 + v2;
}
function restar(v1, v2) {
    return v1 - v2;
}
function multiplicar(v1, v2) {
    return v1 * v2;
}
const division = (v1, v2) => {
    if (v2 === 0) {
        return "Error matemático: no se puede dividir po 0";
    }
    return v1 / v2;
};
function calcular() {
    const value1 = document.getElementById("value1").value;
    const value2 = document.getElementById("value2").value;
    const operacion = document.getElementById("operacion").value;
    if (!value1 || !value2) {
        mostrarResultado("Por favor, ingresa ambos valores");
        return;
    }
    v1 = parseFloat(value1);
    v2 = parseFloat(value2);
    let resultado;
    switch (operacion) {
        case "sumar":
            resultado = sumar(v1, v2);
            break;
        case "restar":
            resultado = restar(v1, v2);
            break;
        case "multiplicar":
            resultado = multiplicar(v1, v2);
            break;
        case "division":
            resultado = division(v1, v2);
            break;
        default:
            resultado = "Operación no válida";
    }
    mostrarResultado(`Resultado: ${resultado}`);
}
function mostrarResultado(mensaje) {
    const resultadoc = document.getElementById("result");
    if (resultadoc) {
        resultadoc.textContent = mensaje;
    }
}
