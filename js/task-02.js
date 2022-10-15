const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
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

const ingredientsSectionRef = document.querySelector("#ingredients");
ingredientsSectionRef.prepend(ingredientsTitle);

const ulRef = document.querySelector('#ingredients');
ulRef.append(...elements);

console.log(ulRef);