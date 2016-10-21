const db = require('../config/db.js')

const User = db.sequelize.define('user', {
		id : {
		    type: db.Sequelize.UUID,
		    defaultValue: db.Sequelize.UUIDV1,
		    primaryKey: true
		},
		firstName : {
			type : db.Sequelize.STRING,
			field : 'first_name'
		},

		lastName : {
			type : db.Sequelize.STRING,
			field : 'last_name'
		},
	},
	{
		freezeTableName : true
	}
)

User.sync()
	.then(() => {
		console.log('User table created')
	})


module.exports = User	