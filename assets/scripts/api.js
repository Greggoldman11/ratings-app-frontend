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
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: signInData
  })
}
const changePassword = function (changePasswordData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    data: changePasswordData
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword
}
