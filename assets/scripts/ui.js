const store = require('./store.js')

const signUpSuccess = () => {
  $('#sign-up-section').hide()
}
const signUpFailure = () => {
  $('#message').text('Failure')
}
const signInSuccess = (res) => {
  store.token = res.user.token
  $('#sign-in-section').hide()
}
const signInFailure = () => {
  $('#message').text('Failure')
}
const changePasswordSuccess = () => {
  $('#change-password-section').hide()
}
const changePasswordFailure = () => {
  $('#message').text('Failure')
}
const signOutSuccess = () => {
  $('#sign-in-section').show()
}
const signOutFailure = () => {
  $('#message').text('Failure')
}
const createRatingSuccess = () => {
  $('#create-rating-section').hide()
}
const createRatingFailure = () => {
  $('#message').text('Failure')
}
const indexRatingSuccess = (res) => {
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

  $('#message').html(ratingsHtml)
}
const indexRatingFailure = () => {
  $('#message').text('Failure')
}
const updateRatingSuccess = (res) => {
  const ratingArray = res.ratings
  const ratingString = JSON.stringify(ratingArray)
  $('#message').text(ratingString)
}
const updateRatingFailure = () => {
  $('#message').text('Failure')
}
const deleteRatingSuccess = (res) => {
  console.log(res)
}
const deleteRatingFailure = () => {
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
