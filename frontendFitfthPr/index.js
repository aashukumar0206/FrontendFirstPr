
// burger icon 

let nav = document.querySelector('.burger').addEventListener('click', function () {
  let show = document.querySelector('#nav');
  show.classList.toggle('show');

  if (show.style.display == 'block') {
    show.style.display = 'none';
  } else {
    show.style.display = 'block';
  }


})


// text align

let text  = document.querySelector('.class-list').addEventListener('click', function () {
  let shown = document.querySelector('#nav');
  shown.classList.toggle('shown');

  if (shown.style.display == block) {
    shown.style.display = none;
  } else {
    shown.style.display = block;
  }


})






// form validation
function validateform() {
  let fullName = document.getElementById('fullName').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
// let at = email.indexOf('@');
// let dot = email.indexOf('.')

  // name section is here that
  if(fullName == ""){
    alert('Please enter your Name')
    return false;
  }

  if((fullName.length < 2) || (fullName.length > 20)){
    alert('This is to short Name')
    return false;
  }

  if(!isNaN(fullName)){
    alert('Please enter Name in Characters')
    return false;
  }



// this is email sectiion is here that

  if(email == ""){
    alert('Please enter your E-mail')
    return false;
  }
  // if(email.indexOf('@') <= 0){
  //   alert('please enterright position of @')
  //   return false;
  // }

  // if((email.charAt('a.length - 4 ') != "0") &&(email.charAt(email.length - 3) != '.') ){
  //   alert('please enterright position 4 of @')
  //   return false;
  // }
  



// here is passord section 
  if(password == ""){
    alert('Please enter your Password')
    return false;
  }

  
  if((password.length < 5) || (password.length > 20)){
    alert('Enter the minimum 5 and maximum 20 words')
    return false;
  }

}










