const categoriesList = document.querySelector('#categories');
const items = categoriesList.querySelectorAll('.item');

// Виводимо кількість категорій в ul#categories
console.log(`Number of categories: ${items.length}`);

// Для кожної категорії виводимо назву та кількість елементів
items.forEach(item => {
  const categoryName = item.querySelector('h2').textContent;
  const itemElements = item.querySelectorAll('ul li');
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${itemElements.length}`);
});