let registrationForm = document.getElementById('regForm');

registrationForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let errors = {};

    let usernameValue = document.getElementById('userNameField').value;
    if (usernameValue === "" || usernameValue.length < 6) {
        errors.username = 'Username length must be min. 6 characters';
    }
    let passwordValue = document.getElementById('passwordField').value;
    let passwordValue2 = document.getElementById('passwordField2').value;

    if (passwordValue === "") {
        errors.password = "Password cant be empty"
    }
    if (passwordValue !== passwordValue2) {
        errors.password2 = 'Passwords do not match';
    }
    let agreeField = document.getElementById('agreeToTerms').checked;
    if (!agreeField) {
        errors.agree = 'You have to agree to terms and conditions';
    }
    document.querySelectorAll('.error-text').forEach(item =>{
        item.textContent = " ";
    })
    for (let key in errors) {
        let errorText = document.getElementById('error_' + key);
        if (errorText) {
            errorText.innerText = errors[key];
        }
    }
    if (Object.keys(errors).length===0) {
        registrationForm.submit();
    }
})

let password = document.getElementById('passwordField');
let password2 = document.getElementById('passwordField2');
let icon = document.getElementById('toggle-icon');
let icon2 = document.getElementById('toggle-icon2');


icon.addEventListener('click', function (){
    if (password.type ==='password'){
        password.setAttribute("type", "text");
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else{
        password.setAttribute("type", "password");
        icon.classList.add("fa-eye");
        icon.classList.remove("fa-eye-slash");
    }
})
icon2.addEventListener('click', function (){
    if (password2.type ==='password'){
        password2.setAttribute("type", "text");
        icon2.classList.remove("fa-eye");
        icon2.classList.add("fa-eye-slash");
    } else{
        password2.setAttribute("type", "password");
        icon2.classList.add("fa-eye");
        icon2.classList.remove("fa-eye-slash");
    }
})




















