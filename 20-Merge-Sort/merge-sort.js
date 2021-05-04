function mergeSort(arr) {
  //

   //Caso Base
   if(array.length<=1) return array;


   var division= dividirArray(array);
   var izquierda = division[0];
   var derecha = division[1];
 
   //Recursion
   return orderAndMerge(mergeSort(izquierda), mergeSort(derecha));
   
}
//-------------------------------------------------------------------------------------------------------------//
  //               FUNCIONES ADICIONALES QUE SE NECESITAN EN EL MERGE  

function dividirArray (array){
  // Divido el array a la mitad y luego mando cada mitad a arrays de izq y der
  var divide=Math.floor(array.length/2);
  var arrayLeft=array.slice(0,divide);      //pongo desde posicion 1 hasta la mitad
  var arrayRight=array.slice(divide);    // pongo desde mitad, hasta el final. 

  return [arrayLeft,arrayRight]
}

function orderAndMerge(izq,der){
  var arregloOrdenado=[];

  var puntero1=0;
  var puntero2=0;

  while (puntero1 < izq.length && puntero2 < der.length){
    if(izq[puntero1] < der[puntero2]){
      arregloOrdenado.push(izq[puntero1]);
      puntero1++
    }else {
      arregloOrdenado.push(der[puntero2]);
      puntero2++
    }
  }
  return arregloOrdenado.concat(izq.slice(puntero1).concat(der.slice(puntero2)));
}
