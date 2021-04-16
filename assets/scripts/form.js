const emailInput = document.getElementById("email");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const msgInput = document.getElementById("msg");
const phoneValidation = document.getElementById("phoneValidation");
const emailValidation = document.getElementById("emailValidation");
const submitBtn = document.getElementById("submit");
const msgValidation = document.getElementById("msgValidation");
const nameValidation = document.getElementById("nameValidation");
// Phone number validation
// Don't allow letters

phoneInput.addEventListener("keypress", (e) =>{
    validatePhone(phoneInput, e);
})
// prevent numbers from name input
nameInput.addEventListener("keypress", (e) =>{
    validateName(nameInput, e);
})

// email validation
emailInput.addEventListener('keyup', (e) =>{
    validateEmail(emailInput)
})
submitBtn.addEventListener('click', () =>{
    if(!validateEmail(emailInput)){
        emailValidation.innerText="Invalid Email!";
    } else{
        if(!validateMsg(msgInput)){
            msgValidation.innerText = "Field is required!";
        }else{
            msgValidation.innerText = "";
            if(validatePhone(phoneInput)){
                phoneValidation.innerText = "Invalid phone number";
            } else{
                phoneValidation.innerText = "";
                if(!validateName(nameInput)){
                    nameValidation.innerText = "Field is required!";
                }else {
                    nameValidation.innerText="";
                    alert(
                        `
                        name: ${nameInput.value}
                        phone: ${phoneInput.value}
                        email: ${emailInput.value}
                        message: ${msgInput.value}

                        `
                    )
                    window.location.assign('/');
                }
            } 

        } 

    }

})
function validateMsg(msgInput){
    if (msgInput.value.length > 0) return true;
    return false;
}
function validateEmail(emailInput){
    if(!emailInput.value.includes("@") || !emailInput.value.includes(".")){
        emailValidation.innerText= "Not a valid email!"
        return false;
    }
    emailValidation.innerText = "";
    return true;
}
function validatePhone(phoneInput, e){
    if(e){
        if(isNaN(e.key)) e.preventDefault();
        // only 10 numbers allowed
        if(phoneInput.value.length > 9) e.preventDefault();
                // check if the first number is 0
        if(phoneInput.value.length < 1){
            if(e.key !== '0'){
                phoneValidation.innerText = "Sorry first number should be '0' !";
                return false;
            }
            else{
                phoneValidation.innerText = "";
                return true;
            } 
        }
    }

    return phoneInput.value.length < 10
}

function validateName(nameInput){
    return nameInput.value.length > 0;
}