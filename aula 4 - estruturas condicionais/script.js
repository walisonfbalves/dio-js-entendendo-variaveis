// ESTRUTURAS CONDICIONAIS

/* var jogador1 = 0;
var jogador2 = 0;
var placar; */


//if ternário
/* jogador1 >= 0 && jogador2 >= 0 ? console.log("Jogadores são válidos!") 
: console.log("Jogadores são inválidos");
 */

/* if (jogador1 >= 0 && jogador2 >= 0) {
    console.log("Jogadores são válidos")
    if (jogador1 > 0) {
        console.log("Jogador1 marcou um gol!")
    } else if (jogador2 > 0) {
        console.log("Jogador2 marcou um gol")
    } else {
        console.log("Nenhum dos jogadores marcaram!")
    }
    if (jogador1 > jogador2 && jogador1 >= 0) {
        console.log("Jogador 1 está ganhando o jogo!")
        placar = jogador1
    } else if (jogador2 > jogador1 && jogador2 > 0) {
        console.log("Jogador 2 está ganhando o jogo!")
        placar = jogador2
    } else {
        console.log("O jogo está empatado!")
        placar = 0
    }
} else {
    console.log("Jogadores são inválidos")
} */


/* switch (placar) {
    case placar = jogador1 > jogador2:
        console.log("Jogador1 venceu o jogo!")
        break
    case placar = jogador2 > jogador1:
        console.log("Jogador2 venceu o jogo!");
        break
    case placar = 0:
        console.log("O jogo acabou em empate.")
        break
}
 */

// ESTRUTURA DE REPETIÇÃO 

let array = ['valor1', 'valor2','valor3','valor4']

let object = {
    propriedade1: 'valor1',
    propriedade2: 'valor2',
    propriedade3: 'valor3'
}

// for executa uma instrução até que ela seja falsa

/* for( let indice = 0; indice < array.length; indice++) {
    console.log(indice)
} */

// for in executa repetição a partir de uma propriedade

// em array
/* for( let i in array) {
    console.log(i)
} */

// em objeto
/* for(i in object) {
    console.log(i)
} */

// for of funciona  a repetição a partir de um valor

//em array, em objeto não funciona bem, quase não utiliza
/* for (let i of array) {
    console.log(i)
} */


var a = 0;

/* while ( a < 10 ) {
    a++ 
    console.log(a)
}
 */

/* do {
    a++
    console.log(a)
} while ( a < 10) */

