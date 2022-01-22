const bd = '11 march 2022'; // hari ulang tahun
const daysEl = document.getElementById('days'); 
const hoursEl = document.getElementById('hours');
const minitsEl = document.getElementById('minits');
const secondsEl = document.getElementById('seconds');


function countdown (){
    const bdDate = new Date(bd); // hari ulang tahun
    const currentDate = new Date(); // hari saat ini

    const totalSeconds = (bdDate - currentDate) / 1000 ;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minits = Math.floor(totalSeconds / 60 ) % 60;
    const seconds = Math.floor(totalSeconds % 60);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minitsEl.innerHTML = formatTime(minits);
    secondsEl.innerHTML = formatTime(seconds);

}

function formatTime(time){
    return time < 10 ? `0${time}`: time;
}
countdown();

setInterval(countdown, 1000);