const primaParola = prompt("Inserire il Prima Parola")
const secondaParola = prompt("Inserire il Seconda Parola")
const contenuto = document.getElementById("contenuto")


console.log(primaParola);
console.log(secondaParola);

if(primaParola.length > secondaParola.length){
  contenuto.innerHTML = primaParola;

}else if(primaParola.length < secondaParola.length){
  contenuto.innerHTML = secondaParola;

}else{
  contenuto.innerHTML = `${primaParola} lunga uguale a ${secondaParola}`;
}