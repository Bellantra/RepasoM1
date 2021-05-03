class Node {
  constructor(value){
      this.value = value;
      this.next = null;
  }
}

class Stack {
  constructor(){
      this.first = null;
      this.last = null;
      this.size = 0;
  }
  push(val){
    //Pongo nodos arriba en la pila
    
    //Creo Nodo y cargo valor
    var newNode = new Node(val);

    //Pregunto si esta vacia
    if(this.first===null){
      this.first = newNode;
      this.last = newNode;
      this.size++;
      return newNode;
    }else if (this.first.next===null){   //Si solo hay un nodo, debo cambiar el last
      this.first.next = newNode;
      this.last = newNode;
      this.size++;
      return newNode;
    }else{       //Como se agrega por atras, solo muevo el last cuando hay 2 nodos o +
      this.last.next = newNode;
      this.last = newNode;
      this.size++;
      return newNode;
    }  
     
  }
  pop(){
  //Al ser una Pila, es LIFO (Last in, first out)
  
  //Me fijo que haya algo que sacar
  if(this.first===null) return false;

  //Compruebo si hay solo 1 nodo (en este caso hay que setear null ambos punteros)
  if(this.first.next===null){
    var nodoSacado = this.first;
    this.first = null;
    this.last = null;
    this.size--;
    return nodoSacado;
  }else if(this.first.next===this.last){  //Si ese next es el ultimo nodo
    var nodoSacado = this.last;
    this.first.next = null;
    this.last = this.first;
    this.size--;
    return nodoSacado;
  }

  //Cuando hay mas de 2 nodos camino la pila para encontrar el anteultimo
  var current = this.first;
  var posAnterior;

  while(current.next){
     posAnterior = current;
     current = current.next;
  }
  var nodoSacado = current;
  this.last = posAnterior;
  this.last.next = null;
  this.size--;
  return nodoSacado;
  }
  
}