import React from 'react';

import sun from '../img/sun.png'
import moon from '../img/moon.png'

export default function Btn() {
    return (
        <>
            <button onClick={trocarTema} id='botao-alterar-tema'>
                <img className='imagem-botao' src={sun} alt={`imagem do tema atual`} />
            </button>
        </>
    );
}


function trocarTema() {
    const body = document.querySelector('body')
    const imagem = document.querySelector('.imagem-botao')
    
    if(body.classList.contains('modo-escuro')) {
        body.classList.remove('modo-escuro')
        imagem.setAttribute('src', sun)
    } else {
        body.classList.add('modo-escuro')
        imagem.setAttribute('src', moon)
    }
}