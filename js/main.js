/* cusom js file made by JenDoe */

const passwordInput = document.querySelector('.password-box input'),
	  copyIcon = document.querySelector('.password-box .copy-icon'),
	  rangeInput = document.querySelector('.range-box input'),
	  slideNumber = document.querySelector('.range-box .slider-number'),
	  generateButton = document.querySelector('.generate-button');

// Characters of alphabet(a-w/A-Z), numbers(0-9) and Symbols($%&[]...)
let allCharacters = "abcdefghijklmnoparstuvwxyzABCDEFGHIJKLMNOPARSTUVWXYZ0123456789!%^&$|[](){}:;.,*+-#@<>~";

// This function will be called on, page reload, generatebutton clicked & rangeinput slide
const generatePassword = () =>{
	let newPassword = "";
	
	//for loop will run till rangeInput value
	for(let i = 0; i < rangeInput.value; i++){
		let randomNumbers = Math.floor(Math.random() * allCharacters.length);
		newPassword += allCharacters[randomNumbers];
	}
	passwordInput.value = newPassword;
	copyIcon.classList.replace('fa-paste', 'fa-copy'); //replace icon
};

rangeInput.addEventListener('input', () =>{
	slideNumber.innerText = rangeInput.value;
	generatePassword();
});

//copy passInput's value on copyicon click
//copy passInput's value on copyIcon click
copyIcon.addEventListener('click', () =>{
	navigator.clipboard.writeText(passwordInput.value);
	copyIcon.classList.replace('fa-copy', 'fa-paste'); //replace icon
});

generatePassword();
generateButton.addEventListener('click', generatePassword);


/* show or Hide user Guide Message box */

const userGuide = document.querySelector('.view'),
	  content = document.querySelector('.content'),
	  closeContent = document.querySelector('.close');

if(userGuide){
	userGuide.addEventListener('click', () =>{
		content.classList.add('active');
		closeContent.classList.add('active');
	});
}

if(closeContent){
	closeContent.addEventListener('click', () =>{
		content.classList.remove('active');
		closeContent.classList.remove('active');
	});
}























