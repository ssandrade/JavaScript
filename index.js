
class Alumno {
    constructor(nombre, promedio) {
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

function agregarAlumnos() {
    let op = prompt("¿Desea añadir un alumno al principio de la lista o al final?");

    if (op == "principio") {
        let nom = prompt("Ingrese el nombre del alumno");
        let pro = nota();
        let alumno = new Alumno(nom, pro);
        listaAlumnos.unshift(alumno);

    } else if (op == "final") {
        let nom = prompt("Ingrese el nombre del alumno");
        let pro = nota();
        let alumno = new Alumno(nom, pro);
        listaAlumnos.push(alumno);

    } else {
        console.log("No ha seleccionado una opción correcta");
    }

}

function eliminarAlumnos() {

    let eliminar = prompt("¿Qué alumno desea eliminar?");
    listaAlumnos.splice(eliminar, 1);
}

function lista() {

    for (let i = 0; i < listaAlumnos.length; i++) {
        if (listaAlumnos[i].promedio >= 7) {
            console.log(listaAlumnos[i].nombre + " APROBADO " + " Nota final: " + listaAlumnos[i].promedio);
            console.log("====================");
        } else {
            console.log(listaAlumnos[i].nombre + " DESAPROBADO " + " Nota final: " + listaAlumnos[i].promedio);
            console.log("====================");

        }
    }

}

function crearAlumnos(num) {

    for (let i = 0; i < num; i++) {
        let nombre = prompt("Ingrese el nombre del alumno");
        let promedio = nota();
        let alumno = new Alumno(nombre, promedio);
        listaAlumnos.push(alumno);
    }


}
const num = parseInt(prompt("Ingrese la cantidad de alumnos para agregar"));
const listaAlumnos = [];
crearAlumnos(num);

console.log("MENÚ PRINCIPAL");
console.log("1.Agregar alumnos");
console.log("2.Eliminar alumno");
console.log("3.Mostrar alumnos y sus notas");


i = 0;
let seguir = true;

while (seguir) {

    let opcion = prompt("Ingrese una opción del 1 al 3");

    switch (opcion) {
        case "1":
            agregarAlumnos();
            break;
        case "2":
            eliminarAlumnos();
            break;
        case "3":
            lista();
            break;
        default:
            console.log("OPCIÓN INVALIDA");
            break;
    }

    seguir = prompt("Desea volver al menú principal");

    if (seguir == "si") {
        seguir = true;
    } else {
        seguir = false;
    }
    i++;
}

console.log("Nos vemos pronto!!");
