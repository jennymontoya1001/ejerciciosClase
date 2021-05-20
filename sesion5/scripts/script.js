const boton = document.getElementById('ingreso');

document.addEventListener('DOMContentLoaded', () => {
    //obtenerObjeto();
    limpiarLocalStorage();
   
})

boton.addEventListener('click', e => {
    capturaDatos();
})

function capturaDatos(){
    let primerNombre = document.querySelector('#txtPn').value; 
    let segundoNombre = document.querySelector('#txtSn').value;
    let primerApellido = document.querySelector('#txtPa').value;
    let segundoApellido = document.querySelector('#txtSa').value;
    let telefono = document.querySelector('#txtTel').value;
    guardarObjeto(primerNombre,segundoNombre,primerApellido,segundoApellido,telefono);

}

function  guardarObjeto(pNombre,sNombre,pApellido,sApellido,tel){

    let empleado = {
        nombre1: pNombre,
        nombre2: sNombre,
        apellido1: pApellido,
        apellido2: sApellido,
        telefono: tel
    }
    localStorage.setItem("Empleado",JSON.stringify(empleado));
    localStorage.setItem("Primer Nombre",empleado.nombre1);
    localStorage.setItem("Primer Apellido",empleado.apellido1);
    localStorage.setItem("Telefono",empleado.telefono);
}

function obtenerObjeto(){
    let nombre1 = localStorage.getItem("Primer Nombre");
    let telefono = localStorage.getItem("Telefono");
    console.log(`su nombre es ${nombre1} y si número de teléfono 
    es ${telefono}`);
}

function limpiarLocalStorage(){
   localStorage.clear();

}