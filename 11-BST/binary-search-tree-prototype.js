
function BinarySearchTree(value) {
    this.value=value;
    this.right=null;
    this.left=null;
  }

 BinarySearchTree.prototype.insert = function insert (value){
  // escribe un metodo que inserte un nodo al final

  var nuevoArbol= new BinarySearchTree(value);
 
  if(value>=this.value){
    //El nuevo arbol va a la derecha
    if(this.right){
      //tiene hijo derecho
      this.right.insert(value);
    }else{
      //no tiene hijo izquierdo
      this.right=nuevoArbol;
    }
  }else{
    //El nuevo arbol va a izquierda
    if(this.left){
      //tiene hijo izquierdo
      this.left.insert(value);
    }else{
      //no tiene hijo izquierdo
      this.left=nuevoArbol;
    }

  }

 } 


BinarySearchTree.prototype.find = function find(value) {
    // escribe un metodo que busque un nodo especifico

    //Primero compruebo si hay valor
    if(this.value===null){
      return false;
    }        

    //Caso Base
    if(value===this.value) return true;

    //recursion comprobando las ramas
 
    if(this.left){
      //rama izquierda
      if(this.left.find(value))  {
        return true;
      }
    }

    if(this.right){
      //rama derecha
      if(this.right.find(value)){
        return true;
      }
    }

    //Si no lo encuentra ni por derecha , ni por izquierda, el valor no esta
    return false;

  }

  BinarySearchTree.prototype.size = function size() {
    // escribe un metodo que determine el largo del arbol

  //Primero compruebo que haya root
  if(this.value===null){              // PREGUNTAR COMO COMPROBAR ROOT EN ESTE TIPO CASO
    return 0;
  }

  //Caso Base
    if(!this.left && !this.right) return 1;

  //Recursion
    if(!this.left && this.right) return 1 + this.right.size();
    if(this.left && !this.right) return 1 + this.left.size();
    if (this.left && this.right) return 1 + this.left.size() + this.right.size();

  }

  BinarySearchTree.prototype.breadthFirstForEach = function breadthFirstForEach() {
    // escribe el metodo breadthFirstForEach
    // escribe el metodo breadthFirstForEach

    //contemplo arbol vacio               //CONSULTAR ESTOS CASOS EN ESTE TIPO ESTRUCTURA
    if(this.value===null) return 0;

    var queue = [];
    var data = [];    

    var current = this.value    // Arranco pusheando siempre el root a la cola

    //Comenzamos pusheando para empezar la busqueda
    queue.push(current);

    //Iteramos mientras haya valores en la queue
    while(queue.length){
      //sacamos el primer valor de la cola y lo pisamos en la variable
      current = queue.shift(current);

      //pusheamos el "valor" del nodo dentro de data
      data.push(current.value);

      //Luego pusheamos al queue por izquierda y por derecha 
      if(current.left) queue.push(current.left);
      if(current.right) queue.push(current.right);   

    }

    //retorno data cuando ya este vacia la cola y haya recorrido todo el arbol
    return data;

   
  }

  BinarySearchTree.prototype.depthFirstForEach = function depthFirstForEach(arg) {
    // escribe el metodo depthFirstForEach

    switch (arg){

      case "pre-order": {
         //this
       console.log(this.value);
       //por izq
       if(this.left){
        this.left.depthFirstForEach(arg);
      }
      //derecha
      if(this.right){
        this.right.depthFirstForEach(arg);
      }
      break;
      }
  
      case "post-order": {
      //por izq
      if(this.left){
        this.left.depthFirstForEach(arg);
      }
      //derecha
      if(this.right){
        this.right.depthFirstForEach(arg);
      }
      //this
      console.log(this.value);
      break;
      }
  
      default: {
       //por izq
       if(this.left){
         this.left.depthFirstForEach(arg);
       }
       //this
       console.log(this.value);
      //derecha
      if(this.right){
        this.right.depthFirstForEach(arg);
      }
      break;
      }
      
    }
    
  }
