document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("incomeForm");
  const incomeEntries = document.getElementById("incomeEntries");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const source = document.getElementById("source").value;
    const amount = document.getElementById("amount").value;
    const tipo = document.getElementById("tipo").value;
    const descricao = document.getElementById("descricao").value;

    if (source && amount && tipo && descricao) {
      const entry = document.createElement("div");
      entry.classList.add("entry");

      const descriptionSpan = document.createElement("span");
      descriptionSpan.classList.add("entry-description");
      descriptionSpan.textContent = source;

      const amountSpan = document.createElement("span");
      amountSpan.classList.add("entry-amount");
      amountSpan.textContent = `R$ ${amount},00`;

      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("delete-btn");
      deleteBtn.textContent = "Apagar";

      deleteBtn.addEventListener("click", function () {
        entry.remove();
        calculateTotal();
      });

      entry.appendChild(descriptionSpan);
      entry.appendChild(amountSpan);
      entry.appendChild(deleteBtn);

      incomeEntries.appendChild(entry);

      calculateTotal();
    }
  });

  function calculateTotal() {
    const entries = incomeEntries.querySelectorAll(".entry-amount");
    let total = 0;

    entries.forEach((entry) => {
      total += parseFloat(entry.textContent.replace("R$ ", ""));
    });

    const totalValue = document.getElementById("totalValue");
    totalValue.textContent = `R$ ${total.toFixed(2)}`;
  }
});
