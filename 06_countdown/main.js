//Pegar os elementos na DOM
const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minutesEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")

//Data do evento
const countDate = "26 Feb 2023";

function countDown() {
  const DateEvent = new Date(countDate) //data do evento no formato 
  const currentDate = new Date(); //data atual

  const totalSeconds = (DateEvent - currentDate) / 1000; //Total em segundos

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = formatTime(days)
  hoursEl.innerHTML = formatTime(hours)
  minutesEl.innerHTML = formatTime(minutes)
  secondsEl.innerHTML = formatTime(seconds) 

}

//Acrescenta um 0 quando num menor que 10
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
countDown();

setInterval(countDown, 1000);

/*==================================================*/ 

// MODAL
const Modal = {
  openClose() {
    document.querySelector('.modal-overlay').classList.toggle('active')
  }
}
