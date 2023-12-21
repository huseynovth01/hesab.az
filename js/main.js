var eye = document.querySelector(".eye-icon");
var eyeoff = document.querySelector(".eye")
var password = document.getElementById("password");
var emailmessage = document.querySelector(".email-message");
var form_input = document.querySelector(".form_input");
var formcontrol =document.querySelector(".form-control")
var passwordmessage = document.querySelector(".passwordmessage")

// ------------------------------------

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

// ------------------------------------

document.querySelector(".form_input").addEventListener("submit",function(e){
    e.preventDefault();

if(formcontrol.value.trim()===""){
    
   emailmessage.textContent = "Zehmet olmasa xanani bos saxlamayin"
   emailmessage.style.color = "red"
   formcontrol.style.border = "1px solid red"

}
else{
    emailmessage.textContent = ""
    emailmessage.style.color = "1 px solid black"
    
}

// ------------------------------------


password_border = document.querySelector(".passwordmessage")

if(password.value.trim()===""){
    
    passwordmessage.textContent = "Zehmet olmasa xanani bos saxlamayin"
    passwordmessage.style.color = "red"
    password.style.border = "1px solid red"
    
 }
 else{
    passwordmessage.textContent = ""
    passwordmessage.style.color = "1 px solid black"
 }

})

// ------------------------------------







