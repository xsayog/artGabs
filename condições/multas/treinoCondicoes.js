function calcular() {
  var txtv = document.getElementById('txtvel');
  var res = document.getElementById('res');
  
  if (txtv && res) {
    var vel = Number(txtv.value);
    res.innerHTML = `<p>Sua velocidade atual é de ${vel} Km/h</p>`;
    
    if (vel > 60) {
      res.innerHTML += `<p>Você foi multado</p>`;
    } else {
      res.innerHTML += `<p>Você não foi multado</p>`;
    }
  }
}

function checar() {
  var p = document.getElementById('pais');
  var nasc = document.getElementById('nas');
  
  if (p && nasc) {
    var nacionalidade = p.value;
    nasc.innerHTML = `<p>Você nasceu no ${nacionalidade}</p>`;
    
    if (nacionalidade !== 'Brasil') {
      nasc.innerHTML += '<p>Você é estrangeiro</p>';
    } else {
      nasc.innerHTML += '<p>Você é Brasileiro</p>';
    }
  }
}
