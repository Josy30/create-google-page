let nombre = "josy"
let apellido = "huaman"
let edad = 30

let personaje = {
    nombre: "josy",
    apellido: "huaman",
    edad: 30,
};
console.log(personaje);
console.log(personaje.console);

personaje.edad = 31;

delete personaje.apellido;
console.log(personaje)

