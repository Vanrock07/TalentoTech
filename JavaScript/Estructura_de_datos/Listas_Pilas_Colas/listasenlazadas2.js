class Node {

    constructor(val) {
        this.val = val;
        this.next = null;  //next indica el siguente nodo
    }
}

//clase principal linkedlist
class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

//metodo push (insertar)
    push(val){

        const newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this.length;

        }

//metodo pop (eliminar)
    pop(){

        if(!this.head) return undefined
            let current = this.head;
            let newTail = current;
            
            while(current.next){
                newTail = current;
                current = current.next;
            }
            this.tail = newTail;
            this.tail.next = null;
            this.length--;

            if(this.length === 0){
                this.head = null;
                this.tail = null;   
            }
            return current;

        }

//metodo para colocar un elemento en la cabecera
    ActualC(val){
        const newNode = new Node(val);
            if(!this.head){
            this.head = newNode
            this.tail = this.head;

            }
            newNode.next = this.head;
            this.head = newNode;
            return this.length;
        }
    
    //invertir la lista
    reverse(){
        let current = this.head;
        let previous = null;
        let next = null;

        while(current){
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        this.head = previous;
        
    }
}
    
const list = new LinkedList();
list.push("a");
list.push("b");
list.push("c");
list.pop();
//list.ActualC("b");
//list.reverse()
console.log(list);



