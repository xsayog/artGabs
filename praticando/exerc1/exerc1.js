function loader() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('photo')
  var data = new Date()
  var hora = data.getHours()
  var nhora = Number(hora.value)
  var bomDia = window.document.getElementById('bd')
  var caixa = window.document.getElementById('conteudo')
  var diaSem = data.getDay()


  // switch (diaSem) {
  //   case 0:
  //     dia = 'domingo'
  //     break
  //   case 1:
  //     dia = 'segunda'
  //     break
  //   case 2:
  //     dia = 'terça'
  //     break
  //   case 3:
  //     dia = 'quarta'
  //     break
  //   case 4:
  //     dia = 'quinta'
  //     break
  //   case 5:
  //     dia = 'sexta'
  //     break
  //   case 6:
  //     dia = 'sabado'
  //     break
  // }



  if ( nhora >= 6 && nhora < 12) {
    img.src = './img/manha.png'
    bomDia.innerHTML = `Bom dia!`
    document.body.style.background = '#FDE682'
    msg.innerHTML = `Agora são ${nhora} horas e está de dia.`
    caixa.style.display = 'flex'
  } else if (nhora >= 12 && nhora < 18) {
    img.src = './img/tarde.png'
    bomDia.innerHTML = `Boa tarde!`
    document.body.style.background = '#C15D14'
    msg.innerHTML = `Agora são ${nhora} horas e está de tarde.`
    caixa.style.display = 'flex'
  } else if (nhora >= 18 && nhora < 24) {
    img.src = './img/noite.png'
    bomDia.innerHTML = `Boa noite!`
    document.body.style.background = '#372A46'
    msg.innerHTML = `Agora são ${nhora} horas e está de noite.`
    caixa.style.display = 'flex'
  } else if (nhora >= 0  && nhora < 6) {
    img.src = './img/noite.png'
    bomDia.innerHTML = `Boa noite!`
    document.body.style.background = '#372A46'
    msg.innerHTML = `Agora são ${nhora} horas e está de noite.`
    caixa.style.display = 'flex'
  } else {
    window.alert('Numero invalido')
  }

}

