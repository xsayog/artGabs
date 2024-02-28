function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtAno')
  var res = document.getElementById('res')
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO]Verifique os dados novamente')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'photo')
    if (fsex[0].checked) {
      genero = 'homem'
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', './img/cm.png')
      } else if (idade < 21) {
        img.setAttribute('src', './img/ym.png')
      }
      else if (idade < 50) {
        img.setAttribute('src', './img/am.png')
      } else {
        img.setAttribute('src', './img/om.png')
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', './img/cf.png')
      } else if (idade < 21) {
        img.setAttribute('src', './img/yf.png')
      }
      else if (idade < 50) {
        img.setAttribute('src', './img/af.png')
      } else {
        img.setAttribute('src', './img/of.png')
      }
    }
    res.innerHTML = `detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
  }
}