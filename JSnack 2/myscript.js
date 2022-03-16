let nomi = ["Piero", "Giovanni", "Gertrude", "Amilcare", "Alfonso"];

let cognomi = ["Rossi", "Alighieri", "Verga", "Leopardi", "Manzoni"];

let combinedArray = []

for (let i = 0; i < 5; i++) { 
    let nomeRandom = nomi[Math.floor(Math.random()*nomi.length)];
    let cognomeRandom = cognomi[Math.floor(Math.random()*cognomi.length)];
    combinedArray.push( nomeRandom + cognomeRandom )
    console.log(cognomi.length)
}

let falsi = document.getElementById("nomiFalsi").innerHTML = combinedArray;