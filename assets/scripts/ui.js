const store = require('./store.js')

const signUpSuccess = () => {
  $('#sign-up-section').hide()
}
const signInSuccess = (res) => {
  store.token = res.user.token
  console.log('in signInSucces, ', store.token)
  $('#sign-in-section').hide()
}
const changePasswordSuccess = () => {
  $('#change-password-section').hide()
}
$('#signOut').hide()

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess
}
