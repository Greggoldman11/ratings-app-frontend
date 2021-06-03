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
})
