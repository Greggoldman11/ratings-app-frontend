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
  api.signIn(signInData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormfields(event.target)
  console.log('in onChangePassword: ', data)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
const onCreateRating = function (event) {
  event.preventDefault()
  const data = getFormfields(event.target)
  api.createRating(data)
    .then(ui.createRatingSuccess)
    .catch(ui.createRatingFailure)
}
const onIndexRating = function (event) {
  event.preventDefault()
  api.indexRating()
    .then(ui.indexRatingSuccess)
    .catch(ui.indexRatingFailure)
}
const onUpdateRating = function (event) {
  event.preventDefault()
  const data = getFormfields(event.target)
  console.log(data.rating.id)
  api.updateRating(data)
    .then(ui.updateRatingSuccess)
    .catch(ui.updateRatingFailure)
}
module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateRating,
  onIndexRating,
  onUpdateRating
}
