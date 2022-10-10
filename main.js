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

console.log(counterValue);

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

