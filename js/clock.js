const clock = document.querySelector(".momentum-clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 시계가 1초 뒤에 뜨기때문에 미리 한번 호출
setInterval(getClock, 1000);

// 위에 있는 코드 init()함수로 묶기?
