const emailInput = document.getElementById("email");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const msgInput = document.getElementById("msg");

// Phone number validation
// Don't allow letters

phoneInput.addEventListener("keypress", (e) =>{
    if(isNaN(e.key)) e.preventDefault();
    // only 10 numbers allowed
    if(phoneInput.value.length > 9) e.preventDefault();
})
// prevent numbers from name input
nameInput.addEventListener("keypress", (e) =>{
    if(!isNaN(e.key)) e.preventDefault();
})
