//Ejercicio 1
function insertar(arr, nuevoDato) {
  if (!arr.includes(nuevoDato)) {
    arr.push(nuevoDato);
  }
}

const myList = [1, 2, 3, 4];
const nuevoDato1 = 3;

insertar(myList, nuevoDato1);
console.log(myList);

const nuevoDato2 = 5;
insertar(myList, nuevoDato2);
console.log(myList);

//Ejercicio 2
class Nodo {
  constructor(valor) {
    this.valor = valor;
    this.siguiente = null;
  }
}

class ListaEnlazada {
  constructor() {
    this.head = null;
  }


  insertarAlFinal(valor) {
    const nuevoNodo = new Nodo(valor);
    if (!this.head) {
      this.head = nuevoNodo;
    } else {
      let actual = this.head;
      while (actual.siguiente) {
        actual = actual.siguiente;
      }
      actual.siguiente = nuevoNodo;
    }
  }

  mostrarNodosSuperiores(valorLimite) {
    let actual = this.head;
    while (actual) {
      if (actual.valor > valorLimite) {
        console.log(actual.valor);
      }
      actual = actual.siguiente;
    }
  }
}

function generarNumeroEnteroPositivo(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const lista = new ListaEnlazada();
const cantidadElementos = 10; 
const valorLimite = 50;

for (let i = 0; i < cantidadElementos; i++) {
  const numero = generarNumeroEnteroPositivo(1, 100);
  lista.insertarAlFinal(numero);
}

console.log("Nodos que superan el valor límite:");
lista.mostrarNodosSuperiores(valorLimite);
