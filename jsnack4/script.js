const contenuto = document.getElementById("contenuto");

const gatsbyGuests = ['domenico agostino',
'mihai badia',
'riccardo becattini',
'manuel benini',
'bruno bernardini',
'guido buono',
'pierluigi cancellaro',
'francesco cataletto',
'stefano cravotta',
'giovanni crispino',
'giancarlo croce',
'enrico de stefano',
'silvia dugato',
'carlo duminuco del monte',
'francesco ercoli',
'luca gaddini',
'marco gagliano',
'cristina gasperini',
'gabriele giusti',
'chiara grillo',
'manuela ienuso',
'michele iliescu',
'ketevan jorjoliani',
'renato lami',
'davide manciucca',
'emanuele mastronardi',
'luca mazzarini',
'daniele monteleone',
'salvatore olivieri',
'leonardo pellegrini',
'agostino piquè',
'davide pizzolla',
'antonio pollo',
'ivan russo',
'amanjit singh',
'sebastiano visco'
];

const presentName = prompt("Inserire Nome").toLowerCase();

let verifiedName = false;

for(let i = 0; i < gatsbyGuests.length; i++){

  if(presentName === gatsbyGuests[i]){
    
    verifiedName = true;
  }
  
}


if(verifiedName){

  contenuto.innerHTML = "Wellcome"

}else{

  contenuto.innerHTML = "I'm Sorry. You are not on the list"

}


  

