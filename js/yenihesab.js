var form_input = document.querySelector(".form_input");
var formcontrol = document.querySelector(".form-control");
var mobilmessage = document.querySelector(".mobilmessage");
var emailmessage = document.querySelector(".emailmessage");

form_input.addEventListener("submit", function(e) {
    e.preventDefault();

    if (formcontrol.value.trim() === "") {
        mobilmessage.textContent = "Telefon numarasını girin";
        mobilmessage.style.color = "red";
        formcontrol.style.border = "1px solid red";
    } else {
        mobilmessage.textContent = "";
        formcontrol.style.border = "1px solid black";

        if (!formcontrol.value.match(/^\+994 \d{2} \d{3} \d{2} \d{2}$/)) {
            mobilmessage.textContent = "Meselen +994 00 123 45 67";
            mobilmessage.style.color = "red";
            formcontrol.style.border = "1px solid red";
        }
    }

    var firstname = document.getElementById("firstname").value;
    var passwordmessage = document.querySelector(".passwordmessage");

    if (firstname.trim() === "") {
        passwordmessage.textContent = "İsminizi girin";
        passwordmessage.style.color = "red";
    } else {
        passwordmessage.textContent = "";
        passwordmessage.style.border = "1px solid black";
    }
});