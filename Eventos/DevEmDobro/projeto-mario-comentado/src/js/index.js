// dar um jeito de pegar o elemento que representa o botao na tela
const botaoTrailer = document.querySelector('.botao-trailer')

// dar um jeito de pegar o elemento da modal

const modal = document.querySelector('.modal')

const botaoFecharModal = document.querySelector('.fechar-modal')

const video = document.getElementById('video')

// dar um jeito de idenficiar o click
                                // Arrow function
botaoTrailer.addEventListener('click', () => {
    // abrir a modal incluindo a classe "aberto"
    modal.classList.add('aberto')
    video.setAttribute('src', 'https://www.youtube.com/embed/Cb4WV4aXBpk')
})

botaoFecharModal.addEventListener('click', () => {
    modal.classList.remove('aberto')
    video.setAttribute('src', '')
})