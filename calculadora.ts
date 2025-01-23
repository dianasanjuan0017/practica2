let v1: number;
let v2: number;

function sumar(v1: number, v2: number): number {
    return v1 + v2;
}

function restar(v1: number, v2: number): number {
    return v1 - v2;
}

function multiplicar(v1: number, v2: number): number {
    return v1 * v2;
}

const division = (v1: number, v2: number): number | string => {
    if (v2 === 0) {
        return "Error matemático: no se puede dividir po 0";
    }
    return v1 / v2;
};


function calcular(): void {
    const value1 = (document.getElementById("value1") as HTMLInputElement).value;
    const value2 = (document.getElementById("value2") as HTMLInputElement).value;
    const operacion = (document.getElementById("operacion") as HTMLSelectElement).value;

    if (!value1 || !value2) {
        mostrarResultado("Por favor, ingresa ambos valores");
        return;
    }

    v1 = parseFloat(value1);
    v2 = parseFloat(value2);

    let resultado: number | string;

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


function mostrarResultado(mensaje: string): void {
    const resultadoc = document.getElementById("result");
    if (resultadoc) {
        resultadoc.textContent = mensaje;
    }
}
