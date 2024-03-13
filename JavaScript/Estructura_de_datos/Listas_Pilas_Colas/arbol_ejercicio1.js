
//se define la clase con la que se instancian los nodos 
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
//se define la clase pricipal y el root
class Tree {
    constructor(value) {
        this.root = value;
    }
    //metodos de la clase

    insert(value) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode; //si la raiz esta vacia, 
            //asigne el valor a la raiz                         
        } else {
            let current = this.root
            while (true) {
                if (value === current.value) {
                    return undefined;
                }
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                } else {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
        }
    }
}

//instanciacion de clases y llamado a metodos
let tree1 = new Tree();
tree1.insert(20);
tree1.insert(30);
tree1.insert(10);
tree1.insert(25);
tree1.insert(40);
tree1.insert(21);
tree1.insert(15);
console.log(tree1);