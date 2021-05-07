let cantidad = 0;
const matricula = 900000
let descuento = 0;
let total;

function Calcular(){

    cantidad = document.getElementById('cantidad').value;
    document.getElementById('matricula').value = matricula;

    if(cantidad >= 1 && cantidad <= 6){
       descuento = matricula * 0.5;
       console.log(descuento);
    } else if(cantidad > 6 && cantidad <=10){
        descuento =  matricula * 0.25;
    }else{
        descuento = 0;
    }
    total = matricula - descuento;
    document.getElementById('descuento').value = descuento;
    document.getElementById('total').value = total;    

}