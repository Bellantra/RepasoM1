/**
 * Escribe una function llamada sumZero que acepte un array de numeros 
 * enteros ordenado. La function deberia encontrar el primer para de 
 * numeros que sumados den 0. Retorna un array que incluya los dos 
 * numeros encontrados o undefined si el par no existe..

 * @param {Array} arr1 - esto es un array.
 * @returns {Array || undefined} - deberia retornar un array o undefined.
 */
  //arr=[1,4,8,7,-1]
  //arr=[1,2,3,4,5,6,7]          USE ESTOS 3 DE PRUEBA
  //arr=[1,2-13-2]

function sumZero(arr) {
    var nuevoArray;
    for(var i=0;i < arr.length;i++){
      for(var j=1;j<arr.length;j++){       
          if (arr[i]+arr[j]===0){
              nuevoArray = [arr[i],arr[j]];
              return nuevoArray;
          }
      }
    }
    return nuevoArray;
}
