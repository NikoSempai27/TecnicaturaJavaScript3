// While
let contador = 0;
while(contador < 3){
    console.log(contador);
    contador++;
}
console.log("Fin del Ciclo While");

// do While
let conteo = 0;
do{
    console.log(conteo);
    conteo++;
}while(conteo < 3);
console.log("Fin del Ciclo do While");

// For
for(let contando = 0; contando < 3; contando++){
    console.log(contando);
}
console.log("Fin del Ciclo for");

// Palabra reservada Break
for(let contando = 0; contando <= 10; contando++){
    if(contando % 2 == 0){
        console.log(contando); //Muestra todos los pares
        break;
    }
}
console.log("Termina el ciclo al encontrar el primer numero par");

// La palabra reservada continue y Etiquetas Labels
inicio:
for(let contando = 0; contando <= 10; contando++){
    if(contando % 2 !== 0){
        continue inicio; // Ir a la siguiente iteracion
    }
    console.log(contando);
}
console.log("Termina el ciclo");



