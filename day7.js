/* JavaScript DOM Exercises 02 Tutorial: https://youtu.be/qQy5K-pE8Fo */
/*
  Exercises 01<div class="container mt-2">
  <h1>Registration Form</h1>
  <form id="reg
  ------------
  Add a label to each of the input fields: username, password, confirm password
*/

document.getElementById('username').insertAdjacentHTML('beforeBegin', '<label for="username">Username:</label>')

document.getElementById('password').insertAdjacentHTML('beforeBegin', '<label for="password">Password: </label>')

document.getElementById('confirmPassword').insertAdjacentHTML('beforeBegin', '<label for="password">Confirm Password: </label>')


/*
  Exercise 02
  -----------
  Add a required validation to each input that shows an error message next to the entry if it does not have any text entered.
*/

const checker = (event) => {
const ErrorElement = Array.from(event.target.parentNode.querySelectorAll('span'))
console.log(ErrorElement)
  if (event.target.value === '' && !ErrorElement.length) {
    event.target.insertAdjacentHTML('afterEnd', '<span class="text-danger">Required</span>')
  }
  
  if(event.target.value !== '' && ErrorElement.length) {
    ErrorElement.forEach(span => span.remove())
  }
  
  }

document.getElementById('username').addEventListener('blur', checker)
document.getElementById('password').addEventListener('blur', checker)
document.getElementById('confirmPassword').addEventListener('blur', checker)



/*
  Exercise 03
  -----------
  Add a further validation to check if the user input in the password and confirm password inputs match.  Show an error message if they do not.
*/


const cPassword = document.getElementById('confirmPassword')

const confirmer = (event) => {
  if (password.target.value !== cPassword.target.value) {
    cPassword.insertAdjacentHTML('afterEnd', '<span class="text-danger">Passwords should match!</span>')
  }
}

cPassword.addEventListener('blur', confirmer)


document.getElementById('confirmPassword').addEventListener('blur', (event) => {
  if (event.target.value !== document.getElementById('password').value) {
    event.target.insertAdjacentHTML('afterEnd', '<span class="text-danger">Passwords should match!</span>')
  }
})




/*
  Exercise 04
  -----------<div class="container mt-2">
  <h1>Registration Form</h1>
  <form id="reg
Ensure the ‘Register’ button is disabled until the user has entered valid data into all the input fields.  Once they have, the registration button should then be enabled.
*/

const btn = document.querySelector('button')
btn.setAttribute('disabled', 'disabled')

document.getElementById('registrationForm').addEventListener('change', (event) => {
  const formFilled = Array.from(document.querySelectorAll('input')).every(input => input.value)
  if (formFilled) {
    btn.removeAttribute('disabled')
  }
})


/*
  Exercise 05
  -----------
When the user clicks the ‘Register’ button, a message should be displayed informing them of a successful user registration.
*/

// btn.addEventListener('click', (event) => {
//   btn.insertAdjacentHTML('afterEnd', '<span class="text-success"> Succesfully sent! </span>')
// })

const form = document.getElementById('registrationForm')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const alert = document.createElement('div')
  alert.classList.add('alert', 'alert-success')
  alert.innerText = 'Succesfully Sent'
  form.prepend(alert)
})

/*
  Exercise 02
  -----------
  Add a required validation to each input that shows an error message next to the entry if it does not have any text entered.
*/


