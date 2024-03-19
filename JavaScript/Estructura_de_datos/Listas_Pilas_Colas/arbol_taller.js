console.log("******Taller de arboles******");

class Nodo {
    constructor(valor) {
        this.valor = valor
        this.izquierda = null;
        this.derecha = null;
    }
}

class ArbolBinario {
    constructor() {
        this.raiz = null;
    }

    insertar(valor) {
        const nuevoNodo = new Nodo(valor);
        if (this.raiz === null) {
            this.raiz = nuevoNodo;
        } else {
            this.insertarNodo(this.raiz, nuevoNodo);
        }
    }
    //insercion de elementos
    insertarNodo(nodo, nuevoNodo) {
        if (nuevoNodo.valor < nodo.valor) {
            if (nodo.izquierda === null) {
                nodo.izquierda = nuevoNodo;
            } else {
                this.insertarNodo(nodo.izquierda, nuevoNodo);
            }
        } else {
            if (nodo.derecha === null) {
                nodo.derecha = nuevoNodo;
            } else {
                this.insertarNodo(nodo.derecha, nuevoNodo);
            }
        }
    }

    //busqueda de elementos
    buscar(valor) {
        return this.buscarNodo(this.raiz, valor);
    }
    buscarNodo(nodo, valor) {
        if (nodo === null || nodo.valor === valor) {
            return nodo;
        } else if (valor < nodo.valor) {
            return this.buscarNodo(nodo.izquierda, valor);
        } else {
            return this.buscarNodo(nodo.derecha, valor);
        }
    }
    //eliminar valores
    eliminar(valor) {
        this.raiz = this.eliminarNodo(this.raiz, valor);
    }
    eliminarNodo(nodo, valor) {
        if (nodo === null) {
            return null;
        } else if (valor < nodo.valor) {
            nodo.izquierdo = this.eliminarNodo(nodo.izquierdo, valor);
            return nodo;
        } else if (valor > nodo.valor) {
            nodo.derecho = this.eliminarNodo(nodo.derecho, valor);
            return nodo;
        } else {
            if (nodo.izquierdo === null && nodo.derecho === null) {
                return null;
            } else if (nodo.izquierdo === null) {
                return nodo.derecho;
            } else if (nodo.derecho === null) {
                return nodo.izquierdo;
            } else {
                const sucesor = this.encontrarSucesor(nodo.derecho);
                nodo.valor = sucesor.valor;
                nodo.derecho = this.eliminarNodo(nodo.derecho, sucesor.valor);
                return nodo;
            }
        }
    }
    encontrarSucesor(nodo) {
        let sucesor = nodo;
        while (sucesor.izquierdo !== null) {
            sucesor = sucesor.izquierdo;
        }
        return sucesor;
    }
    recorridoEnOrden() {
        this.recorrerEnOrden(this.raiz);
    }

    recorrerEnOrden(nodo) {
        if (nodo !== null) {
            this.recorrerEnOrden(nodo.izquierdo);
            console.log(nodo.valor);
            this.recorrerEnOrden(nodo.derecho);
        }
    }
    recorridoPreOrden() {
        this.recorrerPreOrden(this.raiz);
    }

    recorrerPreOrden(nodo) {
        if (nodo !== null) {
            console.log(nodo.valor);
            this.recorrerPreOrden(nodo.izquierdo);
            this.recorrerPreOrden(nodo.derecho);
        }
    }
    recorridoPostOrden() {
        this.recorrerPostOrden(this.raiz);
    }

    recorrerPostOrden(nodo) {
        if (nodo !== null) {
            this.recorrerPostOrden(nodo.izquierdo);
            this.recorrerPostOrden(nodo.derecho);
            console.log(nodo.valor);
        }
    }
}
//instaciacion y metodos
let arbol1 = new ArbolBinario();
arbol1.insertar(20);
arbol1.insertar(30);
arbol1.insertar(10);
arbol1.insertar(25);
console.log(arbol1);
console.log(arbol1.buscar(30));
//arbol1.eliminar(30);
console.log(arbol1);

console.log(arbol1.recorridoEnOrden());
console.log(arbol1.recorridoPreOrden());
console.log(arbol1.recorridoPostOrden());


