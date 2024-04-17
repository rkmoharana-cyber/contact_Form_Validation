//JavaScript

// let nameError = document.querySelector("#name-error");
// let phoneError = document.querySelector("#phone-error");
// let emailError = document.querySelector("#email-error");
// let messageError = document.querySelector("#message-error");
// let submitError = document.querySelector("#submit-error");

// // Validation Full Name
// let userName = document.querySelector("#user-name");
// userName.addEventListener("keyup", function() {
//     let fullName = userName.value;

//     if(fullName.length == 0) {
//         nameError.innerHTML = "Name is required"
//         return false;
//     }
//     // /^[a-zA-Z\s]+$/
//     // /^[a-zA-Z][a-zA-Z\s]*[a-zA-Z]$/
//     // /^[A-Za-z]\s{1}[A-Za-z]$/
//     if(!fullName.match(/^[a-zA-Z][a-zA-Z\s]*[a-zA-Z]$/)) {
//         nameError.innerHTML = "Write Full Name";
//         return false;
//     }
//     nameError.innerHTML = '<i class="ri-checkbox-circle-fill"></i>';
//     return true;
// });

// // Validation Phone Number
// let userPhone = document.querySelector("#user-phone");
// userPhone.addEventListener("keyup", function() {
//     let phone = userPhone.value;

//     if(phone.length == 0) {
//         phoneError.innerHTML = "Phone no. is required"
//         return false;
//     }
//     if(phone.length !== 10) {
//         phoneError.innerHTML = "Phone no. should be 10 digits";
//         return false;
//     }
//     if(!phone.match(/^[0-9]{10}$/)) {
//         phoneError.innerHTML = "Only Digits Please";
//         return false;
//     }
//     phoneError.innerHTML = '<i class="ri-checkbox-circle-fill"></i>';
//     return true;
// });

// // Validation Email
// let userEmail = document.querySelector("#user-email");
// userEmail.addEventListener("keyup", function() {
//     let email = userEmail.value;

//     if(email.length == 0) {
//         emailError.innerHTML = "Email ID is required"
//         return false;
//     }
//     if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
//         emailError.innerHTML = "Invalid Email";
//         return false;
//     }
//     emailError.innerHTML = '<i class="ri-checkbox-circle-fill"></i>';
//     return true;
// });

// // Validation Message
// let userMessage = document.querySelector("#user-message");
// userMessage.addEventListener("keyup", function() {
//     let message = userMessage.value;
//     let required = 20;
//     let left = required - message.length;

//     if(left > 0) {
//         messageError.innerHTML =  "Minimum " + left + " more character required";
//         return false;
//     }
//     messageError.innerHTML = '<i class="ri-checkbox-circle-fill"></i>';
//     return true;
// });

// // To Prevent Submission
// let form = document.querySelector("form");
// form.addEventListener("submit", function(e) {
//     e.preventDefault();
// });


// jQuery

$(document).ready(function() {
    let nameError = $("#name-error");
    let phoneError = $("#phone-error");
    let emailError = $("#email-error");
    let messageError = $("#message-error");
    let submitError = $("#submit-error");

    // Validation Full Name
    $("#user-name").keyup(function() {
        let fullName = $(this).val();

        if(fullName.length == 0) {
            nameError.html("Name is required");
            return false;
        }
        if(!fullName.match(/^[a-zA-Z][a-zA-Z\s]*[a-zA-Z]$/)) {
            nameError.html("Write Full Name");
            return false;
        }
        nameError.html('<i class="ri-checkbox-circle-fill"></i>');
        return true;
    });

    // Validation Phone Number
    $("#user-phone").keyup(function() {
        let phone = $(this).val();

        if(phone.length == 0) {
            phoneError.html("Phone no. is required");
            return false;
        }
        if(phone.length!== 10) {
            phoneError.html("Phone no. should be 10 digits");
            return false;
        }
        if(!phone.match(/^[0-9]{10}$/)) {
            phoneError.html("Only Digits Please");
            return false;
        }
        phoneError.html('<i class="ri-checkbox-circle-fill"></i>');
        return true;
    });

    // Validation Email
    $("#user-email").keyup(function() {
        let email = $(this).val();

        if(email.length == 0) {
            emailError.html("Email ID is required");
            return false;
        }
        if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
            emailError.html("Invalid Email");
            return false;
        }
        emailError.html('<i class="ri-checkbox-circle-fill"></i>');
        return true;
    });

    // Validation Message
    $("#user-message").keyup(function() {
        let message = $(this).val();
        let required = 20;
        let left = required - message.length;

        if(left > 0) {
            messageError.html("Minimum " + left + " more character required");
            return false;
        }
        messageError.html('<i class="ri-checkbox-circle-fill"></i>');
        return true;
    });

    // To Prevent Submission
    // $("form").submit(function(e) {
    //     e.preventDefault();
    // });
});