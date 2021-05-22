//variables
const formulario = document.querySelector('#formulario');
const listaNotas = document.querySelector('#listaNotas');
let arreglo = [];


//Funciones
const crearRegistro = (n,p1,p2,p3) => {
     let registro = {
         nombre: n,
         periodo1: p1,
         periodo2: p2,
         periodo3: p3
     };
     arreglo.push(registro);
     return registro;
}

const guardarDatos = () =>{
    localStorage.setItem('Notas',JSON.stringify(arreglo));
    listarDatos();
}
const listarDatos = () => {
    listaNotas.innerHTML = '';
    arreglo = JSON.parse(localStorage.getItem('Notas'));
    //console.log(arreglo);
    
   arreglo === null ? (arreglo = []) : (
       arreglo.forEach(element => {
           listaNotas.innerHTML += `<div class="alert alert-primary" role="alert">
           <i class="material-icons float-left mr-2" >
           accessibility
           </i>
             <b>${element.nombre}</b>
             <b>${element.periodo1}</b>
             <b>${element.periodo2}</b>
             <b>${element.periodo3}</b>
             <span class="float-right">
                 <i class="material-icons">delete</i>
             </span>
       </div>
    </div>`
       })
   )
}

const eliminarRegistro = (estudiante) => {
    let indexArreglo;
     arreglo.forEach((elemento,index) => {
         if(elemento.nombre === estudiante){
            indexArreglo = index;
         }
     })

     arreglo.splice(indexArreglo,1);
     guardarDatos();
}
//Eventos
formulario.addEventListener('submit', e => {
    e.preventDefault();
    let nom = document.querySelector('#nom').value;
    let per1 = document.querySelector('#p1').value;
    let per2 = document.querySelector('#p2').value;
    let per3 = document.querySelector('#p3').value;
    
    //console.log(nom);
    crearRegistro(nom,per1,per2,per3);
    guardarDatos();
    formulario.reset();
})

document.addEventListener('DOMContentLoaded',listarDatos);

listaNotas.addEventListener('click', (e)  => {
  e.preventDefault();
   let texto = e.path[2].childNodes[3].innerHTML;

     if(e.target.innerHTML === 'delete'){
        eliminarRegistro(texto);
     }
});

