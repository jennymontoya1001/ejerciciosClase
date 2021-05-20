let cadena = ("Amigo nos gima".split(" ").join("")).toLowerCase(); 
//amimemima hola saas eye amercedesesedecrema
//A Mercedes ese de crema
let limite = cadena.length - 1;
let count = 0;
for(let i =0 ; i<cadena.length/2;i++){
   if(cadena[i]===cadena[limite-i]){
        count = count +1;     
   }
}
if(Math.round((cadena.length/2)) == count){
   console.log(`La palabra ${cadena} es un palíndromo`);
}
else{
    console.log(`La palabra ${cadena} NO es un palíndromo`);
}
 console.log(count);