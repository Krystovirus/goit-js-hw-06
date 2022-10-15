
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const kaleidoscope = {
  button: document.querySelector("button.change-color"),
  body: document.body,
  colorInd: document.querySelector("span.color"),
};
kaleidoscope.button.addEventListener("click", handleClickBtn);

function handleClickBtn() {
  const bcgColor = getRandomHexColor();
  kaleidoscope.body.style.backgroundColor = bcgColor;
  kaleidoscope.colorInd.textContent = bcgColor;
};