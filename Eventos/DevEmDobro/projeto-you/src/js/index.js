const botoesCarrossel = document.querySelectorAll('.botao')
const imagensCarrossel = document.querySelectorAll('.imagem')

let imagemAtual = 0

const myInterval = setInterval(function passarImagens() {

    if (imagemAtual >= 0 && imagemAtual < imagensCarrossel.length) {
        passarProxima()
        imagemAtual++
    } else if (imagemAtual == imagensCarrossel.length) {
        imagemAtual = 0
    }

}, 5000)

botoesCarrossel.forEach((item, indice) => {
    item.addEventListener('click', () => {

        desativarBotaoSelecionado()

        item.classList.add('selecionado')

        esconderImagemAtiva()

        imagensCarrossel[indice].classList.add('ativa')

        imagemAtual = indice
    })
})

function passarProxima() {
    desativarBotaoSelecionado()
    esconderImagemAtiva()
    ativarProxima()
}

function ativarProxima() {
    botoesCarrossel[imagemAtual].classList.add('selecionado')
    imagensCarrossel[imagemAtual].classList.add('ativa')
}

function esconderImagemAtiva() {
    const imagemAtual = document.querySelector('.ativa')
    imagemAtual.classList.remove('ativa')
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado')
    botaoSelecionado.classList.remove('selecionado')
}
