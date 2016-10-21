const express = require('express')
const compression = require('compression')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const morgan = require('morgan')
const getRawBody = require('raw-body')  //   解析网络传输流
// const typer = require('media-typer')
// const contentType = require('content-type')
const errorhandler = require('errorhandler')
const path = require('path')

module.exports = (app) => {


	// 跨域请求设置
	app.use((req, res, next) => {
		res.set({
			"Access-Control-Allow-Origin" : "*",
			"Access-Control-Allow-Methods" : "GET, POST, PUT, DELETE, HEAD, OPTIONS"
		})
		next()
	})

	//  使用raw-body，实现低版本ie的跨域请求
	app.use(function (req, res, next) {
	  getRawBody(req, {
	    length: req.headers['content-length'],
	    limit: '1mb',
	    // encoding: contentType.parse(req).parameters.charset
	  }, function (err, string) {
	    if (err) return next(err)
	    req.text = string.toString('utf-8')
	    next()
	  })
	})



	app.use(compression())
	app.use(favicon(path.join(__dirname, '../public/favicon.ico')));
	app.use(express.static(path.join(__dirname, '../public')))

	app.use(morgan('dev'))

	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({
		extended : false 
	}))
	app.use(cookieParser())

	app.use(session({
	  secret: 'louisGan key',
	  resave: false,
	  saveUninitialized: true,
      store: new MongoStore({
	      url: 'mongodb://192.168.1.164/mytest',
	      ttl: 14 * 24 * 60 * 60 // = 14 days. Default 
	    })
	}))


	app.use(errorhandler())

}


