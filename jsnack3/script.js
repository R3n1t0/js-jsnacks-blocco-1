
const contenuto = document.getElementById("contenuto");

let somma = 0;

for(let i = 0; i < 5; i++){

  let numero = parseInt(prompt("Inserire Numero"));
  somma += numero;
}

contenuto.innerHTML = (somma);