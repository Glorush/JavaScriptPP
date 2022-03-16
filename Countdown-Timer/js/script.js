
const days = document.getElementById('days-d');
const hours = document.getElementById('days-h');
const minutes = document.getElementById('days-m');
const seconds = document.getElementById('days-c');


const Year = '30 jun 2022';
var timer ;
function countDown() {
  const newYear = new Date(Year);
  const currentDate = new Date();

  const totalSeconds = Math.round((newYear - currentDate) / 1000);

  const Day = Math.floor(totalSeconds /(60 * 60 * 24));
  const Hour = Math.floor(totalSeconds / (60 * 60)) % 24;
  const min = Math.floor(totalSeconds / (60)) % 60;
  const second = Math.floor(totalSeconds) % 60;
  console.log(second)

  days.innerHTML = Day;
  hours.innerHTML = Hour;
  minutes.innerHTML = min;
  seconds.innerHTML = second;
}



timer = setInterval( countDown, 1000);