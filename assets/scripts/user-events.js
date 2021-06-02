const getFormfields = require('../../lib/get-form-fields.js')
const api = require('./api.js')

// A function for when a user wants to sign up
const onSignUp = function (event) {
  event.preventDefault()
  const signUpData = getFormfields(event.target)
  console.log('in onSignUp: ', signUpData)
  api.signUp(signUpData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

module.exports = {
  onSignUp
}
