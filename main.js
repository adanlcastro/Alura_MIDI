function tocaSom(seletorAudio){
   const elemento = document.querySelector(seletorAudio).play();

   if (elemento === null) {
    console.log ('elemento não existe')
   } if (elemento.localName === 'audio') {
    elemento.play()

   }
}

const listaDeTeclas = document.querySelectorAll ('.tecla')

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const teclas = listaDeTeclas[contador]
    const instrumento = teclas.classList[1]

    const idAduio = `#som_${instrumento}`

    teclas.onclick = function(){
        tocaSom(idAduio)
    }

    teclas.onkeydown = function(evento){
        if (evento.code === 'Enter' || evento.code === "Space"){
            teclas.classList.add('ativa')
        }
    }

    teclas.onkeyup = function(){
        teclas.classList.remove('ativa')
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