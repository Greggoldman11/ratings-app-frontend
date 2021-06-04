const store = require('./store.js')

const signUpSuccess = () => {
  $('form').trigger('reset')
  $('#message').html('You have successfully signed up')
  $('#sign-in-section').show()
  $('#sign-up-section').hide()
}
const signUpFailure = () => {
  $('form').trigger('reset')
  $('#message').text('You have failed to sign up')
}
const signInSuccess = (res) => {
  $('form').trigger('reset')
  store.user = res.user.email
  store.token = res.user.token
  $('#message').text(`Welcome ${store.user}!`)
  $('#sign-in-section').hide()
  $('#signOut').show()
  $('#ratr').show()
  $('#update-rating-section').hide()
}
const signInFailure = () => {
  $('form').trigger('reset')
  $('#message').text('You have not signed in successfully')
}
const changePasswordSuccess = () => {
  $('form').trigger('reset')
  $('#message').text('You have successfully changed passwords')
}
const changePasswordFailure = () => {
  $('form').trigger('reset')
  $('#message').text('You did not successfully change your password')
}
const signOutSuccess = () => {
  $('form').trigger('reset')
  $('#sign-in-section').show()
  $('#signOut').hide()
  $('#ratr').hide()
  $('#message').text('Signed out successfully')
}
const signOutFailure = () => {
  $('form').trigger('reset')
  $('#message').text('You did not sign out succcessfully')
}
const createRatingSuccess = () => {
  $('form').trigger('reset')
  $('#message').text('You created a rating!')
}
const createRatingFailure = () => {
  $('form').trigger('reset')
  $('#message').text('Failed to create a rating')
}
const indexRatingSuccess = (res) => {
  store.rating = res.ratings
  console.log(store.rating)
  let ratingsHtml = ''
  res.ratings.forEach(function (rating) {
    ratingsHtml += `
      <h2>Name: ${rating.name}</h2>
      <h6>ID: ${rating._id}</h6>
      <p>Category: ${rating.category}</p>
      <p>Notes: ${rating.notes}</p>
      <p>Rating: ${rating.rating}</p>
      `
  })
  $('#message').show()
  $('#message').html(ratingsHtml)
  $('#update-rating-section').show()
}
const indexRatingFailure = () => {
  $('#message').text('Failed to get ratings')
}
const updateRatingSuccess = (res) => {
  store.rating = res.rating
  const ratingsHtml = `
        <h2>Name: ${store.rating.name}</h2>
        <h6>ID: ${store.rating._id}</h6>
        <p>Category: ${store.rating.category}</p>
        <p>Notes: ${store.rating.notes}</p>
        <p>Rating: ${store.rating.rating}</p>
        `
  $('#message').html(ratingsHtml)
  $('form').trigger('reset')
}
const updateRatingFailure = () => {
  $('form').trigger('reset')
  $('#message').text('Failed to update')
}
const deleteRatingSuccess = () => {
  $('form').trigger('reset')
  $('#message').text('successfully deleted')
}
const deleteRatingFailure = () => {
  $('form').trigger('reset')
  $('#message').text('Failure')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  createRatingSuccess,
  indexRatingSuccess,
  updateRatingSuccess,
  deleteRatingSuccess,
  indexRatingFailure,
  updateRatingFailure,
  deleteRatingFailure,
  createRatingFailure
}
