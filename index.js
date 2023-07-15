class alumno {
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
    alumno.promedio = suma / 3;
    return alumno.promedio;
}

let num = parseInt(prompt("Cuantos alumnos desea agregar"));
let i = 0;
while(i < num ) {
    alumno.nombre = prompt("ingrese nombre del alumno");

    nota();

    console.log("Nota final de " + alumno.nombre + " " + alumno.promedio);
    if (alumno.promedio >= 7) {
        console.log("APROBADO");
    } else {
        console.log("DESAPROBADO");
    }
    i++;
   
}
