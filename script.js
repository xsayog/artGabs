//slide - carrossel
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const slideContainer = document.querySelector(".slide-container");

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove("active-slide");
  });
  slides[index].classList.add("active-slide");
  slideContainer.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener("click", () => {
  currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
  showSlide(currentSlide);
});

nextBtn.addEventListener("click", () => {
  currentSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
  showSlide(currentSlide);
});

showSlide(currentSlide);

// Lista de tarefas
let input = document.getElementById("inputText");
let list = document.getElementById("list");
let minimalValue = 3;
let listNum = 0;

addList = () => {
  // Obter
  let inputText = filterList(input.value);
  // Definir
  if (inputText) {
    list.innerHTML += `<li class="my-3 py-3 shadow list-group-item" id="list${listNum}">
        <div class="row">
          <div class="col-1">
            <input class="" type="checkbox" id="check${listNum}" onclick="done(${listNum})">
          </div>
          <div class="col-6">
            <span class="h4" id="text${listNum}">${inputText}</span>
          </div>
          <div class="col-4">
            <button class="btn btn-dark" onclick="deleteList(${listNum})">Delete</button>
            <button class="btn btn-dark" onclick="editList(${listNum})">Edit</button>
          </div>
        </div>
      </li>`;
    input.value = "";
    listNum++;
  }
};

done = (listId) => {
  let checkbox = document.getElementById(`check${listId}`);
  let current = document.getElementById(`text${listId}`);
  let classExist = current.classList.contains("completed-task");
  if (classExist) {
    current.classList.remove("completed-task");
  } else {
    current.classList.add("completed-task");
  }
};

filterList = (x) => {
  if (x) {
    if (x.length >= minimalValue) {
      return x;
    } else {
      alert("Por favor, insira mais de 3 palavras");
    }
  } else {
    return false;
  }
};

editList = (listId) => {
  let currentText = document.getElementById(`text${listId}`);
  let newText = prompt("Quer alterar a lista?", currentText.innerHTML);
  if (filterList(newText)) {
    currentText.innerHTML = newText;
  }
};

deleteList = (listId) => {
  let current = document.getElementById(`text${listId}`).innerHTML;
  let deleteConfirm = confirm(
    `Tem certeza de que deseja excluir "${current}"?`
  );
  if (deleteConfirm) {
    let parent = document.getElementById("list");
    let child = document.getElementById(`list${listId}`);
    parent.removeChild(child);
  } else {
    console.log("Excluído");
  }
};