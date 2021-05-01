/**
 * Escribe una funcion que reciba un array y un numero promedio. 
 * Determina si dentro del array dos numeros dan el promedio pasado.
 * Deberia retornar true si dos numeros sumados dentro del array 
 * es igual al num pasado.

 * @param {Array} arr1 - esto es un array.
 * @returns {Array || undefined} - deberia retornar un array o undefined.
 */

//arr=[1,3,7,4,5,3]   num=6
//arr=[1,3,7,4,5,3]   num=100 

function averagePair(arr, num) {

    for(var i=0;i < arr.length; i++){
        for(var j=i+1;j<arr.length;j++){
            if((arr[i]+arr[j])/2===num){
                return true;
            }
        }
    }
    return false;
}
