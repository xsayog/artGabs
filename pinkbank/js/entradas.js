// scripts.js

// Adicionar entrada de dinheiro
document
  .getElementById("incomeForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const source = document.getElementById("source").value;
    const amount = document.getElementById("amount").value;
    const description = document.getElementById("description").value;

    if (source && amount && description) {
      const entryTable = document.getElementById("incomeEntries");

      const entryDiv = document.createElement("div");
      entryDiv.classList.add("entry");

      const entryDescription = document.createElement("span");
      entryDescription.classList.add("entry-description");
      entryDescription.textContent = source;

      const entryAmount = document.createElement("span");
      entryAmount.classList.add("entry-amount");
      entryAmount.textContent = `R$ ${amount}`;

      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("delete-btn", "round-btn");
      deleteBtn.textContent = "Apagar";
      deleteBtn.addEventListener("click", function () {
        entryDiv.remove();
        updateTotal();
      });

      entryDiv.appendChild(entryDescription);
      entryDiv.appendChild(entryAmount);
      entryDiv.appendChild(deleteBtn);

      entryTable.insertBefore(entryDiv, entryTable.firstChild);

      updateTotal();
    }
  });

// Atualizar o valor total
function updateTotal() {
  const entryAmounts = document.querySelectorAll(".entry-amount");
  let total = 0;

  entryAmounts.forEach(function (entry) {
    const amount = parseFloat(entry.textContent.replace("R$ ", ""));
    total += amount;
  });

  document.getElementById("totalValue").textContent = `R$ ${total.toFixed(2)}`;
}
