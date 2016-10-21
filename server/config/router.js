const user = require('../controllers/user')

module.exports = (app) => {

	app.get('/user', user.getUsers)
	app.get('/user/:id', user.getUser)
	app.post('/user', user.createUser)


}