const loginForm = document.querySelector('#login')
console.log(loginForm)
loginForm.addEventListener('login',function (event){
 event.preventDefault()
 const formData = new FormData(loginForm);
 const messageH1 = document.querySelector('#message');
 messageH1.textContent = 'Account login successfully!';
});

//write fullname function
function fullName ( firstName , lastName){
    // return firstName + lastName
    //to create space
    return `${firstName} ${lastName}`;
};
const myName = fullName ('ewurasi' , 'ayanful')
console.log(myName);