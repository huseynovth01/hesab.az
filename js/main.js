var eye = document.querySelector(".eye-icon");
var eyeoff = document.querySelector(".eye")
var password = document.getElementById("password");



// ---------call names----------



// -----------textpassword------

eye.addEventListener('click' , function(){
eye.style.display = "none" ;   
eyeoff.style.display= "block";
password.type="password";
})
eyeoff.addEventListener('click' , function(){
    eye.style.display = "block" ;   
    eyeoff.style.display= "none";
    password.type="text";
    });

// -----------textpassword------