const contenuto = document.getElementById("contenuto");

for(let i = 1; i < 50; i++){
  
  console.log(i)

  let multi = i ** 2;
  
  console.log(multi);


  if(multi < 1000){

    contenuto.innerHTML = multi;

  }

}



