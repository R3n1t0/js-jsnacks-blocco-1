const numArray = [];

for(let i = 0; i < 5; i++){

  let numero = parseInt(prompt("Inserire numero"))

  if(numero % 2){
    numArray.push(numero)
  }

}

console.log(numArray);