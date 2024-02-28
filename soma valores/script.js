document.addEventListener('DOMContentLoaded', function () {
    var area = document.getElementById('area');
  
    // Funções para interação com a área
    function clicar() {
      area.innerText = 'Clicou';
      area.style.background = 'red';
    }
  
    function entrar() {
      area.innerText = 'ENTROU';
      area.style.background = 'orange';
    }
  
    function sair() {
      area.innerText = 'SAIU';
      area.style.background = 'blue';
    }
  
    // Adicionando event listeners
    area.addEventListener('click', clicar);
    area.addEventListener('mouseenter', entrar);
    area.addEventListener('mouseout', sair);
  
    // Função para somar valores
    function somar() {
      var tn1 = document.getElementById('txtn1');
      var tn2 = document.getElementById('txtn2');
      var res = document.getElementById('res');
      var n1 = Number(tn1.value);
      var n2 = Number(tn2.value);
      var s = n1 + n2;
      res.innerHTML = `A soma entre ${n1} e ${n2} é ${s}`;
    }

    // Adicione esse trecho para corrigir o evento de clique no botão
    var btnSomar = document.querySelector('input[type="button"]');
    btnSomar.addEventListener('click', somar);
  });
