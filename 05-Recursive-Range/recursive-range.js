/**
 * Escribe una funcion llamada recursiveRange que reciba un numero y 
 * sume todos los numeros desde 0 hasta el numero dado.
 * Debe retornar esa suma.

 * recursiveRange(6) // 0 + 1 + 2 + 3 + 4 + 5 + 6 = 21

 * @param {Array} arr1 - esto es un array.
 * @returns {Array || undefined} - deberia retornar un array o undefined.
 */

function recursiveRange(num) {
    var suma =0;
    var i=0;

    while(i!==num){
        suma=suma +i;
        i++;
    }
    return suma;
}

//CON RECURSION
/* function recursiveRange(num) {
    // if(num === 0)
    if (num < 1) return 0;
  
    return num + recursiveRange(num - 1);
  } */
