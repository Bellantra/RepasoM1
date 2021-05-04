function selectionSort(arr) {
  // construye un algoritmo de busqueda selection sort

  //Recorre el arreglo entero en la primer pasada y guarda en una variable el menor valor. Cuando termina, lo deja delante.
  //Arranca siempre el recorrido de la linea siguiente, dejando adelante los menores ordenados.
  var pos;
  
  //Estructure ppal que recorre todo el arreglo 
  for(var i = 0; i < arr.length-1; i++){
    var menor=undefined;                        //arranca undefined en cada inicio de este for, para saber si hay algun numero menos¡r para cambiar
    for(var j = i ; j < arr.length -1; j++){   //recorro siempre desde el i en adelante porque delante del i esta ordenado siempre
      
      if(arr[j+1] < arr[j]){
         menor = arr[j+1];    //guardo menor valor
         pos = j+1;           //guardo la posicion donde esta ese valor menor(la voy a necesitar para cambiar) 
      }   
      
    }
    if(menor!==undefined){    //si encontre uno menor al valor del i, realizo el cambio
      var aux = arr[i];
      arr[i] = menor;
      arr[pos] = aux;      
    }
  }

  return arr;

}

/* var array=[2,3,1,4,6];
var arrOrdenado = selectionSort(array);      //PASA ESTO POR CONSOLA
console.log(arrOrdenado) */ 



