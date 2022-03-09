
const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cnfPassword = document.getElementById('password2');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInput();
});

function checkInput(){
  // get the value 
  const userNameValue = userName.value.trim();
  const emailValue = email.value.trim();
  const userPassword = password.value.trim();
  const usseConfPass = cnfPassword.value.trim();

  if(userNameValue === ""){
    // set error 
    // and error class 
    setErrorFor(userName, 'UserName Can not be blank');
  }
  else{
    setSuccessFor(userName);
  }
  
  // email valid 
  if(emailValue === ""){
    setErrorFor(email, "Email can not be Blank");
  }
  else if(!isEmail(emailValue)){
    setErrorFor(email, "Email Value is not valid");
  }
  else{
    setSuccessFor(email);
  }

  if(userPassword === ""){
    setErrorFor(password, "Password can not be blank")
  }
  else{
    setSuccessFor(password);
  }

  if(usseConfPass === ''){
    setErrorFor(cnfPassword, "Confirum Password can no be Blank");
  }
  else if(userPassword != usseConfPass){
    setErrorFor(cnfPassword, 'Password Not match try again');
  }
  else {
    setSuccessFor(cnfPassword);
  }

}
function setErrorFor(input, message){
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  // add error messages insert small 
  small.innerText = message;

  // add error class 
  formControl.className = "form-control error";
}

function setSuccessFor(input){
  const formControl = input.parentElement;
  formControl.className = "form-control success"
}
function isEmail(email){
  return  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email) ;
}