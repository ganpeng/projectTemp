const co = require('co')
const qs = require('qs')

const User = require('../models/user')

const getUsers = (req, res) => {

	co(function* () {
		res.json({
			ok : 0,
			users : yield User.findAll()
		})

	})
	.catch((err) => {
		res.json({
			ok : 1,
			msg : 'error'
		})
	})
}



const getUser = (req, res) => {
	co(function* () {
		const _id = req.params.id,
			  user = yield User.findById(_id)
		res.json({
			ok : 0,
			user : user
		})

	})
	.catch((err) => {
		res.json({
			ok : 1,
			msg : 'error'
		})
		console.log(err)
	})
}



const createUser = (req, res) => {

	co(function *() {
		const _body = qs.parse(req.text)
		res.json({
			ok : 0,
			user : yield User.create(_body)
		})
	})
	.catch((err) => {
		res.json({
			ok : 1,
			msg : 'error'
		})
	})
}


module.exports = {
	getUsers : getUsers,
	getUser : getUser,
	createUser : createUser
}