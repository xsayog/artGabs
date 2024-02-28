
function votar() {
  var idade = window.document.getElementById('age')
  var idd = Number(idade.value)
  var resp = window.document.getElementById('resposta')

  if (idd < 16) {
    resp.innerHTML = `Você tem ${idd} anos e não pode votar`
    resp.style.color = 'red'
  } else if (idd < 18 || idd > 65) {
    resp.innerHTML = `Você tem ${idd} anos e o voto é opcional`
    resp.style.color = 'blue'
  } else {
    resp.innerHTML = `Você tem ${idd} anos e o voto é obrigatório`
    resp.style.color = 'green'
  }
}

function cumprimentar() {
  var agora = new Date()
  var hora = agora.getHours()
  var bomDia = window.document.getElementById('bd')
  var diaSem = agora.getDay()

  switch (diaSem){
    case 0:
       'domingo'
      break
    case 1:
       'segunda'
      break
    case 2:
       'terça'
      break
    case 3:
       'quarta'
      break
    case 4:
       'quinta'
      break
    case 5:
       'sexta'
      break
    case 6:
       'sabado'
      break
  }
  
  if (hora < 12) {
    bomDia.innerHTML = `Agora são exatamente ${hora} e é ${dia}. Bom dia!`
  } else if (hora <= 18) {
    bomDia.innerHTML = `Agora são exatamente ${hora} e é ${dia}. Boa tarde!`
  } else {
    bomDia.innerHTML = `Agora são exatamente ${hora} e é ${dia}. Boa noite!`
  }
}
