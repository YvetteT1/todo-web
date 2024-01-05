const loginForm = document.getElementById("loginForm");
const loginField = loginForm.querySelector("#loginField");
const loginBtn = loginForm.querySelector("#loginBtn");

const HIDDEN_CLASS = "hidden";

function toSaveUser (username) {
   localStorage.setItem("user",JSON.stringify(username));
}

function toDisplayGreeting (username) {
   const greeting = document.getElementById("greeting");
   greeting.innerText = `${username}님 행복하세요.`
}

function handleLoginSubmit (event) {
  event.preventDefault();
  loginForm.classList.add("HIDDEN_CLASS");
  const username = loginField.value;
  loginField.value = ""
  toDisplayGreeting(username);
  toSaveUser(username);
}

const savedUser = JSON.parse(localStorage.getItem("user"));

if (savedUser !== null) {
    toDisplayGreeting(savedUser);
    greeting.classList.remove(HIDDEN_KEY);
}

loginForm.addEventListener("submit", handleLoginSubmit);