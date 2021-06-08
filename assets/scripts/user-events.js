const getFormfields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  const signUpData = getFormfields(event.target)
  api.signUp(signUpData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}
const onAltSignIn = function () {
  $('#sign-in-section').show()
  $('#sign-up-section').hide()
  $('#createNewAccount').show()
  $('#altSignIn').hide()
  $('#message').text('Please sign in')
  $('form').trigger('reset')
}
const onCreateNewAccount = function () {
  $('#sign-up-section').show()
  $('#sign-in-section').hide()
  $('#createNewAccount').hide()
  $('#altSignIn').show()
  $('#message').text('Please sign up')
  $('form').trigger('reset')
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
  api.updateRating(data)
    .then(ui.updateRatingSuccess)
    .catch(ui.updateRatingFailure)
}
const onDeleteRating = function (event) {
  event.preventDefault()
  const data = getFormfields(event.target)
  console.log(data.rating.id)
  api.deleteRating(data)
    .then(ui.deleteRatingSuccess)
    .catch(ui.deleteRatingFailure)
}
const onCpwClick = () => {
  $('#change-password-section').show()
  $('#ratr').hide()
  $('#main-heading').text('Change Password')
  $('#delete-rating-section').hide()
  $('#message').text('')
  $('#index-rating-section').hide()
}
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
const makeUpdate = () => {
  $('#update-rating-section').show()
  $('#delete-rating-section').hide()
  $('#create-rating-section').hide()
  $('#main-heading').text('Update ratings that you posted')
  $('#update-rating-section').css('padding', '5%')
  $('#main-heading').text('The best way to update what you like!')
  $('#message').text('')
}
const makeDelete = () => {
  $('#delete-rating-section').show()
  $('#update-rating-section').hide()
  $('#create-rating-section').hide()
  $('#main-heading').text('Delete ratings that you posted')
  $('#delete-rating-section').css('padding', '5%')
  $('#main-heading').text('The best way to delete what you don\'t like!')
  $('#message').text('')
}
const makeCreate = () => {
  $('#create-rating-section').show()
  $('#update-rating-section').hide()
  $('#delete-rating-section').hide()
  $('#main-heading').text('Rate something!')
  $('#create-rating-section').css('padding', '5%')
  $('#message').text('')
  $('#main-heading').text('The best way to create tracks for what you like!')
}
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
