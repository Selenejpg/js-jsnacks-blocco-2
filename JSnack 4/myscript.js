//Crea due array che hanno un numero di elementi diversi

let array1 = [1,2, 3, 4];

let array2 = [1,2, 3, 4, 5, 6];

//Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
for (let index = 0; index < array2.length; index++) {
    
    console.log(array1);
    console.log(array2);

    if (array1.length != array2.length) {
        array1.push("item");
    }else{
       // break; conoscenza proibita
    }

}
