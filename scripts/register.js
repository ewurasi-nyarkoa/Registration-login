// Get form element by id
const registerForm = document.querySelector('#register');
console.log(registerForm)
// Handle form submit event
registerForm.addEventListener('submit', function (event) {
    event.preventDefault();
    //collect form data
    const formData = new FormData(registerForm);
   // console.log(formData.get('Username'), formData.get('email'),formData.get('password'))
   //send data to backend
   //display success message to the user
   const messageH1 = document.querySelector('#message');
   messageH1.textContent = 'Account registered successfully!';
    
});
//declare variable age
//let age= 71;
//define square age function
function squareAge (age){
return age ** 2;
};

let result = squareAge(3)
console.log(result)
