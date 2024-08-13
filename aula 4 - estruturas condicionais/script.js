// ESTRUTURAS CONDICIONAIS

var jogador1 = 0;
var jogador2 = 0;
var placar;


//if ternário
/* jogador1 >= 0 && jogador2 >= 0 ? console.log("Jogadores são válidos!") 
: console.log("Jogadores são inválidos");
 */

if (jogador1 >= 0 && jogador2 >= 0) {
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
}


switch (placar) {
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
