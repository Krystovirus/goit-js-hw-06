const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", (event) => {
    if (validationInput.value.length === 6) {
        validationInput.classList.add("valid");
        validationInput.classList.remove("invalid");
      } else if (validationInput.value.length === 0) {
        validationInput.classList.remove("invalid");
        validationInput.classList.remove("valid");
      } else {
        validationInput.classList.add("invalid");
        validationInput.classList.remove("valid");
      }
});