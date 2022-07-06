let x = document.querySelector(".x")
let o = document.querySelector(".o")
let caixas = document.getElementsByClassName("caixa")
let btn = document.querySelector("#btn-container button")
let mensagem = document.querySelector("#mensagem")
let mensagemText= document.querySelector("#mensagem p")
let segundoJogador

// contador de jogadas
let player1 = 0
let player2 = 0

// adicionando o evento do click as caixas
for(let i = 0; i < caixas.length; i++){

    // quando alguem clica na caixa
    caixas[i].addEventListener("click", function(){
        
        let el = checkEl(player1, player2)

        //verifica se  ja tem x ou o 
        if( this.childNodes.length == 0){
            let cloneEl = el.cloneNode(true)
            this.appendChild(cloneEl)

            // computar jogada
            if(player1 == player2){
                player1++
            } else {
                player2++
            }

            // checa quem venceu
            checkVitoria()

        }
    })
}


// ve quem vai jogar
function checkEl(player1, player2){
    if (player1 == player2){
        el = x
    } else {
        el = o
    }
    return el
}

// ve quem ganhou
function checkVitoria(){
    let b1 = document.getElementById("bloco-1")
    let b2 = document.getElementById("bloco-2")
    let b3 = document.getElementById("bloco-3")
    let b4 = document.getElementById("bloco-4")
    let b5 = document.getElementById("bloco-5")
    let b6 = document.getElementById("bloco-6")
    let b7 = document.getElementById("bloco-7")
    let b8 = document.getElementById("bloco-8")
    let b9 = document.getElementById("bloco-9")

    // horizontal
    if( b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0 ){
        let b1Child =b1.childNodes[0].className
        let b2Child =b2.childNodes[0].className
        let b3Child =b3.childNodes[0].className

        if (b1Child == 'x' && b2Child == 'x' && b3Child == 'x'){
            //x
            declararVencedor("x")
        } else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o'){
            //o
            declararVencedor("o")
        }
    }

    // horizontal
    if( b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0 ){
        let b4Child =b4.childNodes[0].className
        let b5Child =b5.childNodes[0].className
        let b6Child =b6.childNodes[0].className

        if (b4Child == 'x' && b5Child == 'x' && b6Child == 'x'){
            //x
            declararVencedor("x")
        } else if (b4Child == 'o' && b5Child == 'o' && b6Child == 'o'){
            //o
            declararVencedor("o")
        }
    }

    // horizontal
    if( b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0 ){
        let b7Child =b7.childNodes[0].className
        let b8Child =b8.childNodes[0].className
        let b9Child =b9.childNodes[0].className

        if (b7Child == 'x' && b8Child == 'x' && b9Child == 'x'){
            //x
            declararVencedor("x")
        } else if (b7Child == 'o' && b8Child == 'o' && b9Child == 'o'){
            //o
            declararVencedor("o")
        }
    }

    // Vertical
    if( b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0 ){
        let b1Child =b1.childNodes[0].className
        let b4Child =b4.childNodes[0].className
        let b7Child =b7.childNodes[0].className

        if (b1Child == 'x' && b4Child == 'x' && b7Child == 'x'){
            //x
            declararVencedor("x")
        } else if (b1Child == 'o' && b4Child == 'o' && b7Child == 'o'){
            //o
            declararVencedor("o")
        }
    }

     // Vertical
     if( b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0 ){
        let b2Child =b2.childNodes[0].className
        let b5Child =b5.childNodes[0].className
        let b8Child =b8.childNodes[0].className

        if (b2Child == 'x' && b5Child == 'x' && b8Child == 'x'){
            //x
            declararVencedor("x")
        } else if (b2Child == 'o' && b5Child == 'o' && b8Child == 'o'){
            //o
            declararVencedor("o")
        }
    }

    // Vertical
    if( b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0 ){
        let b3Child =b3.childNodes[0].className
        let b6Child =b6.childNodes[0].className
        let b9Child =b9.childNodes[0].className

        if (b3Child == 'x' && b6Child == 'x' && b9Child == 'x'){
            //x
            declararVencedor("x")
        } else if (b3Child == 'o' && b6Child == 'o' && b9Child == 'o'){
            //o
            declararVencedor("o")
        }
    }

    // Diagonal
    if( b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0 ){
        let b1Child =b1.childNodes[0].className
        let b5Child =b5.childNodes[0].className
        let b9Child =b9.childNodes[0].className

        if (b1Child == 'x' && b5Child == 'x' && b9Child == 'x'){
            //x
            declararVencedor("x")
        } else if (b1Child == 'o' && b5Child == 'o' && b9Child == 'o'){
            //o
            declararVencedor("o")
        }
    }

    // Diagonal
    if( b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0 ){
        let b3Child =b3.childNodes[0].className
        let b5Child =b5.childNodes[0].className
        let b7Child =b7.childNodes[0].className

        if (b3Child == 'x' && b5Child == 'x' && b7Child == 'x'){
            //x
            declararVencedor("x")
        } else if (b3Child == 'o' && b5Child == 'o' && b7Child == 'o'){
            //o
            declararVencedor("o")
        }
    }

    // deu velha
    let counter = 0
    for(let y = 0; y < caixas.length; y++){
        if ( caixas[y].childNodes[0] != undefined){
            counter++
        }
    }

    if (counter == 9){
        declararVencedor("deu velha")
    }
}

// limpa o jogo, declara o vencedor e atualixa o placar

function declararVencedor(vencedor){
    let placarX = document.querySelector("#placarboard-1")
    let placarY = document.querySelector("#placarboard-2")
    let msg = ""

    if (vencedor == 'x'){
        placarX.textContent = parseInt(placarX.textContent) + 1
        msg = "O Jogador 1 Venceu"
    } else if (vencedor == 'o'){
        placarY.textContent = parseInt(placarY.textContent) + 1
        msg = "O Jogador 2 Venceu"
    } else {
        msg = "Deu Velha!"
    }

    // exibir a msg 
    mensagemText.innerHTML = msg
    mensagem.classList.remove("hide")

    // esconder msg
    setTimeout(function(){
        mensagem.classList.add("hide")
    }, 2000)

    // zera as jogadas
    player1 = 0
    player2 = 0

    // remove x e o
    let caixaRemove = document.querySelectorAll(".caixa div")

    for( let i = 0; i < caixaRemove.length; i++){
        caixaRemove[i].parentNode.removeChild(caixaRemove[i])
    }
}