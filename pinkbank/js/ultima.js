// Código JavaScript para Últimas Despesas

// Função para adicionar uma despesa à lista
function addExpense() {
  const description = document.getElementById("description").value;
  const amount = document.getElementById("amount").value;

  if (description !== "" && amount !== "") {
    const expensesList = document.getElementById("expensesList");

    // Criar elementos HTML para a nova despesa
    const expenseEntry = document.createElement("div");
    expenseEntry.classList.add("entry");

    const expenseDescription = document.createElement("span");
    expenseDescription.classList.add("entry-description");
    expenseDescription.textContent = description;

    const expenseAmount = document.createElement("span");
    expenseAmount.classList.add("entry-amount");
    expenseAmount.textContent = `R$ ${amount}`;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "Apagar";
    deleteButton.onclick = function () {
      expenseEntry.remove();
      updateTotal();
    };

    // Adicionar elementos à entrada da despesa
    expenseEntry.appendChild(expenseDescription);
    expenseEntry.appendChild(expenseAmount);
    expenseEntry.appendChild(deleteButton);

    // Adicionar entrada de despesa à lista
    expensesList.appendChild(expenseEntry);

    // Atualizar o total
    updateTotal();

    // Limpar campos do formulário
    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";
  }
}

// Função para calcular e atualizar o total das despesas
function updateTotal() {
  const expenses = document.querySelectorAll(".entry-amount");
  let total = 0;

  expenses.forEach((expense) => {
    const amount = parseFloat(expense.textContent.replace("R$ ", ""));
    total += amount;
  });

  const totalValue = document.getElementById("totalValue");
  totalValue.textContent = `R$ ${total.toFixed(2)}`;
}

// Event listener para adicionar despesas
document.getElementById("addExpense").addEventListener("click", addExpense);
