const contenuto = document.getElementById("contenuto");

const numero = prompt("Inserire un numero di quatro cifre");

const array = numero.split('');

console.log(array);

let somma  = 0;

for(let i = 0; i < array.length; i++){

  somma += JSON.parse(array[i]);

}

console.log(somma);

contenuto.innerHTML = somma;