// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const doubledNumbers = numbers.map((number) => number * 2);
// console.log(doubledNumbers);

// Same with forEach
// const doubledNumbers2 = [];
// numbers.forEach((number) => {
//   doubledNumbers2.push(number * 2);
// });

// const companies = [
//   { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
//   { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
//   { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
//   { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
//   { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
//   { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
//   { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
//   { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
//   { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
// ];

// giu company.end < 2010 // 2014 => false
// const filterCompanies = companies.filter((company) => {
//   return company.end < 2010; // 2004 < 2010 -> true; 2014< 2010 -> false -> loai
// });

//remove 1981
// function removeCompanyByStart(start){
//   return companies.filter((company)=>{
//     return company.start !== start;
//   });
// }

// const filterCompanies2 = removeCompanyByStart(2011);
// const newCompanies = companies.map((company) => {
//   return {
//     title: `Company name: $${company.name}`,
//   };
// });

// console.log(filterCompanies2);

// Reduce
// Shopping cart example
const cart = [
  { id: 1, name: 'Product 1', price: 130 },
  { id: 2, name: 'Product 2', price: 150 },
  { id: 3, name: 'Product 3', price: 200 },
];

const totalBil = cart.reduce((total,product)=>{
  console.log({total,product});
  //total = 0 + 130 = 130
  //total = 130 + 150
  return total + product.price;
},0);

console.log(totalBil);