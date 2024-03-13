//uma pila es una estructura de datos lineal que alamcena de forma lineal, no se pueden eliminar o agregar
//elementos en cualquier posicion, unicamente en el orden de la secuencia


//el nodo almacena el valor y el puntero del dato que sigue
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// se crea la clase principal para la pila
class Stack{
//la pila tiene 3 propiedadades: el primer node, el ultimo node y el tamaño de la pila
constructor(){
    this.first = null;
    this.next = null;
    this.size = 0;
    }

//Peek: retorna el ultimo valor de la pila sin sacarlo de esta. 

    peek(){
        return this.first;
    }
//Push: recibe un valor y lo agrega a la pila
    push(val){
        let newNode = new Node(val); // se instancia un Node
        if(this.first === null){ 
            this.first = newNode;
            this.next = newNode;
        }else{
            this.next = newNode;
            this.next.next = this.first;
            this.first = newNode;
        }
        this.size++;
    }

} 
//instanciacion y llamado a metodos

let stack1 = new Stack();
stack1.push(20);
stack1.push(30);
stack1.push(40);
stack1.push(15);

console.log(stack1);
console.log(stack1.peek());
