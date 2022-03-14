
const randomColor = ['rgba(226 232 240', 'Red', 'Green', 'rgba(133,122, 200)']
const btnClick = document.getElementById('btn_click');
const color = document.getElementById('bg_display_color');

// btnClick.addEventListener('click', function(){
  
//   randomNumber = creatRandomNum();
//   console.log(randomNumber);
//   const chang_bodycolor = document.body.style.backgroundColor = randomColor[randomNumber];
//   console.log(chang_bodycolor)
//   color.textContent = randomColor[randomNumber];


// })
btnClick.addEventListener('click', function(){
  const getFullRgbaColor = 'rgba('+creatRandomNum(255)+','+creatRandomNum(255)+' ,'+creatRandomNum(255)+')'
  document.body.style.backgroundColor = getFullRgbaColor;
  
  color.textContent = getFullRgbaColor;
});




function creatRandomNum(number){
  return Math.floor(Math.random() * number);
}