import validator from "validator";

const message = "NodeJS in amazing!";
console.log(message);

// npm init - ініціалізує npm в проекті і створює файл package.json
// npm install - встановлює всі залежності, перелічені в package.json
// npm list --depth=0 - виведе в терміналі список локально встановлених пакетів з номерами їх версій, без залежностей
// npm install [package-name] - встановить пакет локально у папку node_modules
// npm uninstall [package-name] - видалить пакет, встановлений локально і оновить package.json
// npm start і npm test - запустить скрипт start або test, розташований в package.json
// npm run [custom-script] - запустить кастомний скрипт, розташований в package.json
// npm outdated - використовується для пошуку оновлень, виявить сумісні версії програмно і виведе список доступних оновлень
// npm update - оновить всі пакети до максимально дозволеної версії

const validateEmail = email => validator.isEmail(email);
console.log("validateEmail(email@mail.com):::", validateEmail("email@mail.com"));
console.log("validateEmail(mail.com):::", validateEmail("mail.com"));
