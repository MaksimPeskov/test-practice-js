//Розгалуження і цикли

//Розгалуження

//Інструкція if

// let price = 0;
// const subscription = "pro";
// if (subscription === "pro") {
//   price = 100;
// }
// console.log(price); // 100

// let price = 0;
// const subscription = "free";
// if (subscription === "pro") {
//   price = 100;
// }
// console.log(price); // 0

// function getPrice(subscription) {
//   let price = 0;

//   if (subscription === "pro") {
//     price = 100;
//   }
//   return price;
// }
// console.log(getPrice("free"));
// console.log(getPrice("pro"));

//Доповни код функції checkAge(age) так, щоб функція повертала рядок "You are an adult", якщо значення параметра age більше або дорівнює 18. Використай у тілі функції інструкцію if для перевірки значення age.

// function checkAge(age) {
//   let message;
//   if (age >= 18) {
//     message = "You are an adult";
//   }
//   return message;
// }
// console.log(checkAge(20)); // You are an adult
// console.log(checkAge(17)); // undefined
// console.log(checkAge(10)); // undefined
// console.log(checkAge(30)); // You are an adult

// function checkAge(age) {
//   const message = "You are an adult";

//   if (age >= 18) {
//     return message;
//   }
// }
// console.log(checkAge(20)); // You are an adult
// console.log(checkAge(17)); // undefined
// console.log(checkAge(10)); // undefined
// console.log(checkAge(30)); // You are an adult

//Інструкція if...else
// const grade = 85;
// if (grade >= 70) {
//   console.log("Statifactory");
// } else {
//   console.log("Unsatisfactory");
// }

// const grade = 40;
// if (grade >= 70) {
//   console.log("Statifactory");
// } else {
//   console.log("Unsatisfactory");
// }

// function checkGrade(grade) {
//   if (grade >= 70) {
//     return "Satisfactory";
//   } else {
//     return "Unsatisfactory";
//   }
// }
// console.log(checkGrade(40)); // Unsatisfactory
// console.log(checkGrade(75)); // Satisfactory

// Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:

// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Використовуючи розгалуження, доповни код функції таким чином, щоб:

// Якщо в замовленні вказане число, яке перевищує доступну кількість товарів на складі, функція повертає рядок "Not enough goods in stock!"
// В іншому випадку функція повертає рядок "Order is processed, our manager will contact you"

// function checkStorage(available, ordered) {
//   if (available < ordered) {
//     return "Not enough goods in stock!";
//   } else {
//     return "Order is processed, our manager will contact you";
//   }
// }
// console.log(checkStorage(100, 50)); // Order is processed, our manager will contact you
// console.log(checkStorage(100, 130)); // Not enough goods in stock
// console.log(checkStorage(200, 20)); // Order is processed, our manager will contact you
// console.log(checkStorage(200, 150)); // Order is processed, our manager will contact you
// console.log(checkStorage(150, 180)); // Not enough goods in stock

//Блок else...if
// const grade = 85;
// if (grade >= 90) {
//   console.log("Perfectly");
// } else if (grade >= 80) {
//   console.log("Good");
// } else if (grade >= 70) {
//   console.log("Satisfactorily");
// } else {
//   console.log("Unsatisfactorily");
// }

// Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.

// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Використовуючи розгалуження, доповни код функції таким чином, щоб:

// Якщо в замовленні ще немає товарів, тобто значення параметра ordered дорівнює 0, функція повертає рядок "There are no products in the order!".
// Якщо товарів у замовленні більше, ніж їх доступно на складі, то функція повертає рядок "Your order is too large, there are not enough items in stock!".
// В іншому випадку функція повертає рядок "The order is accepted, our manager will contact you".

// function checkStorage(available, ordered) {
//   if (ordered == 0) {
//     return "There are no products in the order!";
//   } else if (available < ordered) {
//     return "Your order is too large, there are not enough items in stock!";
//   } else {
//     return "The order is accepted, our manager will contact you";
//   }
// }
// console.log(checkStorage(100, 50)); // The order is accepted, our manager will contact you
// console.log(checkStorage(100, 130)); // Your order is too large, there are not enough items in stock!
// console.log(checkStorage(70, 0)); // There are no products in the order!
// console.log(checkStorage(200, 20)); // The order is accepted, our manager will contact you
// console.log(checkStorage(200, 250)); // Your order is too large, there are not enough items in stock!
// console.log(checkStorage(150, 0)); // There are no products in the order!
// console.log(checkStorage(80, 80)); // The order is accepted, our manager will contact you

//Тернарний оператор
// const age = 20;
// const type = age >= 18 ? "adult" : "child";
// console.log(type); // adult

// const age = 14;
// const type = age >= 18 ? "adult" : "child";
// console.log(type); // child

// const a = 5;
// const b = 10;
// const biggerNumber = a > b ? a : b;
// console.log(biggerNumber); //10

// function biggerNumber(a, b) {
//   return a > b ? a : b;
// }
// console.log(biggerNumber(5, 10)); // 10
// console.log(biggerNumber(20, 15)); // 20
// console.log(biggerNumber(7, 7)); // 7

// Функція checkPassword(password) порівнює переданий їй пароль (параметр password) зі збереженим паролем адміністратора (correctPassword) і повертає рядок з повідомленням про результат.

// Використовуючи тернарний оператор, доповни функцію таким чином, щоб:

// Якщо значення password і correctPassword збігаються, функція повертала рядок "Access granted"
// В іншому випадку, функція повертала рядок "Access denied, wrong password!"

// function checkPassword(password) {
//   const correctPassword = "jqueryismyjam";
//   return password === correctPassword
//     ? "Access granted"
//     : "Access denied, wrong password!";
// }
// console.log(checkPassword("jqueryismyjam")); // "Access granted"
// console.log(checkPassword("angul4r1sl1f3")); // "Access denied, wrong password!"
// console.log(checkPassword("r3actsux")); // "Access denied, wrong password!"

//Оператор switch
// const fruit = "apple";
// switch (fruit) {
//   case "apple":
//     console.log("Apple selected");
//     break;
//   case "banana":
//     console.log("Banana selected");
//     break;
//   case "orange":
//     console.log("Orange selected");
//     break;
//   default:
//     console.log("The fruit is unknown");
// }

// Оператор break
// const day = 3;
// switch (day) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     console.log("This is a working day");
//     break;
//   case 6:
//   case 7:
//     console.log("It is a day off");
//     break;
//   default:
//     console.log("Invalid");
// }

// Функція getSubscriptionPrice(type) отримує рядок з типом передплати користувача (параметр type), перевіряє її на збіг з трьома можливими типами щомісячної передплати та повертає ціну, або повідомлення про неправильний тип передплати.

// Якщо значення параметра type — це рядок:

// "starter" — ціна передплати 0 кредитів.
// "professional" — ціна передплати 20 кредитів.
// "organization" — ціна передплати 50 кредитів.
// Для будь-якого іншого значення параметра type повертається рядок "Invalid subscription type!".

// Використай оператор switch для розв'язання цієї задачі!

// function getSubscriptionPrice(type) {
//   switch (type) {
//     case "starter":
//       return 0;
//     case "professional":
//       return 20;
//     case "organization":
//       return 50;
//     default:
//       return "Invalid subscription type!";
//   }
// }
// console.log(getSubscriptionPrice("professional")); // 20
// console.log(getSubscriptionPrice("organization")); // 50
// console.log(getSubscriptionPrice("starter")); // 0
// console.log(getSubscriptionPrice("random")); // Invalid subscription type
// console.log(getSubscriptionPrice("premium")); // Invalid subscription type

//Логічні операториень

//Перетворення типів: логічне
// console.log(Boolean(true)); // true
// console.log(Boolean(false)); // false

//Числа
// console.log(Boolean(NaN)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean(1)); // true
// console.log(Boolean(3.14)); // true
// console.log(Boolean(-10)); // true

// if (null) {
//   console.log("Block if");
// } else {
//   console.log("Block else");
// }

// if (0) {
//   console.log("Block if");
// } else {
//   console.log("Block else");
// }

// if (5) {
//   console.log("Block if");
// } else {
//   console.log("Block else");
// }

//Рядки
// console.log(Boolean("")); // false
// console.log(Boolean("hello")); // true
// console.log(Boolean(" ")); // true
// console.log(Boolean("false")); // true
// console.log(Boolean("16")); // true

// if ("") {
//   console.log("Block if");
// } else {
//   console.log("Block else");
// }

// if ("batman") {
//   console.log("Block if");
// } else {
//   console.log("Block else");
// }

//Логічне «І»
// console.log("hello" && 5); // 5
// console.log(5 && "hello"); // "hello"
// console.log("mango" && "poly"); // "poly"
// console.log("poly" && "mango"); // "mango"
// console.log(3 && true); // true
// console.log(true && 3); // 3

// console.log("hello" && 5); // 5
// console.log(5 && "hello"); // "hello"
// console.log("mango" && "poly"); // "poly"
// console.log("poly" && "mango"); // "mango"
// console.log(3 && true); // true
// console.log(true && 3); // 3

// const a = 20;
// console.log(a > 10 && a < 30); //true

// const b = 50;
// console.log(b > 10 && b < 30); //false
// console.log(b > 80 && b < 120); //false

// const screenWidth = 700;
// const sm = 320;
// const mb = 768;
// const lg = 1200;
// if (screenWidth <= sm) {
//   console.log("Mobile screen");
// } else if (screenWidth > sm && screenWidth < mb) {
//   console.log("Tablet screen");
// } else if (screenWidth > mb && screenWidth <= lg) {
//   console.log("Desktop screen");
// } else {
//   console.log("Godzilla screen");
// }

// function getScreenType(screenWidth) {
//   const sm = 320;
//   const mb = 768;
//   const lg = 1200;
//   if (screenWidth <= sm) {
//     return "Mobile screen";
//   } else if (screenWidth > sm && screenWidth < mb) {
//     return "Tablet screen";
//   } else if (screenWidth > mb && screenWidth <= lg) {
//     return "Desktop screen";
//   } else {
//     return "Godzilla screen";
//   }
// }
// console.log(getScreenType(700)); // "Tablet screen"
// console.log(getScreenType(1200)); // "Desktop screen"
// console.log(getScreenType(1500)); // "Godzilla screen"
// console.log(getScreenType(320)); // "Mobile screen"

// Функція isNumberInRange(start, end, number) перевіряє, чи входить число у проміжок. Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

// number - число, входження якого перевіряється
// start - початок числового проміжку
// end - кінець числового проміжку
// Використовуючи оператор &&, доповни функцію isNumberInRange таким чином, щоб вона повертала результат входження number у числовий проміжок від start до end включно. Тобто число повинно бути одночасно і більшим або дорівнювати start, і меншим або дорівнювати end. Результатом виклику функції має бути буль true або false.

// function isNumberInRange(start, end, number) {
//   return number >= start && number <= end;
// }
// console.log(isNumberInRange(10, 30, 17)); // true
// console.log(isNumberInRange(10, 30, 5)); // false
// console.log(isNumberInRange(20, 50, 24)); // true
// console.log(isNumberInRange(20, 50, 76)); // false

//Логічне «АБО»
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(5 || false); // 5
// console.log(false || 5); // 5
// console.log("hello" || 0); // "hello"
// console.log(0 || "hello"); // "hello"

// console.log(5 || 3); // 5
// console.log(3 || 5); // 3
// console.log("mango" || "poly"); // "mango"
// console.log("poly" || "mango"); // "poly"

// console.log(0 || false); // false
// console.log(false || 0); // 0
// console.log(null || ""); // ""
// console.log("" || null); // null

// const a = 5;
// console.log(a < 10 || a > 30); // true || false -> true
// const b = 50;
// console.log(b < 10 || b > 30); // false || true -> true
// const c = 20;
// console.log(c - 20 || c * 2); // 0 || 40 -> 40

// Функція checkAccess(subType) перевіряє, чи може користувач отримати доступ до контенту. Перевірка відбувається за типом передплати. Використовуючи оператор "АБО", доповни код функції так, щоб якщо значення параметра subType дорівнює рядкам "pro" або "vip", то функція повертала true і користувач отримував доступ. В іншому випадку повертала false.

// function checkAccess(subType) {
//   return subType === "pro" || subType === "vip";
// }
// console.log(checkAccess("pro")); // true
// console.log(checkAccess("starter")); // false
// console.log(checkAccess("vip")); // true
// console.log(checkAccess("free")); // false

//Логічне «НІ»
// console.log(!true); // false
// console.log(!false); // true
// console.log(!3); // false
// console.log(!"Mango"); // false
// console.log(!0); // true
// console.log(!""); // true
// console.log(!null); // true

// const isBlocked = false;
// const canChat = !isBlocked;
// if (canChat) {
//   console.log("Can type in chat!");
// } else {
//   console.log("Blocked from typing in chat!");
// }

// const isBlocked = true;
// const canChat = !isBlocked;
// if (canChat) {
//   console.log("Can type in chat!");
// } else {
//   console.log("Blocked from typing in chat!");
// }

// const isOnline = true;
// const isBlocked = false;
// const canChat = isOnline && !isBlocked;
// if (canChat) {
//   console.log("Can type in chat!");
// } else {
//   console.log("Blocked from typing in chat!");
// }

// const isOnline = true;
// const isBlocked = true;
// const canChat = isOnline && !isBlocked;
// if (canChat) {
//   console.log("Can type in chat!");
// } else {
//   console.log("Blocked from typing in chat!");
// }

// function canUserChat(isOnline, isBlocked) {
//   const canChat = isOnline && !isBlocked;
//   if (canChat) {
//     return "Can type in chat!";
//   } else {
//     return "Blocked from typing in chat!";
//   }
// }
// console.log(canUserChat(true, false)); // "Can type in chat!"
// console.log(canUserChat(true, true)); // "Blocked from typing in chat!"
// console.log(canUserChat(false, false)); // "Blocked from typing in chat!"
// console.log(canUserChat(false, true)); // "Blocked from typing in chat!"

// Функція toggleModalVisibility(isVisible) перемикає стан відображення модального вікна. У параметрі isVisible вона очікує буль true або false. Доповни код функції так, щоб вона повертала протилежне значення цього параметра.

// function toggleModalVisibility(isVisible) {
//   return !isVisible;
// }
// console.log(toggleModalVisibility(true)); // false
// console.log(toggleModalVisibility(false)); // true

//Методи рядків

//Метод slice()
// str.slice(startIndex, endIndex);

// const username = "Maksim";
// console.log(username.slice(0, 3)); // Mak
// console.log(username.slice(3, 6)); // sim
// console.log(username.slice(4)); // im
// console.log(username.slice(1)); // aksim
// console.log(username.slice()); // Maksim

// const fullName = "Maksim Peskov";
// const firstName = fullName.slice(0, 6);
// const lastName = fullName.slice(7);
// console.log(fullName); // Maksim Peskov
// console.log(firstName); //Maksim
// console.log(lastName); // Peskov

//Функція getSubstring(string, length) приймає рядок і повертає новий підрядок (його часткову копію). Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:

// string - оригінальний рядок
// length - довжина нового підрядка
// Доповни код функції так, щоб вона повертала новий підрядок, який починається від початку string і має довжину length.

// function getSubstring(string, length) {
//   return string.slice(0, length);
// }
// console.log(getSubstring("Hello world", 3)); // Hel
// console.log(getSubstring("Hello world", 5)); // Hello
// console.log(getSubstring("Hello world", 8)); // Hello wo
// console.log(getSubstring("Hello world", 11)); // Hello world
// console.log(getSubstring("Hello world", 0)); // ""

//Методи toLowerCase() і toUpperCase()
// const greetings = "Hello World";
// console.log(greetings); // Hello World
// console.log(greetings.toUpperCase()); // HELLO WORLD
// console.log(greetings.toLowerCase()); // hello world

// const brandName = "samsung";
// const userInput = "saMsUng";
// const lowercaseInput = userInput.toLowerCase();
// console.log(brandName); // 'samsung'
// console.log(userInput); // 'saMsUng'
// console.log(userInput === brandName); // false
// console.log(lowercaseInput); // 'samsung'
// console.log(lowercaseInput === brandName); // true

// Функція normalizeInput(input, to) оголошує два параметри:

// input - рядок, який потрібно привести до певного регістру
// to - рядок с двома можливими значеннями: "upper" або "lower", що вказують до якого регістру потрібно привести значення input
// Доповни код функції таким чином, щоб:

// Якщо значення параметра to — це рядок "upper", то функція повертала копію рядка input, але у верхньому регістрі
// В іншому разі, функція повертала копію рядка inputу нижньому регістрі

//1Варіант

// function normalizeInput(input, to) {
//   if (to == "upper") {
//     return input.toUpperCase();
//   } else {
//     return input.toLowerCase();
//   }
// }
// console.log(normalizeInput("This ISN'T SpaM", "lower")); // this isn't spam
// console.log(normalizeInput("This ISN'T SpaM", "upper")); // THIS ISN'T SPAM
// console.log(normalizeInput("Big SALE", "lower")); // big sale
// console.log(normalizeInput("Big SALE", "upper")); // BIG SALE
// console.log(normalizeInput("Stay Awhile and Listen", "lower")); // stay awhile and listen
// console.log(normalizeInput("Stay Awhile and Listen", "upper")); // STAY AWHILE AND LISTEN

//2Варіант

// function normalizeInput(input, to) {
//   return to === "upper" ? input.toUpperCase() : input.toLowerCase();
// }
// console.log(normalizeInput("This ISN'T SpaM", "lower")); // this isn't spam
// console.log(normalizeInput("This ISN'T SpaM", "upper")); // THIS ISN'T SPAM
// console.log(normalizeInput("Big SALE", "lower")); // big sale
// console.log(normalizeInput("Big SALE", "upper")); // BIG SALE
// console.log(normalizeInput("Stay Awhile and Listen", "lower")); // stay awhile and listen
// console.log(normalizeInput("Stay Awhile and Listen", "upper")); // STAY AWHILE AND LISTEN

//Метод includes()
// const username = "Maksim Peskov";
// console.log(username.includes("Maksim")); // true
// console.log(username.includes("Peskov")); // true
// console.log(username.includes("Alona")); // false
// console.log(username.includes("maksim")); // false

// const message = "Please buy our stuff!";
// const hasSpam = message.includes("buy");
// if (hasSpam) {
//   console.log("Warning: This message contains forbidden words.");
// } else {
//   console.log("You can safely open this message.");
// }

// Функція checkForName(fullName, firstName) приймає два параметри та повертає буль true або false - результат перевірки входження підрядка firstName у рядок fullName.

// fullName - рядок, що містить повне ім'я
// firstName - рядок, що містить ім'я для перевірки його входження в повне ім'я
// Доповни тіло функції таким чином, щоб вона повертала результат перевірки входження імені (параметр firstName), у повне ім'я (параметр fullName). Врахуй, що регістр символів в параметрах fullName і firstName наперед не відомий. Перед перевіркою входження не забудь прирівняти їх до однакового регістру.

// function checkForName(fullName, firstName) {
//   return fullName.toLowerCase().includes(firstName.toLowerCase());
// }
// console.log(checkForName("Jason Neis", "Jason")); // true
// console.log(checkForName("Jason Neis", "jAsOn")); // true
// console.log(checkForName("Jason Neis", "Jacob")); // false
// console.log(checkForName("Caty Stars", "Caty")); // true
// console.log(checkForName("Caty Stars", "cAtY")); // true
// console.log(checkForName("Caty Stars", "Andromeda")); // false

//Методи startsWith() і endsWith()
// const str = "Hello, world!";
// console.log(str.startsWith("Hello")); // true
// console.log(str.startsWith("hello")); // false
// console.log(str.endsWith("world!")); // true
// console.log(str.endsWith("World!")); // false

// Функція checkFileExtension(fileName, ext) приймає два параметри:

// fileName - рядок, що зберігає ім'я файлу з розширенням, наприклад, styles.css, hello.js тощо.
// ext - рядок, що зберігає розширення, наприклад, .css, .js тощо
// Доповни код функції так, щоб:

// Якщо ім'я файлу fileName закінчується розширенням, зазначеним у параметрі ext, то функція повертала рядок "File extension matches"
// В іншому разі, функція повертала рядок "File extension does not match"

// function checkFileExtension(fileName, ext) {
//   if (fileName.endsWith(ext)) {
//     return "File extension matches";
//   } else {
//     return "File extension does not match";
//   }
// }
// console.log(checkFileExtension("styles.css", ".css")); // "File extension matches"
// console.log(checkFileExtension("styles.css", ".js")); // "File extension does not match"
// console.log(checkFileExtension("app.js", ".js")); // "File extension matches"
// console.log(checkFileExtension("app.js", ".html")); // "File extension does not match"
// console.log(checkFileExtension("index.html", ".html")); // "File extension matches"
// console.log(checkFileExtension("index.html", ".css")); // "File extension does not match"
// console.log(checkFileExtension("index.html", ".js")); // "File extension does not match"

//Метод indexOf()
// const message = "Welcome to Donbass!";
// const index = message.indexOf("to");
// console.log(index); // 8

// const message = "Welcome to Donbass!";
// const index = message.indexOf("hello");
// console.log(index); // -1

// Функція getFileName(file) приймає один параметр

// file - рядок з іменем файлу. Ім'я файлу може бути з розширенням, наприклад: styles.css, app.js або без, наприклад: styles, app.
// Використовуючи методи indexOf та slice, доповни код функції таким чином, щоб:

// Вона перевіряла наявність розширення в імені файлу (назва розширення відокремлюється від імені файла крапкою)
// Якщо ім'я файлу не містить розширення, то функція повертала новий підрядок, що містить ім'я файлу без змін
// В іншому разі функція повертала підрядок з іменем файлу, але без розширення

//Варіант 1
// function getFileName(file) {
//   const index = file.indexOf(".");
//   return index === -1 ? file : file.slice(0, index);
// }

// console.log(getFileName("styles.css")); // styles
// console.log(getFileName("app.js")); // app
// console.log(getFileName("app")); // app
// console.log(getFileName("index.js")); // index
// console.log(getFileName("index.htmls")); // index
// console.log(getFileName("index.css")); // index
// console.log(getFileName("index")); // index

//Варіант 2
// function getFileName(file) {
//   const index = file.indexOf(".");

//   if (index === -1) {
//     return file;
//   }

//   return file.slice(0, index);
// }

// console.log(getFileName("styles.css")); // styles
// console.log(getFileName("app.js")); // app
// console.log(getFileName("app")); // app
// console.log(getFileName("index.js")); // index
// console.log(getFileName("index.htmls")); // index
// console.log(getFileName("index.css")); // index
// console.log(getFileName("index")); // index

//Метод trim()
// const input = " JavaScript is awesome!    ";
// const trimmedInput = input.trim();
// console.log(trimmedInput); // "JavaScript is awesome!"
// console.log(input); // " JavaScript is awesome!    "

// Функція createFileName(name, ext) приймає два параметри:

// name - рядок, що зберігає ім'я файлу без розширення, яке вводить користувач. Воно може містити зайві пробіли на початку або в кінці рядка, наприклад "order ", " finance " тощо
// ext - рядок, що зберігає розширення, наприклад "txt", "xml" тощо
// Використовуючи синтаксис шаблонних рядків і метод trim(), доповни код функції таким чином, щоб вона повертала повне (об'єднане) ім'я файлу з доданим розширенням, зазначеним у параметрі ext у форматі ім'я.розширення. Також повне ім'я файлу не повинно містити зайвих пробілів на початку або наприкінці.

// function createFileName(name, ext) {
//   return `${name.trim()}.${ext}`;
// }
// console.log(createFileName(" order ", "txt"));
// console.log(createFileName("report ", "csv"));
// console.log(createFileName(" presentation", "xml"));

//Цикли

//Цикл while
// let count = 0;
// while (count < 10) {
//   console.log(`Count: ${count}`);
//   count += 1;
// }

//Змінна clientCounter зберігає кількість зайнятих номерів на поточний момент.

// Змінна maxClients зберігає загальну кількість номерів у готелі.

// Завдяки циклу while місця в готелі будуть заповнюватися доти, доки поточна кількість клієнтів не дорівнюватиме максимально допустимій.

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

//Через функцію

// function countClients(clientCounter, maxClients) {
//   let counter = clientCounter;
//   while (counter < maxClients) {
//     console.log(counter);
//     counter += 1;
//   }
// }
// countClients(18, 25);

// Функція calculateTotal(number) приймає ціле число (параметр number). Доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// function calculateTotal(number) {
//   let sum = 0;
//   let i = 1;
//   while (i <= number) {
//     sum += i;
//     i++;
//   }
//   return sum;
// }
// console.log(calculateTotal(1)); // 1
// console.log(calculateTotal(3)); // 6
// console.log(calculateTotal(0)); // 0
// console.log(calculateTotal(18)); // 171
// console.log(calculateTotal(24)); // 300

//Цикл do…while
// let count = 0;
// do {
//   console.log(`Count: ${count}`);
//   count += 1;
// } while (count < 5);

//Цикл for
// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }

// for (let i = 20; i >= 0; i -= 5) {
//   console.log(i);
// }

//Напишемо фукнцію яка підсумовує всі числа від 0 до заданого числа і повертає результат:
// function sumUpTo(number) {
//   let sum = 0;
//   for (let i = 0; i <= number; i += 1) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(sumUpTo(5)); // 15
// console.log(sumUpTo(10)); // 55
// console.log(sumUpTo(0)); // 0

//Функція calculateTotal(number) приймає ціле число (параметр number) Використовуючи цикл for, доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// function calculateTotal(number) {
//   let sum = 0;
//   for (let i = 0; i <= number; i += 1) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(calculateTotal(1)); // 1
// console.log(calculateTotal(0)); // 0
// console.log(calculateTotal(7)); // 28
// console.log(calculateTotal(18)); // 171
// console.log(calculateTotal(24)); // 300

//Інкремент і декремент

//Префіксний інкремент
// let x = 5;
// const y = ++x;
// console.log(x); // 6
// console.log(y); // 6

//Постфіксний інкремент
// let x = 5;
// const y = x++;
// console.log(x); // 6
// console.log(y); // 5

//Префіксний декремент
// let x = 5;
// const y = --x;
// console.log(x); // 4
// console.log(y); // 4

//Постфіксний декремент
// let x = 5;
// const y = x--;
// console.log(x); // 4
// console.log(y); // 5

//Функція calculateEvenTotal(number) приймає ціле число (параметр number). Доповни код функції так, щоб вона повертала суму всіх парних цілих чисел від одиниці до цього числа включно. Парні числа — це ті, що можна поділити на 2 без остачі (як це зробити розглядалося у темі Арифметичні операції у модулі 1). Наприклад, якщо number дорівнює 6, то сума - це 2 + 4 + 6, тобто 12.

// function calculateEvenTotal(number) {
//   let sum = 0;
//   for (let i = 1; i <= number; i++) {
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(calculateEvenTotal(1)); // 0
// console.log(calculateEvenTotal(3)); // 2
// console.log(calculateEvenTotal(7)); // 12
// console.log(calculateEvenTotal(18)); // 90
// console.log(calculateEvenTotal(27)); // 182

//Оператор break
// for (let i = 0; i < 10; i += 1) {
//   console.log(i);

//   if (i === 5) {
//     console.log("Met the number 5, interrupt the execution of the cycle");
//     break;
//   }
// }

// console.log("Log after cycle");

//Доповни код таким чином, щоб у змінну number записувалося перше число у проміжку від start до end, яке ділиться на 5 без остачі.

// const start = 6;
// const end = 15;
// let number;
// for (let i = start; i < end; i++) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number);

//Оператор break і функції
// function findNumber(max, target) {
//   console.log("Log in the body of the function before the cycle");
//   for (let i = 5; i <= max; i++) {
//     console.log("Current counter value i:", i);
//     if (i === target) {
//       console.log(`Found the number $ {target}, interrupt the cycle`);
//       break;
//     }
//   }
//   console.log("Log in body function after cycle");
// }
// findNumber(10, 6);
// console.log("Log after exiting function");

// function findNumber(max, target) {
//   console.log("Log in the body of the function before the cycle");
//   for (let i = 5; i <= max; i += 1) {
//     console.log("Current counter value i:", i);
//     if (i === target) {
//       console.log(
//         `Found the number ${target}, we make a return, interrupting the loop and function`
//       );
//       return i;
//     }
//   }
//   console.log("Log in body function after cycle");
// }
// const result = findNumber(10, 6);
// console.log("Log after exiting function");
// console.log(`Result of function execution ${result}`);

//Функція findNumber(start, end, divisor) приймає три параметра, які є цілими числами.

// Доповни код функції таким чином, щоб вона:

// повертала перше число у діапазоні від start до end включно, яке ділиться на divisor без остачі
// не використовуй оператор break

// function findNumber(start, end, divisor) {
//   for (let i = start; i <= end; i++) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
// }
// console.log(findNumber(2, 6, 5)); // 5
// console.log(findNumber(8, 17, 3)); // 9
// console.log(findNumber(6, 9, 4)); // 8
// console.log(findNumber(16, 35, 7)); // 21

//task-1

// Станція з продажу ремонтних дроїдів готова до запуску, залишилося написати програмне забезпечення для відділу продажів. Оголоси функцію makeTransaction(quantity, pricePerDroid, customerCredits), яка складає та повертає повідомлення про купівлю ремонтних дроїдів.

// Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

// quantity — кількість замовлених дроїдів
// pricePerDroid — ціна одного дроїда
// customerCredits — сума коштів на рахунку клієнта

// Доповни функцію таким чином:

// Оголоси змінну для зберігання загальної суми замовлення (загальна вартість усіх замовлених дроїдів) і задай їй вираз розрахунку цієї суми.
// Додай перевірку, чи зможе клієнт оплатити замовлення:
// якщо сума до сплати перевищує кількість кредитів на рахунку клієнта, функція має повертати рядок "Insufficient funds!"
// в іншому випадку функція має повертати рядок "You ordered <quantity> droids worth <totalPrice> credits!", де <quantity> це кількість замовлених дроїдів, а <totalPrice> це їх загальна вартість.

// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//   let totalPrice = quantity * pricePerDroid;
//   return totalPrice <= customerCredits
//     ? `You ordered ${quantity} droids worth ${totalPrice} credits!`
//     : "Insufficient funds!";
// }
// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

//task-2

//Оголоси функцію formatMessage(message, maxLength), яка приймає рядок (параметр message) та перевіряє його довжину відповідно до заданої максимальної довжини (параметр maxLength).

// Доповни код функції таким чином, що:

// Якщо довжина рядка дорівнює або менша за maxLength, то функція повертає початковий рядок без змін.
// Якщо довжина перевищує maxLength, то функція обрізає рядок до maxLength символів, додає трикрапку "..." в кінці та повертає обрізану версію.

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// function formatMessage(message, maxLength) {
//   if (message.lenght <= maxLength) {
//     return message;
//   } else {
//     return message.slice(0, maxLength) + "...";
//   }
// }
// console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"

//task-3
// Функція checkForSpam(message) приймає рядок (параметр message), перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки. Слова в рядку параметра message можуть бути в довільному регістрі, наприклад SPAM або sAlE.

// Доповни код функції таким чином, що:

// Якщо знайдено заборонене слово (spam або sale), то функція повертає буль true
// Якщо в рядку відсутні заборонені слова, функція повертає буль false

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// function checkForSpam(message) {
//   const normalizeText = message.toLowerCase();
//   return normalizeText.includes("sale") || normalizeText.includes("spam");
// }
// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

//task-4
// Оголоси функцію getShippingCost(country), яка повинна перевіряти можливість доставки товару в країну користувача (параметр country) і повертати повідомлення про результат. Обов'язково використовуй інструкцію switch.

// Формат рядка, що повертається "Shipping to <country> will cost <price> credits", де замість <country> і <price> необхідно підставити відповідні значення.

// Список країн і вартість доставки:

// China — 100 кредитів
// Chile — 250 кредитів
// Australia — 170 кредитів
// Jamaica — 120 кредитів

// Зі списку видно, що доставка можлива не скрізь. Якщо зазначена країна відсутня у списку, то функція повинна повернути рядок "Sorry, there is no delivery to your country".

// function getShippingCost(country) {
//   let price;
//   switch (country) {
//     case "China":
//       price = 100;
//       break;

//     case "Chile":
//       price = 250;
//       break;

//     case "Australia":
//       price = 170;
//       break;

//     case "Jamaica":
//       price = 120;
//       break;
//     default:
//       return "Sorry, there is no delivery to your country";
//   }
//   return `Shipping to ${country} will cost ${price} credits`;
// }

// console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
