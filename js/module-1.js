//Змінні та типи. Основи функцій

//Оголошення змінних
// console.log("hello");
// console.log(101);

// const username = "Maksim";
// console.log(username);
// const age = 26;
// console.log(age);

// const age = 26;
// const username = "Maksim";
// console.log(username, age);

//Перевизначення значення
// let username = "Maksim";
// let age = 26;
// console.log(username, age);
// username = "Alona";
// age = 30;
// console.log(username, age);

// let username;
// console.log(username);
// username = "Maksim";
// console.log(username);

//Типи даних
// const topSpeed = 160; // Number
// console.log(topSpeed);
// const distance = 617.54; // Number
// console.log(distance);
// const speed = "90"; // String
// console.log(speed);
// const login = "mango935"; // String
// console.log(login);
// const online = "true"; //String
// console.log(online);
// const isOpline = true; // Boolean
// console.log(isOpline);
// const isAdmin = false; // Boolean
// console.log(isAdmin);

//Спеціальні значення
// const usernameNull = null; // Null
// console.log(usernameNull);
// const usernameUndefined; // Undefined
// console.log(usernameUndefined);

//Оператор typeof
// const age = 26;
// console.log(typeof age); // Number
// const username = "Maksim";
// console.log(typeof username); // String
// const isSidebarOpen = true;
// console.log(typeof isSidebarOpen); //Boolean
// const isSidebarClose = false;
// console.log(typeof isSidebarClose); //Boolean
// let login;
// console.log(typeof login); // Undefined
// let online = null;
// console.log(typeof online); // Object

//Арифметичні операції

//додавання (+)
// const a = 10;
// const b = 5;
// console.log(a + b); // 15
// const c = a + b;
// console.log(c); // 15

//відгімання(-)
// const a = 10;
// const b = 5;
// console.log(a - b); // 5
// const c = a - b;
// console.log(c); // 5

//множення (*)
// const a = 10;
// const b = 5;
// console.log(a * b); // 50
// const c = a * b;
// console.log(c); // 50

//ділення (/)
// const a = 10;
// const b = 5;
// console.log(a / b); // 2
// const c = a / b;
// console.log(c); // 2

//повернення остачі від ділення (%)
// const a = 10;
// const b = 5;
// console.log(a % b); // 0
// const c = a % b;
// console.log(c); // 0
// const x = 11;
// const y = 4;
// console.log(x % y); // 3
// const q = x % y;
// console.log(q); // 3

//піднессення в степінь (**)
// const a = 2;
// const b = 5;
// console.log(a ** b); // 32

// const pricePerItem = 3500;
// const orderedQuantity = 4;
// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice);

//комбіновані оператори
// let num = 25;
// console.log(num); // 25
// num += 1;
// console.log(num); // 26

// let num = 25;
// console.log(num); // 25
// num -= 1;
// console.log(num); // 24

// let num = 25;
// console.log(num); // 25
// num *= 2;
// console.log(num); // 50

// let num = 50;
// console.log(num); // 50
// num /= 2;
// console.log(num); // 25

// let num = 25;
// console.log(num); // 25
// num %= 2;
// console.log(num); // 1

//Рядки

// Конкатенація рядків (склеювання)
// const message = "Mango" + "is" + "happy";
// console.log(message); // Mangoishappy

// const message = "Mango" + " is " + "happy";
// console.log(message); // Mango is happy

// const age = 26;
// const user = "Maksim " + age;
// console.log(user); // Maksim 26 (String)

// const online = true;
// const user = "Maksim ";
// console.log(user + online); // Maksim true (String)

// const a = 1;
// const b = "2";
// const c = 3;
// const d = a + b;
// console.log(d); // 12 (String)
// const e = a + b + c;
// console.log(e); // 123 (String)
// const f = a + c + b;
// console.log(f); // 42 (String)

// const username = "Poly";
// const message = "Welcome " + username + "!";
// console.log(message); //Welcome Poly!

//Перетворення типів: рядки //

//Явне перетворення типів
// console.log(String(5)); // 5 (String)
// console.log(String(true)); // true (String)
// console.log(String(false)); // false (String)
// console.log(String(null)); // null (String)
// console.log(String(undefined)); // undefined (String)

//Неявне перетворення типів
// console.log("5" + 3); // 53 (String)
// console.log("5" + true); // 5true (String)
// console.log("5" + false); // 5false (String)
// console.log("5" + null); // 5null (String)
// console.log("5" + undefined); // 5undefined (String)

//Шаблонні рядки

//Синтаксис шаблонного рядка
// const username = "Maksim";
// const age = 26;
// const greeting = `My name is ${username}, and I am ${age} years old`;
// console.log(greeting); //My name is Maksim, and I am 26 years old

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits`;
// console.log(message); //You ordered droids worth 4850 credits

//Довжина рядка
// const username = "Maksim";
// console.log(username.length); // 6 (Number)

// console.log("Hello world".length); //11

// const username = "Maksim";
// const message = `Username ${username} is ${username.length} characters long`;
// console.log(message); //Username Maksim is 6 characters long

//Індексація рядків
// const string = "Repair droid";
// console.log(string[0]); // R
// console.log(string[5]); // r
// console.log(string[11]); // d

// const string = "Repair droid";
// const elementIndex = string[3];
// console.log(elementIndex); //a

// const string = "Repair droid";
// const lastElementIndex = string.length - 1;
// console.log(string[lastElementIndex]); //d

// const string = "Repair droid";
// console.log(string[string.length - 1]); // d

// const courseTopic = "JavaScript essentials";
// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopicLength - 1];
// console.log(courseTopic); // JavaScript essentials
// console.log(courseTopicLength); // 21
// console.log(firstElement); // J
// console.log(lastElement); // s

//Оператори порівняння

// const a = 2;
// const b = 5;
// console.log(a > b); // false
// console.log(a < b); // true
// console.log(b > a); // true
// console.log(b < a); // false
// console.log(a >= b); // false
// console.log(a <= b); // true
// console.log(b >= a); // true
// console.log(b <= a); // false

// const age = 18;
// const isAdult = 18 <= age;
// console.log(isAdult); //true

// const age = 14;
// const isAdult = 18 <= age;
// console.log(isAdult); //false

//Оператори рівності

//Оператори несуворої рівності
// console.log(5 == 5); // true
// console.log(5 == 3); // false
// console.log(5 != 3); // true
// console.log(5 != 5); // false
// console.log(5 == "5"); // true
// console.log(5 != "5"); // false
// console.log(1 == true); // true
// console.log(1 != true); // false
// console.log(1 == false); //false
// console.log(1 != false); //true

//Оператори суворої рівності
// console.log(5 === 5); // true
// console.log(5 === "5"); // false
// console.log(5 !== "5"); // true
// console.log(5 !== 5); // false
// console.log(1 === true); // false
// console.log(1 !== true); // true
// console.log(1 === false); // false
// console.log(1 !== false); // true

// const correctPassword = "jqueryismyjam";
// const userPassword = "mangodab3st";
// const isValid = correctPassword === userPassword;
// console.log(isValid); // false

//Перетворення типів: числа

//явне перетворення
// console.log(Number("5")); // 5
// console.log(Number("a")); // NaN
// console.log(Number("25px")); // NaN
// console.log(Number(" ")); // 0
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0
// console.log(Number(null)); // 0
// console.log(Number(undefined)); // NaN

//не явне перетворення
// console.log("5" * 2); // 10
// console.log("10" - 5); // 5
// console.log(5 + true); // 6
// console.log(5 - true); // 4
// console.log("10" > 5); // true
// console.log(10 > "5"); // true
// console.log(5 > true); // true
// console.log(5 < true); // false
// console.log("5" < true); // false
// console.log(5 > false); // true
// console.log("5" < false); // false

//Перетворення рядків у числа
// console.log(Number.parseInt("5")); // 5
// console.log(Number.parseInt("5.5")); // 5
// console.log(Number.parseInt("5cm")); // 5
// console.log(Number.parseInt("12qwe74")); // 12
// console.log(Number.parseInt("12.46qwe79")); // 12
// console.log(Number.parseInt("cm5")); // NaN
// console.log(Number.parseInt("")); // NaN
// console.log(Number.parseInt("qweqwe")); // NaN

// console.log(Number.parseFloat("5")); // 5
// console.log(Number.parseFloat("5.5")); // 5.5
// console.log(Number.parseFloat("3.14")); // 3.14
// console.log(Number.parseFloat("5cm")); // 5
// console.log(Number.parseFloat("5.5cm")); // 5.5
// console.log(Number.parseFloat("12qwe74")); // 12
// console.log(Number.parseFloat("12.46qwe79")); // 12.46
// console.log(Number.parseFloat("cm5")); // NaN
// console.log(Number.parseFloat("")); // NaN
// console.log(Number.parseFloat("qweqwe")); // NaN

// const value = "24.5px";
// console.log(value);
// const numerical = Number.parseFloat(value);
// console.log(numerical);

//Арифметичні функції
// console.log(Math.floor(1.2)); // 1
// console.log(Math.floor(1.8)); // 1
// console.log(Math.ceil(1.2)); // 2
// console.log(Math.ceil(1.8)); // 2
// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.8)); // 2
// console.log(Math.trunc(1.8)); // 1 приберає залишок після крапки

// console.log(Math.max(10, 13, 4)); // 13
// console.log(Math.min(10, 13, 4)); // 4

// console.log(Math.random()); // випадкове число в діапазоні від 0 (включно) до 1 (за винятком)

// let getRandom = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
// console.log(getRandom); // випадкове ціле число з заданим діапазоном від 5 до 10

// let getRandom = Math.random() * (10 - 5) + 5;
// console.log(getRandom); // випадкове дробове число з заданим діапазоном від 5 до 10

//Дробове число
// console.log(0.1 + 0.2); // != 0.3, а дорівнює 0.30000000000000004
// console.log((0.1 * 10 + 0.2 * 10) / 10); // 0.3

//округлення результату с округленням в ближчу сторону
// console.log((0.2635).toFixed(1)); // 0.3
// console.log((0.2435).toFixed(1)); // 0.2
// console.log((0.2675).toFixed(2)); // 0.27
// console.log((0.2435).toFixed(2)); // 0.24
// console.log((0.1 + 0.2).toFixed(1)); // 0.3

//Основи функцій

//Оголошення та виклик функції
// function greeting() {
//   console.log("Hello wold");
// }
// greeting(); // Hello wold

//Параметри та аргументи
// function multiply(a, b, c) {
//   console.log("Result:", a * b * c);
// }
// multiply(2, 5, 3); // "Result:" 30
// multiply(7, 5, 2); //"Result:" 70

// function multiply(a, b, c) {
//   console.log(`Result: ${a * b * c}`);
// }
// multiply(2, 5, 3); // "Result: 30"
// multiply(7, 5, 2); //"Result: 70"

// function add(a, b, c) {
//   console.log('Addition result equals', a + b + c);
// }
// add(15, 27, 10); // "Addition result equals" 52
// add(10, 20, 30); // "Addition result equals" 60
// add(5, 10, 15); // "Addition result equals" 30

// function add(a, b, c) {
//   const result = a + b + c;
//   console.log("Addition result equals", result);
// }
// add(15, 27, 10); // "Addition result equals" 52
// add(10, 20, 30); // "Addition result equals" 60
// add(5, 10, 15); // "Addition result equals" 30

// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
// }
// add(15, 27, 10); // "Addition result equals 52"
// add(10, 20, 30); // "Addition result equals 60";
// add(5, 10, 15); // "Addition result equals 30"

// function add(a, b, c) {
//   const result = a + b + c;
//   console.log(`Addition result equals ${result}`);
// }
// add(15, 27, 10); // "Addition result equals 52"
// add(10, 20, 30); // "Addition result equals 60";
// add(5, 10, 15); // "Addition result equals 30"

//Повернення значення
// function multiply(a, b, c) {
//   const product = a * b * c;
//   return product;
// }
// console.log(multiply(2, 3, 5)); // 30

// function multiply(a, b, c) {
//   const product = a * b * c;
//   return product;
// }
// const result = multiply(2, 3, 5);
// console.log(result); // 30

// function multiply(a, b, c) {
//   return a * b * c;
// }
// console.log(multiply(2, 3, 5)); // 30

// function multiply(a, b, c) {
//   return a * b * c;
// }
// const result = multiply(2, 3, 5);
// console.log(result); // 30

// function multiply(a, b, c) {
//   const product = a * b * c;
// }
// const result = multiply(2, 3, 5);
// console.log(result); // undefined

// function add(a, b, c) {
//   return a + b + c;
// }
// console.log(add(15, 27, 10)); // 52
// console.log(add(10, 20, 30)); // 60
// console.log(add(5, 10, 15)); // 30

// function add(a, b, c) {
//   return a + b + c;
// }
// const result = add(15, 27, 10); // 52
// console.log(result);
// const result = add(10, 20, 30);
// console.log(result); // 60
// const result = add(5, 10, 15);
// console.log(result); // 30

// function makeMessage(name, price) {
//   return `You picked ${name}, price per item is ${price} credits`;
// }
// console.log(makeMessage("Radar", 6150)); //You picked Radar, price per item is 6150 credits
// console.log(makeMessage("Scanner", 3500)); // You picked Scanner, price per item is 3500 credits
// console.log(makeMessage("Reactor", 8000)); // You picked Reactor, price per item is 8000 credits
// console.log(makeMessage("Engine", 4070)); // You picked Engine, price per item is 4070 credits

// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//   return orderedQuantity * pricePerItem;
// }
// console.log(calculateTotalPrice(5, 100)); // 500
// console.log(calculateTotalPrice(8, 60)); // 480
// console.log(calculateTotalPrice(3, 400)); // 1200
// console.log(calculateTotalPrice(1, 3500)); // 3500
// console.log(calculateTotalPrice(12, 70)); // 840

//ДЗ//

//task-1
// Станція з продажу ремонтних дроїдів готова до запуску, залишилося написати програмне забезпечення для відділу продажів.

// Оголоси функцію makeTransaction, яка очікує два параметри, значення яких будуть задаватися під час її виклику: • quantity— перший параметр, число, що містить кількість замовлених дроїдів • pricePerDroid — другий параметр, число, що містить вартість одного дроїда

// Доповни код функції так, щоб вона повертала рядок з повідомленням про покупку ремонтних дроїдів: "You ordered <quantity> droids worth <totalPrice> credits!", де: • <quantity> — це кількість замовлених дроїдів • <totalPrice> — це загальна вартість замовлення, тобто вартість усіх замовлених дроїдів

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// function makeTransaction(quantity, pricePerDroid) {
//   const totalPrice = quantity * pricePerDroid;
//   return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
// }
// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

//task-2
// Оголоси функцію getShippingMessage, яка очікує три параметри, значення яких будуть задаватися під час її виклику: • country — перший параметр, рядок, що містить країну доставки • price — другий параметр, число, що містить загальну вартість товару • deliveryFee — третій параметр, число, що містить вартість доставки товару

// Доповни код функції так, щоб вона повертала рядок з повідомленням про доставку товару в країну користувача: "Shipping to <country> will cost <totalPrice> credits", де: • <country> — це країни доставки • <totalPrice> — це загальна вартість замовлення, що включає вартість товару і його доставки

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// function getShippingMessage(country, price, deliveryFee) {
//   const totalPrice = price + deliveryFee;
//   return `Shipping to ${country} will cost ${totalPrice} credits`;
// }
// console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
// console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"

//task-3
// Оголоси функцію getElementWidth, яка очікує три параметри, значення яких будуть задаватися під час її виклику: • content — перший параметр, ширина контенту • padding — другий параметр, значення горизонтального падінгу для кожної зі сторін • border — третій параметр, значення товщини бордера для кожної зі сторін Значення всіх параметрів будуть рядками формату Npx де N — це довільне число, ціле або дробове.

// Доповни код функції так, щоб вона повертала число —загальну ширину елемента. При розрахунку загальної ширини орієнтуйся на те, що значення box-sizing дорівнює border-box.

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// function getElementWidth(content, padding, border) {
//   return (
//     Number.parseFloat(content) +
//     Number.parseFloat(padding) * 2 +
//     Number.parseFloat(border) * 2
//   );
// }
// console.log(getElementWidth("50px", "8px", "4px")); // 74
// console.log(getElementWidth("60px", "12px", "8.5px")); // 101
// console.log(getElementWidth("200px", "0px", "0px")); // 200
