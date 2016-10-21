const Sequelize = require('sequelize')

const sequelize = new Sequelize('mytest', 'louisGan', 'gs880101', {
	host : '192.168.1.164',
	dialect : 'postgres',

	pool : {
		max : 5,
		min : 0,
		idle : 10000
	}
})

module.exports = {
	Sequelize : Sequelize,
	sequelize : sequelize
}