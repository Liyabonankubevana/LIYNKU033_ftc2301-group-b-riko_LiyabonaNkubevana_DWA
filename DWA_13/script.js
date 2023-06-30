const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

// 1. Use forEach to console log each name to the console.
names.forEach(name => {
  console.log(name);
});

// 2. Use forEach to console log each name with a matching province.
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

// 3. Using map, loop over all province names and turn the string to all uppercase.
const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercaseProvinces);

// 4. Create a new array with map that has the amount of characters in each name.
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// 5. Using sort to sort all provinces alphabetically.
const sortedProvinces = provinces.sort();
console.log(sortedProvinces);

// 6. Use filter to remove all provinces that have the word "Cape" in them.
const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(filteredProvinces.length);

// 7. Create a boolean array by using map and some to determine whether a name contains an 'S' character.
const hasSCharacter = names.map(name => name.includes('S'));
console.log(hasSCharacter);

// 8. Using only reduce, turn the names and provinces arrays into an object.
const provinceObject = names.reduce((obj, name, index) => {
  obj[name] = provinces[index];
  return obj;
}, {});
console.log(provinceObject);


/*
* Part 2 of the excercise 
*
*
*/



const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// 9. Use forEach to console log each product name to the console.
products.forEach(product => {
  console.log(product.product);
});

// 10. Use filter to filter out products that have a name longer than 5 characters.
const filteredProducts = products.filter(product => product.product.length <= 5);
console.log(filteredProducts);

// 11. Using both filter and map, convert prices that are strings to numbers and remove products without prices. Then use reduce to calculate the combined price of all remaining products.
const totalPrice = products
  .filter(product => typeof product.price === 'number' || (typeof product.price === 'string' && product.price.trim() !== ''))
  .map(product => Number(product.price))
  .reduce((acc, price) => acc + price, 0);
console.log(totalPrice);

// 12. Use reduce to concatenate all product names to create the following string: banana, mango, potato, avocado, coffee, and tea.
const concatenatedNames = products.reduce((str, product) => {
  if (str !== '') {
    str += ', ';
  }
  return str + product.product;
}, '');
console.log(concatenatedNames);