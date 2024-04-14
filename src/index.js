// npm init - ініціалізує npm в проекті і створює файл package.json
// npm install - встановлює всі залежності, перелічені в package.json
// npm list --depth=0 - виведе в терміналі список локально встановлених пакетів з номерами їх версій, без залежностей
// npm install [package-name] - встановить пакет локально у папку node_modules
// npm uninstall [package-name] - видалить пакет, встановлений локально і оновить package.json
// npm start і npm test - запустить скрипт start або test, розташований в package.json
// npm run [custom-script] - запустить кастомний скрипт, розташований в package.json
// npm outdated - використовується для пошуку оновлень, виявить сумісні версії програмно і виведе список доступних оновлень
// npm update - оновить всі пакети до максимально дозволеної версії

import validator from "validator";
import Joi from "joi";
import shortid from "shortid";

const passwordSchema = Joi.string().alphanum().min(3).max(10).required();
console.log("passwordSchema.validate() :>> ", passwordSchema.validate("45645665j"));

console.log("shortid.generate() :>> ", shortid.generate());

const message = "NodeJS in amazing!";
console.log(message);

const validateEmail = email => validator.isEmail(email);
console.log("validateEmail(email@mail.com):::", validateEmail("email@mail.com"));
console.log("validateEmail(mail.com):::", validateEmail("mail.com"));

// ^ Babel
// .browserslistrc - сюди вставляю версії браузера, з якими має працювати код (https://browsersl.ist/). Наприклад, last 2 versions, або Firefox > 20
// Або можна у файлі налаштувань самого babel (babel.config.json):
// {
//   "presets": [
//     [
//       "@babel/preset-env",
//       {
//         "targets": {
//           "edge": "17",
//           "firefox": "60",
//           "chrome": "67",
//           "safari": "11.1"
//         },
//         "useBuiltIns": "usage",
//         "corejs": "3.6.5"
//       }
//     ]
//   ]
// }
// babel.config.json має пріоритет перед .browserslistrc, але .browserslistrc може бути використаний іншими додатками.
// замість .browserslistrc можна прописати інформацію з нього прямо у package.json:   "browserslist": "> 0.25%, not dead",
// Але треба обрати - або .browserslistrc, або у package.json. Одразу у двох працювати не буде.

const a = (b, c) => b * c;
console.log("a:::", a);
