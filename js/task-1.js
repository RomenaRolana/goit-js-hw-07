const categoriesList = document.getElementById('categories');
const categoryItems = document.querySelectorAll('#categories .item');

console.log(`Total categories: ${categoryItems.length}`);
categoryItems.forEach((category) => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryElementsCount = category.querySelectorAll('ul li').length;
  console.log(`Category: ${categoryName}`);
  console.log(`Number of elements: ${categoryElementsCount}`);
});