function carregar() {
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()

    msg.innerHTML = `Agora são ${hora}:${minuto}`
    if (hora >= 0  && hora < 12) {
          //Bom dia!
          imagem.src = 'manha.png'
         document.body.style.backgroundColor = `#F0DD9C`
    } else if (hora >=12 && hora <= 17) {
          //Boa tarde!
         imagem.src = `tarde.png`
         document.body.style.backgroundColor = `#BF7E78`
    } else {
        // Boa noite!
        imagem.src = 'noite.png'
        document.body.style.backgroundColor = `#45443E`
    }
}