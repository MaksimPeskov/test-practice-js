// Поширення подій

//Спливання подій
// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");
// parent.addEventListener("click", () => {
//   console.log("Parent click handler");
// });
// child.addEventListener("click", () => {
//   console.log("Child click handler");
// });
// descendant.addEventListener("click", () => {
//   console.log("Descendant click handler");
// });

//Цільовий елемент
// const parent = document.querySelector("#parent");
// parent.addEventListener("click", (event) => {
//   console.log("event.target:", event.target);
//   console.log("event.currentTarget:", event.currentTarget);
// });

//Припинення спливання
// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");
// parent.addEventListener("click", () => {
//   alert(
//     "Parent click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
//   );
// });
// child.addEventListener("click", () => {
//   alert(
//     "Child click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
//   );
// });
// descendant.addEventListener("click", (event) => {
//   event.stopPropagation();
//   alert("Descendant click handler");
// });

//Делегування подій
// const box = document.querySelector("div.box");

// box.addEventListener("click", function (event) {
//   console.log(event.target);
// });

// document.addEventListener("click", function (event) {
//   if (event.target.closest(".box")) {
//     console.log("Клик по:", event.target);
//   }
// });

//Перевірка цільового елемента події
// const colorPalette = document.querySelector(".color-palette");
// const output = document.querySelector(".outpute");
// colorPalette.addEventListener("click", selectColor);
// function selectColor(event) {
//   if (event.target.nodeName !== "BUTTON") {
//     return;
//   }
//   const selectedColor = event.target.dataset.color;
//   output.textContent = `Selected color: ${selectedColor}`;
//   output.style.color = selectedColor;
// }
// createPaletteItems();
// function createPaletteItems() {
//   const items = [];
//   for (let i = 0; i < 60; i++) {
//     const color = getRandomHexColor();
//     const item = document.createElement("button");
//     item.type = "button";
//     item.dataset.color = color;
//     item.style.backgroundColor = color;
//     item.classList.add("item");
//     items.push(item);
//   }
//   colorPalette.append(...items);
// }
// function getRandomHexColor() {
//   const letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

//Бібліотеки
// console.log(_.sum([4, 2, 8, 6])); // 20
// console.log(_.sum([5, 10])); // 15
// console.log(_.shuffle([1, 2, 3, 4])); // [4, 1, 3, 2]
// console.log(_.shuffle([1, 2, 3, 4])); // [3, 2, 1, 4]

//Деструктуризація

//без деструктуризація
// const user = {
//   name: "Jacob",
//   age: 32,
// };
// console.log(user.name); // Jacob
// console.log(user.age); // 32

// з деструктуризація
// const user = {
// 	name: "Jacob",
// 	age: 32
// };
// const { name, age } = user;
// console.log(name); // Jacob
// console.log(age); // 32

//Деструктуризація об'єктів

//без деструктуризація
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };
// const accessType = book.isPublic ? "pulbic" : "private";
// const message = `Book ${book.title} by author ${book.author} with rating ${book.rating} is in ${accessType} access!`;
// console.log(accessType); // pulbic
// console.log(message); // Book The Last Kingdom by author Bernard Cornwell with rating 8.38 is in pulbic access!

// з деструктуризація
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };
// const { title, author, isPublic, rating } = book;
// const accessType = isPublic ? "pulbic" : "private";
// const message = `Book ${title} by author ${author} with rating ${rating} is in ${accessType} access!`;
// console.log(accessType); // pulbic
// console.log(message); // Book The Last Kingdom by author Bernard Cornwell with rating 8.38 is in pulbic access!

//Деструктуризація неіснуючих властивостей
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };
// const { title, bookTitle, coverImage, bookRating } = book;
// console.log(title); // "The Last Kingdom"
// console.log(bookTitle); // undefined
// console.log(coverImage); // undefined
// console.log(bookRating); // undefined

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
// };
// const {
//   title,
//   author,
//   coverImage = "https://via.placeholder.com/640/480",
// } = book;
// console.log(title); // "The Last Kingdom"
// console.log(author); // "Bernard Cornwell"
// console.log(coverImage); // "https://via.placeholder.com/640/480"

//Перейменування змінної
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };
// const { title, author: bookAuthor, isPublic, rating: bookRating } = book;
// console.log(title); // "The Last Kingdom"
// console.log(bookAuthor); // "Bernard Cornwell"
// console.log(isPublic); // true
// console.log(bookRating); // 8.38

//Значення за замовчуванням
// const book = {
//   title: "The Last Kingdom",
//   coverImage:
//     "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
// };
// const {
//   title,
//   coverImage: bookCoverImage = "https://via.placeholder.com/640/480",
// } = book;
// console.log(title); // "The Last Kingdom"
// console.log(bookCoverImage); // "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg"

// const book = {
//   title: "The Dream of a Ridiculous Man",
// };
// const {
//   title,
//   coverImage: bookCoverImage = "https://via.placeholder.com/640/480",
// } = book;
// console.log(title); // "The Dream of a Ridiculous Man"
// console.log(bookCoverImage); // "https://via.placeholder.com/640/480"

//Деструктуризація в циклах
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
// ];
// for (const book of books) {
//   const { title, author, rating } = book;

//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
// ];
// for (const { title, author, rating } of books) {
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

//Деструктуризація параметрів об'єкта:

//Без деструктуризації
// function printUserInfo(user) {
//   console.log(`Name: ${user.name}, Age: ${user.age}, Hobby: ${user.hobby}`);
// }
// printUserInfo({
// 	name: "Alice",
// 	age: 25,
// 	hobby: "dancing"
// }); // Name: Alice, Age: 25, Hobby: dancing

// З деструктуризацією об'єкта в тілі функції:
// function printUserInfo(user) {
// const { name, age, hobby } = user
//   console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
// }
// printUserInfo({
// 	name: "Alice",
// 	age: 25,
// 	hobby: "dancing"
// }); // Name: Alice, Age: 25, Hobby: dancing

//Із деструктуризацією об'єкта в місці оголошення параметрів:
// function printUserInfo({ name, age, hobby }) {
//   console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
// }
// printUserInfo({
// 	name: "Alice",
// 	age: 25,
// 	hobby: "dancing"
// }); // Name: Alice, Age: 25, Hobby: dancing

//Патерн «Об'єкт параметрів»
// function doStuffWithBook(book) {
//   console.log(book.title);
//   console.log(book.pages);
// }
// doStuffWithBook({
//   title: "The Last Kingdom",
//   pages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   isPublic: true,
// });

// function doStuffWithBook(book) {
//   const { title, pages, downloads, rating, isPublic } = book;
//   console.log(title);
//   console.log(pages);
// }
// doStuffWithBook({
//   title: "The Last Kingdom",
//   pages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   isPublic: true,
// });

// function doStuffWithBook({ title, pages, downloads, rating, isPublic }) {
//   console.log(title);
//   console.log(pages);
// }
// doStuffWithBook({
//   title: "The Last Kingdom",
//   pages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   isPublic: true,
// });

// Глибока деструктуризація
// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };
// const { name, tag, stats } = user;
// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(stats); // { followers: 5603, views: 4827, likes: 1308 }

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };
// const {
//   name,
//   tag,
//   stats: { followers, views, likes },
// } = user;
// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(views); // 4827
// console.log(likes); // 1308

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };
// const {
//   name,
//   tag,
//   stats: { followers = 0, views: userViews = 0, likes: userLikes = 0 },
// } = user;
// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

////Часткова деструктуризація
// const user = {
//   name: "Jacob",
//   age: 32,
//   email: "j.cob@mail.com",
//   isOnline: true,
// };
// const { name, isOnline, ...otherProps } = user;
// console.log(name); // "Jacob"
// console.log(isOnline); // true
// console.log(otherProps); // {age: 32, email: "j.cob@mail.com"}

//Деструктуризація масивів

//Синтаксис
// const color = [200, 255, 100];
// const [red, green, blue] = color;
// const rgb = `rgb(${red}, ${green}, ${blue})`;
// console.log(rgb);

//Значення за замовчуванням
// const color = [200, 100, 255];
// const [red, green, blue, alfa = 0.3] = color;
// const rgba = `rgba(${red}, ${green}, ${blue}, ${alfa})`;
// console.log(rgba);

//Часткова деструктуризація
// const color = [200, 255, 100];
// const [red, ...otherColors] = color;
// console.log(red); // 200
// console.log(otherColors); // [255, 100]

//Пропуск значень
// const rgb = [200, 100, 255];
// const [, , blue] = rgb;
// console.log(`Blue: ${blue}`); // Blue: 255

//Деструктуризація параметрів

// function printFruits([firstFruit, secondFruit, thirdFruit]) {
//   console.log(firstFruit, secondFruit, thirdFruit);
// }
// printFruits(["apple", "banana", "orange"]); // "apple banana orange"
