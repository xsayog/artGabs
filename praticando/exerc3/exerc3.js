
function gerarTb() {
  var numero = document.getElementById('tb')
  var nume = Number(numero.value)
  var tab = document.getElementById('seltab')

  if (numero.value.length == 0) {
    window.alert('numero invalido')
  } else {
    let c = 1
    tab.innerHTML = ''
    while (c <= 10) {
      let item = document.createElement('Option')
      item.text = `${nume} x ${c} = ${nume * c}`
      tab.appendChild(item)
      c++
    }
  }
}