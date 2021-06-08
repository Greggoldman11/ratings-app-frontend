const getFormfields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
// event handlers
// sign up
const onSignUp = function (event) {
  event.preventDefault()
  const signUpData = getFormfields(event.target)
  api.signUp(signUpData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}
// show sign in page when the user does not want to create a new account
const onAltSignIn = function () {
  $('#sign-in-section').show()
  $('#sign-up-section').hide()
  $('#createNewAccount').show()
  $('#altSignIn').hide()
  $('#message').text('Please sign in')
  $('form').trigger('reset')
}
// create a new account
const onCreateNewAccount = function () {
  $('#sign-up-section').show()
  $('#sign-in-section').hide()
  $('#createNewAccount').hide()
  $('#altSignIn').show()
  $('#message').text('Please sign up')
  $('form').trigger('reset')
}
// sign in
const onSignIn = function (event) {
  event.preventDefault()
  const signInData = getFormfields(event.target)
  api.signIn(signInData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
// change password
const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormfields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
// sign out
const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
// create a track
const onCreateRating = function (event) {
  event.preventDefault()
  const data = getFormfields(event.target)
  api.createRating(data)
    .then(ui.createRatingSuccess)
    .catch(ui.createRatingFailure)
}
// show the tracks
const onIndexRating = function (event) {
  event.preventDefault()
  api.indexRating()
    .then(ui.indexRatingSuccess)
    .catch(ui.indexRatingFailure)
}
// update the tracks
const onUpdateRating = function (event) {
  event.preventDefault()
  const data = getFormfields(event.target)
  api.updateRating(data)
    .then(ui.updateRatingSuccess)
    .catch(ui.updateRatingFailure)
}
// delete a track
const onDeleteRating = function (event) {
  event.preventDefault()
  const data = getFormfields(event.target)
  api.deleteRating(data)
    .then(ui.deleteRatingSuccess)
    .catch(ui.deleteRatingFailure)
}
// change password button
const onCpwClick = () => {
  $('#change-password-section').show()
  $('#ratr').hide()
  $('#main-heading').text('Change Password')
  $('#delete-rating-section').hide()
  $('#message').text('')
  $('#index-rating-section').hide()
}
// back to the main page button
const onMainpageClick = () => {
  $('#ratr').show()
  $('#main-heading').html(`<p">Create a track for anything you want, copy the id to update or delete,
      or click for a random taco... then track it!
    </p>`)
  $('#change-password-section').hide()
  $('#index-rating-section').show()
  $('#update-rating-section').hide()
  $('#delete-rating-section').hide()
  $('#create-rating-section').hide()
  $('#message').text('')
}
// update nav button
const makeUpdate = () => {
  $('#update-rating-section').show()
  $('#delete-rating-section').hide()
  $('#create-rating-section').hide()
  $('#main-heading').text('Update ratings that you posted')
  $('#update-rating-section').css('padding', '5%')
  $('#main-heading').text('The best way to update what you like!')
  $('#message').text('')
}
// delete nav button
const makeDelete = () => {
  $('#delete-rating-section').show()
  $('#update-rating-section').hide()
  $('#create-rating-section').hide()
  $('#main-heading').text('Delete ratings that you posted')
  $('#delete-rating-section').css('padding', '5%')
  $('#main-heading').text('The best way to delete what you don\'t like!')
  $('#message').text('')
}
// create nav button
const makeCreate = () => {
  $('#create-rating-section').show()
  $('#update-rating-section').hide()
  $('#delete-rating-section').hide()
  $('#main-heading').text('Rate something!')
  $('#create-rating-section').css('padding', '5%')
  $('#message').text('')
  $('#main-heading').text('The best way to create tracks for what you like!')
}
// random taco generator button
const tryTaco = () => {
  api.taco()
    .then(ui.tryTacoSuccess)
    .catch(ui.tryTacoFailure)
}
module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateRating,
  onIndexRating,
  onUpdateRating,
  onDeleteRating,
  onAltSignIn,
  onCreateNewAccount,
  onCpwClick,
  onMainpageClick,
  makeUpdate,
  makeDelete,
  makeCreate,
  tryTaco
}
