// single element

// document.getElementById()

// const title = document.getElementById("title");

// console.log(title);

// title.innerHTML= "Xin chao";

// document.querySelector()
// const title = document.querySelector("h1");
// console.log(title);

//Array element
// querySelectorAll()
// return A Node List

// const title = document.querySelectorAll("h1");
// console.log(title);
// title[0].style.color = "red";

// getElementByClassName()

// create element mới 
const divChild = document.createElement("div");
// chua gan vao DOM
// thay doi noi dung
divChild.innerText="day la the div moi sinh";
// tim cha de gan no
const elmParent = document.getElementById("main");
elmParent.appendChild(divChild);

// add class name
title 