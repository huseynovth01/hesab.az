var form_input = document.querySelector(".form_input");
var formcontrol = document.querySelector(".form-control");
var mobilmessage = document.querySelector(".mobilmessage");


document.querySelector(".form_input").addEventListener("submit",function(e){
    e.preventDefault();

    if (formcontrol.value.trim() === "") {
        mobilmessage.textContent = "Mobil nomrenizi daxil edin";
        mobilmessage.style.color = "red";
        formcontrol.style.border = "1px solid red";
    } 
    else {
        mobilmessage.textContent = "";
        formcontrol.style.border = "1px solid black";

        if (!formcontrol.value.includes("+994 51 467 73 33")) {
            mobilmessage.textContent = "Məsələn +994 51 467 73 33";
            mobilmessage.style.color = "red";
            formcontrol.style.border = "1px solid red";
        }
    }
   

    // email


    var emailmessage = document.querySelector(".emailmessage");
    var formcontrolmail = document.querySelector(".form-controlmail")

    if (formcontrolmail.value.trim() === "") {
        emailmessage.textContent = "Emailinizi daxil edin";
        emailmessage.style.color = "red";
        formcontrolmail.style.border = "1px solid red";
    } 
    else {
        emailmessage.textContent = "";
        formcontrolmail.style.border = "1px solid black";

        if (!formcontrolmail.value.includes("@")) {
            emailmessage.textContent = "Məsələn hesab@23.az";
            emailmessage.style.color = "red";
            formcontrolmail.style.border = "1px solid red";
        }
    }

});
