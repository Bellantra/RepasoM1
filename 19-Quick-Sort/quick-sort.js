function quickSort(arr) {
  // ordenamiento mas eficaz con el uso de pivote. Divide and conquer.

  var pivote = arr[0];   //Elijo pivote al ppio del array
  var derecha = [];
  var izquierda = [];

  if(arr.length <= 1) return arr;  //retorna arr cuando llega por parametro un array con 1 elemento
  
  if(arr.length > 1){                           //mientras s¡tenga mas de un elemento separo con el pivote de referencia
    for(let i = 1; i < arr.length ; i++){
     if(arr[i] < pivote){
       izquierda.push(arr[i]);        //menores a izquierda
     }else {
       derecha.push(arr[i]);        //mayores o iguales a derecha
     }
    }
  }

  return [].concat(quickSort(izquierda),pivote,quickSort(derecha));  //retorno concatenando
}

/* var array2=[5,1,4,2,8];
var array2ordenado= quickSort(array2);  //prueba
console.log(array2ordenado); */

/* function quickSort(array) {     Con un pivote mas elaborado
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
  //5 1 4 2 8   pivote = 4            arrL[12]             arrR[58]   
  //                      pivote=1  arrL[] arrR[2]       arrL[]   arrR[8] pivote=5
  //                                                       
   
   var arrayLeft=[];
   var arrayRight=[];
   var pivote = Math.floor(array.length/2);
   var valor = array[pivote];    

   if(array.length>1){

     for(var i=0; i < array.length; i++){
    
      if(array[i] < valor) {
      arrayLeft.push(array[i]);
    }
    if (array[i]>valor){
      arrayRight.push(array[i]);      
    }  
    if(array[i]===valor && i!==pivote) {
      arrayRight.push(array[i]);
    }            
   }
   return quickSort(arrayLeft).concat(valor,quickSort(arrayRight));
  }       
   return array;
 } */