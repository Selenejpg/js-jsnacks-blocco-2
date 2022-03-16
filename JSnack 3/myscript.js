//fai la somma di tutti gli elementi  che sono in posizione dispari

//Crea un array di numeri interi
let numeri = [1, 2, 3, 4, 5, 6, 7 ,8 ,9 ,10]
let somma = 0

for (let i = 0; i < numeri.length; i++) {
    let numero = numeri[i]
   
    if (numero % 2 === 0) { 
    }else {
        somma += numeri[i]
    }
}

console.log(somma);