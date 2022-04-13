const contenuto = document.getElementById("contenuto");

const lista = [];

for(let i = 0; i < 5; i++){
  
  let numero = parseInt(prompt("Inserire Numero"));
  
  numero = numero ** 3;

  lista.push(numero);

}

contenuto.innerHTML = lista;