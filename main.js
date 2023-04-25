let nombreCompleto =prompt("Ingresa tu nombre y apellido:");
const IVA = 0.19;
alert("Bienvenido " + nombreCompleto + " cuentáme que te deseas llevar");

function montoAPagar(){
    
    let productoAdquirido = prompt("Ingrese el nombre del producto adquirido:");
    let montoProducto=parseFloat(prompt("Inserta el valor del producto adquirido:"));
    let cantidadProducto =parseInt(prompt("Inserta cuantas unidades del producto quieres llevar:"));
    let montoNeto= montoProducto*cantidadProducto;
    let montodelIVA =montoNeto*IVA;
    let montoTotal = montoNeto+montodelIVA;
    alert("Muy bien " + nombreCompleto + " entonces deseas llevarte " + cantidadProducto +  productoAdquirido + " el monto total a pagar sería " + montoTotal);

    let metodoDePago = prompt("Ingresa el metodo de pago a utilizar:").toLowerCase();

    
    if(metodoDePago =="efectivo"){
        let dineroEntregado= prompt("Ingresa cuanto dinero en efectivo vas a entregar para el pago:");
        vuelto = dineroEntregado- montoTotal;
        alert("Muchas gracias por su compra, " + nombreCompleto  +" este es su vuelto" + vuelto);
    }
    if(metodoDePago =="debito"){
        alert("El monto total a pagar quedaría en" + montoTotal);
    }


    if(metodoDePago == "credito"){
        let cuotas =prompt("¿Deseas pagar con cuotas sin interes? Reponder Si o No:").toLowerCase();
        if(cuotas == "si"){
            let cantidadCuotas =prompt("¿Con cuantas cuotas deseas pagar? 3,6,9 o 12:");
            montoAPagarPorCadaCuota = montoTotal/cantidadCuotas;
            alert("Muchas gracias por su compra, " + nombreCompleto  + " el monto por cada cuota seria: " + montoAPagarPorCadaCuota);
        } else{
            alert("Muchas gracias por su compra, " + nombreCompleto  + " el monto total a pagar quedaría en " + montoTotal);

    }
    return montoAPagar;
    }
};
montoAPagar();
alert("Gracias por tu compra " + nombreCompleto + " estamos realizando un sorteo a todos nuestros clientes del día de hoy por un descuento del 50% en su próxima compra para participar debes adivinar la palabra secreta")

let participar = prompt("¿Deseas participar en el sorteo?: ")
let palabraSecreta = "chile"
function sorteo (){
    if(participar =="si"){
        alert("Tienes hasta 10 intentos para encontrar la palabra secreto:")
        alert("Pista: la palabra secreta es el nombre de un país")
        for( let i= 0; i <10; i++){
            palabra = prompt("Ingresa la palabra secreta: ")
            
            if(palabra == palabraSecreta){
                alert("Excelente, te ganaste un descuento del 50% en tu proxima compra")
                break
                
            }else{
                alert("sigue intentando")
                }
            }
    
    }else{
        alert("Será para una próxima oportunidad")
    }
};
sorteo();

