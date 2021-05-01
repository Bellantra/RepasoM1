class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    // El metodo push nos permite insertar un nuevo valor AL FINAL

    //Creo nodo y cargo el valor pasado por parametro.
    var nuevoNodo = new Node(val);

    //Reviso si tengo que pushear a una Lista vacia
    if(this.head===null) {           
      this.head = nuevoNodo; 
      this.tail = nuevoNodo;      
      this.length++;                     
      return nuevoNodo;                                            
    }else{
      //Caso de tener elementos en la lista
      var aux = this.tail;
      this.tail = nuevoNodo;
      aux.next = nuevoNodo;
      this.length++;
    } 
   
    /* //Caso de tener mas elementos, buscando el ultimo
    var current =this.head;
    while(current.next){
      current = current.next;        //VARIANTE SIN TAIL COMO VIMOS EN CLASE
    }
    current.next = nuevoNodo;
    this.tail = nuevoNodo;
    this.length++;
    return nuevoNodo; */
    
    
  }

  pop() {
    // El metodo pop nos permite eliminar un nuevo valor AL FINAL

    //La lista esta vacia
    if(this.head===null) return 0;   //Retorna 0 si la lista esta vacia .

    // La lista tiene 1 elemento(no hay next)
    if(this.head.next===null){        
      var nodoSacado = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return nodoSacado;     //En el caso de haber un solo nodo, retorna el nodo ese
    }

    //La lista tiene mas de 1 elemento
    var current = this.head;
    var posAnterior;          
    while(current.next){
      posAnterior = current;
      current = current.next;                    
    }
    var nodoSacado = current;
    this.tail = posAnterior;    
    posAnterior.next = null;          
    this.length--;
    return nodoSacado;   
  }

  shift() {
    // El metodo shift nos permite eliminar un nuevo valor AL PRINCIPIO

    //La lista esta vacia
    if(this.head===null) return null;
    
    //La lista  1 elemento 
    if(!this.head.next) {
      var nodoSacado = this.head;
      this.head = null;            //TUVE QUE IMPLEMENTAR CASO DE 1 SOLO POR EL TEMA DE LOS 
      this.tail = null;            // 2 NULLS Y DE QUE NO LEIA BIEN LOS NULL DE NEXT EN 1 SOLA ESTRUCTURA DE 1 O MAS.
      this.length--;
      return nodoSacado;
    }

    //La lista tiene mas elementos  
    var current = this.head;
    var nodoSacado = current;
    current = current.next;
    this.head = current;      // CAMBIO EL HEAD PARA QUE NUEVO HEAD SEA EL SEGUNDO NODO    
    this.length--;
    return nodoSacado;    
  }

  unshift(data) {
    // Esto insertara un nuevo valor AL PRINCIPIO

    //Instancio nuevo Nodo y cargo el valor pasado por parametro en el metodo
    var nuevoNodo = new Node(data);

    //Si la lista esta vacia
    if(this.head===null){        
      this.head = nuevoNodo;
      this.tail = nuevoNodo;
      this.length++;
    }else{
      //Si hay mas elementos en la lista      
      var current = this.head;
      this.head = nuevoNodo;     //No recorro porque lo meto en el Head directamente
      this.head.next = current;     
      this.length++;          
    }
  }

  get(index) {
    // Ya que estas listas no poseen indice este es un metodo artificial para crearle uno.
    
    var contadorIndices=0;   //Va a arrancar en la pos 0 ( no va a coincidir length)!!
    
    //Si la lista esta vacia, o el indice es superior al largo de la lista o es negativo, retorno false
    if(this.head===null || index >= this.length || index < 0) return null;
    
    
    //Si la lista tiene elementos
    var current = this.head;  
        while(current){
            if(index!==contadorIndices){  //si es diferente el index al contador de indice               
              current= current.next;
               contadorIndices++;
            }else{
              //Aca entra cuando lo encuenta al indice
               var elemento = current;
               return elemento;  // retorno el valor del indice buscado
            }
          }  
           
    }  

  set(index, data) {
    // Este metodo nos permite reemplazar un valor existente en el indice que le indicamos

   //Llamo al metodo get para encontrar el nodo buscado por el indice
   var nodoBuscado = this.get(index);

   //Suplanto el valor en el nodo que me retorno el metodo get si me devuelve algo
   if(nodoBuscado){
     nodoBuscado.val = data;
     return true;  // retorno true si encuentro indice y lo reemplazo   
   }          
  
  }

  insert(index, data) {
    // Este metodo nos permite insertar un nuevo nodo en CUALQUIER parte de la lista   
    
    //Considero casos donde no va a estar el indice en mi lista.
    if(index < 0 || index >=this.length) return false;
   
    //Considero las opciones de que el indice coincida con el head o con el tail y reutilizo metodos ( para que se actualicen los head y tail tambien)
    if(index===0){      //Si coincide con el head, reutilizo unshift
      var nuevoNodo = this.unshift(data);
      return nuevoNodo;      
    }else if (index===this.length-1){ //Si coincide con el tail, reutilizo push
      var nuevoNodo = this.push(data);
      return nuevoNodo;
    }
    
    //Cuando esta en el medio de la lista
    var posAnterior = get(index-1); //pido el index anterior para poder insertar nuevo nodo en la posicion adecuada 
             
    var nuevoNodo = new Node(data);
    var aux = posAnterior.next;
    posAnterior.next = nuevoNodo;
    nuevoNodo.next = aux;
    this.length++; 
    return true;  // retorno true si encuentro indice y lo agrego      
                    

  }

  remove(index) {
    //Esto nos permite eliminar un valor en CUALQUIER parte de la lista

    //Casos donde el index no va a ser encontrado
    if(index < 0 || index >= this.length - 1) return false; 

    //Casos donde coincida con el head o tail, reutilizo metodos para acomodar el head y tail.
    if(index===0){
      var nodoSacado = this.shift();   //si coincide con el head, uso metodo shift
      return nodoSacado;
    }else if(index===this.length - 1){
      var nodoSacado = this.pop();     //si coincide con el tail, uso metodo pop
      return nodoSacado;
    }
    
    //Aca cuando esta en el medio de la lista
           
     var posAnterior = this.get(index-1);  // Para sacar un nodo, pido la posicion anterior 
     var nodoSacado = posAnterior.next;      //Establezco el nodo que voy a sacar como el siguiente al que traje con el metodo
     posAnterior.next = nodoSacado.next;      //Y aca enlazo el next de la posicion anterior, con el next del nodo que saco , asi lo elimino
     this.length--;
     return nodoSacado;  // retorno nodo que saque!
  
              
  }

  reverse() {                //CAMBIE COMO QUE RECIBE UNA LISTA PARAMETRO
    // revierte esta lista
    /* var nuevaListaInvertida = new SinglyLinkedList();        //Este metodo mio requiere poner parametro (lista)
    
    var node = lista.pop();   //SACA ULTIMO DE LA LISTA QUE RECIBE
   
    while(node!==null){
       var value = node.val;
       nuevaListaInvertida.push(value);  // ARMA LA LISTA INVERTIDA AGREGANDO NODOS
       node = lista.pop();
    }

    return nuevaListaInvertida; */
    
    var node = this.head;
    this.head = this.tail;
    this.tail = node;

    var prev = null;
    var next;
    for (var p = 0; p < this.length; p++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
    
  }
}
