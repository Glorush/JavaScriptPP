
// ste initial content 
let count = 0;

const counterValue  = document.getElementById('counterValue');
const ClickBTn = document.querySelectorAll('.btn');

ClickBTn.forEach( function (btn){
  btn.addEventListener('click', function(e){
   const currentBTnClass =  e.currentTarget.classList;
   if(currentBTnClass.contains('btn_decrease')){
     count--;
   }
   else if(currentBTnClass.contains('btn_Increase')){
     count++;
   }
   else{
     count = 0;
   }
   if(count > 0){
     counterValue.style.color = 'green'
   }
   if(count < 0){
     counterValue.style.color = "red"
   }
   if(count === 0 ){
     counterValue.style.color = "#222"
   }
   counterValue.textContent = count;
  })
});