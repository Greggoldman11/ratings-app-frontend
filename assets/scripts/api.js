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

module.exports = {
  signUp,
  signIn
}
