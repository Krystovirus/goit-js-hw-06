function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreateRef = document.querySelector('[data-create]');
const btnDestroyRef = document.querySelector('[data-destroy]');
const amountBoxesRef = document.querySelector('input');
const boxesRef = document.querySelector('#boxes');
const newBoxes = [];

amountBoxesRef.addEventListener('input', totalBoxes);
function totalBoxes(event) {
  return event.currentTarget.value;
}

const piramida = {
  bricks: document.querySelector("div#boxes"),
  inputAmount: document.querySelector('input[type="number"]'),
  buttonCreator: document.querySelector("button[data-create]"),
  buttonDestroyer: document.querySelector("button[data-destroy]"),
};

const getListMarkup = (idx) => `<div class="item"
 style="width: ${30 + 10 * idx}px; height: ${
  30 + 10 * idx
}px; background-color: ${getRandomHexColor()}"></div>`;

const brickItemsBuilder = (amount) =>
  Array(amount)
    .fill("")
    .map((_, i) => getListMarkup(i))
    .join("");

piramida.buttonCreator.addEventListener("click", toCreate);
piramida.buttonDestroyer.addEventListener("click", toDestroy);

function toCreate() {
  clearBoxes();
  createBoxes(Number(piramida.inputAmount.value));
}

function toDestroy() {
  clearBoxes();
}

function createBoxes(amount) {
  piramida.bricks.insertAdjacentHTML("afterbegin", brickItemsBuilder(amount));
}

function clearBoxes() {
  while (piramida.bricks.childNodes.length > 0) {
    piramida.bricks.firstChild.remove();
  }
};