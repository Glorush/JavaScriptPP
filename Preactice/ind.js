

function count (){
  const first_input = document.getElementById('Firts_input');
  const first_input_TEXT =first_input.innerText;
  const f_int = parseFloat(first_input_TEXT);
  // const fIN_update = f_int + 1;
  const updat2 =first_input.innerText = f_int;
  return (updat2);
}

function count2 (){
  const Secont_input = document.getElementById('second_input');
  const first_input_TEXT =Secont_input.innerText;
  const f_int = parseFloat(first_input_TEXT);
  // const fIN_update = f_int + 1;
  const update_value = Secont_input.innerText = f_int;
  return(update_value)
}
function persentTAge(parameter1, parameter2){
  const persent_tage = count() + count2();
  console.log(persent_tage)
  const firestValueP = (count() / persent_tage) * 100 ;
  console.log (Math.round(firestValueP) + "%");
  const secontValueP = (count2() / persent_tage) * 100 ;
  console.log(Math.round(secontValueP) + "%") 
}
persentTAge();
