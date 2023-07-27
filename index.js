class Alumno {
    constructor() {
        this.nombre = nombre;
        this.promedio = promedio;
    }
}
function nota() {
    let nota1 = parseInt(prompt("Ingrese la 1er nota"));
    let nota2 = parseInt(prompt("Ingrese la 2er nota"));
    let nota3 = parseInt(prompt("Ingrese la 3er nota"));
    let suma = nota1 + nota2 + nota3;
    let promedio = suma / 3;
    Alumno.promedio = promedio.toFixed(2);
    return Alumno.promedio;
}
function listaAlumnos(num) {

    for (let i = 0; i < Alumnos.length; i++) {
        if (Alumnos[i].promedio >= 7) {
            console.log(Alumnos[i].nombre + " APROBADO " + " Nota final: " + Alumnos[i].promedio)
        } else {
            console.log(Alumnos[i].nombre + " DESAPROBADO " + " Nota final: " + Alumnos[i].promedio)
        }

    }

}
let num = parseInt(prompt("Cuantos alumnos desea agregar"));
let i = 0;
const Alumnos = [num]

while (i < num ) {
    Alumno.nombre = prompt("ingrese nombre del Alumno");
    nota();

    console.log("Nota final de " + Alumno.nombre + " " + Alumno.promedio);
    if (Alumno.promedio >= 7) {
        console.log("APROBADO");
    } else {
        console.log("DESAPROBADO");
    }
    i++;
}
/* console.log("LISTA DE AlumNOS")
listaAlumnos(); */