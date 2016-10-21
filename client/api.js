var Promise = require('es6-promise')
var $ = require('jquery')
var apiHost = 'http://localhost:4567'




function fetchUsers() {
  return Promise.resolve($.ajax({
    url : apiHost + '/user',
    method : 'GET',
    contentType: 'text/plain'
  }))
}


function fetchUser(id) {
  return Promise.resolve($.ajax({
    url : apiHost + '/user/' + id,
    method : 'GET',
    contentType : 'text/plain'
  }))
}



function createUser(data) {
  if (!data) {
    throw new Error('请求体不能为空')
  }

  return Promise.resolve($.ajax({
    url : apiHost + '/user',
    type: 'POST',
    contentType: 'text/plain',
    data : data
  }))

}


module.exports = {
  fetchUser : fetchUser,
  createUser : createUser,
  fetchUsers : fetchUsers
}
