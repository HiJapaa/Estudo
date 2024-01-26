const botoesCarrossel = document.querySelectorAll('.botao')
const imagensCarrossel = document.querySelectorAll('.imagem')

let imagemAtual = 0
let botaoAtual = 0

const myInterval = setInterval(function passarImagens() {

    switch (imagemAtual) {
        case 0:
            botoesCarrossel[imagemAtual].classList.add('selecionado')
            imagensCarrossel[imagemAtual].classList.add('ativa')
            botaoAtual++
            imagemAtual++
            break;
        case 1:
            botoesCarrossel[imagemAtual - 1].classList.remove('selecionado')
            imagensCarrossel[imagemAtual - 1].classList.remove('ativa')
            botoesCarrossel[imagemAtual].classList.add('selecionado')
            imagensCarrossel[imagemAtual].classList.add('ativa')
            botaoAtual++
            imagemAtual++
            break;
        case 2:
            botoesCarrossel[imagemAtual - 1].classList.remove('selecionado')
            imagensCarrossel[imagemAtual - 1].classList.remove('ativa')
            botoesCarrossel[imagemAtual].classList.add('selecionado')
            imagensCarrossel[imagemAtual].classList.add('ativa')
            botaoAtual++
            imagemAtual++
            break;
        case 3:
            botoesCarrossel[imagemAtual - 1].classList.remove('selecionado')
            imagensCarrossel[imagemAtual - 1].classList.remove('ativa')
            botoesCarrossel[imagemAtual].classList.add('selecionado')
            imagensCarrossel[imagemAtual].classList.add('ativa')
            botaoAtual++
            imagemAtual++
            break;
        case 4:
            botoesCarrossel[imagemAtual - 1].classList.remove('selecionado')
            imagensCarrossel[imagemAtual - 1].classList.remove('ativa')
            botoesCarrossel[imagemAtual].classList.add('selecionado')
            imagensCarrossel[imagemAtual].classList.add('ativa')
            botaoAtual++
            imagemAtual++
            break;
        case 5:
            botoesCarrossel[imagemAtual - 1].classList.remove('selecionado')
            imagensCarrossel[imagemAtual - 1].classList.remove('ativa')
            botoesCarrossel[imagemAtual].classList.add('selecionado')
            imagensCarrossel[imagemAtual].classList.add('ativa')
            botaoAtual++
            imagemAtual++
            break;
        case 6:
            botoesCarrossel[imagemAtual - 1].classList.remove('selecionado')
            imagensCarrossel[imagemAtual - 1].classList.remove('ativa')
            botaoAtual -= botaoAtual
            imagemAtual -= imagemAtual
            botoesCarrossel[0].classList.add('selecionado')
            imagensCarrossel[0].classList.add('ativa')
            break;
    }

    // for (imagemAtual = 0 ; imagemAtual <= imagensCarrossel.length ; imagemAtual++) {

    //     const imagem = document.querySelector('.ativa')
    //     imagem.classList.remove('ativa')

    //     imagensCarrossel[imagemAtual].classList.add('ativa')

    // }
}, 5000)

// function stopBackground() {
//     clearInterval(myInterval)
// }

// setInterval(removerImagem(), 5000)

// function removerImagem() {
//     const imagemAtual = document.querySelector('.ativa')
//     imagemAtual.classList.remove('ativa')
// }




botoesCarrossel.forEach((item, indice) => {
    item.addEventListener('click', () => {

        desativarBotaoSelecionado()

        item.classList.add('selecionado')

        esconderImagemAtiva()

        imagensCarrossel[indice].classList.add('ativa')

        imagemAtual = indice
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
