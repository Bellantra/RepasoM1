/**
 * Escribe una funcion llamada productOfArray que reciba un array y 
 * mutiplique cada elemento con el siguiente.
 * Debe retornar el total de la multiplicacion de todos los elementos.

 * @param {Array} arr - esto es un array.
 * @returns {Number} - deberia retornar un number.
 */
//arr=[2,8,7,3,9,5]          multiplicacion=15120
 
function productOfArray(arr) {
    var multiplicacion=1;

    for(var i=0;i<arr.length;i++){
        multiplicacion= multiplicacion * arr[i];
    }
    return multiplicacion;
}

//CON RECUERSION
/* function productOfArray(arr) {
    if (arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1));
  } */
