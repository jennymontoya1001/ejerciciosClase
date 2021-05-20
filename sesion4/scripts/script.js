function guardarLocalStorage(){

    let persona = {
        nombre: "Jenny",
        edad: 28,
        correo: "jenny@gmail.com"
    }

    localStorage.setItem("Edad",edad);
    localStorage.setItem("Persona",JSON.stringify(persona));
}

guardarLocalStorage();









