const config = require('./config.js')
const store = require('./store.js')

const signUp = function (signUpData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: signUpData
  })
}
const signIn = function (signInData) {
  console.log(signInData)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: signInData
  })
}
const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: `Bearer ${store.token}`
    },
    data
  })
}
const signOut = function (signInData) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: `Bearer ${store.token}`
    }
  })
}
const createRating = function (data) {
  console.log(data)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/ratings',
    headers: {
      Authorization: `Bearer ${store.token}`
    },
    data
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createRating
}
