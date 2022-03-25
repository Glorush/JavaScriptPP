document.querySelector('.dark-mode-switeh').onclick = () => {
  document.querySelector('body').classList.toggle('dark');
  document.querySelector('body').classList.toggle('light');
}

let calendar = document.querySelector('.calender');
const month_name = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let month_picker = calendar.querySelector('.month-picker');

isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 ===0);
}
getFebDays = (year) => {
  return isLeapYear(year) ? 29 : 28;
}
generateCalander = (month,year) => {
  let calendar_days = calendar.querySelector('.calender_day');
  let calendar_header_year = calendar.querySelector('#Year');
  let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  calendar_days.innerHTML = "";
  let currDate = new Date ();
  if(!month) month = currDate.getMonth();
  if(!year) year = currDate.getFullYear();

  let curr_month = `${month_name[month]}`
  month_picker.innerHTML = curr_month;
  calendar_header_year.innerHTML= year;


  // get first day of month 
  let first_day = new Date(year, month, 1);
  for (let i= 0; i <= days_of_month[month] + first_day.getDay() - 1; i++){
    let day = document.createElement('div');
    if(i>= first_day.getDate()){
      day.classList.add('calandar-day-hover');
      day.innerHTML = i - first_day.getDay() + 1;
      day.innerHTML += `<span></span><span></span><span></span><span></span>`;
      if( i - first_day.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()){
        day.classList.add('curr_date');
      }
    }
    calendar_days.appendChild(day);
  }

}

let month_list = calendar.querySelector('.month-list')

month_name.forEach((e, index) => {
    let month = document.createElement('div')
    month.innerHTML = `<div data-month="${index}">${e}</div>`
    month.querySelector('div').onclick = () => {
        month_list.classList.remove('show')
        curr_month.value = index
        generateCalander(index, curr_year.value)
    }
    month_list.appendChild(month)
})


month_picker.onclick = () => {
    month_list.classList.add('show')
}

let currDate = new Date()

let curr_month = {value: currDate.getMonth()}
let curr_year = {value: currDate.getFullYear()}

generateCalander(curr_month.value, curr_year.value)

document.querySelector('#prev-year').onclick = () => {
    --curr_year.value
    generateCalander(curr_month.value, curr_year.value)
}

document.querySelector('#next-year').onclick = () => {
    ++curr_year.value
    generateCalander(curr_month.value, curr_year.value)
}
