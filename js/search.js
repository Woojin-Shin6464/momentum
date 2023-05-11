//구글검색창//
const searchFrm = document.querySelector(".search__bar");
function searching() {
  const search = document.querySelector(".search__bar-text");
  const keyword = search.value;
  const URL = `https://www.google.co.kr/search?where=nexteach&query=${keyword}`;
  window.open(URL);
}
searchFrm.addEventListener("submit", searching);
