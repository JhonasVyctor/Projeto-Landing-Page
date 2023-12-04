var SetaDireita = window.document.getElementById("seta-direita")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var SetaEsquerda = window.document.getElementById("seta-esquerda")

function RolarDireita(){
    leonardo.style ="display: none"
    bruna.style ="display: flex"
    SetaDireita.style="display:none"
    SetaEsquerda.style="display:flex; margin-top:55px"
}

function RolarEsquerda() {
    bruna.style ="display:none"
    leonardo.style ="display:flex"
    SetaEsquerda.style="display:none"
    SetaDireita.style="display:flex; margin-top:55px"
}