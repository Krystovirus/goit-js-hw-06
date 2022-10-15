const amount = document.querySelectorAll(".item").length;
console.log(`Number of categories: ${amount}`);

const elelementsTitle = document.querySelectorAll("h2");
for (let element of elelementsTitle) {
  console.log("Category:", element.textContent);
  console.log("Elements:", element.nextElementSibling.children.length);
}
