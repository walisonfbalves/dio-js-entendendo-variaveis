// COMO DECLARAR UM ARRAY
/* var array = ['string', 1, true];
console.log(array) */

// array dentro de array
var array = ['string', 1, true, ['array1'], ['array2'],['array3'],['array4']]
/* console.log(array)  */

// ter acesso a um item especifico do array
/* var array = ['string', 1, true, ['array1'], ['array2'],['array3'],['array4']]
console.log(array[1]) */

// MANIPULANDO ARRAYS

//forEach() - intera uma array
/* array.forEach(function(item, index){
    console.log(item,index)
}) */

//push() - add um item no final do array
/* array.push('novoitem')
console.log(array) */

//pop() - remove um item no final do array
/* array.pop()
console.log(array) */

//shift() - remove item no início do array;
/* array.shift();
console.log(array) */

//unshift() - add item no início do array;
/* array.unshift('Novo item');
console.log(array); */

//indexOf() - retorna o índice de um valor;
/* console.log(array.indexOf(1)) */

//splice() - remove ou substitui um item pelo índice;
/* array.splice(0,3)
console.log(array); */

//slice() - retorna uma parte de um array existente;
/* console.log(array.slice(0,2)) */
