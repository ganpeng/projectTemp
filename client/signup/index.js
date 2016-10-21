require('es5-shim')
var userApi = require('../api.js')
var JSON3 = require('json3')
var $ = require('jquery')


function signUpHtml() {
  return (
    '<div id="signUpForm">' +
        '<input type="text" name="username" id="username" /><br />' +
        '<input type="password" name="password" id="password" /><br />' +
        '<button type="button">Submit</button>' +
    '</div>'
  )
}


function SignUp(opt) {

    if (!opt) {
      throw new Error('请传入配置项ele')
    }


    this.ele = opt.ele
    this.init()
}


SignUp.prototype.init = function() {
    this.render()
    this.bindEvents()
}

SignUp.prototype.render = function() {
    this.ele.innerHTML = signUpHtml()
    this.form = $('#signUpForm')
    this.submitBtn = this.form.find('button')
    this.userName = $('#username')
    this.password = $('#password')
    return this
}

SignUp.prototype.bindEvents = function() {
    this.submitBtn.on('click', this.submitHandle.bind(this))
    return this
}


SignUp.prototype.submitHandle = function() {
    var postData = this.serializeData()
    userApi.createUser(postData)
      .then(function(res) {
        console.log(res)
      }, function(err) {
        console.log(err)
      })
}

SignUp.prototype.serializeData = function() {
    return {
      firstName : this.userName.val().trim(),
      lastName : this.password.val().trim()
    }
}


module.exports = SignUp
