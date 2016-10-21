const express = require('express')
const path = require('path')
const port = process.env.PORT || 4567
const qs = require('qs')

const User = require('./models/user')


const app = express()


require('./config/express')(app)
require('./config/router')(app)


app.listen(port, () => {
	console.log(`Server started on port ${port}`)
})

