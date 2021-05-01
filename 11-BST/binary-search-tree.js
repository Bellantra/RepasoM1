class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    // escribe un metodo que inserte un nodo al final
    
    //Crear el nodo e inicializarlo con el dato
    var newNode= new Node(value);

    //Ver si el root esta vacio
    if(this.root===null) {
      this.root= newNode;
      return newNode;      
    }  

    var current = this.root;
    //Empiezo a buscar lugar
    while(current){
      //por la izquierda
      if(newNode.value < current.value){
        if(current.left){
          current= current.left;
        }else {
          current.left=newNode;
          return newNode;
        }
      }else{  //vamos por la derecha
        if(current.right){
          current=current.right;
        }else{
          current.right=newNode;
          return newNode;
        }
      }
    } 
       
  }
  insertRecursivo(value,current=this.root){
     //Crear el nodo e inicializarlo con el dato
     var newNode= new Node(value);

     //Ver si el root esta vacio
     if(this.root===null) {
       this.root= newNode;
       return newNode;      
     }  

     //Empiezo a buscar lugar
     if(newNode.value < current.value){
      //va por izquierda
     if(current.left===null){
       current.left=newNode; 
       return newNode;                                
     }else{                                   
      return this.insertRecursivo(value,current.left);   //Llamo recursivamente 
      }
   }else{     //Caso en que sea >= van por derecha
     //va por derecha
     if(current.right===null){
       current.right=newNode;
       return newNode;
     }else{
       return this.insertRecursivo(value,current.right);     
     }
   }

  }

  find(value) {
    // escribe un metodo que busque un nodo especifico

    //Primero compruebo si hay root
    if(this.root===null){
      return false;
    }

    var current=this.root;

    while(current){
      if(value < current.value){  //Va por izquierda
        if(current.left){
          if(current.left.value===value){
            return true;
          }else{
            current = current.left;        //No es igual, muevo hacia proximo
          }
        } else{               //Si no hay nada en izquierda. No esta el valor.
          return false;       //retorno false
        }       
      }else {           //POR DERECHA
        if(current.right){
          if(current.right.value===value){
            return true;
          }else{
            current = current.right;   //No es igual, muevo hacia proximo
          }
        }else{
          return false;          //Si no hay nada por derecha. No esta valor, retorno false
        }        
      }
    }
 
        
  }
  findRecursivo (value, current= this.root) {
    // escribe un metodo que busque un nodo especifico

    //Primero compruebo si hay root
    if(current===null){
      return false;
    }
   
    //Caso Base
    if(value===current.value) return true;

    //recursion comprobando las ramas

   
    if(current.left && value < current.left.value){
      //rama izquierda
      return this.findRecursivo(value,current.left);
    }
         
    if(current.right && value >= current.right.value){
      //rama derecha
      return this.findRecursivo(value,current.right);
    }

    //Si no lo encuentra ni por derecha , ni por izquierda, el valor no esta
    return false;
   
  }
  
  size1 (current = this.root){        //RECURSIVO VERSION CORTA --------> NO ENCONTRE FORMA SIN RECURSIVIDAD
    // escribe un metodo que determine el largo del arbol
       

       //Caso de que el arbol este vacio
       if(current===null) return 0;

    var contador = 1;   //Doy por sentado que root tengo e inicio contador en 1 por el root    

    //Tomo en cuenta ambas ramas recursivamente

    if(current.left) {
      contador = contador + this.size(current.left);
    } 

    if(current.right){
      contador = contador + this.size(current.right);
    }

    //Cuando no entre a ninguna mas, recorrio todo el arbol y sumo todos los nodos
    return contador;

  }

  size2(current=this.root) {        //RECURSION CON CASO BASE
    // escribe un metodo que determine el largo del arbol

  //Primero compruebo que haya root
    if(current===null){
      return 0;             //Si no hay nada, devuelve 0
    }  
  
  //Caso Base
    if(!current.left && !current.right) return 1;   // Si no hay derecha ni izquierda, devuelve 1

  //Recursion
    if(!current.left && current.right) return 1 + this.size2(current.right);
    if(current.left && !current.right) return 1 + this.size2(current.left);
    if (current.left && current.right) return 1 + this.size2(current.left) + this.size2(current.right);

  }

  breadthFirstForEach() {
    // escribe el metodo breadthFirstForEach

    //evaluo si hay root
    if(this.root===null) return 0;

    //Recorro de forma In order
    //por izquierda
    if(this.left){
      this.left.breadthFirstForEach();   //NO ESTOY SEGURA!!
    }
    console.log(this.value);
    if(this.right){
      this.right.depthFirstForEach(); //  this.depthFirsForEach();
    }
  }

  depthFirstForEach(arg) {
    // escribe el metodo depthFirstForEach

    //Primero compruebo que el arbol no este vacio
    if(this.root===null) return null;
    
    //Empiezo a meter los datos horizontalmente en una cola
    var queue = [this.root];

    
  }
}
