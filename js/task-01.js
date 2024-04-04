
const bigList = document.querySelector("#categories");


const totalCategories = bigList.children.length;
console.log(`Number of categories: ${totalCategories}`);


const categoryItems = bigList.querySelectorAll('.item');
for (let i = 0; i < categoryItems.length; i++) {
  const category = categoryItems[i];

  const categoryName = category.querySelector('h2').textContent;
  console.log(`Category: ${categoryName}`);

  const elementsCount = category.querySelectorAll('li').length;
  console.log(`Elements: ${elementsCount}`);
}