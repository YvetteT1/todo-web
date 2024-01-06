const loginForm = document.getElementById("loginForm");
const loginField = loginForm.querySelector("#loginField");
const loginBtn = loginForm.querySelector("#loginBtn");
const greeting = document.getElementById("greeting");
const otherUser = document.getElementById("otherUser")
const HIDDEN_CLASS = "hidden";

function toSaveUser (username) {
   localStorage.setItem("user",JSON.stringify(username));
}

function toDisplayGreeting (username) {
   greeting.innerText = `${username}님 행복하세요.`;
   greeting.classList.remove(HIDDEN_CLASS);
   loginForm.classList.add(HIDDEN_CLASS);
}

function handleLoginSubmit (event) {
  event.preventDefault();
  const username = loginField.value;
  loginField.value = "";
  toDisplayGreeting(username);
  toSaveUser(username);
}

const savedUser = JSON.parse(localStorage.getItem("user"));
if (savedUser !== null) {
   toDisplayGreeting(savedUser);
}

loginForm.addEventListener("submit", handleLoginSubmit);
