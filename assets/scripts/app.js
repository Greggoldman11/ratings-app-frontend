'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./user-events')
$(() => {
  $('#signUp').on('submit', authEvents.onSignUp)
  $('#signIn').on('submit', authEvents.onSignIn)
  $('#changePassword').on('submit', authEvents.onChangePassword)
  $('#signOutButton').on('click', authEvents.onSignOut)
  $('#createRating').on('submit', authEvents.onCreateRating)
  $('#indexRatings').on('submit', authEvents.onIndexRating)
  $('#updateRating').on('submit', authEvents.onUpdateRating)
  $('#deleteRating').on('submit', authEvents.onDeleteRating)
  $('#altSignIn').on('click', authEvents.onAltSignIn)
  $('#createNewAccount').on('click', authEvents.onCreateNewAccount)
  $('#sign-in-section').hide()
  $('#signOut').hide()
  $('#change-password-section').hide()
  $('#ratr').hide()
})
