const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');
const resultInput = document.getElementById('result');
const themeToggle = document.getElementById('theme-toggle');
const parenthesesButtons = document.querySelectorAll('.parentheses'); // Seleciona os botões de parênteses
const historyList = document.getElementById('history-list');
const clearHistoryButton = document.getElementById('clear-history');

let shouldResetDisplay = false;

// Função para adicionar um item ao histórico
function addToHistory(expression, result) {
  const listItem = document.createElement('li');
  listItem.textContent = `${expression} = ${result}`;
  historyList.appendChild(listItem);
}

// Função para limpar o histórico
function clearHistory() {
  historyList.innerHTML = '';
}

// Adicionando eventos de clique para os botões de número
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (shouldResetDisplay) {
      resultInput.value = '';
      shouldResetDisplay = false;
    }
    resultInput.value += button.value;
    button.blur(); // Remove o foco do botão após o clique
  });
});

// Adicionando eventos de clique para os botões de operador
operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    resultInput.value += button.value;
    shouldResetDisplay = false;
    button.blur(); // Remove o foco do botão após o clique
  });
});

// Adicionando eventos de clique para os botões de parênteses
parenthesesButtons.forEach(button => {
  button.addEventListener('click', () => {
    resultInput.value += button.value;
    button.blur(); // Remove o foco do botão após o clique
  });
});

// Adicionando evento de clique para o botão de igual
equalsButton.addEventListener('click', () => {
  try {
    const expression = resultInput.value;
    const result = eval(expression);
    resultInput.value = result;
    addToHistory(expression, result); // Adiciona ao histórico
  } catch (error) {
    alert('Erro na expressão! Verifique se está correta.');
  }
  equalsButton.blur(); // Remove o foco do botão após o clique
});

// Adicionando evento de clique para o botão de limpar
clearButton.addEventListener('click', () => {
  resultInput.value = '';
  clearButton.blur(); // Remove o foco do botão após o clique
});

// Adicionando evento de clique para o botão de limpar histórico
clearHistoryButton.addEventListener('click', () => {
  clearHistory();
});

// Adicionando eventos de teclado
document.addEventListener('keydown', event => {
  const key = event.key;

  // Verificando se a tecla pressionada é um número, operador ou parêntese
  if (!isNaN(key) || ['+', '-', '*', '/', '%', '(', ')', '.'].includes(key)) {
    resultInput.value += key;
  }

  // Verificando se a tecla pressionada é a tecla Enter
  if (key === 'Enter') {
    try {
      const expression = resultInput.value;
      const result = eval(expression);
      resultInput.value = result;
      addToHistory(expression, result); // Adiciona ao histórico
    } catch (error) {
      alert('Erro na expressão! Verifique se está correta.');
    }
  }

  // Verificando se a tecla pressionada é a tecla Backspace
  if (key === 'Backspace') {
    resultInput.value = resultInput.value.slice(0, -1);
  }

  // Impedindo a seleção do botão após clicar nele
  if (event.target.tagName.toLowerCase() === 'button') {
    event.target.blur();
  }
});

function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById('theme-icon');

  // Verifica se o tema atual é claro
  const isLightTheme = body.classList.contains('light-theme');

  // Alterna entre os temas
  if (isLightTheme) {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    themeIcon.src = 'calc/images/moon.png'; // Altera para o ícone da lua
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    themeIcon.src = 'calc/images/sun.png'; // Altera para o ícone do sol
  }
}
