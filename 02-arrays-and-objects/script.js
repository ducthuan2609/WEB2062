// Array Literal
// const numbers = [12, 45, 33, 29, 39, 102];
// const mixed = [12, 'Hello', true, null];

// Array Constructor
// const fruits = new Array('apple', 'grape', 'orange');

// const arr = [28, 38, 44, 29, 109];

// let arr1,arr2;
// push() - them 1 gia tri vao cuoi
// arr.push(100);

// pop() - lay ra gia tri cuoi cung
// arr.pop();

// unshift() - Thêm giá trị đầu
// arr.unshift(99);

// shift() - Xóa giá trị đầu
// arr.shift();

// reverse() - Đảo chuỗi
// arr.reverse();

// console.log(arr1);
// console.log(arr2);

// let x;
// const fruits = ['apple', 'pear', 'orange'];
// const berries = ['strawberry', 'blueberry', 'rasberry'];

// fruits.push(berries);
// console.log(fruits)

// x = fruits[3][1];

// concat() - Concatenate arrays
// x = fruits.concat(berries);
// Spread ... 
// x = [...fruits, ...berries];//nối 2 mảng

// x = [...fruits]; // clone 1 mang
// const a = fruits;
// a.push("quyt");

// console.log({fruits});

// bài 5: đối tượng
// let x;

// Tạo đối tượng
// const person = {
//   name: 'John Doe',
//   age: 30,
//   isAdmin: true,
//   address: {
//     street: '123 Main st',
//     city: 'Boston',
//     state: 'MA',
//   },
//   hobbies: ['music', 'sports'],
// };

// Truy cập thuộc tính đối tượng
// x = person.name; // Dot notation
// x = person['age']; // Bracket notation
// x = person.address.state;
// x = person.hobbies[0];

// Cập nhật
// person.name = 'Jane Doe';
// person['isAdmin'] = false;

// Xóa thuộc tính
// delete person.age;

// Tạo thuộc tính mới
// person.hasChildren = true;

// Thêm funcion
// person.greet = function () {
//   console.log(`Hello, my name is ${this.name}`);
// };

// person.greet();

// Keys with multiple words
// const person2 = {
//   'first name': 'Brad',
//   'last name': 'Traversy',
// };

// x = person2['first name'];

// console.log(x);

// Bài 6: object-spread-methods
// let x;

// Tạo đối tượng bằng cách sử dụng hàm tạo đối tượng
// const todo = new Object();

// todo.id = 1;
// todo.name = 'Buy Milk';
// todo.completed = false;

// x = todo;

// Object Nesting
// const person = {
//   address: {
//     coords: {
//       lat: 42.9384,
//       lng: -71.3232,
//     },
//   },
// };

// x = person.address.coords.lat;

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };

// cách clone
// const obj3 = { ...obj1, ...obj2 };
// Giống với dùng...
// const obj4 = Object.assign({}, obj1, obj2);

// Chuỗi của đối tượng  
// const todos = [
//   { id: 1, name: 'Buy Milk' },
//   { id: 2, name: 'Pickup kids from school' },
//   { id: 3, name: 'Take out trash' },
// ];

// x = todos[0].name;

// Nhận mảng khóa đối tượng
// x = Object.keys(todo);

// Nhận chiều dài của một đối tượng
// x = Object.keys(todo).length;

// Nhận mảng giá trị đối tượng
// x = Object.values(todo);

// Nhận mảng các cặp khóa/giá trị đối tượng
// x = Object.entries(todo);

// Kiểm tra xem đối tượng có thuộc tính không
// x = todo.hasOwnProperty('age');

// console.log(x);

// Bài 7: Destructuring
// Đặt thuộc tính đối tượng có cùng tên với một biến
// const firstName = 'John';
// const lastName = 'Doe';
// const age = 30;

// const person = {
//   firstName,
//   lastName,
//   age,
// };

// console.log(person.age);

// Destructuring object properties

// const todo = {
//   id: 1,
//   title: 'Take out trash',
//   user: {
//     name: 'John',
//   },
// };

// const {
//   id: todoId, // rename id to todoId
//   title,
//   user: { name }, // destructuring multiple levels
// } = todo;

// console.log(todoId);

// Destructuring arrays & using the rest/spread operator
// const numbers = [23, 67, 33, 49, 52];

// const [first, second, ...rest] = numbers;

// console.log(first, second, rest);

// Bài 8:

// const post = {
//     id: 1,
//     title: 'Post One',
//     body: 'This is the body',
//   };
  
//   Convert to JSON string
//   const str = JSON.stringify(post);
  
//   console.log(str.id);
  
//   Parse JSON
//   const obj = JSON.parse(str);
  
//   console.log(obj.id);
  
//   JSON & arrays
//   const posts = [
//     {
//       id: 1,
//       title: 'Post One',
//       body: 'This is the body',
//     },
//     {
//       id: 2,
//       title: 'Post Two',
//       body: 'This is the body',
//     },
//   ];
  
//   const str2 = JSON.stringify(posts);
  
//   console.log(str2);

// Bài 9: Object
// Step 1
const library = [
    {
      title: 'The Road Ahead',
      author: 'Bill Gates',
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
    {
      title: 'Steve Jobs',
      author: 'Walter Isaacson',
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
    {
      title: 'Mockingjay',
      author: 'Suzanne Collins',
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
  ];
  
  // Step 2
  library[0].status.read = true;
  library[1].status.read = true;
  library[2].status.read = true;
  
  // Step 3
  const { title: firstBook } = library[0];
  
  console.log(firstBook);
  
  // Step 4
  const libraryJSON = JSON.stringify(library);
  
  console.log(libraryJSON);

