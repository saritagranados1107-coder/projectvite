import data from "./data.json" with { type: "json" };
import modulo, {HELLO} from "./modules/modulo.js";
//import {HELLO} from "./modulo.js";
//import modulo from "./modulo.js";

console.log(modulo());
console.log(HELLO);

console.log("Hello, JavaScript!");
console.log(data.users.filter((user) => user.age < 30));
console.log(data.users);

const usersList = document.querySelector("#users");
const addUser = document.querySelector("#addUserText");
const addUserButton = document.querySelector("#addUser");

addUserButton.addEventListener("click", (e) => {
    console.log(addUser.value);

    data.users.push({ name: addUser.value, age: 25 });

    mostrarUsuarios();
    addUser.value = "";
});

function mostrarUsuarios() {
    usersList.innerHTML = "";
    data.users.forEach((user) => {
        usersList.insertAdjacentHTML("beforeend", `<li>${user.name}</li>`);
    });
}

data.users.forEach((user) => {
    console.log(user.name);

    usersList.insertAdjacentHTML("beforeend", `<li>${user.name}</li>`);
});