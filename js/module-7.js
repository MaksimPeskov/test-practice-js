//Об'єктна модель документа

// Властивості та атрибути

//Доступ до властивостей
// const link = document.querySelector(".link");
// console.log(link.href); // "https://goit.global"
// link.href = "https://neo.goit.global";
// console.log(link.href); // "https://neo.goit.global"

// const image = document.querySelector(".image");
// console.log(image.src); // https://picsum.photos/id/9/320/240
// console.log(image.alt); // "A laptop"
// image.src = "https://picsum.photos/id/13/640/480";
// image.alt = "River bank";
// console.log(image.src); // https://picsum.photos/id/13/640/480
// console.log(image.alt); // "River bank"

// Властивість textContent
// const el = document.querySelector(".text");
// const nested = document.querySelector(".sub-text");
// console.log(el.textContent); // "Username: Mango"
// console.log(nested.textContent); // "Mango"
// console.log(el.textContent); // "Username: Mango"
// el.textContent = "Username: Poly";
// console.log(el.textContent); // "Username: Poly"

// const titleEl = document.querySelector(".article-title");
// console.log(titleEl.textContent); // Welcome to Hawaii!
// titleEl.textContent = "Welcome to Bahamas!";
// console.log(titleEl.textContent); // Welcome to Bahamas!

//Властивість classList
// const link = document.querySelector(".links");
// console.log(link.classList); // ["links", "is-active", length: 2, value: "link is-active"]

//Метод classList.contains(className)
// const link = document.querySelector(".links");

// const hasActiveClass = link.classList.contains("is-active");
// console.log(hasActiveClass); // true

// const hasActiveClass = link.classList.contains("title");
// console.log(hasActiveClass); // false

// Метод classList.add(className)
// const link = document.querySelector(".links");
// console.log(link.classList); // ["links", "is-active", length: 2, value: "link is-active"]
// link.classList.add("special");
// console.log(link.classList); // ["link", "is-active", "special", length: 3, value: "link is-active special"]

// Метод classList.remove(className)
// const link = document.querySelector(".links");
// console.log(link.classList); // ["links", "is-active", length: 2, value: "link is-active"]
// link.classList.remove("is-active");
// console.log(link.classList); // ["link", length: 1, value: "link"]

//Метод classList.toggle(className)
// const link = document.querySelector(".links");
// console.log(link.classList); // ["links", "is-active", length: 2, value: "link is-active"]
// link.classList.toggle("is-active");
// console.log(link.classList); // ["link", "is-active", length: 2, value: "link is-active"]
// link.classList.toggle("is-active");
// console.log(link.classList); // ["links", "is-active", length: 2, value: "link is-active"]

// Метод classList.replace(oldClassName, newClassName)
// const link = document.querySelector(".links");
// console.log(link.classList); // ["links", "is-active", length: 2, value: "link is-active"]
// link.classList.replace("is-active", "regular");
// console.log(link.classList); // ["link", "regular", length: 2, value: "link regular is-active"]

//Властивість style
// const button = document.querySelector(".btn");
// button.style.backgroundColor = "teal";
// button.style.fontSize = "24px";
// button.style.textAlign = "center";
// console.log(button.style.backgroundColor); // teal
// console.log(button.style.fontSize); // 24px
// console.log(button.style.textAlign); // center
// console.log(button.style); // inline styles object

//Доступ до атрибутів

//Метод element.hasAttribute(nameAttribute)
// const image = document.querySelector(".images");
// console.log(image.hasAttribute("src")); // true
// console.log(image.hasAttribute("href")); // false

//Метод element.getAttribute(nameAttribute)
// const image = document.querySelector(".images");
// console.log(image.getAttribute("alt")); // "Rocks and waterfall"

// Метод element.setAttribute(nameAttribute, value)
// const image = document.querySelector(".images");
// console.log(image.getAttribute("alt")); // "Rocks and waterfall"
// image.setAttribute("alt", "Amazing nature");
// console.log(image.getAttribute("alt")); // Amazing nature

//Метод element.removeAttribute(nameAttribute)
// const image = document.querySelector(".images");
// console.log(image.hasAttribute("alt")); // true
// image.removeAttribute("alt");
// console.log(image.hasAttribute("alt")); // false

//Власні атрибути
// const saveBtn = document.querySelector('button[data-action="save"]');
// console.log(saveBtn.dataset.action); // "save"
// const closeBtn = document.querySelector('button[data-action="close"]');
// console.log(closeBtn.dataset.action); // "close"

//Зміна значень
// saveBtn.dataset.action = "update";
// saveBtn.dataset.role = "admin";
// console.log(saveBtn.dataset.action); // "update"
// console.log(saveBtn.dataset.role); // "admin"

//Створення та видалення елементів

//Створення елементів
// const heading = document.createElement("h3");
// heading.classList.add("title");
// heading.textContent = "This is a heading";
// console.log(heading); // <h3 class="title">This is a heading</h3>

// const image = document.createElement("img");
// image.src = "https://picsum.photos/id/11/320/240";
// image.alt = "Nature";
// console.log(image); // <img src="https://picsum.photos/id/11/320/240" alt="Nature" />

// Додавання елементів

//в початок
// const divBox = document.querySelector(".box");
// divBox.prepend(heading);

// //в кінець
// divBox.append(image);

//Видалення елементів
// const text = document.querySelector(".texte");
// text.remove();

//Властивість innerHTML

//Читання
// const article = document.querySelector(".article");
// console.log(article.innerHTML);

// const title = document.querySelector(".article .title");
// console.log(title.innerHTML);

// const text = document.querySelector(".article .text");
// console.log(text.innerHTML);

// const link = document.querySelector(".article .link");
// console.log(link.innerHTML);

//Зміна
// const title = document.querySelector(".article .title");
// title.innerHTML = 'New and <span class="accent">improved</span> title';
// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");
// const markup = technologies
//   .map((technology) => `<li class="list-item">${technology}</li>`)
//   .join("");
// console.log(markup);
// list.innerHTML = markup;

// const article = document.querySelector(".articl");
// const htmlString = `<p class="articl-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
//    <a class="link" href="#">Read more...</a>`;
// article.innerHTML += htmlString;

//Метод insertAdjacentHTML()
// const list = document.querySelector(".liste");
// const newTechnologies = ["React", "TypeScript", "Node.js"];
// const markup = newTechnologies
//   .map((technology) => `<li class="liste-item new">${technology}</li>`)
//   .join("");
// list.insertAdjacentHTML("beforeend", markup);
// list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");

// Події

//Метод addEventListener()
// const button = document.querySelector(".my-button");
// button.addEventListener("click", () => {
//   console.log("The button was pressed and now the next image will appear");
// });

// const button = document.querySelector(".my-button");
// const handleClick = () => {
//   console.log("The button was pressed and now the next image will appear");
// };
// button.addEventListener("click", handleClick);

// const singleBtn = document.querySelector("#single");
// const handleClick = () => {
//   console.log("click event listener callback");
// };
// singleBtn.addEventListener("click", handleClick);
// const multiBtn = document.querySelector("#multiple");
// const firstCallback = () => {
//   console.log("First callback!");
// };
// const secondCallback = () => {
//   console.log("Second callback!");
// };
// const thirdCallback = () => {
//   console.log("Third callback!");
// };
// multiBtn.addEventListener("click", firstCallback);
// multiBtn.addEventListener("click", secondCallback);
// multiBtn.addEventListener("click", thirdCallback);

// Метод removeEventListener()
// const addListenerBtn = document.querySelector(".js-add");
// const removeListenerBtn = document.querySelector(".js-remove");
// const btn = document.querySelector(".target-btn");
// const handleClick = () => {
//   console.log("click event listener callback");
// };
// addListenerBtn.addEventListener("click", () => {
//   btn.addEventListener("click", handleClick);
//   console.log("click event listener was added to btn");
// });
// removeListenerBtn.addEventListener("click", () => {
//   btn.removeEventListener("click", handleClick);
//   console.log("click event listener was removed from btn");
// });

//Об'єкт події
// const button = document.querySelector(".button-click");
// const handleClick = (event) => {
//   console.log(event);
// };
// button.addEventListener("click", handleClick);

// const button = document.querySelector(".button-click");
// const handleClick = (event) => {
//   console.log("event", event);
//   console.log("event type:", event.type);
//   console.log("currentTarget:", event.currentTarget);
// };
// button.addEventListener("click", handleClick);

//Події клавіатури
// document.addEventListener("keydown", (event) => {
//   console.log("Keydown: ", event);
// });
// document.addEventListener("keyup", (event) => {
//   console.log("Keyup: ", event);
// });

//Властивості key і code
// document.addEventListener("keydown", (event) => {
//   console.log("key: ", event.key);
//   console.log("code: ", event.code);
// });

// const clearLogBtn = document.querySelector(".js-clear");
// const logList = document.querySelector(".log-list");
// let keypressCounter = 1;
// console.log(clearLogBtn);
// document.addEventListener("keydown", logMessage);
// document.addEventListener("keyup", logMessage);
// clearLogBtn.addEventListener("click", reset);
// function logMessage({ type, key, code }) {
//   const markup = `<div class="log-item">
//     <span class="chip">${keypressCounter}</span>
//     <ul>
//       <li><b>Event</b>: ${type}</li>
//       <li><b>Key</b>: ${key}</li>
//       <li><b>Code</b>: ${code}</li>
//     </ul>
//   </div>`;
//   logList.insertAdjacentHTML("afterbegin", markup);
//   if (type === "keyup") {
//     incrementKeypressCounter();
//   }
// }
// function reset() {
//   keypressCounter = 1;
//   logList.innerHTML = "";
// }
// function incrementKeypressCounter() {
//   keypressCounter += 1;
// }

//Події елементів форм

//Подія submit
// const registerForm = document.querySelector(".form");
// registerForm.addEventListener("submit", handleSubmit);
// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.target;
//   const login = form.elements.login.value;
//   const password = form.elements.password.value;
//   if (login === "" || password === "") {
//     return console.log("Please fill in all the fields!");
//   }
//   console.log(`Login: ${login}, Password: ${password}`);
//   form.reset();
// }

//Подія change
// const select = document.querySelector(".pizza-select");
// const textOutput = document.querySelector(".text-output");
// const valueOutput = document.querySelector(".value-output");
// select.addEventListener("change", setOutput);
// function setOutput(event) {
//   const selectedOptionValue = event.currentTarget.value;
//   const selectedOptionIndex = event.currentTarget.selectedIndex;
//   const selectedOptionText =
//     event.currentTarget.options[selectedOptionIndex].text;
//   textOutput.textContent = selectedOptionText;
//   valueOutput.textContent = selectedOptionValue;
// }

// Подія input
// const textInput = document.querySelector(".text-input");
// const output = document.querySelector(".output");
// textInput.addEventListener("input", (event) => {
//   output.textContent = event.currentTarget.value;
// });

//Подія focus і blur
// const textInput = document.querySelector(".texts-input");
// const setFocusBtn = document.querySelector('[data-action="set"]');
// const removeFocusBtn = document.querySelector('[data-action="remove"]');
// setFocusBtn.addEventListener("click", () => {
//   textInput.focus();
// });
// removeFocusBtn.addEventListener("click", () => {
//   textInput.blur();
// });
// textInput.addEventListener("focus", () => {
//   textInput.value = "This input has focus";
// });
// textInput.addEventListener("blur", () => {
//   textInput.value = "";
// });
