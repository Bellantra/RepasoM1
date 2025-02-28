class HashTable {
  constructor() {
    this.numBackets = 35;
    this.buckets = [];
  }

  hash(key) {
    // do something...
    var suma = 0;

    //recorro la key letra por letra
    for(var i = 0; i<key.length; i++){
      var suma = suma + key.charCodeAt(i);      
    }

    //Devuelvo el Modulo de la suma para que coincida con el rango de buckets
    return suma % this.numBackets;
  }

  set(key, value) {
    // do something...
    //En esta funcion debo ubicar el valor en el bucket correspondiente

    //Me fijo que el key sea un string
    if(typeof key !== 'string') return 'Las keys deben ser strings';

    //Si es un string, se lo envio a la funcion hash para que me devuelva un index de bucket
      var index = this.hash(key);
      
      //busco la posicion para guardar el valor
      if(this.buckets[index]===undefined){
        this.buckets[index] = {[key]:value};    //consultar bien nomenclatura!!!
      }else{
        this.buckets[index][key] = value;        
      }   
}

  get(key) {
    // Este metodo nos devuelve el value dentro de cada objeto de buckets.
    //Busco el bucket de la key, con la funcion hash
    var index = this.hash(key);
    
    //primero me fijo, si el bucket tiene algo..???O si esta vacio va a devolver undefined?
   
    return this.buckets[index][key];  //si tiene , retorno el valor de la key;
    
}

  hasKey(key) {
    // Este metodo devuelve true o false si la key indicada se encuentra en nuestra hash table.

    //primero busco el bucket de la key
    var index = this.hash(key);

    //primero compruebo que el bucket tenga algo
    if(this.buckets[index]){
      if(this.buckets[index][key]){  //si dentro del bucket esta la key, retorno true
        return true;
      }
      return false;    //si no esta la key, retorno false
    }

    return false;    //Si no hay nada en el bucket rotorno false
  }

  key() {
    // Nos permite obtener todas las key dentro de nuestra hash table

    //Si el lenght del array buckets es null, entonces no hay nada
    if(this.buckets.length===0) return 0;

    //Si hay algo, tengo que recorrer el arreglo
    for(var i=0; i< this.buckets.length - 1; i++){
      if(this.buckets[i]!==undefined){
        return this.buckets[i];            //Ver ejemplo cargado , es raro como imprime...
      }                                    //revisar!! 
    }
    
  }

  value() {
    // Nos permite obtener todas los values dentro de nuestra hash table
  }
}
