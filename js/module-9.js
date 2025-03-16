// Формат JSON

//Стандарт JSON
// {
//   "name": "Josh",
//   "weight": 175,
//   "age": 30,
//   "eyecolor": "brown",
//   "isHappy": true,
//   "cars": ["Chevy", "Honda"],
//   "favoriteBook": {
//     "title": "The Last Kingdom",
//     "author": "Bernard Cornwell",
//     "rating": 8.38
//   }
// }

//Перетворення у json
// const dog = {
//   name: "Mango",
//   age: 3,
//   isGoodBoy: true,
// };
// const json = JSON.stringify(dog);
// console.log(json); // '{"name":"Mango","age":3,"isGoodBoy":true}'

//Перетворення функцій
// const dog = {
//   name: "Mango",
//   age: 3,
//   isGoodBoy: true,
//   bark() {
//     console.log("Woof!");
//   },
// };
// const json = JSON.stringify(dog);
// console.log(json); // '{"name":"Mango","age":3,"isGoodBoy":true}'

// const json = JSON.stringify(() => console.log("Well, this is awkward"));
// console.log(json); // undefined

//Парсинг із json
// console.log(JSON.parse("5")); // 5
// console.log(JSON.parse("false")); // false
// console.log(JSON.parse("null")); // nill

// const json = '{"name":"Mango","age":3,"isGoodBoy":true}';
// const dog = JSON.parse(json);
// console.log(dog); // {name: "Mango", age: 3, isGoodBoy: true}
// console.log(dog.name); // "Mango"

//Обробка помилок
// try {
//   const data = JSON.parse("Well, this is awkward");
// } catch (error) {
//   console.log(error.name); // "SyntaxError"
//   console.log(error.message); // Unexpected token W in JSON at position 0
//   console.log(error.stack); // Unexpected token W in JSON at position 0
// }
// console.log("✅ This is fine, we handled parsing error in try...catch");

//Вебсховище

//Локальне сховище
// console.log(window.localStorage); // Storage {length: 0}
// console.log(localStorage); // Storage {length: 0}

//Додавання даних
// localStorage.setItem("ui-theme", "light");

// localStorage.setItem("ui-theme", "dark");

//Додавання складних даних
// const settings = {
//   theme: "dark",
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };
// localStorage.setItem("settings", JSON.stringify(settings));

//Отримання даних
// const savedTheme = localStorage.getItem("ui-theme");
// console.log(savedTheme); // "dark"

// const savedItem = localStorage.getItem("key-that-does-not-exist");
// console.log(savedItem); // null

// const settings = {
//   theme: "dark",
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };
// localStorage.setItem("settings", JSON.stringify(settings));
// const savedSettings = localStorage.getItem("settings");
// console.log(savedSettings); // "{"theme":"dark","isAuthenticated":true,"options":[1,2,3]}"
// const parsedSettings = JSON.parse(savedSettings);
// console.log(parsedSettings); // {"theme":"dark","isAuthenticated":true,"options":[1,2,3]}

//Видалення даних
// localStorage.setItem("ui-theme", "dark");
// console.log(localStorage.getItem("ui-theme")); // "dark"

// localStorage.removeItem("ui-theme");
// console.log(localStorage.getItem("ui-theme")); // null
// localStorage.removeItem("settings");

// localStorage.setItem("ui-theme", "light");
// localStorage.setItem("notif-level", "mute");
// console.log(localStorage); // Storage {notif-level: 'mute', ui-theme: 'light', length: 2}
// localStorage.clear();
// console.log(localStorage); // Storage {length: 0}

//Сховище сесії
// console.log(window.sessionStorage); // Storage {length: 0}

// sessionStorage.setItem("user-id", "123");
// sessionStorage.setItem(
//   "tickets",
//   JSON.stringify({ from: "Lviv", to: "Kyiv", quantity: 2 })
// );
// console.log(sessionStorage); // Storage {user-id: '123', tickets: '{"from":"Lviv","to":"Kyiv","quantity":2}', length: 2}

// const userId = sessionStorage.getItem("user-id");
// console.log(userId); // "123"
// const tickets = JSON.parse(sessionStorage.getItem("tickets"));
// console.log(tickets); // { from: "Lviv", to: "Kyiv", quantity: 2 }

// sessionStorage.removeItem("tickets");
// console.log(sessionStorage); // Storage {user-id: '123', length: 1}

// sessionStorage.clear();
// console.log(sessionStorage); // Storage {length: 0}

//Кейс: Форма з повідомленням
// const form = document.querySelector(".feedback-form");
// const textarea = form.elements.message;
// const localStorageKey = "goit-example-message";
// textarea.value = localStorage.getItem(localStorageKey) ?? "";
// form.addEventListener("input", (evt) => {
//   localStorage.setItem(localStorageKey, evt.target.value);
// });
// form.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   console.log(evt.target.elements.message.value);
//   localStorage.removeItem(localStorageKey);
//   form.reset();
// });
