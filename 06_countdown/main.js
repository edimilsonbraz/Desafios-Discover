const countdown = () => {
  const countDate = new Date("Feb 26 2022 00:00:00").getTime()
  const nowTimer = new Date()
  const diferenceTimer = countDate - nowTimer

  //TEMPO em Segundos
  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;
  
  
  //Calculando o tempo
  let textDay = Math.floor(diferenceTimer / day);   
  let textHour = Math.floor((diferenceTimer % day) / hour);   
  let textMinute = Math.floor((diferenceTimer % hour) / minute);   
  let textSecond = Math.floor((diferenceTimer % minute) / second);   

  //Acrescentando os "0"
  textDay = textDay < 10 ? '0' + textDay : textDay;
  textHour = textHour < 10 ? '0' + textHour : textHour;
  textMinute = textMinute < 10 ? '0' + textMinute : textMinute;
  textSecond = textSecond < 10 ? '0' + textSecond : textSecond;


  document.getElementById("days").innerText = textDay
  document.getElementById("hours").innerText = textHour
  document.getElementById("minutes").innerText = textMinute
  document.getElementById("seconds").innerText = textSecond

}

setInterval(countdown, 1000);

