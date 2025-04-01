function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll ('.tecla')

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const teclas = listaDeTeclas[contador]
    const instrumento = teclas.classList[1]

    const idAduio = `#som_${instrumento}`

    teclas.onclick = function(){
        tocaSom(idAduio)
    }
    
}

// let contador = 0
// while (contador < listaDeTeclas.length) {
//     const teclas = listaDeTeclas[contador]
//     const instrumento = teclas.classList[1]

//     const idAduio = `#som_${instrumento}`

//     teclas.onclick = function(){
//         tocaSom(idAduio)
//     }
//     contador = contador + 1
    
// }