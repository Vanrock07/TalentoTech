//se crea una clase para cada nodo en el arbol
//los valores del nodo son: los punteros de sus valores a la izq y a la der
class Node{
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BynaryTree{
    constructor(){
        this.root = null;
    }

// el metodo insert recibe un valor y lo inserta en el arbol

    insert(value){
      const newNode = new Node(value);
      if(this.root === null){
        this.root = newNode;
        return this.root;
      }
      let current = this.root;

//se evalua el valor a insertar para decidir si se guarda a ala derecha
//o a la izquierda.      
      while(true){
        if(value === current.value){ 
            return undefined;
        }
        if(value < current.value){
            if(current.left === null){
                current.left = newNode;
                return this.root;
            }
            current = current.left;
        }else{ 
            if(current.right === null){
                current.right = newNode;
                return this.root;
            }
            current = current.right; 
        }
      }
    }
//el metodo busqueda toma un valor como parametro y busca el valor
//si lo encuentra lo devuelve, si no envia undefined
find(value){
    if(this.root === null){
        return false;
        let current = this.root;
        let identifier = false;
        while(current && !identifier){
            
            if(value < current.value){
                current = current.left;
            }else if(value > current.right){
                current = current.right;
            }else{
                identifier = true;
            }
        }
        if (!identifier){
            return undefined;
            return current;
        }
    }

} 


}

const tree = new BynaryTree();
BynaryTree.insert(10);
BynaryTree.insert(5);   
BynaryTree.insert(15);
BynaryTree.insert(20);
console.log(tree);