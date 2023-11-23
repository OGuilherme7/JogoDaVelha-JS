function jogoDaVelha () {

    if (event.target.innerText.length > 0) {
        return;
    }

    var span = document.querySelector("#resultado-partida");
    span.innerText = "Jogo Da Velha";
    var table = document.getElementById("jogo-da-velha");
    table.style.backgroundColor = "green";

    event.target.innerText = "X";

    var opcoesDeJogo = document.getElementsByClassName("opcao-jogo");

    var jogoEmAndamento = isWinner(opcoesDeJogo, "X");

    if (!jogoEmAndamento) {
        span.innerText = "Winner: You";
        limparJogo(opcoesDeJogo);
        return;
    } 

    if (!deuVelha(opcoesDeJogo)) {

        //Computador Jogando
        setTimeout(function () {
            var opcoesValidas = new Array();
            for (var i = 0; i < opcoesDeJogo.length; i++) {
                if (opcoesDeJogo[i].innerText.length == 0) {
                    opcoesValidas.push(i);
                }
            }
            var indiceRandom = opcoesValidas[gerarNumRandom(0, opcoesValidas.length - 1)];
            
            opcoesDeJogo[indiceRandom].innerText = "O";

            var jogoEmAndamento = isWinner(opcoesDeJogo, "O");

            if (!jogoEmAndamento) {
                span.innerText = "Winner: PC";
                limparJogo(opcoesDeJogo);
                return;
            }
        }, 400)
    } else {
        span.innerText = "Deu Velha!";
        limparJogo(opcoesDeJogo);
    }

}



function gerarNumRandom(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

function deuVelha (opcoesDeJogo) {
    var casasOcupadas = 0;
    for (var i = 0; i < opcoesDeJogo.length; i++) {
        if (opcoesDeJogo[i].innerText.length > 0) {
            casasOcupadas++;
        }
    }
    if (casasOcupadas == 9) {
        return true;
    } else {
        return false;
    }
}



function isWinner (opcoesDeJogo, elemento) {
    var jogoEmAndamento = true;
    if (opcoesDeJogo[0].innerText == elemento && opcoesDeJogo[1].innerText == elemento && opcoesDeJogo[2].innerText == elemento) {
        jogoEmAndamento = false;
    }
    if (opcoesDeJogo[2].innerText == elemento && opcoesDeJogo[5].innerText == elemento && opcoesDeJogo[8].innerText == elemento) {
        jogoEmAndamento = false;
    }
    if (opcoesDeJogo[8].innerText == elemento && opcoesDeJogo[7].innerText == elemento && opcoesDeJogo[6].innerText == elemento) {
        jogoEmAndamento = false;
    }
    if (opcoesDeJogo[6].innerText == elemento && opcoesDeJogo[3].innerText == elemento && opcoesDeJogo[0].innerText == elemento) {
        jogoEmAndamento = false;
    }
    if (opcoesDeJogo[0].innerText == elemento && opcoesDeJogo[4].innerText == elemento && opcoesDeJogo[8].innerText == elemento) {
        jogoEmAndamento = false;
    }
    if (opcoesDeJogo[2].innerText == elemento && opcoesDeJogo[4].innerText == elemento && opcoesDeJogo[6].innerText == elemento) {
        jogoEmAndamento = false;
    }
    if(opcoesDeJogo[1].innerText == elemento && opcoesDeJogo[4].innerText == elemento && opcoesDeJogo[7].innerText == elemento) {
        jogoEmAndamento = false;
    }
    if(opcoesDeJogo[3].innerText == elemento && opcoesDeJogo[4].innerText == elemento && opcoesDeJogo[5].innerText == elemento) {
        jogoEmAndamento = false;
    }
    return jogoEmAndamento;
} 

function limparJogo (opcoesDeJogo) {
    setTimeout(function (){
        for (var i in opcoesDeJogo) {
        opcoesDeJogo[i].innerText = "";
        }
        var table = document.getElementById("jogo-da-velha");
        table.style.backgroundColor = "red";
    }, 500)
}