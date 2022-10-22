const amountOfCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${amountOfCategories.length}`);

const CounterRef = [...amountOfCategories]
.map(categories => `Category: ${categories.firstElementChild.textContent}
Elements: ${categories.lastElementChild.children.length}`)
.join('\n')

console.log(CounterRef);
