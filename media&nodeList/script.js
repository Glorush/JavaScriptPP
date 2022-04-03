const mediaQuery = window.matchMedia("(max-width: 679px)")
const selectedPId = document.getElementById('selectId');
const selectedA = selectedPId.querySelectorAll('.select-sm');


function myFunction(x) {
  // media query metches
  if (x.matches) {
    for(let i = 0; i < selectedA.length; i++){
      selectedA[i].innerHTML = "<input type='checkbox'>";
    }
  } else {
    for(let i = 0; i < selectedA.length; i++){
      selectedA[i].innerText = "Select";
    }
  }
}

// call function 
myFunction(mediaQuery)
// Register addListener stage change
mediaQuery.addListener(myFunction)