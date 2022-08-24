"use strict";

//const { arrayReplaceAt } = require("markdown-it/lib/common/utils");

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  //si el valor es mas grande que el nodo va a la izquierda si no va a la derecha
    this.value = value;
    this.right = null;
    this.left = null;
}
// en el left vamos atener los numeros menores a value
// en el rigth vamos a tener los numeros mayores a value
BinarySearchTree.prototype.size = function(){
  
  if(this.left === null && this.right === null) return 1; //si las dos ramas son null es que hay un solo elemnto es un nodso hoja
  if (this.left === null && this.right !== null) return 1 + this.right.size();//hago recursion en la rama que tiene elemnto para seguir contando hacia abajo
  if (this.right === null && this.left !== null) return 1 + this.left.size();//lo mismo que en la anterior
  if (this.right !== null && this.left !== null) return 1 + this.right.size() + this.left.size(); //suma los contadores de izquierda y derecha para ver cuantos elementos hay

};
BinarySearchTree.prototype.insert = function(value){
  //evaluar value
  //mayores a la izquierda
  //left número menores
  //rigth números mayores
  if(value > this.value){
    //si this.value es menor se fija si la derecha es null si es null lo pone en la derecha
    if(this.right === null) this.right = new BinarySearchTree(value);
    else this.right.insert(value);//si la derecha no es null hace una recursion 
  }
  if(value < this.value){
    
    if(this.left === null) this.left = new BinarySearchTree(value);
    else this.left.insert(value);
  }
};

BinarySearchTree.prototype.contains = function(value){
  if(this.value === value ) return true;
  //Mayores a la derecha
  if(this.value < value){
    if(this.right === null) return false;
    return this.right.contains(value)
  }
  //menores a la izquierda
  if(this.value > value){
    if(this.left === null) return false;
    return this.left.contains(value);
  }
};
BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
  if(order === 'pre-order'){
//pre-order hace root left right
    cb(this.value);
    if(this.left !== null) this.left.depthFirstForEach(cb, order);
    if(this.right !== null) this.right.depthFirstForEach(cb, order);
  }
  else if(order === 'post-order'){
    if(this.left !== null) this.left.depthFirstForEach(cb, order);
    if(this.right !== null) this.right.depthFirstForEach(cb, order);
    cb(this.value);
  }
//post-order hace left right root    
  else{
// in-order left root right
    if(this.left !== null) this.left.depthFirstForEach(cb, order);
    cb(this.value);
    if(this.right !== null) this.right.depthFirstForEach(cb, order);
  }
};

BinarySearchTree.prototype.breadthFirstForEach = function(cb, array = []){
  // aca estoy cargando los hijos en un array auxiliar
  if(this.left !== null) array.push(this.left);
  if(this.right !== null) array.push(this.right);
  cb(this.value);
  if(array.length > 0) array.shift().breadthFirstForEach(cb, array);//aca estoy haciendo la recursion con el primer elemento del array

};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
