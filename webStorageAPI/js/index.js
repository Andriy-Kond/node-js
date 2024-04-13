// setItem(key, value) - створює новий, або оновлює вже існуючий запис у сховищі.
// getItem(key) - повертає зі сховища значення з ключем key.
// removeItem(key) - видаляє зі сховища запис з ключем key.
// clear() - повністю очищає всі записи сховища.
// length - кількість записів у сховищі.

// ~ setItem(key, value) - можна додати новий запис у вигляді пари ключ: значення.
localStorage.setItem("ui-theme", "light");
localStorage.setItem("sidebar", "expanded");
localStorage.setItem("notification-level", "mute");

// Якщо необхідно зберегти щось, крім рядка, наприклад, масив або об'єкт, необхідно перетворити їх у рядок методом JSON.stringify().
const settings = {
  theme: "dark",
  isAuthenticated: true,
  options: [1, 2, 3],
};

localStorage.setItem("settings", JSON.stringify(settings));

// ~ getItem(key) дозволяє прочитати зі сховища запис з ключем key.
// Якщо у сховищі відсутній запис з таким ключем, метод повертає null.
// Якщо значення - це звичайний рядок, немає потреби його парсити.
const theme = localStorage.getItem("ui-theme");
console.log("theme:::", theme); // "light"

localStorage.setItem("ui-theme", "dark");
const theme2 = localStorage.getItem("ui-theme");
console.log("theme2:::", theme2); // "dark"

// В іншому випадку, необхідно розпарсити значення методом JSON.parse(), щоб отримати валідні дані.
const savedSettings = localStorage.getItem("settings");
console.log("savedSettings:::", savedSettings); // {"theme":"dark","isAuthenticated":true,"options":[1,2,3]}

const parsedSettings = JSON.parse(savedSettings);
console.log("parsedSettings:::", parsedSettings); // {theme: 'dark', isAuthenticated: true, options: Array(3)}

// ~ removeItem(key) видаляє зі сховища вже існуючий запис з ключем key.
localStorage.setItem("ui-theme", "dark");
console.log('localStorage.getItem("ui-theme"):::', localStorage.getItem("ui-theme")); // "dark"

localStorage.removeItem("ui-theme");
console.log('localStorage.getItem("ui-theme"):::', localStorage.getItem("ui-theme")); // null

// ~ Очищення всього локального сховища: localStorage.clear();
