const dog = {
  name: "Mango",
  age: 3,
  isHappy: true,

  bark() {
    console.log("Woof!");
  },
};

console.log("dog:::", dog);

const dogJSON = JSON.stringify(dog); // {name: 'Mango', age: 3, isHappy: true, bark: ƒ}
console.log("dogJSON:::", dogJSON); //  {"name":"Mango","age":3,"isHappy":true}

const fn = JSON.stringify(() => console.log("Well, this is awkward"));
console.log("fn:::", fn); // undefined

const dogJS = JSON.parse(dogJSON);
console.log("dogJS:::", dogJS);
console.log("dogJS.name:::", dogJS.name);

// const data = JSON.parse("Well, this is awkward"); // "Well, this"... is not valid JSON
// ! З методом JSON.parse() необхідно використовувати конструкцію try...catch, щоб уникнути «падіння» скрипту, якщо раптом прочитали невалідний JSON.
try {
  const data = JSON.parse("Well, this is awkward");
} catch (error) {
  console.log("error.name:::", error.name); // SyntaxError
  console.log("error.message:::", error.message); // Unexpected token 'W', "Well, this"... is not valid JSON
  console.log("error.stack:::", error.stack);
  // SyntaxError: Unexpected token 'W', "Well, this"... is not valid JSON
  //     at JSON.parse (<anonymous>)
}
