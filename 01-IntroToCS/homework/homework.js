'use strict'

function BinarioADecimal(num) {
  // tu codigo aca 
   let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum = sum + num[i] * Math.pow(2,num.length - 1 -i);
    
  }
  
  return sum;
    
}

function DecimalABinario(num) {
  // tu codigo aca

let completo = []; 
while (num !== 0) {
  
  let d = Math.floor(num / 2);
  let rest = (num % 2);
  completo.push(rest);
  num = d;
}
let bin = completo.reverse().join("") ;
return bin;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}