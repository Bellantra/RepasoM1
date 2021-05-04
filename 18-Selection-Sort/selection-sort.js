function selectionSort(arr) {
  // construye un algoritmo de busqueda selection sort

  //Recorre el arreglo entero en la primer pasada y guarda en una variable el menor valor. Cuando termina, lo deja delante.
  //Arranca siempre el recorrido de la linea siguiente, dejando adelante los menores ordenados.
  var pos;
  

  for(var i = 0; i < arr.length-1; i++){
    var menor=undefined;
    for(var j = i ; j < arr.length -1; j++){
      
      if(arr[j+1] < arr[j]){
         menor = arr[j+1];
         pos = j+1;           
      }   
      
    }
    if(menor!==undefined){
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



