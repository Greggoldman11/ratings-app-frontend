const getFormfields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
// A function for when a user wants to sign up
const onSignUp = function (event) {
  event.preventDefault()
  const signUpData = getFormfields(event.target)
  api.signUp(signUpData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}
const onSignIn = function (event) {
  event.preventDefault()
  const signInData = getFormfields(event.target)
  console.log('in onSignIn: ', signInData)
  api.signIn(signInData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
const onChangePassword = function (event) {
  event.preventDefault()
  const changePasswordData = getFormfields(event.target)
  console.log('in onChangePassword: ', changePasswordData)
  api.changePassword(changePasswordData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword
}
