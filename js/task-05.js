const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", (event) => {
  outputRef.textContent = event.currentTarget.value;
  if (outputRef.textContent.length === 0) {
    outputRef.textContent = "Anonymous";
  }
});