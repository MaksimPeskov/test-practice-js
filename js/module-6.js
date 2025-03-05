//Контекст виконання функції

//Ключове слово this
// const user = {
//   username: "Victor",
//   showName() {
//     console.log(this.username);
//   },
// };
// user.showName();

//Виконай рефакторинг методів об'єкта pizzaPalace, розставивши відсутні this в місцях звернення до властивостей і методів об'єкта.

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);
//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }
//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };
// console.log(pizzaPalace.order("Smoked")); // Order accepted, preparing «Smoked» pizza"
// console.log(pizzaPalace.order("Four meats")); // "Order accepted, preparing «Four meats» pizza"
// console.log(pizzaPalace.order("Big Mike")); // "Sorry, there is no pizza named «Big Mike»"
// console.log(pizzaPalace.order("Viennese")); // "Sorry, there is no pizza named «Viennese»"

//Глобальний контекст

//не суворий режим
// function foo() {
//   console.log(this);
// }
// foo(); // window

// суворий режим
// function foo() {
//   console.log(this);
// }
// foo(); // undefined

//Контекст методу об'єкта
// const user = {
//   username: "Poly",
//   showThis() {
//     console.log(this);
//   },
// };
// user.showThis(); // {username: "Poly", showThis: ƒ}

// "use strict";
// function showThis() {
//   console.log("this in showThis: ", this);
// }
// showThis(); // "this in showThis: undefined"

// "use strict";
// function showThis() {
//   console.log("this in showThis: ", this);
// }
// const user = {
//   username: "Poly",
// };
// user.showContext = showThis;
// user.showContext(); // this in showThis: {username: "Poly", showContext: ƒ}
// showThis(); // "this in showThis: undefined"

//Метод call()
// function greet(str) {
//   console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }
// const mango = {
//   username: "Mango",
//   room: 27,
// };
// const poly = {
//   username: "Poly",
//   room: 191,
// };
// greet.call(mango, "Welcome"); // "Welcome, Mango, your room is 27!"
// greet.call(poly, "Aloha"); // "Aloha, Poly, your room is 191!"

//Метод apply()
// function greet(str) {
//   console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }
// const mango = {
//   username: "Mango",
//   room: 27,
// };
// const poly = {
//   username: "Poly",
//   room: 191,
// };
// greet.apply(mango, ["Welcome"]); // "Welcome, Mango, your room is 27!"
// greet.apply(poly, ["Aloha"]); // "Aloha, Poly, your room is 191!"

//Метод bind() і втрата контексту
// "use strict"
// const customer = {
//   username: "Jacob",
//   sayHello() {
//     console.log(`Hello, ${this.username}!`);
//   },
// };
// customer.sayHello(); // "Hello, Jacob!"
// const greet = customer.sayHello.bind(customer);
// greet(); // "Hello, Jacob!"

//Метод bind() і колбеки
// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// function makeMessage(callback) {
// 	const username = callback();
// 	console.log(`Processing an application from ${username}`);
// }
// makeMessage(customer.getFullName.bind(customer)); // "Processing an application from Jacob Mercer"

//Стрілочні функції
// const showThis = () => {
//   console.log("this in showThis: ", this);
// };
// showThis(); // this in showThis: window

// const showThis = () => {
//   console.log("this in showThis: ", this);
// };
// const user = {
//   username: "Mango",
// };
// user.showContext = showThis;
// user.showContext(); // this in showThis: window

// const hotel = {
//   username: "Resort hotel",
//   showThis() {
//     const foo = () => {
//       console.log("this in foo: ", this);
//     };

//     foo();
//     console.log("this in showThis: ", this);
//   },
// };
// hotel.showThis();
// // this in foo: {username: 'Resort hotel', showThis: ƒ}
// // this in showThis: {username: 'Resort hotel',showThis: ƒ}

// const showThis = () => {
//   console.log("this in showThis: ", this);
// };
// showThis.call({ username: "Mango" }); // this in showThis: window
// showThis.apply({ username: "Mango" }); // this in showThis: window
// const boundShowThis = showThis.bind({ username: "Mango" });
// boundShowThis(); // this in showThis: window

//Прототипи

//Прототип об'єкта
// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Mango";
// console.log(dog); // { name: "Mango", [[Prototype]]: animal }
// console.log(dog.name); // "Mango"
// console.log(dog.legs); // 4

//Зміни код таким чином, щоб об'єкт parent став прототипом для об'єкта у змінній сhild.

// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;
// console.log(child); // {name: 'Jason', age: 27,
// // console.log(dog); // { name: "Mango", [[Prototype]]: parent}
// console.log(parent.hasOwnProperty("surname")); // true
// console.log(parent.hasOwnProperty("heritage")); // true
// console.log(child.hasOwnProperty("name")); // true
// console.log(child.name); // "Jason"
// console.log(child.hasOwnProperty("age")); // true
// console.log(child.age); // 27
// console.log(child.hasOwnProperty("surname")); // false
// console.log(child.surname); // "Moore"
// console.log(child.hasOwnProperty("heritage")); //false
// console.log(child.heritage); // "Irish"
// console.log(parent.isPrototypeOf(child)); // true

//Перевірка прототипу
// const customer = {
// 	username: "Jacob"
// };
// const animal = {
// 	legs: 4
// };
// const dog = Object.create(animal);
// dog.name = "Mango";
// console.log(dog); // { name: "Mango", [[Prototype]]: animal }
// console.log(animal.isPrototypeOf(dog)); // true
// console.log(dog.isPrototypeOf(animal)); // false
// console.log(customer.isPrototypeOf(dog)); // false

//Власні і невласні властивості
// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Mango";
// console.log(dog); // {name: "Mango", [[Prototype]]: animal}
// console.log(dog.name); // "Mango"
// console.log(dog.legs); // 4
// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.hasOwnProperty("legs")); // false

//Перебір власних властивостей
// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = "Mango";
// for (const key in dog) {
//   console.log(key); // "name" "legs"
// }

// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = "Mango";
// for (const key in dog) {
//   if (dog.hasOwnProperty(key)) {
//     console.log(key); // "name"
//   }
// }

// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = "Mango";
// for (const key of Object.keys(dog)) {
//   console.log(key); // "name"
// }

//Ланцюжки прототипів
// const objC = { c: "objC prop" };
// const objB = Object.create(objC);
// objB.b = "objB prop";
// const objA = Object.create(objB);
// objA.a = "objA prop";
// console.log(objA); // { a: "objA prop", [[Prototype]]: objB }
// console.log(objB); // { b: "objB prop", [[Prototype]]: objC }
// console.log(objC); // { c: "objC prop", [[Prototype]]: Object }
// console.log(objA.hasOwnProperty("a")); // true
// console.log(objA.a); // "objA prop"
// console.log(objA.hasOwnProperty("b")); // false
// console.log(objA.b); // "objB prop"
// console.log(objA.hasOwnProperty("c")); // false
// console.log(objA.c); // "objC prop"
// console.log(objA.hasOwnProperty("x")); // false
// console.log(objA.x); // undefined

//Зміни код, побудувавши ланцюжок прототипів таким чином, щоб об'єкт ancestor був прототипом для parent, а той, своєю чергою, був прототипом для child.

// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };
// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;
// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;
// console.log(ancestor.isPrototypeOf("parent")); // false
// console.log(parent.isPrototypeOf("child")); // false
// console.log(ancestor.hasOwnProperty("surname")); // true
// console.log(ancestor.surname); // "Dawson"
// console.log(parent.hasOwnProperty("surname")); // true
// console.log(parent.surname); // "Moore"
// console.log(child.hasOwnProperty("surname")); // false
// console.log(child.surname); // "Moore"
// console.log(ancestor.hasOwnProperty("heritage")); // true
// console.log(ancestor.heritage); // "Irish"
// console.log(parent.hasOwnProperty("heritage")); // false
// console.log(parent.heritage); // "Irish"
// console.log(child.hasOwnProperty("heritage")); // false
// console.log(child.heritage); // "Irish"

//ООП

//Процедурне програмування
// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;
// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };
// console.log(getWage(baseSalary, overtime, rate));

//Об'єктно-орієнтоване програмування
// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };
// console.log(employee.getWage());

//Класи

//Оголошення класу
// class User {
//   // Тіло класу
// }
// const mango = new User();
// console.log(mango); // {}
// const poly = new User();
// console.log(poly); // {}

//Використовуючи ключове слово class, оголоси клас Car з порожнім тілом.

// class Car {}
// const audi = new Car();
// console.log(audi);

//Конструктор класу
// class User {
//   constructor() {
//     console.log("constructor call");
//   }
// }
// const mango = new User(); // "constructor call"
// console.log(mango); // {}

// class User {
//   constructor(name, email) {
//     console.log(name, email);
//   }
// }
// const mango = new User("Mango", "mango@mail.com"); // "Mango mango@mail.com"
// console.log(mango); // {}

// class User {
//   constructor(name, email) {
//     // Ініціалізація властивостей екземпляра
//     this.name = name;
//     this.email = email;
//   }
// }
// const mango = new User("Mango", "mango@mail.com");
// console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }
// const poly = new User("Poly", "poly@mail.com");
// console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }

//Додай класу Car метод constructor, який приймає три параметри:

// brand - марка автомобіля
// model - модель автомобіля
// price - ціна автомобіля
// Клас Car повинен створювати об'єкт з одноіменними властивостями brand, model і price, які отримують свої значення з аргументів, переданих при створенні нового екземпляра за допомогою оператора new.

// class Car {
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }
// const audi = new Car("Audi", "Q3", 36000); // {brand: "Audi", model: "Q3", price: 36000}
// console.log(audi);
// const bmw = new Car("BMW", "X5", 58900); // {brand: "BMW", model: "X5", price: 58900}
// console.log(bmw);
// const nissan = new Car("Nissan", "Murano", 31700);
// console.log(nissan); // {brand: "Nissan", model: "Murano", price: 31700}

//Об'єкт параметрів
// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }
// }
// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });
// console.log(mango);
// // { name: "Mango", email: "mango@mail.com" }

//Виконай рефакторинг класу Car таким чином, щоб він приймав один параметр - об'єкт з властивостями brand, model і price.

// class Car {
//   constructor(auto) {
//     this.brand = auto.brand;
//     this.model = auto.model;
//     this.price = auto.price;
//   }
// }
// const audi = new Car({ brand: "Audi", model: "Q3", price: 36000 }); // {brand: "Audi", model: "Q3", price: 36000}
// console.log(audi);
// const bmw = new Car({ brand: "BMW", model: "X5", price: 58900 }); // {brand: "BMW", model: "X5", price: 58900}
// console.log(bmw);
// const nissan = new Car({ brand: "Nissan", model: "Murano", price: 31700 });
// console.log(nissan); // {brand: "Nissan", model: "Murano", price: 31700}

//Методи класу
// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }
//   getEmail() {
//     return this.email;
//   }
//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }
// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });
// console.log(mango.getEmail()); // "mango@mail.com"
// mango.changeEmail("new@mail.com");
// console.log(mango.getEmail()); // "new@mail.com"

//Додай класу Car два методи.

// getPrice() - повертає значення властивості price з об'єкта, який буде його викликати.
// changePrice(newPrice) - оновлює значення властивості price в об'єкта, який буде його викликати на значення параметра newPrice.

// class Car {
//   constructor(params) {
//     this.brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }
//   getPrice() {
//     return this.price;
//   }
//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }
// const audi = new Car({ brand: "Audi", model: "Q3", price: 36000 });
// console.log(audi.getPrice()); // 36000
// audi.changePrice(42000);
// console.log(audi.getPrice()); // 42000

//Прототип екземпляру
// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }
//   getEmail() {
//     return this.email;
//   }
//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }
// console.log(User.prototype); // {constructor: ƒ, getEmail: ƒ, changeEmail: ƒ}

//Приватні властивості
// class User {
//   name;
//   #email;
//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }
// }
// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });
// console.log(mango.name); // "Mango"
// console.log(mango.#email); // Виникне помилка, це приватна властивість

// class User {
//   name;
//   #email;
//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }
//   getEmail() {
//     return this.#email;
//   }
//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }
// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });
// console.log(mango.getEmail()); // "mango@mail.com"
// mango.changeEmail("mango@supermail.com");
// console.log(mango.getEmail()); // "mango@supermail.com"
// console.log(mango);

//Виконай рефакторинг класу Car таким чином, щоб властивість brand була приватною, і додай два методи для публічного інтерфейсу, для читання і зміни цієї властивості.

// getBrand() - повертає значення приватної властивості brand.
// changeBrand(newBrand) - змінює значення приватної властивості brand на newBrand.

// class Car {
//   #brand;
//   constructor(params) {
//     this.#brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }
//   getPrice() {
//     return this.price;
//   }
//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
//   getBrand() {
//     return this.#brand;
//   }
//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
// }
// const audi = new Car({ brand: "Audi", model: "Q3", price: 36000 });
// console.log(audi.getBrand()); // "Audi"
// console.log(audi); // Car { model: "Q3", price: 36000 }
// const bmw = new Car({ brand: "bmw", model: "X5", price: 58900 });
// console.log(bmw.getBrand()); // "bmw"
// console.log(bmw); // Car { model: "X5", price: 58900 }
// const nissan = new Car({ brand: "Nissan", model: "Murano", price: 31700 });
// console.log(nissan.getBrand()); // "Nissan"
// console.log(nissan); // Car { model: "Murano", price: 31700 }
// nissan.changeBrand("Honda");
// console.log(nissan.getBrand()); // "Honda"

//Приватні методи
// class User {
//   name;
//   #email;
//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }
//   getEmail() {
//     return this.#email;
//   }
//   changeEmail(newEmail) {
//     if (this.#validateEmail(newEmail)) {
//       this.#email = newEmail;
//     } else {
//       console.log('Invalid email format');
//     }
//   }
//   #validateEmail(email) {
//     return email.includes('@');
//   }
// }
// const mango = new User({
//   name: 'Mango',
//   email: 'mango@mail.com',
// });
// mango.changeEmail('newmail.com'); // "Invalid email format"
// mango.changeEmail('new@mail.com');
// console.log(mango.getEmail()); // "new@mail.com"
// mango.#validateEmail('test'); // Помилка

//Геттери і сеттери
// class User {
//   #email;
//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     if (newEmail === "") {
//       console.log("Помилка! Пошта не може бути порожнім рядком!");
//       return;
//     }

//     this.#email = newEmail;
//   }
// }
// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });
// console.log(mango.email); // mango@mail.com
// mango.email = ""; // Помилка! Пошта не може бути порожнім рядком!
// mango.email = "mango@supermail.com";
// console.log(mango.email); // mango@supermail.com

// Виконай рефакторинг класу Car. Додатково до приватної властивості #brand зроби приватними властивості model і price. Стандартизуй публічний інтерфейс класу, замінивши вже оголошені методи на геттери та сеттери brand, model і price, для взаємодії з приватними властивостями.

// class Car {
//   #brand;
//   #model;
//   #price;
//   constructor(params) {
//     this.#brand = params.brand;
//     this.#model = params.model;
//     this.#price = params.price;
//   }
//   get brand() {
//     return this.#brand;
//   }
//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }
//   get model() {
//     return this.#model;
//   }
//   set model(newModel) {
//     this.#model = newModel;
//   }
//   get price() {
//     return this.#price;
//   }
//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }
// const audi = new Car({ brand: "Audi", model: "Q3", price: 36000 });
// console.log(audi.brand); // "Audi"
// console.log(audi); // Car { #brand: "Audi", #model: "Q3", #price: 36000 }
// const bmw = new Car({ brand: "bmw", model: "X5", price: 58900 });
// console.log(bmw.brand); // "bmw"
// console.log(bmw); // Car { #brand: "bmw", #model: "X5", #price: 58900 }
// const nissan = new Car({ brand: "Nissan", model: "Murano", price: 31700 });
// console.log(nissan.brand); // "Nissan"
// console.log(nissan); // Car { #brand: "Nissan", #model: "Murano", #price: 31700 }
// nissan.brand = "Honda";
// console.log(nissan.brand); // "Honda"
// console.log(nissan); // { #brand: 'Honda', #model: 'Murano', #price: 31700 }

//Статичні властивості
// class MyClass {
//   static myProp = "value";
// }
// console.log(MyClass.myProp); // "value"

// class MyClass {
//   static myProp = "value";
// }
// const inst = new MyClass();
// console.log(inst.myProp); // undefined

// class User {
//   static roles = {
//     admin: "admin",
//     editor: "editor",
//     basic: "basic",
//   };
//   #email;
//   #role;
//   constructor(params) {
//     this.#email = params.email;
//     this.#role = params.role || User.roles.basic;
//   }
//   get role() {
//     return this.#role;
//   }
//   set role(newRole) {
//     this.#role = newRole;
//   }
// }
// const mango = new User({
//   email: "mango@mail.com",
// });
// console.log(mango.role); // "basic"
// mango.role = User.roles.admin;
// console.log(mango.role); // "admin"
// mango.role = User.roles.editor;
// console.log(mango.role); // "editor"

//Виконай рефакторинг класу Car. Додай публічну статичну властивість maxPrice зі значенням число 50000 - максимально допустима ціна автомобіля.

// Додай сеттеру price перевірку значення параметра newPrice, що передається. Якщо воно більше за maxPrice, сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну автомобіля.

// Під оголошенням класу ми додали ініціалізації екземплярів і виклики методів, щоб показати, як будуть використовуватися геттери і сеттери price.

// class Car {
//   static maxPrice = 50000;
//   #price;
//   constructor(params) {
//     this.#price = params.price;
//   }
//   get price() {
//     return this.#price;
//   }
//   set price(newPrice) {
//     if (newPrice < Car.maxPrice) {
//       this.#price = newPrice;
//     }
//   }
// }
// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000
// audi.price = 49000;
// console.log(audi.price); // 49000
// audi.price = 51000;
// console.log(audi.price); // 49000

//Статичні методи
// class MyClass {
//   static myMethod() {
//     console.log("A static method");
//   }
// }
// MyClass.myMethod(); // "A static method"

// Додай класу Car публічний статичний метод checkPrice(price), що приймає ціну автомобіля. Метод повинен порівняти значення параметра price і приватної статичної властивості maxPrice.

// Якщо ціна автомобіля перевищує максимальну, метод повинен повернути рядок "Error! Price exceeds the maximum".
// В іншому випадку метод повинен повернути рядок "Success! Price is within acceptable limits".
// Під оголошенням класу ми додали ініціалізацію екземпляра і виклики методів, щоб показати, як буде використовуватися метод checkPrice(price).

// class Car {
//   static #maxPrice = 50000;
//   static checkPrice(price) {
//     if (Car.#maxPrice < price) {
//       return "Error! Price exceeds the maximum";
//     }
//     return "Success! Price is within acceptable limits";
//   }
//   constructor(params) {
//     this.price = params.price;
//   }
// }
// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });
// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

//Наслідування класів
// class User {
//   #email;
//   constructor(email) {
//     this.#email = email;
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }
// class ContentEditor extends User {}
// const editor = new ContentEditor("mango@mail.com");
// console.log(editor); // { #email: "mango@mail.com" }
// console.log(editor.email); // "mango@mail.com"

//У застосунку потрібен адміністратор з можливістю додавати пошти користувачів у чорний список.

// Оголоси клас Admin, який наслідує від класу User
// Додай класу Admin публічну статичну властивість role (рівень доступу), значення якої — це об'єкт {BASIC: "basic", SUPERUSER: "superuser"}

// class User {
//   constructor(email) {
//     this.email = email;
//   }
//   get email() {
//     return this.email;
//   }
//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   static role = { BASIC: "basic", SUPERUSER: "superuser" };
// }
// console.log(Admin.role.BASIC); // basic
// console.log(Admin.role.SUPERUSER); // superuser

//Конструктор дочірнього класу
// class User {
//   #email;
//   constructor(email) {
//     this.#email = email;
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }
// class ContentEditor extends User {
//   constructor(params) {
//     super(params.email);

//     this.posts = params.posts;
//   }
// }
// const editor = new ContentEditor({
//   email: "mango@mail.com",
//   posts: [],
// });
// console.log(editor); // { #email: "mango@mail.com", posts: [] }
// console.log(editor.email); // "mango@mail.com"

//Додай класу Admin метод constructor, який приймає один параметр params- об'єкт налаштувань з двома властивостями email і access. Додай класу Admin публічну властивість access, значення якої буде передаватися під час виклику конструктора.

// Щоб показати, як буде використовуватися клас Admin, ми додали ініціалізацію екземпляра під оголошенням класу.

// class User {
//   email;
//   constructor(email) {
//     this.email = email;
//   }
//   get email() {
//     return this.email;
//   }
//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
//   constructor(params) {
//     super(params.email);
//     this.access = params.access;
//   }
// }
// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });
// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

//Методи дочірнього класу
// class User {
//   #email;
//   constructor(email) {
//     this.#email = email;
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }
// class ContentEditor extends User {
//   constructor(params) {
//     super(params.email);
//     this.posts = params.posts;
//   }
//   addPost(post) {
//     this.posts.push(post);
//   }
// }
// const editor = new ContentEditor({
//   email: "mango@mail.com",
//   posts: [],
// });
// console.log(editor); // { #email: "mango@mail.com", posts: [], addPost: f }
// editor.addPost("post-1");
// editor.addPost("post-2");
// console.log(editor.posts); // ['post-1', 'post-2']

//Додай класу Admin наступні властивості і методи.

// Публічну властивість blacklistedEmails для зберігання чорного списку поштових адрес користувачів. Значення за замовчуванням — це порожній масив.
// Публічний метод blacklist(email) для додавання пошти у чорний список. Метод повинен додавати значення параметра email в масив, що зберігається у властивості blacklistedEmails.
// Публічний метод isBlacklisted(email) для перевірки пошти у чорному списку. Метод повинен перевіряти наявність значення параметра email в масиві, що зберігається у властивості blacklistedEmails, і повертати true або false.
// Після оголошення класу ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

// class User {
//   email;
//   constructor(email) {
//     this.email = email;
//   }
//   get email() {
//     return this.email;
//   }
//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor(params) {
//     super(params.email);
//     this.access = params.access;
//   }

//   blacklistedEmails = [];
//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }
//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }
// }
// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });
// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"
// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true

//Task-1
// Перед звільненням розробник зламав вихідний код управління акаунтами користувачів нашого сервісу доставки їжі. Виконай рефакторинг методів об'єкта customer, розставивши відсутні this під час звернення до властивостей об'єкта.

// Використай цей стартовий код і виконай рефакторинг. Після оголошення об'єкта ми додали виклики методів. У консоль будуть виведені результати їх роботи. Будь ласка, нічого там не змінюй.

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };
// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

//Task-2

//Створи клас Storage, який створюватиме об'єкти для управління складом товарів. Клас очікує лише один аргумент — початковий масив товарів, який записується до створеного об'єкта в приватну властивість items.

// Оголоси наступні методи класу:

// getItems() — повертає масив поточних товарів у приватній властивості items.
// addItem(newItem) — приймає новий товар newItem і додає його до масиву товарів у приватну властивість items об'єкта.
// removeItem(itemToRemove) — приймає рядок з назвою товару itemToRemove і видаляє його з масиву товарів у приватній властивості items об'єкта.

// Візьми код нижче з ініціалізацією екземпляра й викликами методів і встав його після оголошення класу для перевірки коректності роботи. У консоль будуть виведені результати їх роботи. Будь ласка, нічого там не змінюй.

// class Storage {
//   #items;
//   constructor(items) {
//     this.#items = items;
//   }
//   getItems() {
//     return this.#items;
//   }
//   addItem(newItem) {
//     this.#items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter((item) => item !== itemToRemove);
//   }
// }
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
// storage.removeItem("Scaner");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

//Напиши клас StringBuilder, який приймає один параметр initialValue — довільний рядок, який записується у приватну властивість value об'єкта, що створюється.

// Оголоси наступні методи класу:

// getValue() — повертає поточне значення приватної властивості value.
// padEnd(str) — отримує параметр str (рядок) і додає його в кінець значення приватної властивості value об'єкта, який викликає цей метод.
// padStart(str) — отримує параметр str (рядок) і додає його на початок значення приватної властивості value об'єкта, який викликає цей метод.
// padBoth(str) — отримує параметр str (рядок) і додає його на початок і в кінець значення приватної властивості value об'єкта, який викликає цей метод.
// Візьми код нижче з ініціалізацією екземпляра й викликами методів і встав його після оголошення класу для перевірки коректності роботи. У консоль будуть виведені результати їх роботи. Будь ласка, нічого там не змінюй.

// class StringBuilder {
//   #value;
//   constructor(initialValue) {
//     this.#value = initialValue;
//   }
//   getValue() {
//     return this.#value;
//   }
//   padEnd(str) {
//     this.#value = this.#value + str;
//   }
//   padStart(str) {
//     this.#value = str + this.#value;
//   }
//   padBoth(str) {
//     this.#value = str + this.#value + str;
//   }
// }
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="
