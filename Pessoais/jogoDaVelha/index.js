let slots = document.querySelectorAll('button.botao')

let jogadorDaVez = 0

let btnRR = document.getElementById('btnRR')
.addEventListener('click', () => {
    window.location.reload()
})

slots.forEach((slot) => {
    slot.addEventListener('click', () => {
        if (slot.textContent == '') {
            if (jogadorDaVez == 0) {
                slot.innerHTML = 'x'
                verificarVencedor()
                jogadorDaVez++
            } else {
                slot.innerHTML = 'o'
                verificarVencedor()
                jogadorDaVez--
            }
        }
    })
})

function verificarVencedor() {
    let vencedor = document.getElementById('vencedor')
    let ganhador = ''
    
    if ((slots[0].textContent == 'x' && slots[1].textContent == 'x' && slots[2].textContent == 'x') || (slots[3].textContent == 'x' && slots[4].textContent == 'x' && slots[5].textContent == 'x') || (slots[6].textContent == 'x' && slots[7].textContent == 'x' && slots[8].textContent == 'x') || (slots[0].textContent == 'x' && slots[3].textContent == 'x' && slots[6].textContent == 'x') || (slots[1].textContent == 'x' && slots[4].textContent == 'x' && slots[7].textContent == 'x') || (slots[2].textContent == 'x' && slots[5].textContent == 'x' && slots[8].textContent == 'x') || (slots[0].textContent == 'x' && slots[4].textContent == 'x' && slots[8].textContent == 'x') || (slots[2].textContent == 'x' && slots[4].textContent == 'x' && slots[6].textContent == 'x')) {
        ganhador = 'X'
        vencedor.classList.add('visible')
        vencedor.innerHTML = `O vencedor foi o ${ganhador}`
    } else if ((slots[0].textContent == 'o' && slots[1].textContent == 'o' && slots[2].textContent == 'o') || (slots[3].textContent == 'o' && slots[4].textContent == 'o' && slots[5].textContent == 'o') || (slots[6].textContent == 'o' && slots[7].textContent == 'o' && slots[8].textContent == 'o') || (slots[0].textContent == 'o' && slots[3].textContent == 'o' && slots[6].textContent == 'o') || (slots[1].textContent == 'o' && slots[4].textContent == 'o' && slots[7].textContent == 'o') || (slots[2].textContent == 'o' && slots[5].textContent == 'o' && slots[8].textContent == 'o') || (slots[0].textContent == 'o' && slots[4].textContent == 'o' && slots[8].textContent == 'o') || (slots[2].textContent == 'o' && slots[4].textContent == 'o' && slots[6].textContent == 'o')) {
        ganhador = 'O'
        vencedor.classList.add('visible')
        vencedor.innerHTML = `O vencedor foi o ${ganhador}`
    }
}