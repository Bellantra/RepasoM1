function bubbleSort(arr) {
  // construye un algoritmo de busqueda bubble sort

  //Comparo desde primer posicion con la siguiente. Asi mismo,toda la estructura, que va llevando en cada 
  //pasada; los numeros mas grandes al final del array.

  var aux;
  //Este determina cuantas pasadas va a ser (en el caso de usar for el max de pasadas sera la longitud del array)
  for(let i=0; i < arr.length; i++){  //aca recorro el array en su totalidad
    //Esta estructura compara las posiciones y cambia de ser necesario. Se va decremenatando el recorrido en cada pasada
    for(let j= 0; j < arr.length -1 -i; j++){ //resto i para no comparar ultimos numeros q estan acomodados.
      if(arr[j] > arr[j+1]){
        aux = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = aux;
      }
    }
  }
  //retorno array ordenado. 
  return arr;

  //Este ejercicio se puede hacer con una estructura While tambien por fuera, usando una variable booleana que
  //controle si hay cambio y si no hay que corte. Esto haria que no haga el max de pasadas de no ser necesario.
}
