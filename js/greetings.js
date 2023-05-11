const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector(".momentum-greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault(); // 브라우저가 기본 동작을 실행하지 못하도록 막아주는 것 ex) sumit할 때 마다 새로고침
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  const date = new Date();
  const hours = date.getHours();
  // greeting.innerText = "Hello, " + username + "!!"; 아래 코드와 같은 의미(아래쪽을 더 선호)
  // greeting.innerText = `Hello, ${username}!!`;
  if (hours >= 6 && hours < 12) {
    greeting.innerText = `Good morning, ${username}!!\nHave a nice day :)`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
  } else if (hours >= 12 && hours < 18) {
    greeting.innerText = `Good afternoon, ${username}!!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
  } else if (hours >= 18 && hours < 23) {
    greeting.innerText = `Good evening, ${username}!!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
  } else {
    greeting.innerText = `Good night, ${username}!!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
  }
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // Show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // Show the greetings
  paintGreetings(savedUsername);
}
