const select = document.querySelector(".select");
const selectText = document.querySelector(".select-text");
const optionsContainer = document.querySelector(".options-container");
const options = document.querySelectorAll(".option");
let selectedOption = document.querySelector(".option.selected");

document.addEventListener("click", (event) => {
  if (event.target !== select && select.classList.contains("active")) {
    select.classList.remove("active");
    optionsContainer.classList.remove("active");
  }
});

select.addEventListener("click", () => {
  select.classList.toggle("active");
  optionsContainer.classList.toggle("active");
});

options.forEach((option) => {
  option.addEventListener("click", () => {
    selectText.textContent = option.dataset.text;
    select.classList.remove("active");
    optionsContainer.classList.remove("active");
    selectedOption.classList.remove("selected");
    option.classList.add("selected");
    selectedOption = option;
  });
});
