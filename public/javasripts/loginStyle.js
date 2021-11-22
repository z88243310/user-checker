const alertDanger = document.querySelector('.alert-danger')
const passwordInput = document.querySelector('#password-input')

// handle error message
if (alertDanger) {
  passwordInput.focus()
  setTimeout(() => {
    alertDanger.classList.add('d-none')
  }, 4000)
}
