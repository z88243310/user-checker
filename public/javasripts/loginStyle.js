const alertDanger = document.querySelector('.alert-danger')
const passwordInput = document.querySelector('#password-input')
const passwordDisplay = document.querySelector('#password-display')

// handle error message
if (alertDanger) {
  passwordInput.focus()
  setTimeout(() => {
    alertDanger.classList.add('d-none')
  }, 4000)
}

passwordDisplay.addEventListener('click', function onPasswordDisplayClicked() {
  // hidden password
  if (this.matches('.fa-eye')) {
    passwordInput.type = 'password'
    this.classList.add('fa-eye-slash')
    this.classList.remove('fa-eye')

    // show password
  } else if (this.matches('.fa-eye-slash')) {
    passwordInput.type = 'text'
    this.classList.add('fa-eye')
    this.classList.remove('fa-eye-slash')
  }
})
