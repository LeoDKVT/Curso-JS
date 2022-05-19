
var msg = window.document.getElementById(`msg`)
var imagem = window.document.getElementById(`imagem`)
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 0  && hora < 12) {
    
}