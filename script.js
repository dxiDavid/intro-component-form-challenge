//Form elements

const button = document.querySelector(".claim-btn");
const firstNameInputField = document.getElementById("firstName");
const lastNameInputField = document.getElementById("lastName");
const emailInputField = document.getElementById("email");
const passwordInputField = document.getElementById("password");

//Error Divs

const firstNameError = document.querySelector(".firstname-error");
const lastNameError = document.querySelector(".lastname-error");
const emailError = document.querySelector(".email-error");
const passwordError = document.querySelector(".password-error");

button.addEventListener("click", (form) => {
	
	form.preventDefault();

	buttonPush();
	
	ValidateInputs();

})

function ValidateInputs(){

	const firstNameValue = firstNameInputField.value.trim();
	const lastNameValue = lastName.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();

	//Validate first name 

		if(firstNameValue === ""){
			displayError(firstNameError, firstNameInputField);
		}	else if(!isValidName(firstNameValue)){
				const illegalFirtNameWarning = document.querySelector(".illegal-first-name")
				illegalFirtNameWarning.textContent = "Name Can only contain letters and underscores"
				displayError(firstNameError, firstNameInputField);
			} else{
				success(firstNameError, firstNameInputField);
			}

	//Validate Last name

		if(lastNameValue === ""){
			displayError(lastNameError, lastNameInputField);
		}	else if(!isValidName(lastNameValue)){
				const illegalLastNameWarning = document.querySelector(".illegal-last-name")
				illegalLastNameWarning.textContent = "Name Can only contain letters and underscores"
				displayError(lastNameError, lastNameInputField);
			} else{
				success(lastNameError, lastNameInputField);
			}

	//Validate email

			if(emailValue === ""){
				displayError(emailError, emailInputField);
			} else if(!isValidEmail(emailValue)){
				const illegalEmailWarning = document.querySelector(".illegal-email")
				illegalEmailWarning.textContent = "Looks like this is not an email"
				displayError(emailError, emailInputField);	
			} else{
				success(emailError, emailInputField);
			}

	//Validate password

			if(passwordValue === ""){
				displayError(passwordError, passwordInputField);
			} else if(!isValidPassword(passwordValue) && passwordValue.length < 8){
				const illegalPasswordWarning = document.querySelector(".illegal-password")
				illegalPasswordWarning.textContent = "Password should contain at least 1 uppercase and lowercase letter, 1 number and one symbol, and be more than 8 characters long"
				illegalPasswordWarning.style.textAlign = "left"
				displayError(passwordError, passwordInputField);
			} else{
				success(passwordError, passwordInputField)
			}
}

function displayError(message, inputField){
	errorMessage(message, inputField);
	shake(message);
}

function errorMessage(message, inputField){
	message.classList.add("display-error-message");
	inputField.style.border = "2px solid red";
}

function success( message, inputField,){
	message.classList.remove("display-error-message");
	inputField.style.border = "2px solid green";
}

function isValidName(name){
	const pattern = /^[a-zA-Z\s_]+$/;
  	return pattern.test(name);
}

function isValidEmail(email){
	const format = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return format.test(String(email).toLowerCase());
}

function isValidPassword(password){
	const lowercasePattern = /[a-z]/;
	const uppercasePattern = /[A-Z]/;
	const numberPattern = /[0-9]/;
	const specialCharPattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
	return lowercasePattern.test(password) && uppercasePattern.test(password) && numberPattern.test(password) && specialCharPattern.test(password);
}



function shake(error){
	error.classList.add("shake");
	setTimeout(() => {error.classList.remove("shake")}, 300)
}

function buttonPush(){
	button.classList.add("push");
	setTimeout(() => {button.classList.remove("push")}, 100)
}






