//Inserisci un numero

let numero = prompt("Inserisci un numero");

let numeroSuccessivo = numero++;

//se è pari stampa il numero
//se è dispari stampa il numero successivo.
if (numero % 2 == 0){
    document.getElementById("boh").innerHTML = numero;
}else {
    document.getElementById("boh").innerHTML = numeroSuccessivo;
}