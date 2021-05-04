function Node (val){    
      this.val = val;
      this.next = null;    
  }
  
  function SinglyLinkedList (){
   
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

 SinglyLinkedList.prototype.push = function push(val) {
      // El metodo push nos permite insertar un nuevo valor AL FINAL
  
      //Creo nodo y cargo el valor pasado por parametro.
      var nuevoNodo = new Node(val);
  
      //Reviso si tengo que pushear a una Lista vacia
      if(this.head===null) {           
        this.head= nuevoNodo;       
        this.length++;                     //CONSULTAR SOBRE THIS.LENGTH_ 
        return nuevoNodo;                                            
      }
      
      //Caso de tener mas elementos, buscando el ultimo
      var current =this.head;
      while(current.next){
        current = current.next;
      }
      current.next = nuevoNodo;
      this.tail = nuevoNodo;
      this.length++;
      return nuevoNodo;
      
      
    }
  
    SinglyLinkedList.prototype.pop = function pop() {
      // El metodo pop nos permite eliminar un nuevo valor AL FINAL
  
      //La lista esta vacia
      if(this.head===null) return null;
  
      // La lista tiene 1 elemento(no hay next)
      if(this.head.next===null){       // 
        var nodoSacado=this.head;
        this.head=null;
        this.length--;
        return nodoSacado;
      }
  
      //La lista tiene mas de 1 elemento
      var current=this.head;          
      while(current.next.next){
         current=current.next;                    
      }
      var nodoSacado= current.next;
      this.tail=current;    
      current.next=null;         //EN EL CASO DE SACAR LA TAIL NO IMPORTA?    
      this.length--;
      return nodoSacado;   
    }
  
    SinglyLinkedList.prototype.shift = function shift() {
      // El metodo shift nos permite eliminar un nuevo valor AL PRINCIPIO
  
      //La lista esta vacia
      if(this.head===null) return null;
      
      //La lista tiene mas de 1 elemento
      var current = this.head;
      var nodoSacado = current.val;
      current = current.next;
      this.head = current;       // CAMBIO EL HEAD PARA QUE NUEVO HEAD SEA EL SEGUNDO NODO
      this.length--;
      return nodoSacado;    
    }
  
    SinglyLinkedList.prototype.unshift = function unshift(data) {
      // Esto insertara un nuevo valor AL PRINCIPIO
  
      //Instancio nuevo Nodo y cargo el valor pasado por parametro en el metodo
      var nuevoNodo = new Node(data);
  
      //Si la lista esta vacia
      if(this.head===null){        
        this.head = nuevoNodo;
        this.length++;
      }else{
        //Si hay mas elementos en la lista      
        var current = this.head;
        this.head = nuevoNodo;     //No recorro porque lo meto en el Head directamente
        this.head.next = current; 
        this.length++;          //NO SE SI QUEDO BIEN LOS ENLACES, VER IMAGEN PYTHON
                                //LOS ENLACES SE VEN BIEN PERO DESORDENADO NODOS
      }
    }
  
    SinglyLinkedList.prototype.get = function get(index) {
      // Ya que estas listas no poseen indice este es un metodo artificial para crearle uno.
      var contadorIndices=0;   //Va a arrancar en la pos 0 ( no va a coincidir length)!!
      //Si la lista esta vacia retorna 0
      if(this.head===null) return false;
  
      //Compruebo que el indice que pasan, no sea mayor que el length, en ese caso no va a encontrar nada
      if(index >= this.length) return false;
  
      //Si la lista tiene elementos
      var current = this.head;
          while(current){
              if(index!==contadorIndices){  //si es diferente el index al contador de indice
                 current= current.next;
                 contadorIndices++;
              }else{
                //Aca entra cuando lo encuenta al indice
                 var elemento = current.val;
                 return elemento;  // retorno el valor del indice buscado
              }
            }    
               
      }  
  
      SinglyLinkedList.prototype.set = function set(index, data) {
      // Este metodo nos permite reemplazar un valor existente en el indice que le indicamos
  
      var contadorIndices=0;   //Va a arrancar en la pos 0 ( no va a coincidir length)!!
  
      //Si la lista esta vacia retorna 0
      if(this.head===null) return false;
  
      //Compruebo que el indice que pasan, no sea mayor que el length, en ese caso no va a encontrar nada
      if(index >= this.length) return false;
  
      //Si la lista tiene elementos
      var current = this.head;
          while(current){
              if(index!==contadorIndices){  //si es diferente el index al contador de indice
                 current= current.next;
                 contadorIndices++;
              }else{
                //Aca entra cuando lo encuenta al indice
                 current.val = data;
                 return true;  // retorno true si encuentro indice y lo reemplazo
              }
            }    
    }
  
    SinglyLinkedList.prototype.insert = function insert(index, data) {
      // Este metodo nos permite insertar un nuevo nodo en CUALQUIER parte de la lista
  
      var contadorIndices=0;   //Va a arrancar en la pos 0 ( no va a coincidir length)!!
      var nuevoNodo = new Node (data);
  
      //Si la lista esta vacia retorna 0
      if(this.head===null) return false;
  
      //Compruebo que el indice que pasan, no sea mayor que el length, en ese caso no va a encontrar nada
      if(index >= this.length) return false;
  
      //Si la lista tiene elementos
      var current = this.head;
          while(current){
              if(index!==contadorIndices){  //si es diferente el index al contador de indice
                 current= current.next;
                 contadorIndices++;
              }else{
                //Aca entra cuando lo encuenta al indice
                var aux = current.next;
                current.next = nuevoNodo;
                nuevoNodo.next = aux;
                this.length++; 
                return true;  // retorno true si encuentro indice y lo agrego
              }               //Se agrega en la posicion siguiente al indice que encuentra ??
            }    
  
    }
  
    SinglyLinkedList.prototype.remove = function remove(index) {
      //Esto nos permite eliminar un valor en CUALQUIER parte de la lista
  
      var contadorIndices=0;   //Va a arrancar en la pos 0 ( no va a coincidir length)!!
  
      //Si la lista esta vacia retorna 0
      if(this.head===null) return false;
  
      //Compruebo que el indice que pasan, no sea mayor que el length, en ese caso no va a encontrar nada
      if(index >= this.length) return false;
  
      //Si la lista tiene elementos
      var current = this.head;
      var posAnterior;
          while(current){
              if(index!==contadorIndices){  //si es diferente el index al contador de indice
                posAnterior = current;
                current= current.next;
                 contadorIndices++;
              }else{
                //Aca entra cuando lo encuenta al indice
                 var nodoSacado = current;
                 current = current.next;
                 posAnterior.next = current;
                 this.length--;
                 return nodoSacado;  // retorno nodo que saque!
              }
            }    
    }
  
    SinglyLinkedList.prototype.reverse = function reverse(lista) {                //CAMBIE COMO QUE RECIBE UNA LISTA PARAMETRO
      // revierte esta lista
      var nuevaListaInvertida = new SinglyLinkedList();
      
      var node = lista.pop();   //SACA ULTIMO DE LA LISTA QUE RECIBE
     
      while(node!==null){
         var value = node.val;
         nuevaListaInvertida.push(value);  // ARMA LA LISTA INVERTIDA AGREGANDO NODOS
         node = lista.pop();
      }
  
      return nuevaListaInvertida;
        
      
    }

   /*  var nuevaLista = new SinglyLinkedList();
     nuevaLista.push(1);
     nuevaLista.push(2);
     nuevaLista.push(3);
     nuevaLista.push(4); */
  
 //console.log(nuevaLista);
  //   nuevaLista.pop();
  //  nuevaLista.shift();
  //   nuevaLista.unshift(5);
 // nuevaLista.get(1);
  // nuevaLista.reverse(nuevaLista);
