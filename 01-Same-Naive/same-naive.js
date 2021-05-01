/**
 * Escribe una function llamada same que acepte dos arrays.
 * La funcion deberia retornar true si cada valor del primer array es 
 * igual al cuadrado de valor del segundo array. 
 * La frecuencia debe ser la misma.

 * @param {Array} arr1 - esto es un array.
 * @param {Array} arr1 - esto es un array.
 * @returns {boolean} - deberia retornar true o false.
 */

function same(arr1, arr2) {

    if(arr1.length!==arr2.length) return false;

var esIgual=0;

    for (var i=0 ;i < arr1.length; i++){
        if(arr1[i]===Math.pow(arr2[i],2)){
            esIgual++
                }
    }

    if(esIgual===arr1.length) {
        return true;
    }else return false;
}

//var array1 = [1,4,9,16,25,36];                 
//var array2 = [1,2,3,4,5,6];
                                         //EJEMPLOS UTILIZADOS
//var array3 = [4,5,6,7];
//var array3 = [1,2]

