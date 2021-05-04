const { defaultMaxListeners } = require("node:events")

function insertionSort(arr) {
  // construye un algoritmo de busqueda insertion sort

 //recorro comparando cada pos con todas las anteriores del array; compara si es menor con todas las que estan 
 //delante de ella. Van quedando siempre ordenados las primeras posiciones. Cuando acomoda la ultima posicion
 //el array ya queda ordenado.
  
 var aux; 
 //Esta estructura recorre el array de principio a fin
 for(let i=0; i < arr.length; i++){

  for(var j=i; j >= 0; j--){    //esta estructura empieza siempre en la pos i y retrocede comparando hasta llegar a la posicion 0
    if(arr[j+1] < arr[j]){
      aux = arr[j];
      arr[j] = arr[j+1];
      arr[j+1]=aux;
    }     
  }
}
 //Retorno array Ordenado
 return arr;  
}

/* var array=[5,9,7,1,4,3,25,40];
var arrOrdenado=insertionSort(array);           //PRUEBA EN CONSOLA.
console.log(arrOrdenado);
 */