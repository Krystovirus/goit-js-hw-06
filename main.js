//task 1

const amount = document.querySelectorAll(".item").length;
console.log(`Number of categories: ${amount}`);

const elelementsTitle = document.querySelectorAll("h2");
for (let element of elelementsTitle) {
  console.log("Category:", element.textContent);
  console.log("Elements:", element.nextElementSibling.children.length);
}

//task 2

const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
  ];

const elements = ingredients.map(ingredient => {
    const liRef = document.createElement('li');
    liRef.textContent = ingredient
    liRef.classList.add('item');
    return liRef;
  })

  const ingredientsTitle = document.createElement('h2');
  ingredientsTitle.textContent = "Ingredients"
  ingredientsTitle.classList.add('title_ingredients');

  const ingredientsSectionRef = document.querySelector(".task-second");
  ingredientsSectionRef.prepend(ingredientsTitle);
  
  const ulRef = document.querySelector('#ingredients');
  ulRef.append(...elements);

  console.log(ulRef);

// task 3

const images = [
    {
      url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat",
    },
    {
      url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
      url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
      alt: "Group of Horses Running",
    },
  ];

const galleryUlRef = document.querySelector('.gallery')

const picturesRef = image => {
  const { url, alt } = image;
  return `
    <li class="gallery-element">
      <img class="gallery-img" src="${url}" alt="${alt}" width=250px height=170px >
    </li>
  `;
};

const insertedPicsRef = images
  .map(picturesRef)
  .join('');
galleryUlRef.insertAdjacentHTML('afterbegin', insertedPicsRef);

console.log(galleryUlRef);

//task 4

let counterValue = 0;
const decrement = document.querySelector('button[data-action=decrement]');
const increment = document.querySelector('button[data-action=increment]');
const value = document.querySelector('#value');

const decrCounter = function () {
    counterValue -= 1;
    value.textContent = counterValue;
  };
  
  const incrCounter = function () {
    counterValue += 1;
    value.textContent = counterValue;
  };
  
  decrement.addEventListener('click', decrCounter);
  increment.addEventListener('click', incrCounter);

//task 5

const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", (event) => {
  outputRef.textContent = event.currentTarget.value;
  if (outputRef.textContent.length === 0) {
    outputRef.textContent = "Anonymous";
  }
});


//task 6

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

//task 7

const inputScroll = document.querySelector('#font-size-control');
const magicSpan = document.querySelector('#text');


inputScroll.addEventListener('change', (event) => {
    magicSpan.style.fontSize = event.target.value+'px';
});

//task 8

const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Attention! All registration fields must be filled!');
  }

  const usersInform = { email: email.value, password: password.value };

  console.log(usersInform);
  event.currentTarget.reset();
};

//task 9

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

// task 10

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