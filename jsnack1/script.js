const primoNumero = parseInt(prompt("Inserire il Primo Numero"))
const secondoNumero =parseInt(prompt("Inserire il Secondo Numero")) 

const contenuto = document.getElementById("contenuto")


console.log(primoNumero);
console.log(secondoNumero);

if(primoNumero > secondoNumero){
  contenuto.innerHTML = primoNumero;

}else if(primoNumero < secondoNumero){
  contenuto.innerHTML = secondoNumero;

}else{
  contenuto.innerHTML = PARI;
  
}
