const botaoTrailer = document.querySelector('.botao-trailer')
const modal = document.querySelector('.modal')
const botaoFecharModal = document.querySelector('.fechar-modal')
const video = document.getElementById('video')
const linkDoVideo = video.src
const miniaturas = document.querySelector('.miniaturas-videos')

function alternarModal (){
    modal.classList.toggle('aberto')
    miniaturas.classList.toggle('esconder-miniatura')
}

botaoTrailer.addEventListener('click', () => {
    alternarModal()
    video.setAttribute('src', linkDoVideo)
})

botaoFecharModal.addEventListener('click', () => {
    alternarModal()
    video.setAttribute('src', '')
})