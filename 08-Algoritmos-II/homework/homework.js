'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // 1 primero tengo que dividir el array aleatoriamente
  
  if(array.length <= 1){
    return array;
  } else{
  let leftArray = [];
  let rigthArray = [];
  let newArray = [];
  let pivot = array.splice(Math.floor(Math.random() * array.length),1);
  
  for(var i = 0; i < array.length; i++) {
    
        if(array[i] <= pivot){
            leftArray.push(array[i]);
            
        }else if(array[i] >= pivot){
            rigthArray.push(array[i]);
            
        }

    }
    
    return newArray.concat(quickSort(leftArray),pivot ,quickSort(rigthArray));
    
  }
}


 // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:


function mergeSort(array){
  // 1 declarar los nuevos array left y rigth, para asignales las dos mitades del array original
if(array.length < 2){
  return array; 
} else{
let mitad = Math.floor(array.length / 2);//saco cuanto mide la mitad del array
let left = array.slice(0,mitad);//mitad izquierda
let rigth = array.slice(mitad); //mitad derecha
return merge(mergeSort(left), mergeSort(rigth));//recurcion para seguir diviediendo
// en mitades hasta que quede 1 solo elemento en cada array y utilizo la funcion merge 
//para ir uniendo y ordenando el array de resultado
}
}

function merge(left, rigth){
let newArray = [];
while(left.length && rigth.length){

 if(left[0] < rigth[0]){
    newArray.push(left.shift());//saco el elemento del array left y lo pone en newArray
 }else{
    newArray.push(rigth.shift());//saco el elemento del array rigth y lo pone en newArray
 }

}
return newArray.concat(left, rigth);
  
}
  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
