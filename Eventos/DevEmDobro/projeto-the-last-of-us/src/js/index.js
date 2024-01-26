const botoesCarrossel = document.querySelectorAll('.botao')
const imagensCarrossel = document.querySelectorAll('.imagem')

botoesCarrossel.forEach((item, indice) => {
    item.addEventListener('click', () => {

        desativarBotaoSelecionado()

        item.classList.add('selecionado')

        esconderImagemAtiva()

        imagensCarrossel[indice].classList.add('ativa')
    })
})

function esconderImagemAtiva() {
    const imagemAtual = document.querySelector('.ativa')
    imagemAtual.classList.remove('ativa')
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado')
    botaoSelecionado.classList.remove('selecionado')
}
