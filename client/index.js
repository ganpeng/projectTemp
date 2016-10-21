require('es5-shim')
var JSON3 = require('json3')
var Promise = require('es6-promise')
var mul = require('./b.js')
var style = require('./style.css')
var $ = require('jquery')
require('./d.js')($)
var userApi = require('./api.js')
var SignUp = require('./signup/index.js')
var uuid = require('node-uuid')

var signUpForm = new SignUp({
  ele : document.getElementById('form-wrapper')
})

$('#title').addClass(style.success)

userApi.fetchUsers()
	.then(function(users) {
		console.log(users)
	}, function(err) {
		console.log(err)
	})


userApi.fetchUser('69304ca0-9736-11e6-8554-7b88e63938ad')	
	.then(function(user) {
		console.log(user)
	}, function(err) {
		console.log(err)
	})
