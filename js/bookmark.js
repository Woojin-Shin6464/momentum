// SameSite 에러 해결 방법
// 타사 쿠키를 사용하기 때문에 발생하는 보안 이슈?
document.cookie = "safeCookie1=foo; SameSite=Lax";
document.cookie = "safeCookie2=foo";
document.cookie = "crossCookie=bar; SameSite=None; Secure";

const bookmarkForm = document.querySelector(".bookmark-form");
const bookmarkNameInput = document.querySelector(".bookmark-name");
const bookmarkUrlInput = document.querySelector(".bookmark-url");
const bookmarkBtn = document.querySelector("#bookmark-btn");
const bookmarkContainer = document.querySelector(".bookmark-container");
const bookmarkColumn = document.querySelector("#bookmark-column");
const bookmarkBtnCancel = document.querySelector(".bookmark-btn__cancel");
const bookmarkBtnSubmit = document.querySelector(".bookmark-btn__submit");

function createBookmark() {
  bookmarkBtn.classList.add(HIDDEN_CLASSNAME);
  bookmarkContainer.classList.remove(HIDDEN_CLASSNAME);
  document.querySelector(".bgImage").style.opacity = "0.5";
  document.querySelector(".search").style.pointerEvents = "none";
  document.getElementById("todo-form").style.pointerEvents = "none";
}

const BOOKMARKS_KEY = "bookmarks";

const bookmarks = [];

// localstorage 에서는 문자열만 저장할 수 있어서 JSON.stringify 함수 사용
function saveBookmarks() {
  localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
}

function hiddenBookmark() {
  bookmarkBtn.classList.remove(HIDDEN_CLASSNAME);
  bookmarkContainer.classList.add(HIDDEN_CLASSNAME);
  document.querySelector(".bgImage").style.opacity = "1";
  document.querySelector(".search").style.pointerEvents = "auto";
  document.getElementById("todo-form").style.pointerEvents = "auto";
}

function deleteBookmark(event) {
  // console.log(event.target.parentElement.innerText);
  const div = event.target.parentElement;
  div.remove();
}

function paintBookmark(newBookmarkname, newBookmarkUrl) {
  const divOne = document.createElement("div");
  const divTwo = document.createElement("div");
  divTwo.innerText = newBookmarkname;

  const a = document.createElement("a");
  a.href = newBookmarkUrl;
  a.target = self;

  const img = document.createElement("img");
  img.src = newBookmarkUrl + "/favicon.ico"; // 문자열 더하기 다른 문법 찾아보기

  const button = document.createElement("button");
  button.classList.add("bookmark-btn__delete");
  button.addEventListener("click", deleteBookmark);

  divOne.appendChild(a);
  a.appendChild(img);
  divOne.appendChild(divTwo);
  divOne.appendChild(button);
  bookmarkColumn.appendChild(divOne);
}

function handleBookmarkSubmit(event) {
  event.preventDefault(); // enter 했을 때 새로고침한는 거 해제
  const newBookmarkName = bookmarkNameInput.value;
  bookmarkNameInput.value = "";
  const newBookmarkUrl = bookmarkUrlInput.value;
  bookmarkUrlInput.value = "";
  bookmarks.push(newBookmarkName, newBookmarkUrl);
  paintBookmark(newBookmarkName, newBookmarkUrl);
  saveBookmarks();
}

bookmarkForm.addEventListener("submit", handleBookmarkSubmit);
bookmarkBtnSubmit.addEventListener("click", handleBookmarkSubmit);
// div 유지되는 거 고치기

bookmarkBtn.addEventListener("click", createBookmark);

bookmarkBtnCancel.addEventListener("click", hiddenBookmark);

// 강의 7.5 localStorage에 저장되어 있는 거 불러옴
// but..배열 요소를 불러와서 따로 생성된다.
// const savedBookmarks = localStorage.getItem(BOOKMARKS_KEY);

// if (savedBookmarks !== null) {
//   const parsedBookmarks = JSON.parse(savedBookmarks);
//   parsedBookmarks.forEach(paintBookmark);
// }
