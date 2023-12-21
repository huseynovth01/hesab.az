var form_input = document.querySelector(".form_input");
var formcontrol =document.querySelector(".form-control")
var emailmessage = document.querySelector(".email-message");


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

})







