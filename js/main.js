var eye = document.querySelector(".eye-icon");
var eyeoff = document.querySelector(".eye")
var password = document.getElementById("password");
var emailmessage = document.querySelector(".email-message");
var form_input = document.querySelector(".form_input");
var passwordmessage = document.querySelector(".passwordmessage")
var formcontrol =document.querySelector(".form-control")

// ---------eye off or on----------

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

// -----------email------

document.querySelector(".form_input").addEventListener("submit",function(e){
    e.preventDefault();

if(formcontrol.value.trim()===""){
    
   emailmessage.textContent = "Zehmet olmasa xanani bos saxlamayin"
   emailmessage.style.color = "red"
   formcontrol.style.border = "1px solid red"

}
else{
    emailmessage.textContent = ""
    emailmessage.style.border = "1 px solid black"
    
    if(!formcontrol.value.includes("@")){
        emailmessage.textContent = "Meselen hesab@hesab.az və ya 994 00 123 45 67"
        emailmessage.style.color="red"
        emailmessage.style.color = "1 px solid red"
    }
}

// -----------password------

var password = document.getElementById("password").value


password_border = document.querySelector(".passwordmessage")

if(password.trim()===""){
    
    passwordmessage.textContent = "Zehmet olmasa xanani bos saxlamayin"
    passwordmessage.style.color = "red"
    password.style.border = "1px solid red"
 
 }
 else{
    passwordmessage.textContent = ""
    passwordmessage.style.color = "1 px solid black"
 }

})







