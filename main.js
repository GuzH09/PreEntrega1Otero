// Funcion
// Calcula el valor total de carrito sumando todas las unidades de un mismo producto,
// y da un descuento si pasas cierta cantidad de productos
function calculaTotal(precioProducto, cantidadParaDescuento, valorDescuento){
    let cantidadProducto = parseInt(prompt("Ingrese la cantidad de productos que desea comprar:"));
    let resultadoOriginal = precioProducto * cantidadProducto;
    
    if (cantidadProducto >= cantidadParaDescuento) {
        let resultadoDescuento = (precioProducto - (valorDescuento * precioProducto)) * cantidadProducto;
        alert(`Obtienes un descuento del ${valorDescuento * 100}%. Valor total: ${resultadoDescuento}. Valor sin descuento: ${resultadoOriginal}`);
    } else {
        alert(`No obtienes un descuento. Valor total: ${resultadoOriginal}.`);
    }
}

// Simulador Interactivo
let producto = prompt("Ingrese un producto (zapatillas - remera - jeans) o la palabra reservada ESC para finalizar.");
while (producto != "ESC") {
    switch (producto) {
        case "zapatillas":
            calculaTotal(20000, 3, 0.2);
            break;
        case "remera":
            calculaTotal(40000, 2, 0.3);
            break;
        case "jeans":
            calculaTotal(50000, 3, 0.4);
            break
        default:
            alert("Producto no reconocido. Productos disponibles: zapatillas - remera - jeans");
            break;
    }
    producto = prompt("Ingrese un producto (zapatillas - remera - jeans) o la palabra reservada ESC para finalizar.");
}