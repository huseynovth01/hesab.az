var form_input = document.querySelector(".form_input");
var formcontrol = document.querySelector(".form-control");
var mobilmessage = document.querySelector(".mobilmessage");
var emailmessage = document.querySelector(".emailmessage");

form_input.addEventListener("submit", function(e) {
    e.preventDefault();

    if (formcontrol.value.trim() === "") {
        mobilmessage.textContent = "Telefon nomrenizi daxil edin";
        mobilmessage.style.color = "red";
        formcontrol.style.border = "1px solid red";
    } else {
        mobilmessage.textContent = "";
        formcontrol.style.border = "1px solid black";

        if (!formcontrol.value.match) {
            mobilmessage.textContent = "Meselen +994 00 123 45 67";
            mobilmessage.style.color = "red";
            formcontrol.style.border = "1px solid black";
        }
    }

    var firstname = document.getElementById("firstname").value;
    var emailmessage = document.querySelector(".emailmessage");

    if (firstname.trim() === "") {
        emailmessage.textContent = "Emailinizi daxil edin";
        emailmessage.style.color = "red";
    } else {
        emailmessage.textContent = "";
        emailmessage.style.border = "1px solid black";
    }
});