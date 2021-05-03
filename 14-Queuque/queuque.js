class Node {
  constructor(value){
      this.value = value;
      this.next = null;
  }
}

class Queue {
  constructor(){
      this.first = null;
      this.last = null;
      this.size = 0;
  }
  enqueue(val){
    
    //Creo nodo y cargo valor
    var newNode = new Node(value);

    //Compruebo que este vacio, si asi es, directamente lo coloco en el principio
    if(this.first===null){
      this.first = newNode;
      this.last = newNode;
      this.size++;
      return newNode;
    }
      
    //Compruebo que tenga mas de 1 nodo. En este caso va aparte por el puntero last
    if(this.first.next===null){
      this.first.next = newNode;
      this.last = newNode;
      this.size++;
      return newNode;
    }else {       //si tengo mas de dos nodos, solo muevo el last!
      this.last.next = newNode;
      this.last = newNode;
      this.size++;
      return newNode;
    }
  }

  dequeue(){
      //Elimina el primer nodo

      //Me fijo que haya algo que sacar
      if(this.first===null) return false;

      //Compruebo si hay solo 1 nodo (en este caso hay que setear null ambos punteros)
      if(this.first.next===null){
        var nodoSacado = this.first;
        this.first = null;
        this.last = null;
        this.size--;
        return nodoSacado;
      }else {   //si hay mas nodos, solo muevo el primero
        var nodoSacado = this.first;
        this.first = this.first.next;
        this.size--;
        return nodoSacado;        
        }
      }
      
  }
