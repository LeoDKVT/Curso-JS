function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 4) {
                //bb
                img.setAttribute('src', '../img/bb-menino.jpg')
            } else if (idade < 18) {
                //jovem
                img.setAttribute('src', '../img/criança-menino.jpg')
            } else if (idade < 39) {
                //adulto
                img.setAttribute('src', '../img/homem-adulto.jpg')
            } else if (idade < 50) {
                //Adulto mais experiente
                img.setAttribute('src', '../img/homem-40.jpg')
            } else {
                //Idoso
                img.setAttribute('src', '../img/senhor.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 4) {
                //bb
                img.setAttribute('src', '../img/bb-menina.jpg')
            } else if (idade < 18) {
                //jovem
                img.setAttribute('src', '../img/criança-menina.jpg')
            } else if (idade < 39) {
                //adulto
                img.setAttribute('src', '../img/mulher-adulta.jpg')
            } else if (idade < 60) {
                //Adulto mais experiente
                img.setAttribute('src', '../img/mulher-40.jpg')
            } else {
                //Idoso
                img.setAttribute('src', '../img/senhora.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}