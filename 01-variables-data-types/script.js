// Log number
// console.log(100);

// Log string
// console.log('Hello World');

// Log multiple values
// console.log(20, 'Hello', true);

// Log a variable
// const x = 100;
// console.log(x);

// onsole error & warning
// console.error('Alert');
// console.warn('Warning');

// Log object as table
// console.table({ name: 'Brad', email: 'brad@gmail.com' });

// Group console commands
// console.group('simple');
// console.log(x);
// console.error('Alert');
// console.warn('Warning');
// console.groupEnd();

// Add CSS to logs
// const styles = 'padding: 10px; background-color: white; color: green';
// console.log('%cHello World', styles);

// This is a single line of code

/*
Multi-line comment
console.log(100);

console.log('Hello World');

console.log(20, 'Hello', true);
*/

// bai so 3: 03 - variable
// Ways to declare a variable
// `var`, `let`, & `const`

// name conversion
// Multi-Word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// $ten_bien
// camelCase
// let firstName = 'John'; //camelCase
// const lastName = 'Doe';
// let age = 30;

// console.log(age);

// [gia tri1, giatri2 ]
// tham chieu const
// const arr = [1, 2, 3, 4];
// arr = [2,3];
// arr.push(5);
// console.log(arr);

//object tenOject = {}
// classOOP: thuoc tinh
// const person = {
//     name:"Thuận",
//     age: 22,
//     email: "thuanndph15088@fpt.edu.vn",
// };
// console.log(person);

// Declare multiple values at once
// let a, b, c;

// const d = 10,
//   e = 20,
//   f = 30;

// console.log(d);
// console.log(a);

// bai 4: data type
// const firstName = "Sara"; //string

// const age = 30; // number
// const temp = 98.9;

// const hasKids = true; // boolean // ten bien bat dau has 

// const atpNumber = null; // null


// function sayHello() {
//     console.log("Hello");
// }
// sayHello();

// Bai 5 : Stack heap 
// const person = {
//   name: "Brad",
//   age:40
// };

// let newPerson = person;
// newPerson = "jonathan";

// console.log(person,newPerson);

// Bài 6: Ép kiểu - Type conversion
// let amount = "hello";

// convert string to number
// amount = parseInt(amount);
// amount = +amount;
// amount = Number(amount);

// convert number to string
// amount = amount.toString();
// amount = String(amount);

// convert string to decimal
// amount = parseFloat(amount);

// convert number to boolean
// amount = Boolean(amount);

// ways to get NaN
// console.log(Math.sqrt(-1));
// console.log(1 + NaN);
// console.log(undefined + undefined);
// console.log('foo' / 3 );

// console.log((amount,typeof amount));

// Bài 7: toán tử

// let x;
// x = 1+1;
// x = 1-1;
// x = 1*1;
// x = 1/1;
// x = 1%1;

// nối chuỗi
// x = "Hello" + "" + "World";

// toán tử gán
// x = 10;

// x +=5;
// x -=5;
// x *=5;
// x /=5;
// x %=5;
// x **=5;

// toán tử so sánh
// equal to ( just the value )
// x = 2 == '2';

// equal to ( type and value )
// x = 2 === '2';

// not equal to ( just the value )
// x = 2 != "2";

// not equal to (  type and value )

// console.log(x);

// Bài 8: ép kiểu - type coercion
// let x;

// coerced to a string
// x = 5+'5';

// x = 5+Number('5');

// coerced to a number
// x = x * '5';

// null is coerced to 0 as it is a falsy value
// x = 5 + null;
// x = Number(null);
// x = Number(true);
// x = Number(false);

// true is coerced to a 1
// x = 5+true;

// false is coered to 0 (falsy)
// x = 5+false;

// undefined is coered to 0 ( falsy )
// x = 5+undefined;

// console.log(x,typeof x);

// Bài 9 Strings

// let x;
// const name = "John";
// const age = 31;

// nối chuỗi
// x = "Hello, my name is " + name + " and i am " + age + " years old";

// mẫu chữ
// x = `Hello my name is ${name} and i am ${age} years old`;

// Thuộc tính và phương thức chuỗi

// Tạo một "đối tượng chuỗi" (JS tự động thực hiện việc này khi sử dụng thuộc tính hoặc phương thức trên chuỗi nguyên thủy)

// const s = new String("Hello World");

// x = typeof s;
// x = s.length;

// Truy cập giá trị bằng khóa

// x = s[0];

// Hiển thị nguyên mẫu của đối tượng chuỗi. Hiển thị các thuộc tính và phương thức

// x = s.__proto__;

// thay đổi kiểu chữ
// x=s.toUpperCase();
// x=s.toLowerCase();

// charAt() - trả về ký tự tại chỉ mục đã chỉ định
// x = s.charAt(0);

// indexOf - trả về chỉ mục của lần xuất hiện đầu tiên của một giá trị được chỉ định trong chuỗi
// x = s.indexOf('d');

// substring() - tìm kiếm một chuỗi cho một giá trị được chỉ định
// x = s.substring(2, 5);
// x = s.substring(7);

// slice() - trích xuất một phần của chuỗi và trả về một chuỗi mới
// x = s.slice(-11, -6);

// trim() - xóa khoảng trắng đầu và cuối chuỗi
// x = '         Hello World';
// x = x.trim();

// replace() - thay thế tất cả các phiên bản của một chuỗi
// x = s.replace('World', 'John');

// includes() - trả về true nếu tìm thấy chuỗi
// x = s.includes('Hell');

// valueOf() - trả về giá trị nguyên thủy của một biến
// x = s.valueOf();

// split() - trả về một chuỗi các chuỗi
// x = s.split('');

// console.log(x);

// Bài 10: Viết hoa
// const myString = "developer";
// let myNewString;

//cách 1
// myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
//cách 2
// myNewString = myString[0].toUpperCase() + myString.substring(1);
//cách 3
// myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;

// console.log(myNewString);

// Bài 11: Số
// let x;
// const num = new Number(5);

// toString() - trả về một chuỗi biểu diễn số
// x = num.toString();
// Lấy độ dài
// x = num.toString().length;

// toFixed() - trả về một chuỗi biểu diễn số có số thập phân được chỉ định
// x = num.toFixed(2);

// toPrecision() - trả về một số có độ dài được chỉ định
// x = num.toPrecision(3);

// toExponential() -  chuyển đổi một số thành ký hiệu số mũ và trả về giá trị của nó dưới dạng chuỗi
// x = num.toExponential(2);

// toLocaleString() - trả về một chuỗi biểu diễn số, sử dụng ngôn ngữ hiện tại
// x = num.toLocaleString('en-US');

// valueOf - Lấy giá trị
// x = num.valueOf();

// Bản thân đối tượng Number có một số thuộc tính và phương thức

// Số lớn nhất và nhỏ nhất có thể
// x = Number.MAX_VALUE;
// x = Number.MIN_VALUE;

// console.log(x);

// Bài 12: Biểu thức đặc biệt toán học
// let x;

// Căn
// x = Math.sqrt(9);

// Giá trị tuyệt đối
// x = Math.abs(-5);

// Làm tròn
// x = Math.round(4.2);

// Làm tròn lên
// x = Math.ceil(4.2);

// Làm tròn xuống
// x = Math.floor(4.9);

// Số mũ
// x = Math.pow(2, 3);

// Số bé nhất
// x = Math.min(4, 5, 3);

// Số lớn nhất
// x = Math.max(4, 5, 3);

// Nhận số/thập phân ngẫu nhiên trong khoảng từ 0 đến 1
// x = Math.random();

// Lấy số ngẫu nhiên 1 - 100
// x = Math.floor(Math.random() * 100 + 1);

// console.log(x); 

// Bài 13 : Số
// const x = Math.floor(Math.random() * 100 + 1);
// const y = Math.floor(Math.random() * 50 + 1);

// tổng
// const sum = x + y;
// const sumOutput = `${x} + ${y} = ${sum}`;
// console.log(sumOutput);

// hiệu
// const diff = x - y;
// const diffOutput = `${x} - ${y} = ${diff}`;
// console.log(diffOutput);

// nhân
// const prod = x * y;
// const prodOutput = `${x} * ${y} = ${prod}`;
// console.log(prodOutput);

// chia
// const quot = x / y;
// const quotOutput = `${x} / ${y} = ${quot}`;
// console.log(quotOutput);

//chia hết
// const rm = x % y;
// const rmOutput = `${x} % ${y} = ${rm}`;
// console.log(rmOutput);

// Bài 14: giờ giấc
// let d;

// Lấy ngày và h hnay 
// d = new Date();

// Đặt thành một chuỗi
// d = d.toString();

// Lấy một ngày cụ thể
// Quan trọng: tháng dựa trên 0, vì vậy 0 là tháng 1 và 11 là tháng 12
// d = new Date(2021, 0, 10, 12, 30, 0);

// Truyền vào một chuỗi
// d = new Date('2021-07-10T12:30:00');
// d = new Date('07/10/2021 12:30:00');
// d = new Date('2022-07-10');
// d = new Date('07-10-2022');

// Lấy thời gian hiện tại
// d = Date.now();

// Lấy dấu thời gian của một ngày cụ thể
// d = new Date();
// d = d.getTime();
// d = d.valueOf();

// Tạo ngày từ dấu thời gian
// d = new Date(1666962049745);

// Chuyển đổi từ mili giây sang giây
// d = Math.floor(Date.now() / 1000);

// console.log(d);

// Bài 15: 
// let x;
// let d = new Date();

// Date methods

// x = d.toString();

// x = d.getTime();
// x = d.valueOf();

// x = d.getFullYear();

// x = d.getMonth();
// x = d.getMonth() + 1;

// x = d.getDate();

// x = d.getDay();

// x = d.getHours();

// x = d.getMinutes();

// x = d.getSeconds();

// x = d.getMilliseconds();

// x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

// Intl.DateTimeFormat API (locale specific)
// x = Intl.DateTimeFormat('en-US').format(d);
// x = Intl.DateTimeFormat('en-GB').format(d);
// x = Intl.DateTimeFormat('default').format(d);

// x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);

// x = d.toLocaleString('default', { month: 'short' });

// x = d.toLocaleString('default', {
//   weekday: 'long',
//   year: 'numeric',
//   month: 'long',
//   day: 'numeric',
//   hour: 'numeric',
//   minute: 'numeric',
//   second: 'numeric',
//   timeZone: 'America/New_York',
// });

// console.log(x);